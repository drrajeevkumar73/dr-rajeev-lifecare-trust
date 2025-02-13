import Footer from "./Footer";
import Menubar, { PhoneMenuBar } from "./Menubar";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Menubar className="sticky top-0 z-[9999] bg-card lg:block hidden " />
      <PhoneMenuBar className="sticky top-0 z-10 bg-card lg:hidden block"/>
     <div className="space-y-24">
     {children}
     <Footer/>
     </div>
      
    </>
  );
}
