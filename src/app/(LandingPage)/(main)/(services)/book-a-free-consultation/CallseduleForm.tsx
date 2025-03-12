"use client";
import seduclecall from "@/assets/hair_coach_book_a_call.png";
import LoadingButton from "@/components/LodingButton";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CloudSunRain, Moon, Sun } from "lucide-react";
import Image from "next/image";
import { useState, useTransition } from "react";
import { callSedule } from "./actions";
import { toast } from "sonner";
export default function CallseduleForm() {
  const [dateData, setDateData] = useState<string>("");
  const [timeData, setTimeData] = useState<string>("");
  const [ispending, setispending] = useTransition();

  async function onSubmit() {
    setispending(async () => {
      const { error, success } = await callSedule({
        date: dateData,
        time: timeData,
      });
      if (success) toast.success(success);
      if (error) toast.error(error);
    });
  }

  return (
    <div className="mx-auto max-w-2xl space-y-6 rounded-md border p-3">
      <div className="bg-secondary mx-auto flex w-fit items-center gap-5 rounded-md p-3">
        <Image src={seduclecall} alt="seduclecall" className="" width={80} />
        <div>
          <p className="font-bold">BOOK A FREE CONSULTATION</p>
          <p>Talk to a Certified Hair Coach and clarify your doubts. </p>
        </div>
      </div>

      <div className="space-y-3">
        <p className="font-bold">Choose Date</p>
        <div className="flex flex-col gap-5 sm:grid md:grid-cols-3 lg:grid-cols-4">
          <Button
            variant="ghost"
            className={`cursor-pointer border px-10 py-10 ${dateData === "6 March" ? "bg-primary hover:bg-primary" : ""}`}
            onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
              setDateData(e.currentTarget.innerText)
            }
          >
            6 March
          </Button>
          <Button
            variant="ghost"
            className={`cursor-pointer border px-10 py-10 ${dateData === "7 March" ? "bg-primary hover:bg-primary" : ""}`}
            onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
              setDateData(e.currentTarget.innerText)
            }
          >
            7 March
          </Button>
          <Button
            variant="ghost"
            className={`cursor-pointer border px-10 py-10 ${dateData === "8 March" ? "bg-primary hover:bg-primary" : ""}`}
            onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
              setDateData(e.currentTarget.innerText)
            }
          >
            8 March
          </Button>
          <Button
            variant="ghost"
            className={`cursor-pointer border px-10 py-10 ${dateData === "9 March" ? "bg-primary hover:bg-primary" : ""}`}
            onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
              setDateData(e.currentTarget.innerText)
            }
          >
            9 March
          </Button>
        </div>
      </div>

      <div className="w-full space-y-3">
        <p className="font-bold">Choose Time Slot</p>

        <Tabs defaultValue="Morning">
          <TabsList className="w-full">
            <TabsTrigger value="Morning" className="cursor-pointer">
              <CloudSunRain />
              Morning
            </TabsTrigger>
            <TabsTrigger value="Afternoon" className="cursor-pointer">
              <Sun />
              Afternoon
            </TabsTrigger>
            <TabsTrigger value="Evening" className="cursor-pointer">
              <Moon />
              Evening
            </TabsTrigger>
          </TabsList>
          <TabsContent
            value="Morning"
            className="flex flex-col gap-5 sm:grid md:grid-cols-3 lg:grid-cols-4"
          >
            <Button
              variant="ghost"
              className={`cursor-pointer border px-10 py-10 ${timeData === "10:00 am" ? "bg-primary hover:bg-primary" : ""}`}
              onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                setTimeData(e.currentTarget.innerText)
              }
            >
              10:00 am
            </Button>
            <Button
              variant="ghost"
              className={`cursor-pointer border px-10 py-10 ${timeData === "10:30 am" ? "bg-primary hover:bg-primary" : ""}`}
              onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                setTimeData(e.currentTarget.innerText)
              }
            >
              10:30 am
            </Button>
            <Button
              variant="ghost"
              className={`cursor-pointer border px-10 py-10 ${timeData === "11:00 am" ? "bg-primary hover:bg-primary" : ""}`}
              onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                setTimeData(e.currentTarget.innerText)
              }
            >
              11:00 am
            </Button>
            <Button
              variant="ghost"
              className={`cursor-pointer border px-10 py-10 ${timeData === "11:30 am" ? "bg-primary hover:bg-primary" : ""}`}
              onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                setTimeData(e.currentTarget.innerText)
              }
            >
              11:30 am
            </Button>
          </TabsContent>
          <TabsContent
            value="Afternoon"
            className="flex flex-col gap-5 sm:grid md:grid-cols-3 lg:grid-cols-4"
          >
            <Button
              variant="ghost"
              className={`cursor-pointer border px-10 py-10 ${timeData === "12:00 pm" ? "bg-primary hover:bg-primary" : ""}`}
              onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                setTimeData(e.currentTarget.innerText)
              }
            >
              12:00 pm
            </Button>
            <Button
              variant="ghost"
              className={`cursor-pointer border px-10 py-10 ${timeData === "12:30 am" ? "bg-primary hover:bg-primary" : ""}`}
              onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                setTimeData(e.currentTarget.innerText)
              }
            >
              12:30 am
            </Button>
            <Button
              variant="ghost"
              className={`cursor-pointer border px-10 py-10 ${timeData === "1:00 am" ? "bg-primary hover:bg-primary" : ""}`}
              onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                setTimeData(e.currentTarget.innerText)
              }
            >
              1:00 am
            </Button>
            <Button
              variant="ghost"
              className={`cursor-pointer border px-10 py-10 ${timeData === "1:30 am" ? "bg-primary hover:bg-primary" : ""}`}
              onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                setTimeData(e.currentTarget.innerText)
              }
            >
              1:30 am
            </Button>

            <Button
              variant="ghost"
              className={`cursor-pointer border px-10 py-10 ${timeData === "2:00 pm" ? "bg-primary hover:bg-primary" : ""}`}
              onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                setTimeData(e.currentTarget.innerText)
              }
            >
              2:00 pm
            </Button>
            <Button
              variant="ghost"
              className={`cursor-pointer border px-10 py-10 ${timeData === "2:30 am" ? "bg-primary hover:bg-primary" : ""}`}
              onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                setTimeData(e.currentTarget.innerText)
              }
            >
              2:30 am
            </Button>
            <Button
              variant="ghost"
              className={`cursor-pointer border px-10 py-10 ${timeData === "3:00 am" ? "bg-primary hover:bg-primary" : ""}`}
              onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                setTimeData(e.currentTarget.innerText)
              }
            >
              3:00 am
            </Button>
            <Button
              variant="ghost"
              className={`cursor-pointer border px-10 py-10 ${timeData === "3:30 am" ? "bg-primary hover:bg-primary" : ""}`}
              onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                setTimeData(e.currentTarget.innerText)
              }
            >
              3:30 am
            </Button>
          </TabsContent>
          <TabsContent
            value="Evening"
            className="flex flex-col gap-5 sm:grid md:grid-cols-3 lg:grid-cols-4"
          >
            <Button
              variant="ghost"
              className={`cursor-pointer border px-10 py-10 ${timeData === "4:00 pm" ? "bg-primary hover:bg-primary" : ""}`}
              onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                setTimeData(e.currentTarget.innerText)
              }
            >
              4:00 pm
            </Button>
            <Button
              variant="ghost"
              className={`cursor-pointer border px-10 py-10 ${timeData === "4:30 pm" ? "bg-primary hover:bg-primary" : ""}`}
              onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                setTimeData(e.currentTarget.innerText)
              }
            >
              4:30 pm
            </Button>
            <Button
              variant="ghost"
              className={`cursor-pointer border px-10 py-10 ${timeData === "5:00 pm" ? "bg-primary hover:bg-primary" : ""}`}
              onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                setTimeData(e.currentTarget.innerText)
              }
            >
              5:00 pm
            </Button>
            <Button
              variant="ghost"
              className={`cursor-pointer border px-10 py-10 ${timeData === "5:30 pm" ? "bg-primary hover:bg-primary" : ""}`}
              onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                setTimeData(e.currentTarget.innerText)
              }
            >
              5:30 pm
            </Button>
            <Button
              variant="ghost"
              className={`cursor-pointer border px-10 py-10 ${timeData === "6:00 pm" ? "bg-primary hover:bg-primary" : ""}`}
              onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                setTimeData(e.currentTarget.innerText)
              }
            >
              6:00 pm
            </Button>
            <Button
              variant="ghost"
              className={`cursor-pointer border px-10 py-10 ${timeData === "6:30 pm" ? "bg-primary hover:bg-primary" : ""}`}
              onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                setTimeData(e.currentTarget.innerText)
              }
            >
              6:30 pm
            </Button>
            <Button
              variant="ghost"
              className={`cursor-pointer border px-10 py-10 ${timeData === "7:00 pm" ? "bg-primary hover:bg-primary" : ""}`}
              onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                setTimeData(e.currentTarget.innerText)
              }
            >
              7:00 pm
            </Button>
          </TabsContent>
        </Tabs>

        <LoadingButton
          loading={ispending}
          type="button"
          className="w-full cursor-pointer"
          onClick={onSubmit}
        >
          Confirm To Call
        </LoadingButton>
      </div>
    </div>
  );
}
