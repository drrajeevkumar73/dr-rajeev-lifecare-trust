"use server";
import { prisma } from "@/lib/prisma";
import { healerSchema, HealerValues } from "@/lib/vallidation";

export async function doctorHealnes(
  credential: HealerValues,
): Promise<{ error?: string; success?: string }> {
  try {
    const {
      fullName,
      dateofBirth,
      gender,
      mobileNumber,
      emailID,
      fullAddress,
      fieldofExpertise,
      qualification,
      experience,
      specialization,
    } = healerSchema.parse(credential);

    await prisma.healnessDoctor.create({
      data: {
        fullName,
        dateofBirth,
        gender,
        mobileNumber,
        emailID,
        fullAddress,
        fieldofExpertise,
        qualification,
        experience,
        specialization,
      },
    });

    return {
      success: "Data send successfully",
    };
  } catch (error) {
    console.error(error);
    return {
      error: "Interval server error.",
    };
  }
}
