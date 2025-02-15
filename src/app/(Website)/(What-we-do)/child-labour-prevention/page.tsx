import bane from "@/assets/child-health-and-nutrition.jpg";
import Image from "next/image";

import borderyel from "@/assets/approach-map-top-banner (1).jpg";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import Crausol from "@/components/Crausol";
import { arraySec } from "../../(Home)/Allarray";
import froIma from "@/assets/footer-usp-1.jpg";
import ChildEducation from "../children-education/ChildEducation";
import chilBaner from "@/assets/children-wide-banner.jpg";
import OurChildren from "./OurChildren";

export default function Page() {
  return (
    <main className="w-full space-y-24">
      <div className="space-y-6 px-3 pt-[24px]">
        <h6 className="text-center text-3xl font-bold md:text-5xl">
          Ensuring health and nutrition for children
        </h6>
        <p className="text-center text-muted-foreground">
          As a leading child health and nutrition NGO in India, CRY believes in
          every child’s right to survival. <br /> We understand the critical
          role that proper nutrition and quality primary healthcare <br /> play
          in a child’s overall development. Therefore we strive to ensure that
          no child, <br />
          regardless of their socio-economic background, suffers from
          malnutrition or poor health.
        </p>
      </div>
      <Image src={bane} alt="" className="w-full" />

      <div className="mx-auto max-w-7xl space-y-6 px-3">
        <h6 className="text-center text-3xl font-bold md:text-5xl">
          Our <em className="text-primary">Child Health </em> Initiative
        </h6>
        <p className="text-muted-foreground">
          We focus on child health and nutrition through a proactive approach to
          reduce malnourishment and improve India’s infant mortality rate (IMR),
          child mortality rate (CMR), and maternal mortality rate (MMR). We do
          this by connecting communities to government services, schemes, and
          benefits.
        </p>
        <p className="text-muted-foreground">
          As a top child health NGO in India, we are here to provide children
          health and nutrition they need for a healthier future.
        </p>
        <p className="text-muted-foreground">
          Here are 3 key focus areas of our child health initiatives:
        </p>
        <OurChildren />
      </div>

      <Image src={borderyel} alt="" />

      <div className="mx-auto max-w-7xl space-y-6 px-3">
        <h6 className="text-center text-3xl font-bold md:text-5xl">
          Our <em className="text-primary">Child Education</em> Program
        </h6>
        <p className="text-muted-foreground">
          Being a prominent education NGO in India, CRY is dedicated to
          empowering children and creating a brighter future for them through
          quality education. We create sustainable change for India’s children
          by educating parents, teachers communities, and children themselves to
          change behaviours and practices at the grassroots level while
          collaborating with the government to influence public policy at a
          systemic level. As one of the most trusted NGOs working for education
          in India, our education programs align with the guidelines set forth
          by the Right to Education Act (2009) and the National Education Policy
          2020.
        </p>
        <p className="text-muted-foreground">
          Here are the key focus areas of our work:
        </p>
        <ChildEducation />
      </div>

      <Image src={chilBaner} alt="" className="w-full" />
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
