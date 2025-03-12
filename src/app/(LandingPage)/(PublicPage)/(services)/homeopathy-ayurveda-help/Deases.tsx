/* eslint-disable @next/next/no-img-element */

import { Button } from "@/components/ui/button";
import Link from "next/link";
interface DiseaseProps {
  sendDiese: {
    id: number;
    dname: string;
    dec: string;
    img: string;
    slug: {
      id: number;
      name: string;
      decx?:string;
      desesSlug: {
        id: number;
        img: string;
        htmlTagg: string;
      }[];
    }[];
  };
}
export default function Deases({ sendDiese }: DiseaseProps) {
  return (
    <div className="border">
     <div className="overflow-hidden ">
     <img src={sendDiese.img} alt="Cardiovascular Disease" className="hover:scale-105 duration-300"/>
     </div>

      <div className="space-y-6 p-3">
        <h5 className="font-bold">Cardiovascular /Heart Disease</h5>
        <p className="text-muted-foreground line-clamp-2">{sendDiese.dec}</p>
        {/* ✅ Corrected Button Component */}
        <Button asChild>
          <Link href={`homeopathy-ayurveda-help/disease/${sendDiese.id}`}>
            Read More
          </Link>
        </Button>
      </div>
    </div>
  );
}
