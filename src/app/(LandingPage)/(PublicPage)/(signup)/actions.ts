"use server";

import { lucia } from "@/auth";
import { prisma } from "@/lib/prisma";
import { signupSchema, SignupValues } from "@/lib/vallidation";

import { hash } from "@node-rs/argon2";
import { generateIdFromEntropySize } from "lucia";
import { isRedirectError } from "next/dist/client/components/redirect-error";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function signup(
  credential: SignupValues,
): Promise<{ error: string }> {
  try {
    const { displayname, email, passwordHash, phone } =
      signupSchema.parse(credential);

    const password = await hash(passwordHash, {
      memoryCost: 19456,
      timeCost: 2,
      outputLen: 32,
      parallelism: 1,
    });

    const userId = generateIdFromEntropySize(10);

    const existingEmail = await prisma.user.findFirst({
      where: {
        email: {
          equals: email,
          mode: "insensitive",
        },
      },
    });

    if (existingEmail) {
      return {
        error: "Email already taken",
      };
    }

    const existingUsername = await prisma.user.findFirst({
      where: {
        phone: {
          equals: phone,
          mode: "insensitive",
        },
      },
    });

    if (existingUsername) {
      return {
        error: "Phone already taken",
      };
    }

    await prisma.user.create({
      data: {
        id: userId,
        displayname,
        email,
        passwordHash: password,
        phone,
      },
    });

    const session = await lucia.createSession(userId, {});
    const sessionCookie = lucia.createSessionCookie(session.id);
    (await cookies()).set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes,
    );

    return redirect("/bpl-patients-free-treatment");
  } catch (error) {
    if (isRedirectError(error)) throw error;
    console.error(error);
    return {
      error: "Interval server error.",
    };
  }
}
