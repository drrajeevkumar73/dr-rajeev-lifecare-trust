import Image from "next/image";
import bane from "@/assets/about-hero-banner.jpg";
import OurMission from "./OurMission";
import child from "@/assets/about-team-banner.jpg";
import { arraySec } from "../../(Home)/Allarray";
import Crausol from "@/components/Crausol";
import borderhe from "@/assets/brush-top-alt.png";
import Vidio from "./Vidio";
import Awarshow from "@/components/Awarshow";
import { awardShor } from "./AllArry";
import froIma from "@/assets/footer-usp-1.jpg";
export default function Page() {
  return (
    <main className="w-full space-y-24">
      <div className="space-y-6 px-3 pt-[24px]">
        <h6 className="text-center text-3xl font-bold md:text-5xl">
          Our Vision{" "}
        </h6>
        <p className="text-center text-muted-foreground">
          A happy, healthy and creative child whose rights are protected and
          honoured in a <br /> society that is built on respect for dignity,
          justice and equity for all.
        </p>
      </div>
      <Image src={bane} alt="" className="w-full" />

      <div>
        <OurMission />
        <Vidio />
      </div>

      <div className="relative">
        <Image src={child} alt="" className="w-full" />
        <div className="w-full space-y-16 bg-[#d42750] pt-[64px]">
          <h1 className="text-center text-3xl font-bold md:text-5xl">
            Our Team
          </h1>
          <div className="ml-auto flex max-w-[1400px] flex-wrap gap-20 overflow-hidden lg:flex-nowrap">
            <div className="w-full space-y-16 px-3 lg:w-[30%]">
              <h5 className="text-2xl font-bold text-white">
                Managing Committee
              </h5>
              <p className="text-white">
                CRY’s leadership collective comprising of Regional and
                Functional Directors who provide strategic direction to
                organizational objectives.
              </p>
              <div className="w-full border border-white"></div>
            </div>
            <div className="w-full lg:w-2/3">
              <Crausol items={arraySec} />
            </div>
          </div>
        </div>
        <Image
          src={borderhe}
          alt=""
          className="absolute bottom-[-20px] w-full sm:bottom-[-50px] md:bottom-[-70px]"
        />
      </div>

      <div className="px-6">
        <div className="mx-auto max-w-7xl space-y-16">
          <h1 className="text-center text-3xl font-bold md:text-5xl">
            Awards & Recognition
          </h1>
          <Awarshow item={awardShor} />
        </div>
      </div>
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
