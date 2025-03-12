"use server";

import { prisma } from "@/lib/prisma";
import { contactSchema, ContactValues } from "@/lib/vallidation";

export async function contact(
  credential: ContactValues,
): Promise<{ error?: string; success?: string }> {
  try {
    const { fullname, phone, message } = contactSchema.parse(credential);

    await prisma.contact.create({ data: { fullname, phone, message } });

    return {
      success: "Message send successfully",
    };
  } catch (error) {
    console.error(error);
    return {
      error: "Interval server error.",
    };
  }
}
