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
    <header className={cn("bg-secondary flex px-13 py-2", className)}>
      <SearchField className="mx-auto lg:mx-0" />

      <div className="hidden gap-5 sm:ms-auto lg:flex">
        <div className="flex items-center gap-2">
          <PhoneCall className="mr-1 size-4" />
          <span>
            <a href="tel:+91 9234400006">+91 9234400006</a>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Mail className="mr-1 size-4" />
          <span>
            <a href="mailto:abhihomoeo@gmail.com">abhihomoeo@gmail.com</a>
          </span>
        </div>
        <div className="flex items-center">
          <a
            href="https://www.youtube.com/c/DrRajeevsHomeopathyClinic"
            target="_blank"
          >
            <Youtube className="mr-4 size-4" />{" "}
          </a>
          <a href="https://x.com/abhihomoeo" target="_blank">
            <Twitter className="mr-4 size-4" />{" "}
          </a>
          <a href="https://www.instagram.com/dr.rajeevclinic/" target="_blank">
            <Instagram className="mr-4 size-4" />{" "}
          </a>
          <a
            href="https://www.facebook.com/drrajeevhomeopathy/"
            target="_blank"
          >
            <Facebook className="size-4" />{" "}
          </a>
        </div>
      </div>
    </header>
  );
}
