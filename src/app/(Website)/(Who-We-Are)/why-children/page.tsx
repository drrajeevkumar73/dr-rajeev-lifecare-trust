import Image from "next/image";
import bane from "@/assets/children-banner.jpg";
import Mapcomponet from "./Indiaschildren ";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import sf from "@/assets/approach-map-top-banner.jpg";
import Children from "./Children";
import froIma from "@/assets/footer-usp-1.jpg";

export default function page() {
  return (
    <main className="w-full space-y-24">
      <div className="space-y-6 px-3 pt-[24px]">
        <h6 className="text-center text-3xl font-bold md:text-5xl">
          Why Children?
        </h6>
        <p className="text-center text-muted-foreground">
          Children are the building blocks of our nation’s future. Let’s invest
          in their potential <br /> today, so that they can become our
          scientists, politicians, sportspeople, journalists and teachers of
          tomorrow!
        </p>
      </div>
      <Image src={bane} alt="" className="w-full" />
      <div className="mx-auto max-w-7xl space-y-24 px-3">
        <div className="space-y-16">
          <h6 className="text-center text-3xl font-bold md:text-5xl">
            India’s children battle{" "}
            <em className="text-primary">some of the worst circumstances </em>{" "}
            in the world.
          </h6>
          <Mapcomponet />
        </div>
        <div className="space-y-6">
          <h6 className="text-center text-3xl font-bold md:text-5xl">
            This problem before us is a mammoth one. But
            <em className="text-primary">one that can be solved </em> within our
            lifetimes.
          </h6>
          <p className="text-center text-muted-foreground">
            All it needs is for each one of us to come together and do
            everything in our power to contribute to a sustainable <br />{" "}
            solution.
          </p>
          <div className="flex w-full justify-center">
            <Button className="btnshow w-fit font-bold duration-.5">
              <Heart className="mr-4 size-4" fill="red" />
              Yes! I Want To Help!
            </Button>
          </div>
        </div>
      </div>

      <div className="">
        <Image src={sf} alt="" className="w-full" />
        <div className="w-full space-y-16 bg-[#d42751] px-3 py-48">
          <div className="space-y-6">
            <h6 className="text-center text-3xl font-bold md:text-5xl">
              The Importance Of Children’s Rights
            </h6>
            <p className="text-center text-[19px] text-white">
              According to the United Nations Convention on the Rights of the{" "}
              <br />
              Child (UNCRC), which was ratified by India in 1992, all children
              have fundamental rights which must be recognized by governments
              and <br />
              citizens alike. At CRY, we’re committed to doing everything we can
              to ensure the rights of India’s children and so, work on 4 key
              programmatic areas.
            </p>
          </div>
          <div className="mx-auto max-w-7xl">
            <Children />
          </div>
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
