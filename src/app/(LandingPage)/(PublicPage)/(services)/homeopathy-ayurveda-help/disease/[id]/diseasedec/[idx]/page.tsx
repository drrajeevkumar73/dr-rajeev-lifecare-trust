/* eslint-disable @next/next/no-img-element */
"use client";

import { DesisesArray } from "@/app/(LandingPage)/(PublicPage)/(services)/Allarray";
import { useParams } from "next/navigation";

export default function Page() {
  const { idx } = useParams();
  const id = Number(idx);

  // Step 1: सही `disease` खोजें
  const disease = DesisesArray.find((d) =>
    d.slug.some((slug) => slug.desesSlug.some((deses) => deses.id === id)),
  );

  // Step 2: `disease` के अंदर सही `slugItem` खोजें
  const slugItem = disease?.slug.find((slug) =>
    slug.desesSlug.some((deses) => deses.id === id),
  );

  // Step 3: `slugItem` के अंदर सही `desesSlug` चुनें
  const desesItem = slugItem?.desesSlug.find((deses) => deses.id === id);

  return (
    <div className="mx-auto max-w-7xl py-15">
      {desesItem ? (
        <div className="flex flex-col gap-5 md:flex-row py-4">
          <img
            src={desesItem.img}
            alt="Disease Image"
            className="w-fit h-fit"
          />
          <div
            className="mt-4 space-y-6 rounded-lg border bg-white px-10 shadow-md"
            dangerouslySetInnerHTML={{ __html: desesItem.htmlTagg }}
          />
        </div>
      ) : (
        <p className="text-center text-red-500">No data found for this ID.</p>
      )}
    </div>
  );
}
