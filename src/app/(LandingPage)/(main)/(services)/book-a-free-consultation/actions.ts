"use server";
import { validateRequest } from "@/auth";
import { prisma } from "@/lib/prisma";
import { consultationSchema, ConsultationValues } from "@/lib/vallidation";

export async function callSedule(
  credential: ConsultationValues,
): Promise<{ error?: string; success?: string }> {
  try {
    const { user } = await validateRequest();

    if (!user) throw Error(" unauthozrized");
    const { date, time } = consultationSchema.parse(credential);

    await prisma.callSedule.create({
      data: {
        name: user.displayname,
        number: user.phone,
        date,
        time,
      },
    });

    return {
      success: "Your online consultation is booked. Please wait for the call.",
    };
  } catch (error) {
    console.error(error);
    return {
      error: "Interval server error.",
    };
  }
}
