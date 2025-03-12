import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Footer from "./Footer";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  // if (!session.user) redirect("/");
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
