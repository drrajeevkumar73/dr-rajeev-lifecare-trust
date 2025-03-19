"use server";

import { prisma } from "@/lib/prisma";
import { appoinmetSchema, AppoinmetValues } from "@/lib/vallidation";

export async function appoinmet(
  credential: AppoinmetValues,
): Promise<{ error?: string; success?: string }> {
  try {
    const { fullname, phone, country } = appoinmetSchema.parse(credential);

    await prisma.appoinment.create({
      data: {
        fullname,
        phone,
        country,
      },
    });
    return {
      success: "Thank you, we will get back to you soon.",
    };
  } catch (error) {
    console.error(error);
    return {
      error: "Interval server error.",
    };
  }
}
