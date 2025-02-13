import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Heart, Shell } from "lucide-react";
import beterlife from "@/assets/ensure-better-future-for-children-homepage.webp";
import Crausol from "@/components/Crausol";
import { arraySec, countUp, logslider } from "./Allarray";
import "../styles.css";
import Banner from "./Banner";
import WahtweDo from "./WahtweDo";
import Animation from "./Animation";
import CountUp from "@/components/CountUp";
import StoryUpdate from "./StoryUpdate";
import rajevsign from "@/assets/rippan-sig.jpg";
import dsjh from "@/assets/home-bottom-banner.jpg";
import Paragraph from "./Paragraph";
export default function Page() {
  return (
    <main className="w-full space-y-24">
      <Banner />
      <Image src={beterlife} alt="" className="w-full" />
      <div className="w-full">
        <div className="ml-auto flex max-w-[1400px] flex-wrap gap-20 overflow-hidden lg:flex-nowrap">
          <div className="w-full space-y-6 px-3 lg:w-[30%]">
            <h5 className="text-2xl font-bold">
              How do you want to{" "}
              <em className="text-primary">help children today?</em>
            </h5>
            <p>
              Your smallest contribution makes a big difference to children’s
              lives. We count on the generosity of people like you to be able to
              create real change for India’s children!
            </p>

            <Button className="btnshow w-full font-bold duration-.5">
              <Heart className="mr-4 size-4" fill="red" />
              Donate For Happier Childhoods!
            </Button>
          </div>
          <div className="w-full lg:w-2/3">
            <Crausol items={arraySec} />
          </div>
        </div>
      </div>
      <WahtweDo />
      <div className="mx-auto max-w-7xl space-y-24 px-3">
        <Animation />
        <div className="space-y-16">
          <h6 className="text-center text-2xl font-bold md:text-3xl">
            This is the impact <em className="text-primary">YOU</em> helped us
            achieve in 2023-24
          </h6>
          <CountUp countUp={countUp} />
        </div>
      </div>
      <StoryUpdate item={logslider} />

      <div className="mx-auto max-w-7xl space-y-3 px-3">
        <em className="flex justify-center text-primary">
          <Shell className="size-11" />
        </em>
        <p className="text-center text-2xl">
          If we all do something, then together there is{" "}
          <br className="hidden md:block" /> no problem that we cannot solve!
        </p>
        <Image src={rajevsign} alt="" className="mx-auto" />
        <p className="text-center text-muted-foreground">Dr. Rajeev Kumar</p>
        <p className="text-center font-bold text-primary">
          Founder, Abhi Homeo Hall
        </p>
      </div>

      <Image className="w-full" src={dsjh} alt="" />
     <div className="max-w-7xl mx-auto space-y-6 px-3">
     <Paragraph/>
     </div>
    </main>
  );
}
