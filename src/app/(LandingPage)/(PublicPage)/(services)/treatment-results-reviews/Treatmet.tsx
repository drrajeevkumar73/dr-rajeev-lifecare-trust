"use client";
import Image from "next/image";
import canvas from "@/assets/caret-forward.svg";
import { BodyCare, BodyDec } from "./Allary";
import { useState } from "react";
import BookAppoinmet from "@/components/BookAppoinmet";

export default function Treatmet() {
  const [subTab, seSbtab] = useState<number>(1);
  const [poup, setpoup] = useState(false); // ✅ Dialog control ke liye state

  return (
    <>
      <div className="flex flex-col justify-center gap-5 lg:flex-row">
        <div className="lg:w-[30%]">
          {BodyCare.map((v,i) => (
            <div
              className={`flex cursor-pointer items-center justify-between border-b p-3 text-2xl font-bold ${subTab === v.id ? "text-primary" : ""}`}
              key={i}
              onClick={() => seSbtab(v.id)}
            >
              {v.name}
              <Image
                src={canvas}
                alt="canvas"
                width={30}
                className={`${subTab === v.id ? "rotate-180" : ""}`}
              />
            </div>
          ))}
        </div>

        {/* ✅ Dialog open karne ke liye */}
        <div
          className="relative h-full cursor-pointer lg:w-[70%]"
          onClick={() => setpoup(true)}
        >
          {BodyDec.map((v,i) => (
            <div key={i}>
              {subTab === v.id && (
                <>
                  <Image
                    src={v.image}
                    alt="heiImage"
                    className="w-full object-cover lg:h-[450px]"
                    key={v.id}
                    width={500}
                    height={500}
                  />
                  <div className="text-card bottom-0 w-full bg-[rgba(0,0,0,0.6)] p-3 sm:absolute">
                    {v.dec}
                    <span className="text-destructive font-bold">
                      Click here to know more
                    </span>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Dialog Component ko controlled state pass kiya */}
      <BookAppoinmet isOpen={poup} onClose={() => setpoup(false)} />
    </>
  );
}
