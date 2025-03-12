import HeadingSec from "@/components/HeadingSec";
import streak from "@/assets/streak.gif";
import Image from "next/image";
import CallseduleForm from "./CallseduleForm";


export default function Page() {
  return (
    <main className="space-y-24 py-15">
      <HeadingSec className="px-3 [text-shadow:_0_2px_4px_#fff633]">
        {" "}
        Schedule your{" "}
        <em className="text-primary relative">
          call
          <Image
            src={streak}
            alt="streak"
            className="absolute -top-10 right-0"
          />
        </em>
      </HeadingSec>

<CallseduleForm/>
      
    </main>
  );
}
