import SearchField from "@/components/SearchField";
import { cn } from "@/lib/utils";
import {
  Facebook,
  Instagram,
  Mail,
  PhoneCall,
  Twitter,
  Youtube,
} from "lucide-react";
import React from "react";

interface TobBarProps {
  className?: string;
}
export default function TobBar({ className }: TobBarProps) {
  return (
    <header className={cn("bg-secondary px-13 py-2 flex  ", className)}>
    
        <SearchField className="mx-auto lg:mx-0"/>

      <div className="lg:flex gap-5 sm:ms-auto hidden">
        <div className=" flex items-center gap-2">
          <PhoneCall className="mr-1 size-4" />
          <span>+91 9115 9115 00</span>
        </div>
        <div className=" flex items-center gap-2">
          <Mail className="mr-1 size-4" />
          <span>rajeevclinic@gmail.com</span>
        </div>
        <div className=" flex items-center">
          <Youtube className="size-4 mr-4" />{" "}
          <Twitter className="size-4 mr-4" />{" "}
          <Instagram className="size-4 mr-4" />{" "}
          <Facebook className="size-4" />{" "}
        </div>
      </div>
    </header>
  );
}
