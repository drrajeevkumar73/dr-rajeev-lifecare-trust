import Image from "next/image";
import bris from "@/assets/brush-patch-pink.jpg";
import img from "@/assets/children-education.png";
export default function Children() {
  return (
    <div className="space-y-24">
      <div className="j flex flex-wrap items-center gap-28 md:flex-nowrap md:gap-5">
        <div className="relative w-full md:w-1/2">
          <Image src={bris} alt="" className="h-full w-full" />
          <Image
            src={img}
            alt=""
            className="absolute left-1/2 top-0 h-fit -translate-x-1/2"
          />
        </div>
        <div className="w-full space-y-6 md:w-1/2">
          <h6 className="text-center text-3xl font-bold md:text-5xl">
            Education Right To Development
          </h6>

          <p className="text-white">
            A quality education not only builds knowledge, capabilities, life
            skills and values amongst children but also develops their creative,
            social and emotional abilities. It is crucial for their cognitive
            and personal development, including critical thinking and
            problem-solving.
          </p>
          <p className="text-white">
            A quality education not only builds knowledge, capabilities, life
            skills and values amongst children but also develops their creative,
            social and emotional abilities. It is crucial for their cognitive
            and personal development, including critical thinking and
            problem-solving.
          </p>
        </div>
      </div>
      <div className="j flex flex-wrap items-center gap-5 md:flex-nowrap">
        <div className="w-full space-y-6 md:w-1/2">
          <h6 className="text-center text-3xl font-bold md:text-5xl">
            Education Right To Development
          </h6>

          <p className="text-white">
            A quality education not only builds knowledge, capabilities, life
            skills and values amongst children but also develops their creative,
            social and emotional abilities. It is crucial for their cognitive
            and personal development, including critical thinking and
            problem-solving.
          </p>
          <p className="text-white">
            A quality education not only builds knowledge, capabilities, life
            skills and values amongst children but also develops their creative,
            social and emotional abilities. It is crucial for their cognitive
            and personal development, including critical thinking and
            problem-solving.
          </p>
        </div>
        <div className="relative w-full md:w-1/2">
          <Image src={bris} alt="" className="h-full w-full" />
          <Image
            src={img}
            alt=""
            className="absolute left-1/2 top-0 -translate-x-1/2"
          />
        </div>
      </div>
    </div>
  );
}
