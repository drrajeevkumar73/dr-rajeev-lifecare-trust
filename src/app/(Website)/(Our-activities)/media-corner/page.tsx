import Image from "next/image";
import bane from "@/assets/about-hero-banner.jpg";
import Awardshow from "@/components/Awarshow";
import { mediacorner } from "./AllArray";

export default function page() {
  return (
    <main className="w-full space-y-24">
    <div className="space-y-6 px-3 pt-[24px]">
      <h6 className="text-center text-3xl font-bold md:text-5xl">
      Media Corner{" "}
      </h6>
      <p className="text-center text-muted-foreground">
        A happy, healthy and creative child whose rights are protected and
        honoured in a <br /> society that is built on respect for dignity,
        justice and equity for all.
      </p>
    </div>
    <Image src={bane} alt="" className="w-full" />

     <div className="px-6">
            <div className="mx-auto max-w-7xl space-y-16">
              <h1 className="text-center text-3xl font-bold md:text-5xl">
              Media Corner
              </h1>
              <Awardshow item={mediacorner} />
            </div>
          </div>
      </main>
  )
}
