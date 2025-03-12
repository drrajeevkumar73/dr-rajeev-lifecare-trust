/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import HeadingSec from "@/components/HeadingSec";
import streak from "@/assets/streak.gif";
import Image from "next/image";
import faundation from "@/assets/foundation.webp";
import { Check } from "lucide-react";
import Deases from "./Deases";
import { DesisesArray } from "../Allarray";
import { useSearchParams } from "next/navigation";
export default function Page() {
  const searchParams = useSearchParams();
  const q: any = searchParams.get("q"); // ✅ Query Parameter Extract Karna
  const res = DesisesArray.filter((v) => {
    if (!q) return false; // Agar `q` null ya undefined ho to filter nahi karega
    const lowerQ = q.toLowerCase();
    const lowerDname = v.dname.toLowerCase();

    return lowerDname.startsWith(lowerQ) || lowerDname.includes(lowerQ);
  });

  return (
    <main className="space-y-24 py-15">
      <HeadingSec className="px-3 [text-shadow:_0_2px_4px_#fff633]">
        {" "}
        Get Free{" "}
        <em className="text-primary relative">
          Homeopathy & Ayurveda Consultation
          <Image
            src={streak}
            alt="streak"
            className="absolute -top-10 right-0"
          />
        </em>
      </HeadingSec>

      <Image src={faundation} alt="faundation" className="w-full" />
      <div className="mx-auto max-w-7xl space-y-24 px-3">
        <div className="space-y-6">
          <HeadingSec className="px-3 [text-shadow:_0_2px_4px_#fff633]">
            {" "}
            Introduction{" "}
            <em className="text-primary relative">
              (Brief Overview)
              <Image
                src={streak}
                alt="streak"
                className="absolute -top-10 right-0"
              />
            </em>
          </HeadingSec>
          <p className="text-justify">
            At <b>AYUSH Pathy Trust, </b> we believe that healthcare should be
            accessible to everyone. That’s why we offer free consultations with
            expert Homeopathy & Ayurveda practitioners. Whether you’re dealing
            with chronic illness, lifestyle disorders, or general health
            concerns, our experienced doctors are here to guide you with natural
            and holistic treatments.
          </p>
        </div>
        <div className="space-y-6">
          <HeadingSec className="px-3 [text-shadow:_0_2px_4px_#fff633]">
            {" "}
            Why Choose Our{" "}
            <em className="text-primary relative">
              Free Consultation?
              <Image
                src={streak}
                alt="streak"
                className="absolute -top-10 right-0"
              />
            </em>
          </HeadingSec>
          <ul className="space-y-6">
            <li className="flex items-center gap-5">
              <Check className="text-primary size-8" />{" "}
              <p>
                <b>Expert Guidance –</b>{" "}
                <span>
                  Consult with certified Homeopathy & Ayurveda doctors.
                </span>
              </p>
            </li>{" "}
            <li className="flex items-center gap-5">
              <Check className="text-primary size-8" />{" "}
              <p>
                <b>Personalized Treatment Plans –</b>{" "}
                <span>Based on your health condition and medical history.</span>
              </p>
            </li>
            <li className="flex items-center gap-5">
              <Check className="text-primary size-8" />{" "}
              <p>
                <b>No Side Effects –</b>{" "}
                <span>100% natural and safe remedies.</span>
              </p>
            </li>
            <li className="flex items-center gap-5">
              <Check className="text-primary size-8" />{" "}
              <p>
                <b>Holistic Healing –</b>{" "}
                <span>Focus on body, mind, and overall well-being.</span>
              </p>
            </li>
            <li className="flex items-center gap-5">
              <Check className="text-primary size-8" />{" "}
              <p>
                <b> Completely Free –</b> <span>No consultation charges.</span>
              </p>
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          <HeadingSec className="px-3 [text-shadow:_0_2px_4px_#fff633]">
            {" "}
            What We{" "}
            <em className="text-primary relative">
              Treat?
              <Image
                src={streak}
                alt="streak"
                className="absolute -top-10 right-0"
              />
            </em>
          </HeadingSec>
          <div className="flex flex-col gap-5 sm:grid md:grid-cols-3 lg:grid-cols-4">
            {q ? (
              res.length > 0 ? (
                res.map((v) => <Deases key={v.id} sendDiese={v} />)
              ) : (
                <p className="text-center font-semibold text-red-500">
                  No Data Found
                </p>
              )
            ) : (
              DesisesArray.map((v) => <Deases key={v.id} sendDiese={v} />)
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
