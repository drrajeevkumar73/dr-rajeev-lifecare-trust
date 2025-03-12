import HeadingSec from "@/components/HeadingSec";
import streak from "@/assets/streak.gif";
import Image from "next/image";
import faundation from "@/assets/foundation.webp";
import doctor from "@/assets/doctor_home_banner.jpg";
import temImg from "@/assets/Siddharth-Sharma2023 (1).webp";
export default function page() {
  return (
    <main className="space-y-24 py-15">
      <HeadingSec className="px-3 [text-shadow:_0_2px_4px_#fff633]">
        {" "}
        Our{" "}
        <em className="text-primary relative">
          Team
          <Image
            src={streak}
            alt="streak"
            className="absolute -top-10 right-0"
          />
        </em>
      </HeadingSec>

      <Image src={faundation} alt="faundation" className="w-full" />

      <div className="flex md:flex-row flex-col">
        <div className="bg-secondary flex items-center justify-center px-3 text-center md:w-1/2">
          <div className="space-y-6">
            <p className="text-4xl font-bold">Leadership</p>
            <div>
              <p className="text-2xl font-bold">Dr. Rajeev Kumar</p>
              <p>Chairman, Abhi Homeo Hall</p>
            </div>
          </div>
        </div>
        <Image src={doctor} alt="doctor" className="w-full md:w-1/2" />
      </div>

      <div className="mx-auto max-w-7xl space-y-16 px-3">
        <HeadingSec className="px-3 [text-shadow:_0_2px_4px_#fff633]">
          {" "}
          Executive{" "}
          <em className="text-primary relative">
            Team
            <Image
              src={streak}
              alt="streak"
              className="absolute -top-10 right-0"
            />
          </em>
        </HeadingSec>

        <div className="flex flex-col gap-5 sm:grid md:grid-cols-3 lg:grid-cols-4">
        <div className="border">
            <Image src={temImg} alt="temImg" className="w-full object-cover"/>
            <div className="bg-card space-y-6 p-3">
              <p className="font-bold">Rahul Pal</p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
                error rem numquam impedit dolore, placeat voluptatum animi eos
                sunt quisquam. Quo maxime unde nulla eum iure dolor corrupti,
                ducimus autem.
              </p>
            </div>
          </div> <div className="border">
            <Image src={temImg} alt="temImg" className="w-full object-cover"/>
            <div className="bg-card space-y-6 p-3">
              <p className="font-bold">Rahul Pal</p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
                error rem numquam impedit dolore, placeat voluptatum animi eos
                sunt quisquam. Quo maxime unde nulla eum iure dolor corrupti,
                ducimus autem.
              </p>
            </div>
          </div> <div className="border">
            <Image src={temImg} alt="temImg" className="w-full object-cover"/>
            <div className="bg-card space-y-6 p-3">
              <p className="font-bold">Rahul Pal</p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
                error rem numquam impedit dolore, placeat voluptatum animi eos
                sunt quisquam. Quo maxime unde nulla eum iure dolor corrupti,
                ducimus autem.
              </p>
            </div>
          </div> <div className="border">
            <Image src={temImg} alt="temImg" className="w-full object-cover"/>
            <div className="bg-card space-y-6 p-3">
              <p className="font-bold">Rahul Pal</p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
                error rem numquam impedit dolore, placeat voluptatum animi eos
                sunt quisquam. Quo maxime unde nulla eum iure dolor corrupti,
                ducimus autem.
              </p>
            </div>
          </div> <div className="border">
            <Image src={temImg} alt="temImg" className="w-full object-cover"/>
            <div className="bg-card space-y-6 p-3">
              <p className="font-bold">Rahul Pal</p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
                error rem numquam impedit dolore, placeat voluptatum animi eos
                sunt quisquam. Quo maxime unde nulla eum iure dolor corrupti,
                ducimus autem.
              </p>
            </div>
          </div> <div className="border">
            <Image src={temImg} alt="temImg" className="w-full object-cover"/>
            <div className="bg-card space-y-6 p-3">
              <p className="font-bold">Rahul Pal</p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
                error rem numquam impedit dolore, placeat voluptatum animi eos
                sunt quisquam. Quo maxime unde nulla eum iure dolor corrupti,
                ducimus autem.
              </p>
            </div>
          </div> <div className="border">
            <Image src={temImg} alt="temImg" className="w-full object-cover"/>
            <div className="bg-card space-y-6 p-3">
              <p className="font-bold">Rahul Pal</p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
                error rem numquam impedit dolore, placeat voluptatum animi eos
                sunt quisquam. Quo maxime unde nulla eum iure dolor corrupti,
                ducimus autem.
              </p>
            </div>
          </div>
          <div className="border">
            <Image src={temImg} alt="temImg" className="w-full object-cover"/>
            <div className="bg-card space-y-6 p-3">
              <p className="font-bold">Rahul Pal</p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
                error rem numquam impedit dolore, placeat voluptatum animi eos
                sunt quisquam. Quo maxime unde nulla eum iure dolor corrupti,
                ducimus autem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
