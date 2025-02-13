"use client";
import { Input } from "@/components/ui/input";
import {
  ChevronDown,
  Facebook,
  Heart,
  Instagram,
  Mail,
  MenuIcon,
  PhoneCall,
  Twitter,
  X,
  Youtube,
} from "lucide-react";
import logo from "@/assets/mnCVBV.svg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import "./styles.css";
import { useState } from "react";

interface classNameProps {
  className?: string;
}
export function Menubar({ className }: classNameProps) {
  return (
    <div className={className}>
      <div className="flex justify-center bg-secondary-foreground px-10 py-2">
        <div className="flex flex-wrap items-center justify-center gap-7 text-[14px] text-white sm:ms-auto">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center">
              <PhoneCall className="mr-4 size-4" />{" "}
              <span> +91 9115 9115 00</span>
            </div>
            <div className="flex items-center">
              <Mail className="mr-4 size-4" />{" "}
              <span> rajeevclinic@gmail.com</span>
            </div>
          </div>
          <form action="">
            <Input className="!h-[30px] bg-gray-600 !py-0 text-black duration-500 focus-within:scale-x-110 focus-within:bg-gray-200" />
          </form>
          <div className="flex gap-4">
            <a
              href="//http://youtube.com/c/CRYChildRightsandYou"
              target="_blank"
            >
              {" "}
              <Youtube className="size-4" />{" "}
            </a>
            <a
              href="//http://youtube.com/c/CRYChildRightsandYou"
              target="_blank"
            >
              {" "}
              <Twitter className="size-4" />{" "}
            </a>
            <a
              href="//http://youtube.com/c/CRYChildRightsandYou"
              target="_blank"
            >
              {" "}
              <Instagram className="size-4" />{" "}
            </a>
            <a
              href="//http://youtube.com/c/CRYChildRightsandYou"
              target="_blank"
            >
              {" "}
              <Facebook className="size-4" />{" "}
            </a>
          </div>
        </div>
      </div>

      <div className="px-3 shadow-md">
        <div className="relative mx-auto flex max-w-7xl items-center">
          <div className="absolute top-0 flex h-[108px] w-[128px] items-center justify-center rounded-b-md bg-primary">
            <Image src={logo} alt="logo" width={100} height={100} />
          </div>
          <ul className="flex w-full items-center justify-center gap-4 text-[14px] text-muted-foreground">
            <li className="cursor-pointer"> Home </li>
            <li className="group relative cursor-pointer py-6">
              <span className="flex items-center">
                Who We Are?
                <ChevronDown className="ml-1 size-4 text-primary" />{" "}
              </span>{" "}
              <ul className="inset-shadow-2xs absolute left-1/2 top-[69px] hidden -translate-x-1/2 overflow-hidden rounded-b-sm bg-card shadow-lg group-hover:inline">
                <li>
                  <Button
                    variant="ghost"
                    className="flex w-full justify-start rounded-none"
                  >
                    About Us
                  </Button>
                </li>
                <li>
                  <Button
                    variant="ghost"
                    className="flex w-full justify-start rounded-none"
                  >
                    Why Children?
                  </Button>
                </li>
                <li>
                  <Button
                    variant="ghost"
                    className="flex w-full justify-start rounded-none"
                  >
                    Our Impact
                  </Button>
                </li>
                <li>
                  <Button
                    variant="ghost"
                    className="flex w-full justify-start rounded-none"
                  >
                    Our Approach
                  </Button>
                </li>
              </ul>
            </li>
            <li className="group relative cursor-pointer py-6">
              <span className="flex items-center">
                What We Do?
                <ChevronDown className="ml-1 size-4 text-primary" />{" "}
              </span>{" "}
              <ul className="inset-shadow-2xs absolute left-1/2 top-[69px] hidden -translate-x-1/2 overflow-hidden rounded-b-sm bg-card shadow-lg group-hover:inline">
                <li>
                  <Button
                    variant="ghost"
                    className="flex w-full justify-start rounded-none"
                  >
                    Child Education
                  </Button>
                </li>
                <li>
                  <Button
                    variant="ghost"
                    className="flex w-full justify-start rounded-none"
                  >
                    Child Health & Nutrition
                  </Button>
                </li>
                <li>
                  <Button
                    variant="ghost"
                    className="flex w-full justify-start rounded-none"
                  >
                    Stop Child Labour
                  </Button>
                </li>
                <li>
                  <Button
                    variant="ghost"
                    className="flex w-full justify-start rounded-none"
                  >
                    Support Girl Child Education
                  </Button>
                </li>
                <li>
                  <Button
                    variant="ghost"
                    className="flex w-full justify-start rounded-none"
                  >
                    Stop Child Marriage
                  </Button>
                </li>
                <li>
                  <Button
                    variant="ghost"
                    className="flex w-full justify-start rounded-none"
                  >
                    Prevent Child Trafficking
                  </Button>
                </li>
              </ul>
            </li>
            <li className="group relative cursor-pointer py-6">
              <span className="flex items-center">
                Get Involved
                <ChevronDown className="ml-1 size-4 text-primary" />{" "}
              </span>{" "}
              <ul className="inset-shadow-2xs absolute left-1/2 top-[69px] hidden -translate-x-1/2 overflow-hidden rounded-b-sm bg-card shadow-lg group-hover:inline">
                <li>
                  <Button
                    variant="ghost"
                    className="flex w-full justify-start rounded-none"
                  >
                    Volunteering & Internships
                  </Button>
                </li>
                <li>
                  <Button
                    variant="ghost"
                    className="flex w-full justify-start rounded-none"
                  >
                    Corporate Partners
                  </Button>
                </li>
                <li>
                  <Button
                    variant="ghost"
                    className="flex w-full justify-start rounded-none"
                  >
                    Careers
                  </Button>
                </li>
              </ul>
            </li>
            <li className="group relative cursor-pointer py-6">
              <span className="flex items-center">
                Resources
                <ChevronDown className="ml-1 size-4 text-primary" />{" "}
              </span>{" "}
              <ul className="inset-shadow-2xs absolute left-1/2 top-[69px] hidden -translate-x-1/2 overflow-hidden rounded-b-sm bg-card shadow-lg group-hover:inline">
                <li>
                  <Button
                    variant="ghost"
                    className="flex w-full justify-start rounded-none"
                  >
                    Blog
                  </Button>
                </li>
                <li>
                  <Button
                    variant="ghost"
                    className="flex w-full justify-start rounded-none"
                  >
                    Financials
                  </Button>
                </li>
                <li>
                  <Button
                    variant="ghost"
                    className="flex w-full justify-start rounded-none"
                  >
                    CRY Child Safeguarding Policy
                  </Button>
                </li>
              </ul>
            </li>
          </ul>

          <Button className="btnshow font-bold duration-.5 sm:ms-auto">
            <Heart className="mr-4 size-4" fill="red" />
            Donate Now
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Menubar;

export function PhoneMenuBar({ className }: classNameProps) {
  const [hmbegarMenu, setHmbegarMenu] = useState(false);
  return (
    <>
      <div
        onClick={() => setHmbegarMenu(false)}
        className={`fixed left-0 top-0 z-30 h-screen w-full bg-black/80 animate-in ${hmbegarMenu ? "visible opacity-100" : "invisible opacity-0"}`}
      ></div>

      <div
        className={`fixed left-0 top-0 z-40 min-h-screen w-[280px] overflow-y-auto bg-white p-5 duration-.5 ${hmbegarMenu ? "left-0" : "left-[-100%]"}`}
      >
        <div className="flex justify-end">
          <Button
            className="rounded-full"
            variant="ghost"
            onClick={() => setHmbegarMenu(false)}
          >
            <X className="size-4" />
          </Button>
        </div>
        <ul className="space-y-6">
          <li className="group font-bold">Home</li>
          <li className="group font-bold">
            <span className="flex items-center justify-between">
              Who We Are? <ChevronDown />
            </span>
            <ul className="inset-shadow-sm mt-2 hidden rounded-sm shadow group-hover:block">
              <li>
                <Button
                  variant="ghost"
                  className="flex w-full justify-start rounded-none"
                >
                  About Us
                </Button>
              </li>
              <li>
                <Button
                  variant="ghost"
                  className="flex w-full justify-start rounded-none"
                >
                  Why Children?
                </Button>
              </li>
              <li>
                <Button
                  variant="ghost"
                  className="flex w-full justify-start rounded-none"
                >
                  Our Impact
                </Button>
              </li>
              <li>
                <Button
                  variant="ghost"
                  className="flex w-full justify-start rounded-none"
                >
                  Our Approach
                </Button>
              </li>
            </ul>
          </li>
          <li className="group font-bold">
            <span className="flex items-center justify-between">
              What We Do? <ChevronDown />
            </span>
            <ul className="inset-shadow-sm mt-2 hidden rounded-sm shadow group-hover:block">
              <li>
                <Button
                  variant="ghost"
                  className="flex w-full justify-start rounded-none"
                >
                  Child Education
                </Button>
              </li>
              <li>
                <Button
                  variant="ghost"
                  className="flex w-full justify-start rounded-none"
                >
                  Child Health & Nutrition
                </Button>
              </li>
              <li>
                <Button
                  variant="ghost"
                  className="flex w-full justify-start rounded-none"
                >
                  Stop Child Labour
                </Button>
              </li>
              <li>
                <Button
                  variant="ghost"
                  className="flex w-full justify-start rounded-none"
                >
                  Support Girl Child Education
                </Button>
              </li>
              <li>
                <Button
                  variant="ghost"
                  className="flex w-full justify-start rounded-none"
                >
                  Stop Child Marriage
                </Button>
              </li>
              <li>
                <Button
                  variant="ghost"
                  className="flex w-full justify-start rounded-none"
                >
                  Prevent Child Trafficking
                </Button>
              </li>
            </ul>
          </li>
          <li className="group font-bold">
            <span className="flex items-center justify-between">
              Get Involved
              <ChevronDown />
            </span>
            <ul className="inset-shadow-sm mt-2 hidden rounded-sm shadow group-hover:block">
              <li>
                <Button
                  variant="ghost"
                  className="flex w-full justify-start rounded-none"
                >
                  Volunteering & Internships
                </Button>
              </li>
              <li>
                <Button
                  variant="ghost"
                  className="flex w-full justify-start rounded-none"
                >
                  Corporate Partners
                </Button>
              </li>
              <li>
                <Button
                  variant="ghost"
                  className="flex w-full justify-start rounded-none"
                >
                  Careers
                </Button>
              </li>
            </ul>
          </li>
          <li className="group font-bold">
            <span className="flex items-center justify-between">
              Resources
              <ChevronDown />
            </span>
            <ul className="inset-shadow-sm mt-2 hidden rounded-sm shadow group-hover:block">
              <li>
                <Button
                  variant="ghost"
                  className="flex w-full justify-start rounded-none"
                >
                  Blog
                </Button>
              </li>
              <li>
                <Button
                  variant="ghost"
                  className="flex w-full justify-start rounded-none"
                >
                  Financials
                </Button>
              </li>
              <li>
                <Button
                  variant="ghost"
                  className="flex w-full justify-start rounded-none"
                >
                  CRY Child Safeguarding Policy
                </Button>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div
        className={`relative flex w-full items-center justify-between p-3 ${className}`}
      >
        <MenuIcon onClick={() => setHmbegarMenu(true)} />
        <div className="absolute left-[53px] top-0 flex h-[100px] w-[110px] items-center justify-center rounded-b-md bg-primary">
          <Image src={logo} alt="logo" width={100} height={100} />
        </div>
        <Button className="btnshow font-bold duration-.5 sm:ms-auto">
          <Heart className="mr-4 size-4" fill="red" />
          Donate Now
        </Button>
      </div>
    </>
  );
}
