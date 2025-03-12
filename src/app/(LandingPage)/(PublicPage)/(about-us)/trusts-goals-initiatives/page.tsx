import HeadingSec from "@/components/HeadingSec";
import streak from "@/assets/streak.gif";
import Image from "next/image";
import faundation from "@/assets/foundation.webp";
import formImage from "@/assets/WhatsApp Image 2025-03-10 at 5.18.01 PM.jpeg";
import formImage2 from "@/assets/WhatsApp Image 2025-03-10 at 5.18.01 PM (1).jpeg";

export default function page() {
  return (
    <main className="space-y-24 py-15">
      <HeadingSec className="px-3 [text-shadow:_0_2px_4px_#fff633]">
        {" "}
        Trust&lsquo;s{" "}
        <em className="text-primary relative">
          Goals & Initiatives
          <Image
            src={streak}
            alt="streak"
            className="absolute -top-10 right-0"
          />
        </em>
      </HeadingSec>
      <Image src={faundation} alt="faundation" className="w-full" />

      <div className="mx-auto max-w-7xl space-y-16 px-3">
        <HeadingSec className="px-3 [text-shadow:_0_2px_4px_#fff633]">
          {" "}
          Our{" "}
          <em className="text-primary relative">
            Intiatives
            <Image
              src={streak}
              alt="streak"
              className="absolute -top-10 right-0"
            />
          </em>
        </HeadingSec>

        <div className="flex gap-5">
          <div className="md:w-1/2">
            <Image
              src={formImage}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>

          <div className="space-y-6 md:w-1/2">
            <h5 className="text-2xl font-bold">
              Participatory Healthcare Management
            </h5>
            <h3 className="font-bold">
              Holistic Healing for All – Build | Revive | Support | Expand
            </h3>
            <p>
              Our trust promotes Ayush and Homeopathy-based holistic healthcare.
              Through health camps, natural treatments, and community health
              initiatives, we strive to provide safe and effective medical care
              to all.
            </p>
            <p>
              Our efforts focus on raising awareness and improving
              accessibility, especially in areas where people are still unaware
              of modern and natural healing methods. By offering free medical
              consultations, herbal treatments, and educational programs, we are
              working towards building a healthier society.
            </p>
            <p>
              Our efforts focus on raising awareness and improving
              accessibility, especially in areas where people are still unaware
              of modern and natural healing methods. By offering free medical
              consultations, herbal treatments, and educational programs, we are
              working towards building a healthier society.
            </p>
          </div>
        </div>

        <div className="flex gap-5">
          <div className="space-y-6 md:w-1/2">
            <h5 className="text-2xl font-bold">
              Integrative Wellness Programs
            </h5>
            <h3 className="font-bold">
              Healing with Nature – Restore | Educate | Empower | Sustain
            </h3>
            <p>
              Our trust is dedicated to promoting a holistic approach to
              wellness by integrating traditional Ayush therapies, yoga, and
              meditation into daily life. Through workshops, wellness retreats,
              and awareness campaigns, we help individuals embrace natural
              healing methods for a balanced and healthier lifestyle.
            </p>
            <p>
              We focus on empowering communities with knowledge about self-care,
              herbal remedies, and mental well-being, ensuring a sustainable
              path to wellness.
            </p>
          </div>
          <div className="md:w-1/2">
            <Image
              src={formImage2}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl space-y-8 px-3">
        <HeadingSec className="px-3 [text-shadow:_0_2px_4px_#fff633]">
          {" "}
          Our{" "}
          <em className="text-primary relative">
            Goals
            <Image
              src={streak}
              alt="streak"
              className="absolute -top-10 right-0"
            />
          </em>
        </HeadingSec>

        <div className="space-y-3">
          <h1 className="font-bold">1. Promote Holistic Healthcare</h1>
          <p className="text-muted-foreground">
            We aim to make Ayush and Homeopathy accessible to all, ensuring
            natural and effective healthcare solutions for communities.
          </p>
        </div>
        <div className="space-y-3">
          <h1 className="font-bold">2. Organize Free Health Camps</h1>
          <p className="text-muted-foreground">
            Conducting regular health camps in rural and underserved areas to
            provide free consultations and treatments.
          </p>
        </div>
        <div className="space-y-3">
          <h1 className="font-bold">
            3. Raise Awareness About Natural Healing
          </h1>
          <p className="text-muted-foreground">
            Educating people about the benefits of Ayurveda, Homeopathy, and
            other holistic practices through workshops and campaigns.
          </p>
        </div>
        <div className="space-y-3">
          <h1 className="font-bold">4. Support Underprivileged Communities</h1>
          <p className="text-muted-foreground">
            Providing affordable and free healthcare services to those who
            cannot afford medical treatment.
          </p>
        </div>

        <div className="space-y-3">
          <h1 className="font-bold">
            5. Develop Herbal & Homeopathic Remedies{" "}
          </h1>
          <p className="text-muted-foreground">
            Researching and promoting traditional and natural medicines to offer
            safe and effective healing alternatives.
          </p>
        </div>

        <div className="space-y-3">
          <h1 className="font-bold">6. Integrate Yoga & Mental Wellness </h1>
          <p className="text-muted-foreground">
            Encouraging yoga, meditation, and stress-relief programs as part of
            a complete healthcare approach.
          </p>
        </div>

        <div className="space-y-3">
          <h1 className="font-bold">7. Expand Healthcare Reach </h1>
          <p className="text-muted-foreground">
            Setting up mobile health clinics and expanding our presence in
            different regions to serve more people.
          </p>
        </div>
        <div className="space-y-3">
          <h1 className="font-bold">8. Foster Sustainable Living </h1>
          <p className="text-muted-foreground">
            Promoting eco-friendly lifestyles by advocating for organic farming,
            natural healing, and self-sustainability.
          </p>
        </div>
        <div className="space-y-3">
          <h1 className="font-bold">9. Collaboration & Research </h1>
          <p className="text-muted-foreground">
            Partnering with healthcare experts, researchers, and organizations
            to advance holistic healing solutions.
          </p>
        </div>
        <div className="space-y-3">
          <h1 className="font-bold">
            10. Empower Communities Through Education
          </h1>
          <p className="text-muted-foreground">
            Training local health workers and volunteers to spread awareness and
            provide basic healthcare support.
          </p>
        </div>
      </div>
    </main>
  );
}
