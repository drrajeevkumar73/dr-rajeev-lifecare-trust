"use client";

import AnimatedNumbers from "react-animated-numbers";
import Image from "next/image";

interface CountProps {
  countUp: {
    id: number;
    count: number;
    image: string;
    dec: string;
    symbol: string;
  }[];
}
export default function CountUp({ countUp }: CountProps) {
  return (
    <div className="flex flex-col gap-5 sm:grid md:grid-cols-3 lg:grid-cols-4">
      {countUp.map((v) => (
        <div
          className="bg-secondary space-y-6 rounded-xl border p-5 shadow-inner"
          key={v.id}
        >
          <div className="bg-card mx-auto flex h-[100px] w-[100px] flex-none items-center justify-center rounded-full">
            <Image
              alt=" "
              src={v.image}
              className="flex-none"
              width={150}
              height={150}
            />
          </div>
          <div className="flex items-center justify-center gap-5">
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
                color: "#f4a462",
              }}
            />
            <span className="text-3xl font-bold">{v.symbol}</span>
          </div>

          <p className="text-center text-3xl font-bold">{v.dec}</p>
        </div>
      ))}
    </div>
  );
}
