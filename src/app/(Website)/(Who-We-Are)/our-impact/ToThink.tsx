import Image from "next/image";
import bris from "@/assets/brush-patch.jpg";
import img from "@/assets/rippan.jpg";

export default function ToThink() {
  return (
    <div className="j flex flex-wrap items-center gap-28 md:flex-nowrap md:gap-5">
      <div className="w-full space-y-16 md:w-1/2">
        <h6 className="text-center text-3xl font-bold ">
        To think it all started with <em className="text-primary">just Rs. 50!</em> 
        </h6>

        <p className="text-muted-foreground">
          A quality education not only builds knowledge, capabilities, life
          skills and values amongst children but also develops their creative,
          social and emotional abilities. It is crucial for their cognitive and
          personal development, including critical thinking and problem-solving.
        </p>
        <p className="text-muted-foreground">
          A quality education not only builds knowledge, capabilities, life
          skills and values amongst children but also develops their creative,
          social and emotional abilities. It is crucial for their cognitive and
          personal development, including critical thinking and problem-solving.
        </p>
        <p className="text-muted-foreground">
          A quality education not only builds knowledge, capabilities, life
          skills and values amongst children but also develops their creative,
          social and emotional abilities. It is crucial for their cognitive and
          personal development, including critical thinking and problem-solving.
        </p>
      </div>
      <div className="relative w-full md:w-2/3 flex ">
        <Image src={bris} alt="" className="h-full w-full" />
        <Image
          src={img}
          alt=""
          className="absolute left-1/2 top-1/2 h-fit -translate-x-1/2 -translate-y-1/2"
          width={500}
        />
      </div>
    </div>
  );
}
