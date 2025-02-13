import Image from "next/image";
import textimg from "@/assets/streak.gif";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

export default function Banner() {
  return (
    <div className="w-full">
      <div className="ml-auto max-w-[1400px]">
        <div className="flex flex-col-reverse flex-wrap items-center justify-between gap-20 lg:flex-row lg:flex-nowrap">
          <div className="space-y-6 px-3">
            <h5 className="text-3xl font-bold !leading-[50px] md:text-4xl">
              Let’s ensure{" "}
              <em className="relative text-primary">
                Happy
                <Image
                  src={textimg}
                  alt=""
                  className="absolute right-0 top-[-38px]"
                />
              </em>{" "}
              <br className="hidden lg:block" />
              <em className="text-primary"> childhoods </em>for{" "}
              <br className="hidden lg:block" />
              India’s children
            </h5>
            <div className="flex justify-center md:justify-start">
              <Button className="btnshow w-full font-bold duration-.5">
                <Heart className="mr-4 size-4" fill="red" />
                Yes! I want to Help!
              </Button>
            </div>
          </div>
          <div className="vidshwo relative w-full overflow-hidden lg:w-2/3">
            <video
              autoPlay
              loop
              muted
              className="h-full w-full scale-[1.1] scale-y-[1.2] object-cover"
            >
              <source
                src="https://www.cry.org/wp-content/uploads/cry-hero-video.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}
