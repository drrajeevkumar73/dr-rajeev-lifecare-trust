import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import Image from "next/image";
import gie from "@/assets/issue-1.gif";
import cry from "@/assets/crayon-strip-bottom (1).jpg";


export default function OurMission() {
  return (
    <div className="relative space-y-16">
      <div className="w-full space-y-16 px-3">
        <h1 className="text-center text-3xl font-bold md:text-5xl">
          Our Mission
        </h1>
        <div className="relative z-[4] mx-auto flex max-w-7xl flex-wrap justify-center gap-5 md:flex-nowrap">
          <div className="group h-[317px] overflow-hidden rounded-md border bg-card p-10 shadow-lg">
            <div className="space-y-6">
              <div className="flex justify-center">
                <Image src={gie} alt="" width={189} height={135} />
              </div>
              <p className="text-center text-muted-foreground">Education</p>
              <div className="flex justify-center">
                <div className="h-[5px] w-[20px] bg-primary"></div>
              </div>
            </div>

            <div className="invisible flex h-[100%] transform flex-col justify-center space-y-6 overflow-hidden bg-white opacity-0 duration-500 group-hover:visible group-hover:translate-y-[-100%] group-hover:opacity-100">
              <div className="h-fit space-y-6 p-3">
                <p className="text-center text-muted-foreground">Education</p>
                <div className="flex justify-center">
                  <div className="h-[5px] w-[20px] bg-primary"></div>
                </div>
                <p>
                  Ensuring that children go to school and complete their
                  education
                </p>
                <Button className="btnshow w-full font-bold duration-.5">
                  <Heart className="mr-4 size-4" fill="red" />
                  Yes! I want to Help!
                </Button>
              </div>
            </div>
          </div>
          <div className="group h-[317px] overflow-hidden rounded-md border bg-card p-10 shadow-lg">
            <div className="space-y-6">
              <div className="flex justify-center">
                <Image src={gie} alt="" width={189} height={135} />
              </div>
              <p className="text-center text-muted-foreground">Education</p>
              <div className="flex justify-center">
                <div className="h-[5px] w-[20px] bg-primary"></div>
              </div>
            </div>

            <div className="invisible flex h-[100%] transform flex-col justify-center space-y-6 overflow-hidden bg-white opacity-0 duration-500 group-hover:visible group-hover:translate-y-[-100%] group-hover:opacity-100">
              <div className="h-fit space-y-6 p-3">
                <p className="text-center text-muted-foreground">Education</p>
                <div className="flex justify-center">
                  <div className="h-[5px] w-[20px] bg-primary"></div>
                </div>
                <p>
                  Ensuring that children go to school and complete their
                  education
                </p>
                <Button className="btnshow w-full font-bold duration-.5">
                  <Heart className="mr-4 size-4" fill="red" />
                  Yes! I want to Help!
                </Button>
              </div>
            </div>
          </div>
          <div className="group h-[317px] overflow-hidden rounded-md border bg-card p-10 shadow-lg">
            <div className="space-y-6">
              <div className="flex justify-center">
                <Image src={gie} alt="" width={189} height={135} />
              </div>
              <p className="text-center text-muted-foreground">Education</p>
              <div className="flex justify-center">
                <div className="h-[5px] w-[20px] bg-primary"></div>
              </div>
            </div>

            <div className="invisible flex h-[100%] transform flex-col justify-center space-y-6 overflow-hidden bg-white opacity-0 duration-500 group-hover:visible group-hover:translate-y-[-100%] group-hover:opacity-100">
              <div className="h-fit space-y-6 p-3">
                <p className="text-center text-muted-foreground">Education</p>
                <div className="flex justify-center">
                  <div className="h-[5px] w-[20px] bg-primary"></div>
                </div>
                <p>
                  Ensuring that children go to school and complete their
                  education
                </p>
                <Button className="btnshow w-full font-bold duration-.5">
                  <Heart className="mr-4 size-4" fill="red" />
                  Yes! I want to Help!
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image
        src={cry}
        className="absolute bottom-[20px] w-full rotate-180 sm:bottom-[50px] md:bottom-[100px] 2xl:bottom-[185px]"
        alt=""
      />
      <Image src={cry} className="w-full" alt="" />
    </div>
  );
}
