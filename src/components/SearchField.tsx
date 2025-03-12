"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { SearchIcon } from "lucide-react";
import { Input } from "./ui/input";

interface SerchFieldProps {
  className: string;
}
export default function SerchField({ className }: SerchFieldProps) {
  const router = useRouter();
  const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const q = (form.q as HTMLInputElement).value.trim();
    if (!q) return;
    router.push(`/homeopathy-ayurveda-help?q=${encodeURIComponent(q)}`);
  };
  return (
    //  method="GET" action="/search" esko es liye lgaya gya hai kyu ki jb hm javascript disable hota hai galat url pe bejta hai to usko rokne ke liye hai ye
    <form
      onSubmit={handlerSubmit}
      method="GET"
      action="/homeopathy-ayurveda-help"
      className={className}
    >
      <div className="relative">
        <Input name="q" placeholder="Search diseases name " className="pe-10" />
        <SearchIcon className="text-muted-foreground absolute top-1/2 right-3 -translate-y-1/2 transform" />
      </div>
    </form>
  );
}
