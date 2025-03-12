import { PrismaAdapter } from "@lucia-auth/adapter-prisma";
import { prisma } from "./lib/prisma";
import { Lucia, Session, User } from "lucia";
import { cache } from "react";
import { cookies } from "next/headers";

const adpater = new PrismaAdapter(prisma.session, prisma.user);

export const lucia = new Lucia(adpater, {
  sessionCookie: {
    expires: false,
    attributes: {
      secure: process.env.NODE_ENV === "production",
    },
  },
  getUserAttributes(DatabaseUserAttributes) {
    return {
      id: DatabaseUserAttributes.id,

      displayname: DatabaseUserAttributes.displayname,
      phone: DatabaseUserAttributes.phone,
      email: DatabaseUserAttributes.email,
      googleId: DatabaseUserAttributes.googleId,
    };
  },
});

declare module "lucia" {
  interface Register {
    Lucia: typeof lucia;
    DatabaseUserAttributes: DatabaseUserAttributes;
  }
}
interface DatabaseUserAttributes {
  id: string;
  displayname: string;
  phone: string;
  email: string | null;
  googleId: string | null;
}

export const validateRequest = cache(
  async (): Promise<
    { user: User; session: Session } | { user: null; session: null }
  > => {
    const sessionId =
      (await cookies()).get(lucia.sessionCookieName)?.value ?? null; //Cookie se session ID fetch karta hai. Agar session ID nahi milti, to user: null aur session: null return karta hai.

    if (!sessionId) {
      return {
        user: null,
        session: null,
      };
    }

    const result = await lucia.validateSession(sessionId); //Yeh Lucia ka method hai jo session ko check karta hai ki wo valid hai ya nahi.

    // next.js throws when you attempt to set cookie when rendering page
    try {
      if (result.session && result.session.fresh) {
        const sessionCookie = lucia.createSessionCookie(result.session.id); //createSessionCookie: Agar session fresh hai (naya login ya activity), to ek naya session cookie create karta hai.

        (await cookies()).set(
          sessionCookie.name,
          sessionCookie.value,
          sessionCookie.attributes,
        );
      }

      if (!result.session) {
        const sessionCookie = lucia.createBlankSessionCookie(); //createBlankSessionCookie: Agar session invalid hai, to blank cookie set karta hai, jo basically logout ke liye use hoti hai.
        (await cookies()).set(
          sessionCookie.name,
          sessionCookie.value,
          sessionCookie.attributes,
        );
      }
    } catch {}

    return result;
  },
);
