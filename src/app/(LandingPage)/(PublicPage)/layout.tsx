import { validateRequest } from "@/auth";
import NavBar, { PhoneMenuBar } from "./NavBar";
import TobBar from "./TobBar";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import StoreProvider from "./StoreProvider";
import SetionProvider from "./SetionProvider";
import NoSessionNavBar, { NoNavBarPhoneMenuBar } from "./NoSessionNavBar";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await validateRequest();

  return (
    <>
      {session.user ? (
        <StoreProvider>
          <SetionProvider value={session}>
            <TobBar />
            <NavBar className="bg-card sticky top-0 z-10 hidden lg:block" />
            <PhoneMenuBar className="bg-card sticky top-0 z-10 block lg:hidden" />
            {children}
          </SetionProvider>
        </StoreProvider>
      ) : (
        <>
          <TobBar />
          <NoSessionNavBar className="bg-card sticky top-0 z-10 hidden lg:block" />
          <NoNavBarPhoneMenuBar className="bg-card sticky top-0 z-10 block lg:hidden" />
          {children}
        </>
      )}
    </>
  );
}
