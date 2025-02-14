import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";


export default function Vidio() {
  return (
    <div className="ml-auto max-w-[1500px] ">
      <div className="flex flex-col-reverse flex-wrap items-center justify-between gap-20 lg:flex-row lg:flex-nowrap ">
        <div className="lg:w-[40%] space-y-6 px-3">
          <h5 className="break-words text-2xl font-bold md:!leading-[50px]  md:text-4xl">
            Play Video Over 4 decades of ensuring{" "}
            <em className="text-primary">happier childhoods</em>
          </h5>
          <p className="text-muted-foreground">
            CRY was born of a dream to ensure happier childhoods for all
            children.
          </p>

          <p className="text-muted-foreground">
            n 1979, Rippan Kapur – an Indian Airlines purser – started CRY with
            6 friends and just Rs. 50. Today, over 4 decades later, CRY works
            with 144 project partners across 20 states in India and has impacted
            the lives of over 4.7 million children.
          </p>

          <Button className="btnshow w-full font-bold duration-.5">
                <Heart className="mr-4 size-4" fill="red" />
                Yes! I want to Help!
              </Button>
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
  );
}
