import Image from "next/image";
import bane from "@/assets/approach-main-banner-1.jpg";
import Animation from "./Animation";
import arehds from "@/assets/approach-middle-banner (1).jpg";
import froIma from "@/assets/footer-usp-1.jpg";
import TabBar from "@/components/TabBar";
import { featureWorktabSec } from "./Allray";
export default function Page() {
  return (
    <main className="w-full space-y-24">
      <div className="space-y-6 px-3 pt-[24px]">
        <h6 className="text-center text-3xl font-bold md:text-5xl">
          Our Approach
        </h6>
        <p className="text-center text-muted-foreground">
          A happy, healthy and creative child whose rights are protected and
          honoured in a <br /> society that is built on respect for dignity,
          justice and equity for all.
        </p>
      </div>
      <Image src={bane} alt="" className="w-full" />
      <div className="mx-auto max-w-7xl space-y-24 px-3">
        <Animation />
        <div className="space-y-6">
          <h6 className="text-center text-3xl font-bold md:text-4xl">
            Area Of Work
          </h6>
          <TabBar TabSecItems={featureWorktabSec} />
        </div>
      </div>

      <Image src={arehds} alt="" className="w-full" />
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
