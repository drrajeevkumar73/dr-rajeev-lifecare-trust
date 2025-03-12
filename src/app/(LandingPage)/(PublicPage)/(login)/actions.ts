"use server";
import { lucia } from "@/auth";
import { prisma } from "@/lib/prisma";
import { loginSchema, LoginValues } from "@/lib/vallidation";

import { verify } from "@node-rs/argon2";
import { isRedirectError } from "next/dist/client/components/redirect-error";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function login(
  credential: LoginValues,
): Promise<{ error: string }> {
  try {
    const { emailId, passwordGive } = loginSchema.parse(credential);

    const existingUser = await prisma.user.findFirst({
      where: {
        email: {
          equals: emailId,
          mode: "insensitive",
        },
      },
    });

    if (!existingUser || !existingUser.passwordHash) {
      return {
        error: "Incorreact email or password",
      };
    }

    const validPassword = await verify(
      existingUser.passwordHash,
      passwordGive,
      {
        memoryCost: 19456,
        timeCost: 2,
        outputLen: 32,
        parallelism: 1,
      },
    );

    if (!validPassword) {
      return {
        error: "Incorreact email or password",
      };
    }

    const session = await lucia.createSession(existingUser.id, {});
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
