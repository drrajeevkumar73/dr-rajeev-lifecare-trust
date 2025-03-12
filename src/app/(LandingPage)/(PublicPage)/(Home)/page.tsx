"use client";
import Image from "next/image";
import vidioPatch from "@/assets/video-patch.png";
import streak from "@/assets/streak.gif";
import esureHealth from "@/assets/esulre-heailt.webp";
import HeadingSec from "@/components/HeadingSec";
import helocheckd from "@/assets/helocheck.png";
import { ArrowRight, Check, Heart, Shell } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import CardCarusol, { BannerCarusol } from "@/components/Carusol";
import hlathwedb from "@/assets/children-wide-banner.webp";
import issue from "@/assets/Saints And Sinners Mask GIF by Bounce (1).gif";
import borderbottim from "@/assets/trust-border.webp";
import acrochayushpathy from "@/assets/ayushacroch.webp";
// import aporchbullick from "@/assets/approach-public (1).webp";
import approchbaneer from "@/assets/aporbaner.webp";
import signature from "@/assets/rippan-sig.jpg";
import homebuttombanner from "@/assets/homebanner.webp";
import HealnessForm from "./HealnessForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import smallPhoto from "@/assets/smal4.jpeg";
import "../styles.css";
import {
  getSliderItems,
  getSliderItemsLong,
  getSliderItemsTwo,
} from "./Allarry";
import { useEffect, useRef, useState } from "react";

export default function Page() {
  const videoRef = useRef(null);
  const [scale, setScale] = useState(1);
  const [translateY, setTranslateY] = useState(0);
  const [fixed, setFixed] = useState(true);

  useEffect(() => {
    document.documentElement.style.overflowX = "hidden"; // X-axis hidden
    document.documentElement.style.overflowY = "auto";  // Y-axis allow
    document.body.style.overflowX = "hidden";  
    document.body.style.overflowY = "auto";
  
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newScale = 1 + scrollY * 0.0015;
      const moveDown = Math.min(scrollY * 0.5, 400);
  
      if (scrollY > 600) {
        setFixed(false);
      } else {
        setFixed(true);
        setScale(Math.min(newScale, 2));
        setTranslateY(moveDown);
      }
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, []);
  return (
    <main className="w-full space-y-24 overflow-hidden">
    {/* Upper Section */}
    <div className="ml-auto max-w-[1400px]">
      <div className="flex flex-col-reverse items-center gap-28 md:flex-row md:gap-5">
        <div className="flex flex-col gap-5 px-3 md:w-1/3">
          <h5 className="text-3xl leading-12 font-bold md:text-4xl">
            Let’s ensure{" "}
            <em className="text-primary relative">
              Holistic
              <Image
                src={streak}
                alt=""
                className="absolute top-[-38px] right-0"
              />
            </em>{" "}
            <br className="hidden lg:block" />
            <em className="text-primary"> Healing </em>for{" "}
            <br className="hidden lg:block" />
            Well - Being
          </h5>
          <Button className="w-full" asChild>
            <Link href={"/donate"}>
              <Heart className="mr-4 size-4" fill="red" />
              Yes! I want to Help!
            </Link>
          </Button>
        </div>

        {/* Video in Upper Section */}
        <div
          className={`relative flex justify-end transition-all duration-700 md:w-2/3 ${
            fixed ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          style={{
            position: fixed ? "relative" : "absolute",
            transform: `scale(${scale}) translateY(${translateY}px)`,
            transition: "all 0.7s ease-in-out",
          }}
        >
          <video
            autoPlay
            muted
            loop
            className="h-full transition-all duration-700"
            ref={videoRef}
          >
            <source src="/cry-hero-video.mp4" type="video/mp4" />
          </video>
          <Image
            src={vidioPatch}
            alt="Vidio Patch"
            className="absolute h-full w-full"
          />
        </div>
      </div>
    </div>

    {/* Image */}
    <Image src={esureHealth} alt="esureHealth" className="w-full" />

    {/* Neeche wala div - Yahaan video smoothly aa jayega */}
    <div className="w-full overflow-hidden transition-all duration-700">
      {!fixed && (
        <video
          autoPlay
          muted
          loop
          className="w-full opacity-100 visible transition-all duration-700"
        >
          <source src="/cry-hero-video.mp4" type="video/mp4" />
        </video>
      )}
    </div>

    
      <div className="mx-auto max-w-7xl space-y-16 px-3">
        <HeadingSec className="[text-shadow:_0_2px_4px_#fff633]">
          {" "}
          About the Trust - Firstpethi Ayush Pethy{" "}
          <em className="text-primary relative">
            Trust{" "}
            <Image
              src={streak}
              alt="streak"
              className="absolute -top-10 right-0"
            />
          </em>
        </HeadingSec>

        <div className="flex-col gap-5 md:flex md:flex-row">
          <div className="space-y-16 md:w-1/2">
            <p className="text-justify leading-8">
              At <b>Firstpethi Ayush Pethi Trust</b>, we are deeply committed to
              holistic healing and community service, ensuring that every
              individual, regardless of their financial background, has access
              to natural and alternative healthcare solutions. Our philosophy is
              rooted in the belief that true healing extends beyond just
              treating diseases—it involves nurturing the mind, body, and
              spirit.
            </p>
            <p className="text-justify leading-8">
              Holistic healing is more than just a method of treatment; it is a
              way of life that embraces the principles of balance, prevention,
              and natural wellness. We believe in an integrative approach where
              Ayurveda, Yoga, Naturopathy, Unani, Siddha, and Homeopathy work
              together to provide
              <b> comprehensive, long-lasting healing</b>.
            </p>
          </div>
          <div className="overflow-hidden rounded-md md:w-1/2">
            <Image
              src={helocheckd}
              alt="helocheckd"
              className="transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>

        <p className="text-justify leading-8">
          Our dedication to community service is reflected in our various
          initiatives aimed at bringing affordable healthcare to underprivileged
          communities. Through medical camps, awareness programs, and financial
          sponsorships, we strive to bridge the gap between modern medicine and
          traditional healing practices, ensuring that even the most
          economically challenged individuals receive the{" "}
          <b>care they deserve</b>.
        </p>
        <ul className="space-y-3">
          <li className="flex items-center gap-5 font-bold">
            <span className="text-primary">
              <Check />
            </span>
            Preventive healthcare through Yoga, Ayurveda, and natural lifestyle
            modifications.
          </li>
          <li className="flex items-center gap-5 font-bold">
            <span className="text-primary">
              <Check />
            </span>
            Mind-body healing that not only treats illnesses but enhances
            overall well-being.
          </li>
          <li className="flex items-center gap-5 font-bold">
            <span className="text-primary">
              <Check />
            </span>
            Sustainable healthcare solutions that are natural, safe, and
            cost-effective.
          </li>
          <li className="flex items-center gap-5 font-bold">
            <span className="text-primary">
              <Check />
            </span>
            Empowering local communities with knowledge about alternative
            medicine and self-care practices.
          </li>
          <li className="flex items-center gap-5 font-bold">
            <span className="text-primary">
              <Check />
            </span>
            Collaborating with practitioners, healers, and volunteers to create
            a strong healthcare network.
          </li>
        </ul>
        <p className="text-justify leading-8">
          At Firstpethi Ayush Pethi Trust, our mission goes beyond providing
          treatment—we are working to redefine healthcare by making it more
          holistic, accessible, and inclusive for all. Through dedication,
          compassion, and unwavering service, we aspire to build a healthier
          society where every individual can experience the true benefits of
          <b> natural healing</b>.
        </p>
      </div>
      <div className="ml-auto max-w-[1400px] space-y-16">
        <HeadingSec className="[text-shadow:_0_2px_4px_#fff633]">
          {" "}
          Our {""}
          <em className="text-primary relative">
            Mission
            <Image
              src={streak}
              alt="streak"
              className="absolute -top-10 right-0"
            />
          </em>
        </HeadingSec>
        <div className="flex flex-col gap-5 md:flex-row">
          <div className="space-y-6 px-3 md:w-1/3">
            <h5 className="text-2xl font-bold">
              Our {""}
              <em className="text-primary">Mission</em>
            </h5>
            <p className="text-justify">
              Our trust aims to raise awareness about natural healing methods
              and alternative medical treatments. We strive to create a healthy
              society where everyone has access to safe and effective medical
              care.
            </p>

            <Button asChild className="w-full">
              <Link href={"/donate"}>
                <Heart className="mr-4 size-4" fill="red" />
                Donate For Happier!
              </Link>
            </Button>
          </div>
          <div className="md:w-2/3">
            <CardCarusol items={getSliderItems} />
          </div>
        </div>
      </div>
      <div className="relative">
        <Image src={hlathwedb} alt="hlathwedb" className="w-full" />
        <div className="bg-primary space-y-16 px-3">
          <div className="bg-primary relative bottom-3 mx-auto max-w-7xl pt-10 shadow-[0_-35px_35px_rgba(0,0,0,0.25)] md:bottom-14">
            <HeadingSec className="[text-shadow:_0_2px_4px_#fff633]">
              {" "}
              Our {""}
              <em className="relative">
                Services
                <Image
                  src={streak}
                  alt="streak"
                  className="absolute -top-10 right-0"
                />
              </em>
            </HeadingSec>
          </div>
          <div className="relative z-10 mx-auto max-w-7xl">
            <div className="flex flex-col gap-5 sm:grid md:grid-cols-3 lg:grid-cols-4">
              <div className="bg-card text-muted-foreground group relative space-y-6 overflow-hidden rounded-md p-5 text-center shadow-lg">
                <Image
                  src={issue}
                  alt="issue"
                  width={140}
                  className="mx-auto"
                />
                <p>Homeopathic Consultation & Treatment</p>
                <div className="border-primary border-[4px]"></div>
                <div className="bg-card absolute top-0 left-0 h-full w-full translate-y-full space-y-6 p-5 text-center transition-transform duration-300 group-hover:translate-y-0">
                  <p className="text-muted-foreground">
                    Homeopathic Consultation & Treatment
                  </p>
                  <div className="border-primary border-[4px]"></div>
                  <p>
                    Personalized homeopathic treatments for chronic and acute
                    diseases.
                  </p>
                </div>
              </div>
              <div className="bg-card text-muted-foreground group relative space-y-6 overflow-hidden rounded-md p-5 text-center shadow-lg">
                <Image
                  src={issue}
                  alt="issue3"
                  width={140}
                  className="mx-auto"
                />
                <p>Ayurvedic Therapy & Herbal Remedies</p>
                <div className="border-primary border-[4px]"></div>
                <div className="bg-card absolute top-0 left-0 h-full w-full translate-y-full space-y-6 p-5 text-center transition-transform duration-300 group-hover:translate-y-0">
                  <p className="text-muted-foreground">
                    Ayurvedic Therapy & Herbal Remedies
                  </p>
                  <div className="border-primary border-[4px]"></div>
                  <p>
                    Natural healing with Ayurveda, including herbal treatments
                    and lifestyle guidance.
                  </p>
                </div>
              </div>
              <div className="bg-card text-muted-foreground group relative space-y-6 overflow-hidden rounded-md p-5 text-center shadow-lg">
                <Image
                  src={issue}
                  alt="issue"
                  width={140}
                  className="mx-auto"
                />
                <p>Yoga & Wellness Programs</p>
                <div className="border-primary border-[4px]"></div>
                <div className="bg-card absolute top-0 left-0 h-full w-full translate-y-full space-y-6 p-5 text-center transition-transform duration-300 group-hover:translate-y-0">
                  <p className="text-muted-foreground">
                    Yoga & Wellness Programs
                  </p>
                  <div className="border-primary border-[4px]"></div>
                  <p>
                    Therapeutic yoga sessions for stress relief, immunity
                    boosting, and holistic well-being.
                  </p>
                </div>
              </div>
              <div className="bg-card text-muted-foreground group relative space-y-6 overflow-hidden rounded-md p-5 text-center shadow-lg">
                <Image
                  src={issue}
                  alt="issue"
                  width={140}
                  className="mx-auto"
                />
                <p>Free Health Camps & Awareness Programs</p>
                <div className="border-primary border-[4px]"></div>
                <div className="bg-card absolute top-0 left-0 h-full w-full translate-y-full space-y-6 p-5 text-center transition-transform duration-300 group-hover:translate-y-0">
                  <p className="text-muted-foreground">
                    Free Health Camps & Awareness Programs
                  </p>
                  <div className="border-primary border-[4px]"></div>
                  <p>
                    Regular medical camps to promote AYUSH healthcare and
                    provide free check-ups.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Image
          src={borderbottim}
          alt="borderbottim"
          className="bottom-0 left-0 w-full md:absolute"
        />
      </div>

      <div className="mx-auto h-full max-w-7xl space-y-16 px-3">
        <HeadingSec className="[text-shadow:_0_2px_4px_#fff633]">
          {" "}
          Our {""}
          <em className="text-primary relative">
            Approach
            <Image
              src={streak}
              alt="streak"
              className="absolute -top-10 right-0"
            />
          </em>
        </HeadingSec>
        <div className="flex flex-col gap-5 md:flex-row">
          <div className="space-y-6 md:w-1/2">
            <h6 className="text-2xl font-bold">
              Our Approach is Modeled Around Bringing Holistic{" "}
              <em className="text-primary"> Healing to Everyone</em>
            </h6>
            <p className="text-justify">
              With your support, we aim to make Ayush-based healthcare
              accessible to all by working with qualified doctors, holistic
              healers, wellness practitioners, and communities. Our goal is to
              ensure that alternative healing methods like Ayurveda, Yoga,
              Naturopathy, Unani, Siddha, and Homeopathy become an integral part
              of modern healthcare.
            </p>
            <p className="text-justify">
              With your support, we aim to make Ayush-based healthcare
              accessible to all by working with qualified doctors, holistic
              healers, wellness practitioners, and communities. Our goal is to
              ensure that alternative healing methods like Ayurveda, Yoga,
              Naturopathy, Unani, Siddha, and Homeopathy become an integral part
              of modern healthcare.
            </p>
          </div>
          <div className="relative flex h-full justify-center md:w-1/2 md:justify-end">
            <div className="bg-secondary h-[350px] w-[350px] rounded-full sm:h-[440px] sm:w-[440px] md:absolute md:h-[350px] md:w-[350px] lg:h-[440px] lg:w-[440px]">
              <div className="border-primary relative h-full w-full animate-spin rounded-full border border-dashed transition-transform duration-[10s]">
                <div className="bg-primary absolute top-[300px] left-[56px] h-[20px] w-[20px] rounded-full sm:left-[10px] md:left-[56px] lg:left-[10px]"></div>
              </div>

              <Image
                src={acrochayushpathy}
                alt=""
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform"
                width={170}
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <Image src={approchbaneer} alt="" className="w-full" />
        <div className="space-y-16 bg-[#fdd831] pt-20">
          <HeadingSec className="px-3 [text-shadow:_0_2px_4px_#fff633]">
            {" "}
            Our {""}
            <em className="relative text-black">
              Stories
              <Image
                src={streak}
                alt="streak"
                className="absolute -top-10 right-0"
              />
            </em>
          </HeadingSec>
          <BannerCarusol logItems={getSliderItemsLong} />
        </div>
      </div>

      <div className="mx-auto max-w-7xl space-y-6 px-3">
        <em className="text-primary flex justify-center">
          <Shell className="size-11" />
        </em>
        <p className="text-center text-2xl">
          If we all do something, then together there is{" "}
          <br className="hidden md:block" /> no problem that we cannot solve!
        </p>
        <Image src={signature} alt="" className="mx-auto" />
        <p className="text-muted-foreground text-center">Dr. Rajeev Kumar</p>
        <p className="text-primary text-center font-bold">
          Founder, Abhi Health Care
        </p>
      </div>
      <Image src={homebuttombanner} alt="homebuttombanner" className="w-full" />

      <div className="mx-auto max-w-7xl space-y-24 px-3">
        <div className="space-y-16">
          <HeadingSec className="px-3 [text-shadow:_0_2px_4px_#fff633]">
            {" "}
            Doctor & Healer
            <em className="text-primary relative">
              Registration
              <Image
                src={streak}
                alt="streak"
                className="absolute -top-10 right-0"
              />
            </em>
          </HeadingSec>
          <HealnessForm />
        </div>
        <div className="space-y-16">
          <HeadingSec className="px-3 [text-shadow:_0_2px_4px_#fff633]">
            {" "}
            BPL Patient Sponsorship {""}
            <em className="text-primary relative">
              Program
              <Image
                src={streak}
                alt="streak"
                className="absolute -top-10 right-0"
              />
            </em>
          </HeadingSec>
          <div className="space-y-6">
            <h4 className="flex items-center gap-5 text-2xl font-bold">
              {" "}
              <span className="text-primary">
                <ArrowRight />
              </span>
              Program Introduction
            </h4>
            <p className="text-justify">
              The BPL Patient Sponsorship Program by <b>Ayush Pathy Trust</b> is
              dedicated to providing free or subsidized medical assistance to
              economically disadvantaged individuals. This initiative ensures
              that patients from the Below Poverty Line (BPL) category receive
              high-quality healthcare without financial burdens. Through this
              program, we offer treatment under Ayush medical systems, including
              Ayurveda, Yoga, Naturopathy, Unani, Siddha, and Homeopathy. Our
              mission is to make holistic and effective healthcare accessible to
              those in need, ensuring that no one is deprived of essential
              medical treatment due to financial constraints.
            </p>
            <h4 className="flex items-center gap-5 text-2xl font-bold">
              {" "}
              <span className="text-primary">
                <ArrowRight />
              </span>
              A Complete Health Assessment for Every Patient
            </h4>
            <p className="text-justify">
              At <b>Ayush Pathy Trust</b> , we prioritize a thorough health
              assessment for every patient. Our experienced doctors conduct a
              detailed evaluation of the patient’s medical history, current
              health condition, and symptoms. Based on this comprehensive
              assessment, we develop personalized treatment plans and recommend
              necessary medical tests if required. This process ensures accurate
              diagnosis and effective treatment, promoting long-term health and
              well-being for each patient.
            </p>
            <h4 className="flex items-center gap-5 text-2xl font-bold">
              {" "}
              <span className="text-primary">
                <ArrowRight />
              </span>
              Free or subsidized Ayurvedic and homeopathic medicines are
              provided
            </h4>
            <p className="text-justify">
              BPL patients are provided with free or subsidized{" "}
              <b>Ayurvedic and Homeopathic medicines</b> to ensure their
              treatment without any financial burden.
            </p>

            <h4 className="flex items-center gap-5 text-2xl font-bold">
              <span className="text-primary">
                <ArrowRight />
              </span>{" "}
              Natural and holistic treatment plans are designed for each patient
            </h4>
            <p className="text-justify">
              Har patient ke health condition ke hisaab se ek personalized aur{" "}
              <b> natural treatment </b> plan tayar kiya jata hai, jo Ayurveda,
              Yoga, aur Homeopathy par based hota hai. Iska uddeshya bimari ka
              jad se ilaaj karna aur long-term well-being ensure karna hai.
            </p>
          </div>
        </div>
        <div className="space-y-16">
          <HeadingSec className="px-3 [text-shadow:_0_2px_4px_#fff633]">
            {" "}
            Our{" "}
            <em className="text-primary relative">
              Camps
              <Image
                src={streak}
                alt="streak"
                className="absolute -top-10 right-0"
              />
            </em>
          </HeadingSec>

          <Tabs defaultValue="Ranchi" className="mx-auto w-full">
            <TabsList className="mx-auto flex w-fit flex-wrap gap-3 md:gap-5">
              <TabsTrigger value="Ranchi" className="cursor-pointer">
                Ranchi
              </TabsTrigger>
              <TabsTrigger value="Kolkata" className="cursor-pointer">
                Kolkata
              </TabsTrigger>
              <TabsTrigger value="Delhi" className="cursor-pointer">
                Delhi
              </TabsTrigger>
              <TabsTrigger value="Patna" className="cursor-pointer">
                Patna
              </TabsTrigger>
            </TabsList>

            <TabsContent
              value="Ranchi"
              className="flex w-full flex-wrap justify-center gap-3 md:gap-5"
            >
              {[...Array(5)].map((_, index) => (
                <Image
                  key={index}
                  src={smallPhoto}
                  alt={`smallPhoto ${index + 1}`}
                  width={256}
                  height={256}
                  className="h-auto w-full max-w-xs rounded-lg shadow-md"
                />
              ))}
            </TabsContent>
            <TabsContent
              value="Kolkata"
              className="flex w-full flex-wrap justify-center gap-3 md:gap-5"
            >
              {[...Array(5)].map((_, index) => (
                <Image
                  key={index}
                  src={smallPhoto}
                  alt={`smallPhoto ${index + 1}`}
                  width={256}
                  height={256}
                  className="h-auto w-full max-w-xs rounded-lg shadow-md"
                />
              ))}
            </TabsContent>
            <TabsContent
              value="Delhi"
              className="flex w-full flex-wrap justify-center gap-3 md:gap-5"
            >
              {[...Array(5)].map((_, index) => (
                <Image
                  key={index}
                  src={smallPhoto}
                  alt={`smallPhoto ${index + 1}`}
                  width={256}
                  height={256}
                  className="h-auto w-full max-w-xs rounded-lg shadow-md"
                />
              ))}
            </TabsContent>
            <TabsContent
              value="Patna"
              className="flex w-full flex-wrap justify-center gap-3 md:gap-5"
            >
              {[...Array(5)].map((_, index) => (
                <Image
                  key={index}
                  src={smallPhoto}
                  alt={`smallPhoto ${index + 1}`}
                  width={256}
                  height={256}
                  className="h-auto w-full max-w-xs rounded-lg shadow-md"
                />
              ))}
            </TabsContent>
          </Tabs>
        </div>
        <div className="space-y-16">
          <HeadingSec className="px-3 [text-shadow:_0_2px_4px_#fff633]">
            {" "}
            Our Patient{" "}
            <em className="text-primary relative">
              Experience
              <Image
                src={streak}
                alt="streak"
                className="absolute -top-10 right-0"
              />
            </em>
          </HeadingSec>

          <CardCarusol items={getSliderItemsTwo} />
        </div>
      </div>
      <div className="space-y-16">
        <div>
          <HeadingSec className="px-3 [text-shadow:_0_2px_4px_#fff633]">
            {" "}
            Ministry Of{" "}
            <em className="text-primary relative">
              Ayush
              <Image
                src={streak}
                alt="streak"
                className="absolute -top-10 right-0"
              />
            </em>
          </HeadingSec>
          <Image
            src={borderbottim}
            alt="borderbottim"
            className="w-full rotate-180"
          />
          <div className="sd w-full">
            <div className="mx-auto flex max-w-7xl px-3 py-4">
              <div className="space-y-6 md:w-1/2">
                <h5 className="text-card text-2xl font-bold">
                  About Ministry of Ayush(MOA)
                </h5>
                <p className="text-white">
                  The Ministry of Ayush was formed on the 9th of November 2014
                  with a vision of reviving the profound knowledge of our
                  ancient systems of medicine and ensuring the optimal
                  development and propagation of the Ayush systems of
                  healthcare. Earlier, the Department of Indian System of
                  Medicine and Homoeopathy (ISM&H) formed in 1995, was
                  responsible for the development of these systems. It was then
                  renamed as the Department of Ayurveda, Yoga, and Naturopathy,
                  Unani, Siddha and Homoeopathy (Ayush) in November 2003 with
                  focused attention towards education and research in Ayurveda,
                  Yoga and Naturopathy, Unani, Siddha, and Homoeopathy.
                </p>
                <p className="text-card text-2xl font-bold">
                  Salient Objectives
                </p>
                <ul className="space-y-6">
                  <li className="flex items-center gap-5 text-white">
                    <span>
                      <ArrowRight className="text-primary size-4 font-bold" />
                    </span>
                    <p>
                      To upgrade the educational standard of the Indian Systems
                      of Medicine and Homoeopathy colleges in the country.
                    </p>
                  </li>
                  <li className="flex items-center gap-5 text-white">
                    <span>
                      <ArrowRight className="text-primary size-4 font-bold" />
                    </span>
                    <p>
                      To upgrade the educational standard of the Indian Systems
                      of Medicine and Homoeopathy colleges in the country.
                    </p>
                  </li>
                  <li className="flex items-center gap-5 text-white">
                    <span>
                      <ArrowRight className="text-primary size-4 font-bold" />
                    </span>
                    <p>
                      To upgrade the educational standard of the Indian Systems
                      of Medicine and Homoeopathy colleges in the country.
                    </p>
                  </li>
                  <li className="flex items-center gap-5 text-white">
                    <span>
                      <ArrowRight className="text-primary size-4 font-bold" />
                    </span>
                    <p>
                      To upgrade the educational standard of the Indian Systems
                      of Medicine and Homoeopathy colleges in the country.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <Image src={borderbottim} alt="borderbottim" className="w-full" />
        </div>
      </div>
    </main>
  );
}
