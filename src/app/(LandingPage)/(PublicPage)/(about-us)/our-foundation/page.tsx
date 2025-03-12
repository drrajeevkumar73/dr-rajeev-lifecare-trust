import HeadingSec from "@/components/HeadingSec";
import streak from "@/assets/streak.gif";
import Image from "next/image";
import faundation from "@/assets/foundation.webp";
import clinicchair from "@/assets/images (5).jpg";
import clinicchair1 from "@/assets/AYUSH-treatment.jpg";
import drrajeev from "@/assets/doctor_home_banner.jpg";

export default function Page() {
  return (
    <main className="space-y-24 py-15">
      <HeadingSec className="px-3 [text-shadow:_0_2px_4px_#fff633]">
        {" "}
        Our{" "}
        <em className="text-primary relative">
          Foundation
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
          <div className="flex flex-col gap-5 md:flex-row">
            <div className="overflow-hidden rounded-md md:w-1/2">
              <Image
                src={clinicchair1}
                alt="clinicchair"
                className="w-full transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="space-y-6 md:w-1/2">
              <HeadingSec className="px-3 [text-shadow:_0_2px_4px_#fff633]">
                {" "}
                About{" "}
                <em className="text-primary relative">
                  Ayush Pathy Trust
                  <Image
                    src={streak}
                    alt="streak"
                    className="absolute -top-10 right-0"
                  />
                </em>
              </HeadingSec>
              <p className="text-justify">
                <b>AYUSH Pathy Trust</b> is dedicated to promoting and advancing
                traditional Indian medical sciences, including Ayurveda, Yoga &
                Naturopathy, Unani, Siddha, and Homeopathy (AYUSH). Established
                with a vision to provide holistic, natural, and effective
                healthcare, the trust works towards integrating traditional
                healing systems with modern advancements.
              </p>
              <p className="text-justify">
                Our mission is to <b>spread awareness about AYUSH therapies</b>{" "}
                and make them accessible to people seeking alternative and
                side-effect-free treatments. We believe in the power of nature
                and the deep-rooted wisdom of traditional medicine, which has
                been practiced for centuries in India. AYUSH Pathy Trust
                actively supports research, training, and community healthcare
                initiatives to ensure that these therapies reach a wider
                audience.
              </p>

              <p className="text-justify">
                With official AYUSH recognition and certifications, AYUSH Pathy
                Trust aims to bridge the gap between traditional and modern
                healthcare. Our goal is to establish a sustainable and effective
                healthcare system where natural therapies and holistic wellness
                become a primary choice for people worldwide.
              </p>
            </div>
          </div>
          <p className="text-justify">
            The trust is committed to offering affordable and personalized
            treatments through expert practitioners. Our team includes
            experienced homeopathic doctors, Ayurvedic practitioners, and
            naturopathy experts who provide tailored solutions based on
            individual patient needs. We also conduct health awareness programs,
            free medical camps, and educational workshops to empower communities
            with the knowledge of natural healing methods.
          </p>
        </div>

        <div className="space-y-6">
          <div className="flex flex-col gap-5 md:flex-row">
            <div className="space-y-6 md:w-1/2">
              <HeadingSec className="px-3 [text-shadow:_0_2px_4px_#fff633]">
                {" "}
                About{" "}
                <em className="text-primary relative">
                Visionary 
                  <Image
                    src={streak}
                    alt="streak"
                    className="absolute -top-10 right-0"
                  />
                </em>
              </HeadingSec>
              <p className="text-justify">
                The founder of AYUSH Pathy Trust is a <b> visionary leader</b>{" "}
                dedicated to the promotion and advancement of traditional Indian
                medicine, including Ayurveda, Yoga & Naturopathy, Unani, Siddha,
                and Homeopathy (AYUSH). With a deep-rooted passion for holistic
                healing and natural wellness, the founder established this trust
                with the mission to bring safe, effective, and affordable
                healthcare solutions to people through AYUSH therapies.
              </p>
              <p className="text-justify">
                Coming from a strong background in alternative medicine, the
                founder has spent years researching and practicing homeopathy
                and other traditional healing sciences. They recognized the
                immense potential of natural and side-effect-free treatments and
                aimed to integrate them into mainstream healthcare. Under their
                leadership, the trust has grown into a recognized institution
                that educates, treats, and spreads awareness about AYUSH
                therapies.
              </p>

              <p className="text-justify">
                The founder firmly believes that preventive healthcare and
                natural healing should be accessible to all. To achieve this,
                they have actively contributed to community health programs,
                free medical camps, and awareness initiatives that empower
                individuals with knowledge about homeopathy and AYUSH
                treatments. Their dedication has led to the establishment of
                various wellness centers, training programs for aspiring
                practitioners, and research initiatives to validate the
                effectiveness of traditional therapies.
              </p>
            </div>
            <div className="overflow-hidden rounded-md md:w-1/2">
              <Image
                src={clinicchair}
                alt="clinicchair"
                className="w-full transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
          <p className="text-justify">
            With a vision to make AYUSH treatments a globally recognized and
            trusted form of healthcare, the founder continues to work towards
            bridging the gap between ancient wisdom and modern medical
            advancements. Their relentless efforts in promoting holistic
            well-being have not only benefited countless patients but have also
            inspired many healthcare professionals to embrace natural healing
            methods.
          </p>
          <p className="text-justify">
            The trust is committed to offering affordable and personalized
            treatments through expert practitioners. Our team includes
            experienced homeopathic doctors, Ayurvedic practitioners, and
            naturopathy experts who provide tailored solutions based on
            individual patient needs. We also conduct health awareness programs,
            free medical camps, and educational workshops to empower communities
            with the knowledge of natural healing methods.
          </p>
        </div>

        <div className="space-y-6">
          <div className="flex flex-col gap-5 md:flex-row">
            <div className="overflow-hidden rounded-md md:w-1/2">
              <Image
                src={drrajeev}
                alt="clinicchair"
                className="w-full transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="space-y-6 md:w-1/2">
              <HeadingSec className="px-3 [text-shadow:_0_2px_4px_#fff633]">
                {" "}
                About{" "}
                <em className="text-primary relative">
                  Dr. Rajeev Kumar
                  <Image
                    src={streak}
                    alt="streak"
                    className="absolute -top-10 right-0"
                  />
                </em>
              </HeadingSec>
              <p className="text-justify">
                He is not the one who belives in building castles in the air.
                His dreams were restricted but with his tremendous courage of
                conviction coupled with an innovative streak, he has translated
                those restricted dreams into reality. Meet Dr. Rajeev Kumar, the
                reputed Homoeopath of Ranchi, who needs no introduction for the
                city dwellers.
              </p>
              <p className="text-justify">
                Born in a middle class family in Gopalganj, Bihar, to a social
                worker father, Dr. Rajeev Kumar is one such persona who has
                scripted success story that is worthy emulating.
              </p>

              <p className="text-justify">
                &ldquo;My father, Late Kamleshwar Prasad was a social worker and
                a village mukhiya. Our values were our assets. There was little
                in the name of sacings. I came to Ranchi with just Rs.5000. Rest
                is history,&ldquo; says the homoeopath, who is a standalone in
                the crowd of businessmen who turned into doctor by his sheer
                dint of arduous labour.
              </p>
              <p className="text-justify">
                On his return, he added another feather to his cap when he set
                up the Abhi Homoeo Healthcare.
              </p>
              <p className="text-justify">
                Dr. Kumar’s and Abhi Homoeo Hall’s journey started in a one room
                rented house in 2003. From a tiny spec in the vast medicine
                market, Kumar in 12 years has become one of the biggest
                distributor in the region, a renowned homoeopath and envisages
                the dream of opening Eastern Zone’s first private homoeopathy
                hospital of 30 beds by August.
              </p>
              <p className="text-justify">
                But behind the story of this homoeopathic doctor’s mini-empire
                is a sea of challenges and struggles. Initially, destiny was
                unfavourable to this ypung man when he ventured into the
                business after procuring Bachelor in Homoeopathy Medicine and
                Sciences (BHMS) degree from KNH College, Bhagalpur in 2004.
              </p>
            </div>
          </div>
          <p className="text-justify">
            But behind the story of this homoeopathic doctor’s mini-empire is a
            sea of challenges and struggles. Initially, destiny was unfavourable
            to this ypung man when he ventured into the business after procuring
            Bachelor in Homoeopathy Medicine and Sciences (BHMS) degree from KNH
            College, Bhagalpur in 2004.
          </p>
        </div>
      </div>
    </main>
  );
}
