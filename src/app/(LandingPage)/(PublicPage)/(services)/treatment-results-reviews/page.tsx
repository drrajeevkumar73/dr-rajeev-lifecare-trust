import HeadingSec from "@/components/HeadingSec";
import streak from "@/assets/streak.gif";
import Image from "next/image";
import faundation from "@/assets/foundation.webp";
import Treatmet from "./Treatmet";
import CountUp from "@/components/CountUp";
import { countUp } from "./Allary";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Star } from "lucide-react";
import Reviwe from "@/components/Reviwe";

export default function Page() {
  return (
    <main className="space-y-24 py-15">
      <HeadingSec className="px-3 [text-shadow:_0_2px_4px_#fff633]">
        Treatment Results{" "}
        <em className="text-primary relative">
          Reviews
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
            Treatment at Dr Rajeev Homeopathic{" "}
            <em className="text-primary relative">
              Clinic
              <Image
                src={streak}
                alt="streak"
                className="absolute -top-10 right-0"
              />
            </em>
          </HeadingSec>
          <p className="text-muted-foreground">
            Dr Rajeev homeo clinic near me in Shivranjani Cross Rd, Satellite
            Road offers long-lasting relief from health problems by using the
            natural, German science of homeopathy. Our expertise in holistic
            treatment gives you more than just short-term remedies. We provide
            an alternative approach for your condition so it does not come back
            again!
          </p>

          <Treatmet />
        </div>

        <div className="space-y-6">
          <HeadingSec className="px-3 [text-shadow:_0_2px_4px_#fff633]">
            Why Dr Rajeev Homeopathy{" "}
            <em className="text-primary relative">
              Clinic
              <Image
                src={streak}
                alt="streak"
                className="absolute -top-10 right-0"
              />
            </em>
          </HeadingSec>
          <CountUp countUp={countUp} />
        </div>
        <div className="space-y-6">
          <HeadingSec className="px-3 [text-shadow:_0_2px_4px_#fff633]">
            Frequently Asked{" "}
            <em className="text-primary relative">
              Questions
              <Image
                src={streak}
                alt="streak"
                className="absolute -top-10 right-0"
              />
            </em>
          </HeadingSec>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Which is the best Homeopathy clinic near me to visit for hair
                fall treatment in Ranchi, Delhi, Kolkata, Patna ?
              </AccordionTrigger>
              <AccordionContent>
                You can visit Dr Rajeev homeopathic hair clinic in Ranchi,
                Delhi, Kolkata, Patna for the best hair fall treatment. Our
                homeopathy specialists provide tailor-made hair fall treatments
                to provide maximum benefits. Our homeopathic hair doctors
                conduct a painless video microscopy test. This test magnifies
                the hair follicles and scalp up to 200 times. This helps to
                comprehend the extent and cause of hair fall. Dr Rajeev hair
                clinic offers natural and side-effect-free hair treatment in
                Ranchi, Delhi, Kolkata, Patna. We have 15 lakh happy hair
                patients.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                Which is the best Homeopathy clinic near me to visit for skin
                treatment in Ranchi, Delhi, Kolkata, Patna ?
              </AccordionTrigger>
              <AccordionContent>
                While homeopathy is often considered to be an alternative, Dr
                Rajeev is the best homeopathy clinic in Ranchi, Delhi, Kolkata,
                Patna for any skin treatment. Dr Rajeev homeopathic skin doctors
                in Ranchi, Delhi, Kolkata, Patna will always take all of your
                symptoms into consideration before prescribing any kind of skin
                treatment. This makes Dr Rajeev homeopathic skin clinic one of
                the safest places for alternative skin treatments. The
                homeopathic skin doctors can handle anything from allergies to
                antibiotic-resistant infections, so no matter what your needs
                are, we have the right skin treatment for you! Moreover, we have
                1.4 lakh happy skin patients.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                What treatment does Dr Rajeev provide at Homeo clinic near me in
                Ranchi, Delhi, Kolkata, Patna ?
              </AccordionTrigger>
              <AccordionContent>
                Dr Rajeev homeopathic clinic near me in Ranchi, Delhi, Kolkata,
                Patna provides homeopathic treatment for hair loss problems such
                as male pattern baldness, female pattern baldness, alopecia
                areata, seborrheic dermatitis, and much more. We offer
                homeopathic treatment for skin problems such as psoriasis,
                vitiligo, acne, eczema, and much more. We also provide
                homeopathic treatment for allergies such as skin allergies,
                respiratory allergies, food allergies, and much more. We also
                offer homeopathic treatment for respiratory disorders such as
                lung health, allergic rhinitis, asthma, bronchitis, COVID-19,
                and much more. We also provide homeopathic treatment for child
                health disorders such as ADHD, autism, obesity, low immunity,
                poor growth, tonsillitis, URTI, and much more. We also offer
                homeopathic treatment for women&lsquo;s health disorders such as
                PCOS, thyroid, migraine, menopause, infertility, and UTI. We
                also provide
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="space-y-16">
          <div className="space-y-6">
            <HeadingSec className="px-3 [text-shadow:_0_2px_4px_#fff633]">
              Google Reviews and{" "}
              <em className="text-primary relative">
                Ratings
                <Image
                  src={streak}
                  alt="streak"
                  className="absolute -top-10 right-0"
                />
              </em>
            </HeadingSec>
            <div className="flex items-center justify-center gap-5">
              <div className="flex gap-3">
                <Star fill="#f4a462" color="#f4a462" />
                <Star fill="#f4a462" color="#f4a462" />
                <Star fill="#f4a462" color="#f4a462" />
                <Star fill="#f4a462" color="#f4a462" />
                <Star fill="#f4a462" color="#f4a462" />
              </div>
              <p className="text-muted-foreground font-bold">
                {" "}
                5.0 rating of 1345000+ reviews
              </p>
            </div>
          </div>
          <Reviwe />
        </div>
      </div>
    </main>
  );
}
