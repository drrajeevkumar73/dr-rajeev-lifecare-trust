import { Instagram } from "lucide-react";
import React from "react";

export default function ContactLogo() {
  return (
    <div className=" p-3 rounded-t-md  fixed bottom-0 right-0 gap-5 bg-primary flex items-center z-10">
      <Instagram className="size-8 cursor-pointer " />

      <Instagram className="size-8 cursor-pointer" />
      <Instagram className="size-8 cursor-pointer" />
      <Instagram className="size-8 cursor-pointer" />
    </div>
  );
}
