import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import nicheme from "@/assets/children-wide-banner.jpg";
import border from "@/assets/crayon-strip-bottom.jpg";
import gie from "@/assets/issue-1.gif";
import Image from "next/image";
export default function WahtweDo() {
  return (
    <div>
      <Image src={nicheme} alt="" className="w-full" />
      <div className="relative w-full bg-primary">
        <div className="mx-auto max-w-6xl">
          <div className="px-3 md:px-28">
            <div className="relative bottom-2 mx-auto bg-primary py-12 shadow-[0_-35px_35px_rgba(0,0,0,0.25)] md:bottom-[50px]">
              <h5 className="text-center text-5xl font-bold">What We Do</h5>
            </div>
          </div>
        </div>

        <div className="relative z-[9] mx-auto flex max-w-7xl flex-wrap justify-center gap-5 overflow-x-hidden px-3 pb-5 lg:flex-nowrap">
          <div className="group h-[317px] overflow-hidden rounded-md bg-card p-10 shadow-lg">
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
          <div className="group h-[317px] overflow-hidden rounded-md bg-card p-10 shadow-lg">
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
          <div className="group h-[317px] overflow-hidden rounded-md bg-card p-10 shadow-lg">
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

        <Image src={border} alt="" className="absolute bottom-0 w-full" />
      </div>
    </div>
  );
}
