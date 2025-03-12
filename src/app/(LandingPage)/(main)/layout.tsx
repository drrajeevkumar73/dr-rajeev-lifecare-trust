import { validateRequest } from "@/auth";
import NavBar, { PhoneMenuBar } from "./NavBar";
import TobBar from "./TobBar";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { redirect } from "next/navigation";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user } = await validateRequest();
  if (!user) redirect("/");
  return (
    <>
      <TobBar />
      <NavBar className="bg-card sticky top-0 z-10 hidden lg:block" />
      <PhoneMenuBar className="bg-card sticky top-0 z-10 block lg:hidden" />
      {children}
    </>
  );
}
