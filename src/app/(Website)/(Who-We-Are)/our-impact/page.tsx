import Image from "next/image";
import bane from "@/assets/children-banner.jpg";
import ToThink from "./ToThink";
import Impact from "./Impact ";
import Carouselor from "./Carouselor";
import { logslider } from "../../(Home)/Allarray";
import OurAdvocacy from "./OurAdvocacy";
import froIma from "@/assets/footer-usp-1.jpg";
export default function Page() {
  return (
    <main className="w-full space-y-24">
      <div className="space-y-6 px-3 pt-[24px]">
        <h6 className="text-center text-3xl font-bold md:text-5xl">
          4+ Decades. 20 States. <br />
          <em className="text-primary"> 4.7 Million Children.</em>
        </h6>
        <p className="text-center text-muted-foreground">
          We’ve been able to make a positive impact on the lives of so many
          children, all thanks <br /> to your unwavering support.
        </p>
      </div>
      <Image src={bane} alt="" className="w-full" />
      <div className="mx-auto max-w-7xl space-y-24 px-3">
        <ToThink />
        <div className="space-y-16">
          <h6 className="text-center text-3xl font-bold md:text-5xl">
            This is the impact
            <em className="text-primary"> YOU </em>helped us achieve in 2023-24
          </h6>
          <Impact />
        </div>
      </div>
      <OurAdvocacy />
      <Carouselor item={logslider} />
      <div className="mx-auto max-w-7xl px-3">
        <div className="flex flex-wrap gap-7 md:flex-nowrap">
          <div className="flex gap-5">
            <Image src={froIma} alt="" />
            <p>
              {" "}
              All our efforts are made possible only because of your support
            </p>
          </div>
          <div className="flex gap-5">
            <Image src={froIma} alt="" />
            <p>
              {" "}
              All our efforts are made possible only because of your support
            </p>
          </div>
          <div className="flex gap-5">
            <Image src={froIma} alt="" />
            <p>
              {" "}
              All our efforts are made possible only because of your support
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
