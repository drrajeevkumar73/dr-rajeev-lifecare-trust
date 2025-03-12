import HeadingSec from "@/components/HeadingSec";
import streak from "@/assets/streak.gif";
import Image from "next/image";
import faundation from "@/assets/foundation.webp";

import docotrcamp from "@/assets/docrotcamp.jpeg";
import gamein from "@/assets/WhatsApp Image 2025-03-11 at 1.18.34 PM.jpeg";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { DotIcon } from "lucide-react";

export default function Page() {
  return (
    <main className="space-y-24 py-15">
      <HeadingSec className="px-3 [text-shadow:_0_2px_4px_#fff633]">
        {" "}
        BPL Patients Free{" "}
        <em className="text-primary relative">
          Treatment
          <Image
            src={streak}
            alt="streak"
            className="absolute -top-10 right-0"
          />
        </em>
      </HeadingSec>

      <Image src={faundation} alt="faundation" className="w-full" />
      <div className="mx-auto max-w-7xl space-y-16 px-3">
        <div className="space-y-6">
          <HeadingSec className="px-3 [text-shadow:_0_2px_4px_#fff633]">
            {" "}
            Free Treatment for{" "}
            <em className="text-primary relative">
              BPL Patients
              <Image
                src={streak}
                alt="streak"
                className="absolute -top-10 right-0"
              />
            </em>
          </HeadingSec>

          <p className="text-muted-foreground">
            Health is a state subject and it is the primary responsibility of
            the State Governments to make necessary arrangement for providing
            free treatment to the people below poverty line suffering from
            various diseases including mental disorder or diabetes at the
            Government hospitals.
          </p>
          <p className="text-muted-foreground">
            So far as the Central Government is concerned, financial assistance
            is provided to patients, living below poverty line (BPL) who are
            suffering from major life threatening diseases from Rashtriya Arogya
            Nidhi (RAN) to receive medical treatment at any government
            hospitals/institutes and super specialty government hospitals and
            institutes. Recently mental disorders and diabetes have been
            included under RAN. The financial assistance to such patients is
            released in the form of ‘one time grant’ to the medical
            superintendant of government hospital in which the treatment is
            being received.
          </p>
          <p className="text-muted-foreground">
            In addition, funds have been provided to 123 Districts across 30
            States/UTs for implementation of District Mental Health Programme, a
            component of National Mental Health Programme for treatment of
            mentally ill persons, irrespective of their status as APL or BPL.
            Treatment of the mentally ill persons is either free or at a very
            nominal cost as decided by concerned state government/UT
            administration. No additional/exclusive funds have been released to
            government hospitals/super specialities hospitals to provide free
            treatment to below poverty line suffering from mental disorder under
            this Scheme.
          </p>
          <p className="text-muted-foreground">
            Central Government is also implementing National Programme for
            Prevention and Control of Cancer, Diabetes, Cardiovascular Diseases
            and Stroke (NPCDCS) for all people including BPL people in 100
            selected districts of 21 States during 2010-12 with an aim to reduce
            the burden of Non-Communicable Diseases (NCDs) including diabetes.
            Under this programme, the population of above 30 years of age are
            screened for Diabetes and Hypertension at Sub-Centres. The suspected
            cases are referred to the Community Health Centres (CHCs)/District
            Hospitals for further confirmation/treatment.
          </p>
          <p className="text-muted-foreground">
            In so far as three Central Government hospitals namely Safdarjung
            Hospital, Dr. RML Hospital and Lady Harding Medical College and its
            associated hospitals are concerned, the treatment is provided free
            of cost to BPL patients. No additional funds are allocated to these
            Hospitals specifically for treatment of the patients suffering from
            Diabetes and mental disorder and the expenditure incurred on such
            treatment is met from overall sanctioned budget grant of these
            Hospitals.
          </p>
          <p className="text-muted-foreground">
            The above information was given by the Union Minister for Health &
            Family Welfare Shri Ghulam Nabi Azad in the Lok Sabha today.
          </p>
        </div>

        <div className="flex flex-col gap-5 md:flex-row">
          <div className="overflow-hidden md:w-1/2">
            <Image
              src={docotrcamp}
              alt=""
              className="duration-300 hover:scale-105"
            />
          </div>
          <div className="space-y-6 md:w-1/2">
            <h5 className="text-2xl font-bold">Key Point for BPL People</h5>
            <div className="space-y-1">
              <p className="font-bold">
                1. Accessible Healthcare for the Underprivileged
              </p>
              <p className="text-muted-foreground flex items-center gap-1">
                <span>
                  <DotIcon size={50} className="text-primary" />
                </span>
                Providing free medical consultations and treatments to people
                below the poverty line (BPL).
              </p>
            </div>
            <div className="space-y-1">
              <p className="font-bold">2. Free Medicine Distribution</p>
              <p className="text-muted-foreground flex items-center gap-1">
                <span>
                  <DotIcon size={50} className="text-primary" />
                </span>
                Providing essential homeopathic and Ayurvedic medicines at no
                cost to needy patients.
              </p>
            </div>
            <div className="space-y-1">
              <p className="font-bold">3. Ayush & Homeopathy-Based Treatment</p>
              <p className="text-muted-foreground flex items-center gap-1">
                <span>
                  <DotIcon size={50} className="text-primary" />
                </span>
                Offering natural, safe, and effective healthcare solutions
                through Ayurveda, Homeopathy, and other holistic healing
                methods.
              </p>
            </div>
            <div className="space-y-1">
              <p className="font-bold">4. Health Camps in Rural Areas</p>
              <p className="text-muted-foreground flex items-center gap-1">
                <span>
                  <DotIcon size={50} className="text-primary" />
                </span>
                Conducting free health check-up camps in villages and
                underserved communities to ensure healthcare reaches everyone.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 md:flex-row">
          <div className="space-y-6 md:w-1/2">
            <div className="space-y-1">
              <p className="font-bold">5. Mobile Medical Units</p>
              <p className="text-muted-foreground flex items-center gap-1">
                <span>
                  <DotIcon size={50} className="text-primary" />
                </span>
                Setting up mobile health clinics to serve those who cannot reach
                hospitals or healthcare centers.
              </p>
            </div>
            <div className="space-y-1">
              <p className="font-bold">6. Special Care for Women & Children</p>
              <p className="text-muted-foreground flex items-center gap-1">
                <span>
                  <DotIcon size={50} className="text-primary" />
                </span>
                Ensuring maternal care, child healthcare, and nutritional
                support for BPL families.
              </p>
            </div>
            <div className="space-y-1">
              <p className="font-bold">
                7. Collaboration with Government & NGOs
              </p>
              <p className="text-muted-foreground flex items-center gap-1">
                <span>
                  <DotIcon size={50} className="text-primary" />
                </span>
                Partnering with welfare organizations and government schemes to
                expand free treatment initiatives.
              </p>
            </div>
            <div className="space-y-1">
              <p className="font-bold">
                8. Awareness & Preventive Healthcare Programs
              </p>
              <p className="text-muted-foreground flex items-center gap-1">
                <span>
                  <DotIcon size={50} className="text-primary" />
                </span>
                Educating BPL families on hygiene, disease prevention, and
                natural healing practices.
              </p>
            </div>
            <div className="space-y-1">
              <p className="font-bold">9. Emergency & Critical Support</p>
              <p className="text-muted-foreground flex items-center gap-1">
                <span>
                  <DotIcon size={50} className="text-primary" />
                </span>
                Offering immediate medical help and support for severe health
                conditions of BPL individuals.
              </p>
            </div>
            <div className="space-y-1">
              <p className="font-bold">
                10. Ensuring Dignified & Quality Healthcare
              </p>
              <p className="text-muted-foreground flex items-center gap-1">
                <span>
                  <DotIcon size={50} className="text-primary" />
                </span>
                Treating every patient with dignity and providing high-quality
                medical care without financial barriers.
              </p>
            </div>
          </div>
          <div className="h-full overflow-hidden md:w-1/2">
            <Image
              src={gamein}
              alt="gamein"
              className="w-full object-cover duration-300 hover:scale-105 md:h-[550px]"
            />
          </div>
        </div>

        <div className="flex flex-col gap-5 md:flex-row">
          <div className="md:w-1/2">
            <Button asChild className="w-full">
              <Link href={"/donate"}>Donate for BPL Patients</Link>
            </Button>
          </div>

          <div className="md:w-1/2">
            <Button asChild className="w-full">
              <Link href={"/book-a-free-consultation"}>
                Book Your Free Online Consultation
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
