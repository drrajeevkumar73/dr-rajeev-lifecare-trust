import Awardshow from "@/components/AwardShow";
import React from "react";
import { mediacorner } from "../Allaray";
import HeadingSec from "@/components/HeadingSec";
import streak from "@/assets/streak.gif";
import Image from "next/image";
import faundation from "@/assets/foundation.webp";
import sh from "@/assets/WhatsApp Image 2025-03-11 at 1.21.39 PM.jpeg";
import { DotIcon } from "lucide-react";
import sd from "@/assets/WhatsApp Image 2025-03-11 at 1.18.57 PM.jpeg";
import ssf from "@/assets/billion-3.jpg"
export default function Page() {
  return (
    <main className="space-y-24 py-15">
      <HeadingSec className="px-3 [text-shadow:_0_2px_4px_#fff633]">
        {" "}
        Our{" "}
        <em className="text-primary relative">
          Work & Achievements
          <Image
            src={streak}
            alt="streak"
            className="absolute -top-10 right-0"
          />
        </em>
      </HeadingSec>

      <Image src={faundation} alt="faundation" className="w-full" />

      <div className="mx-auto max-w-7xl space-y-24 px-3">
        <div className="space-y-16">
          <HeadingSec className="px-3 [text-shadow:_0_2px_4px_#fff633]">
            {" "}
            Our{" "}
            <em className="text-primary relative">
              Achievements
              <Image
                src={streak}
                alt="streak"
                className="absolute -top-10 right-0"
              />
            </em>
          </HeadingSec>

          <Awardshow item={mediacorner} />
        </div>

        <div className="space-y-16">
          <div className="space-y-6">
            <HeadingSec className="px-3 [text-shadow:_0_2px_4px_#fff633]">
              {" "}
              Our{" "}
              <em className="text-primary relative">
                Work
                <Image
                  src={streak}
                  alt="streak"
                  className="absolute -top-10 right-0"
                />
              </em>
            </HeadingSec>
            <h3 className="text-center text-2xl font-bold text-blue-800">
              We put science to work to build a healthier, safer world
            </h3>
            <p className="text-muted-foreground text-center">
              The World Health Organization leads and champions global efforts
              to achieve better health for all. By connecting countries, people
              and partners, we strive to give everyone, everywhere an equal
              chance at a safe and healthy life.
            </p>
            <p className="text-muted-foreground text-center">
              From emerging epidemics such as COVID-19 and Zika to the
              persistent threat of communicable diseases including HIV, malaria
              and tuberculosis and chronic diseases such as diabetes, heart
              disease and cancer, we bring together 194 countries and work on
              the frontlines in 150+ locations to confront the biggest health
              challenges of our time and measurably advance the well-being of
              the world’s people.
            </p>
          </div>

          <div className="flex gap-5">
            <div className="md:w-1/2">
              <Image src={sh} alt="sh" className="h-full w-full object-cover" />
            </div>

            <div className="space-y-6 md:w-1/2">
              <h3 className="text-2xl font-bold">
                <span className="text-primary">One billion</span> more people
                benefit from universal health coverage
              </h3>

              <p className="text-muted-foreground">
                Good health care is needed at all stages of life. That’s why
                universal health coverage (UHC) is vital to WHO&lsquo;s efforts
                to ensure access to health as a human right. Our programmes and
                partnerships emphasize:
              </p>

              <ul>
                <li className="flex items-center">
                  {" "}
                  <span className="text-primary">
                    <DotIcon size={50} />
                  </span>
                  access to primary and preventative health care
                </li>
                <li className="flex items-center">
                  {" "}
                  <span className="text-primary">
                    <DotIcon size={50} />
                  </span>
                  ensuring access to the medicines and health products that
                  people need;
                </li>
                <li className="flex items-center">
                  {" "}
                  <span className="text-primary">
                    <DotIcon size={50} />
                  </span>
                  sustainable financing and financial protection for people and
                  communities; and
                </li>
                <li className="flex items-center">
                  {" "}
                  <span className="text-primary">
                    <DotIcon size={50} />
                  </span>
                  workforce training and labour protection for health workers.
                </li>
              </ul>
            </div>
          </div>

          <div className="flex gap-5">
            <div className="space-y-6 md:w-1/2">
              <h3 className="text-2xl font-bold">
                <span className="text-primary">One billion</span> more people
                are better protected from health emergencies
              </h3>

              <p className="text-muted-foreground">
                WHO plays an essential role supporting countries to prepare for,
                detect, respond to and recover from health emergencies,
                including pandemics, disease outbreaks, natural disasters and
                humanitarian crises. Amid a growing need for rapid response, we
                build global systems that:
              </p>

              <ul>
                <li className="flex items-center">
                  {" "}
                  <span className="text-primary">
                    <DotIcon size={50} />
                  </span>
                  predict, prevent and contain emerging risks;
                </li>
                <li className="flex items-center">
                  {" "}
                  <span className="text-primary">
                    <DotIcon size={50} />
                  </span>
                  support countries and communities to respond to disease
                  outbreaks, disasters and humanitarian crises;
                </li>
                <li className="flex items-center">
                  {" "}
                  <span className="text-primary">
                    <DotIcon size={50} />
                  </span>
                  rapidly assess the availability, safety, and efficacy of
                  emergency health products;
                </li>
                <li className="flex items-center">
                  {" "}
                  <span className="text-primary">
                    <DotIcon size={50} />
                  </span>
                  marshall resources and health services for fair global access
                  to vaccines, therapeutics, diagnostics and supplies; and
                </li>
                <li className="flex items-center">
                  {" "}
                  <span className="text-primary">
                    <DotIcon size={50} />
                  </span>
                  support on-the-ground care in fragile settings to protect the
                  most vulnerable.
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <Image src={sd} alt="sh" className="h-full w-full object-cover" />
            </div>
          </div>

          <div className="flex gap-5">
            <div className="md:w-1/2">
              <Image src={ssf} alt="sh" className="h-full w-full object-cover" />
            </div>

            <div className="space-y-6 md:w-1/2">
              <h3 className="text-2xl font-bold">
                <span className="text-primary">One billion</span> more people
                enjoy better health and well-being
              </h3>

              <p className="text-muted-foreground">
                Because good health goes beyond treating illness, WHO mobilizes
                all sectors of society to address the root causes of health
                problems, promote wellness and address physical, psychosocial
                and environmental health risks. WHO’s healthier populations
                target tracks the social and environmental factors that play a
                pivotal role in shaping health, such as:
              </p>

              <ul>
                <li className="flex items-center">
                  {" "}
                  <span className="text-primary">
                    <DotIcon size={50} />
                  </span>
                  clean air and water;
                </li>
                <li className="flex items-center">
                  {" "}
                  <span className="text-primary">
                    <DotIcon size={50} />
                  </span>
                  safe roads;
                </li>
                <li className="flex items-center">
                  {" "}
                  <span className="text-primary">
                    <DotIcon size={50} />
                  </span>
                  healthy eating and exercise; and
                </li>
                <li className="flex items-center">
                  {" "}
                  <span className="text-primary">
                    <DotIcon size={50} />
                  </span>
                  violence and injury prevention.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
