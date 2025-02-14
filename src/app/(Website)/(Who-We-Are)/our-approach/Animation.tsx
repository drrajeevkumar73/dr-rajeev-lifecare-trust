import ping from "@/assets/approach-public.jpg";
import Image from "next/image";
import imh from "@/assets/child-approach.png";

export default function Animation() {
  return (
    <div className=" flex flex-wrap justify-between gap-6 md:flex-nowrap">
      <div className="w-full space-y-5 md:w-1/2">
        <h3 className="md:text-3xl text-2xl font-bold">
        Our approach is modeled around bringing change
          <em className="text-primary"> at all levels</em>{" "}
        </h3>
        <p className="text-muted-foreground">
          With your support, we address children’s critical needs by working
          with parents, teachers, Anganwadi workers, communities, district and
          state level governments as well as the children themselves.
        </p>
        <p className="text-muted-foreground">
          We focus on changing behaviours and practices at the grassroots level
          and influencing public policy at a systemic level – thereby creating
          an ecosystem where children are made the nation’s priority.
        </p>
      </div>
      <div className="relative flex w-full justify-center overflow-hidden md:w-1/2 md:justify-end">
        <div className="relative flex h-[300px] w-[300px] items-center justify-center rounded-full border-primary bg-secondary md:h-[426px] md:w-[426px]">
          <div className="duration-1 absolute left-0 top-0 h-[300px] w-[300px] animate-spin rounded-full border border-dashed border-primary md:h-[426px] md:w-[426px]">
            <div className="relative">
              <div className="absolute left-[80px] h-[20px] w-[20px] animate-bounce rounded-full bg-primary md:left-[135px]"></div>
            </div>
          </div>
          <div className="absolute left-[56px] top-0 flex-none rounded-full border-[4px] border-primary bg-white p-3">
            <Image src={ping} alt="" width={40} />
          </div>
          <div className="absolute right-[56px] top-0 flex-none rounded-full border-[4px] border-primary bg-white p-3">
            <Image src={ping} alt="" width={40} className="flex-none" />
          </div>
          <div className="absolute bottom-0 left-[56px] flex-none rounded-full border-[4px] border-primary bg-white p-3">
            <Image src={ping} alt="" width={40} />
          </div>
          <div className="absolute bottom-0 right-[56px] flex-none rounded-full border-[4px] border-primary bg-white p-3">
            <Image src={ping} alt="" width={40} />
          </div>

          <Image src={imh} alt="" width={146} />
        </div>
      </div>
    </div>
  );
}
