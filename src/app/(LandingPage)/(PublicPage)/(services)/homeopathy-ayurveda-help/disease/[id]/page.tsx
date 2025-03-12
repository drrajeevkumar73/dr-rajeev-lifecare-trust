"use client";

import { useParams } from "next/navigation";
import { DesisesArray } from "../../../Allarray";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Page() {
  const { id } = useParams();
  const filterdata = DesisesArray.filter((v) => v.id === Number(id));

  return (
    <div className="mx-auto max-w-7xl space-y-10 px-3 py-20">
      {filterdata.map((deasesValue) => (
        <div key={deasesValue.id} className="space-y-6">
          {/* ✅ Buttons in a Row */}
          <div className="flex flex-col gap-5 sm:grid md:grid-cols-2">
            {deasesValue.slug.map((slugValue) => (
              <Button asChild key={slugValue.id} className="w-full">
                <Link
                  href={`/homeopathy-ayurveda-help/disease/${slugValue.id}/diseasedec/${slugValue.id}`}
                >
                  {slugValue.name}
                </Link>
              </Button>
            ))}
          </div>

          {/* ✅ `decx` Content Below */}
          {deasesValue.slug.map((slugValue) => (
            <div key={slugValue.id} className="space-y-6">
              {slugValue.decx && (
                <div
                  dangerouslySetInnerHTML={{ __html: slugValue.decx }}
                  className="space-y-6"
                />
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
