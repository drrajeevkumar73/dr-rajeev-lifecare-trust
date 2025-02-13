"use client";

import AnimatedNumbers from "react-animated-numbers";
import bgcarft from "@/assets/beneficiary.png";
import Image from "next/image";

interface CountProps {
  countUp: {
    id: number;
    count: number;
  }[];
}
export default function CountUp({ countUp }: CountProps) {
  return (
    <div className="flex flex-wrap justify-center gap-6 lg:flex-nowrap lg:justify-between">
      {countUp.map((v) => (
        <div
          className="w-fit space-y-6 rounded-xl border bg-secondary p-5 shadow-inner"
          key={v.id}
        >
          <div className="mx-auto flex h-[100px] w-[100px] flex-none items-center justify-center rounded-full bg-card">
            <Image alt=" " src={bgcarft} className="flex-none" />
          </div>
          <div className="flex justify-center">
            <AnimatedNumbers
              includeComma
              transitions={(index) => ({
                key: AnimatedNumbers, // Ensure each item has a unique key based on its index
                type: "keyframes",
                duration: index + 0.3,
              })}
              animateToNumber={v.count}
              fontStyle={{
                fontSize: 40,
                color: "#2DAC5C",
              }}
            />
          </div>

          <p className="text-center text-3xl font-bold">Beneficiaries</p>
        </div>
      ))}
    </div>
  );
}
