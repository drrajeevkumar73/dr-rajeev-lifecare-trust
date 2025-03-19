/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import logo from "@/assets/logo.svg";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronDown, Heart, MenuIcon, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useTransition } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  loginSchema,
  LoginValues,
  signupSchema,
  SignupValues,
} from "@/lib/vallidation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import LoadingButton from "@/components/LodingButton";

import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { signup } from "./(signup)/actions";
import { login } from "./(login)/actions";
import BookAppoinmet from "@/components/BookAppoinmet";

interface NavBarProps {
  className?: string;
}

function NoSessionNavBar({ className }: NavBarProps) {
  const [dialogPoup, setDialogPoup] = useState(true);
  const [ispending, startTransation] = useTransition();
  const form = useForm<SignupValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      displayname: "",
      passwordHash: "",
      phone: "",
      email: "",
    },
  });

  async function onSubmit(value: SignupValues) {
    startTransation(async () => {
      const { error } = await signup(value);

      if (error) toast.error(error);
    });
  }

  const form2 = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      emailId: "",
      passwordGive: "",
    },
  });

  async function onSubmit2(value: LoginValues) {
    startTransation(async () => {
      const { error } = await login(value);

      if (error) toast.error(error);
    });
  }
  const [poup, setpoup] = useState(false);

  return (
    <nav className={cn(`px-3 shadow-md`, className)}>
      <div className="relative mx-auto flex max-w-7xl items-center">
        <div className="bg-primary absolute top-0 flex h-[108px] w-[128px] items-center justify-center rounded-b-md">
          <Image src={logo} alt="logo" width={100} height={100} />
        </div>
        <ul className="text-muted-foreground flex w-full items-center justify-center gap-4 text-[14px]">
          <Link href={"/"}>
            <li className="cursor-pointer"> Home </li>
          </Link>
          <li className="group relative cursor-pointer py-6">
            <span className="flex items-center">
              About Us
              <ChevronDown className="text-primary ml-1 size-4" />{" "}
            </span>{" "}
            <ul className="bg-card absolute top-[69px] left-1/2 hidden -translate-x-1/2 overflow-hidden rounded-b-sm shadow-lg inset-shadow-2xs group-hover:inline">
              <Link href={"/our-foundation"}>
                <li>
                  <Button
                    variant="ghost"
                    className="flex w-full cursor-pointer justify-start rounded-none"
                  >
                    Our Foundation
                  </Button>
                </li>
              </Link>
              <Link href={"/our-team"}>
                {" "}
                <li>
                  <Button
                    variant="ghost"
                    className="flex w-full cursor-pointer justify-start rounded-none"
                  >
                    Our Team
                  </Button>
                </li>
              </Link>

              <Link href={"/trusts-goals-initiatives"}>
                {" "}
                <li>
                  <Button
                    variant="ghost"
                    className="flex w-full cursor-pointer justify-start rounded-none"
                  >
                    Trust&lsquo;s Goals & Initiatives
                  </Button>
                </li>
              </Link>
              <Link href={"/our-work-achievements"}>
                {" "}
                <li>
                  <Button
                    variant="ghost"
                    className="flex w-full cursor-pointer justify-start rounded-none"
                  >
                    Our Work & Achievements
                  </Button>
                </li>
              </Link>
            </ul>
          </li>
          <li className="group relative cursor-pointer py-6">
            <span className="flex items-center">
              Services
              <ChevronDown className="text-primary ml-1 size-4" />{" "}
            </span>{" "}
            <ul className="bg-card absolute top-[69px] left-1/2 hidden -translate-x-1/2 overflow-hidden rounded-b-sm shadow-lg inset-shadow-2xs group-hover:inline">
              <Link href={"/homeopathy-ayurveda-help"}>
                <li>
                  <Button
                    variant="ghost"
                    className="flex w-full cursor-pointer justify-start rounded-none"
                  >
                    Homeopathy Ayurveda Help
                  </Button>
                </li>
              </Link>
              <Link href={"/bpl-patients-free-treatment"}>
                <li>
                  <Button
                    variant="ghost"
                    className="flex w-full cursor-pointer justify-start rounded-none"
                  >
                    BPL Patients Free Treatment
                  </Button>
                </li>
              </Link>
              <Link href={"/book-a-free-consultation"}>
                {" "}
                <li>
                  <Button
                    variant="ghost"
                    className="flex w-full cursor-pointer justify-start rounded-none"
                  >
                    Book A Free Consultation
                  </Button>
                </li>
              </Link>
              <Link href={"/health-awareness-campaigns"}>
                {" "}
                <li>
                  <Button
                    variant="ghost"
                    className="flex w-full cursor-pointer justify-start rounded-none"
                  >
                    Health Awareness Campaigns
                  </Button>
                </li>
              </Link>
              <Link href={"/treatment-results-reviews"}>
                {" "}
                <li>
                  <Button
                    variant="ghost"
                    className="flex w-full cursor-pointer justify-start rounded-none"
                  >
                    Treatment Results & Reviews
                  </Button>
                </li>
              </Link>
            </ul>
          </li>
          <li className="group relative cursor-pointer py-6">
            <Link href={"/contact"}>Contact Us </Link>
          </li>
        </ul>

        <Button className="btnshow duration-.5 mr-4 cursor-pointer font-bold sm:ms-auto" asChild>
          <Link href={'/donate'}>
          <Heart className="mr-4 size-4" fill="red" />
          Donate Now
          </Link>
        </Button>
        <Button
          className="btnshow duration-.5 mr-4 cursor-pointer font-bold  sm:opacity-100 sm:visible opacity-0 invisible"
          onClick={() => setpoup(true)}
        >
          <Heart className="mr-4 size-4" fill="red" />
          Book Appointment
        </Button>
        <BookAppoinmet isOpen={poup} onClose={() => setpoup(false)} />
        {dialogPoup ? (
          <Dialog>
            <DialogTrigger className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground hover:bg-primary/90 btnshow duration-.5 mr-4 inline-flex h-9 shrink-0 cursor-pointer items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-bold whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 has-[>svg]:px-3 sm:ms-auto [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4">
              {" "}
              Login / Signup
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>🔒 Create Your Account Securely</DialogTitle>
                <DialogDescription>
                  Register now to access free treatment for BPL patients,
                  healthcare services, and expert consultations. Please fill in
                  the required details below and become a part of our mission.
                  Your data is completely secure with us.
                </DialogDescription>
              </DialogHeader>

              <Form {...form} key="signup-form">
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-3"
                >
                  <FormField
                    control={form.control}
                    name="displayname"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Full Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="Email" {...field} type="email" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="phone Number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="passwordHash"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Password"
                            type="password"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <LoadingButton
                    loading={ispending}
                    type="submit"
                    className="w-full cursor-pointer"
                  >
                    Submit
                  </LoadingButton>
                </form>
              </Form>
              <p
                className="block cursor-pointer text-center hover:underline"
                onClick={() => setDialogPoup(false)}
              >
                Already have an account? Log in
              </p>
            </DialogContent>
          </Dialog>
        ) : (
          <Dialog>
            <DialogTrigger className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground hover:bg-primary/90 btnshow duration-.5 mr-4 inline-flex h-9 shrink-0 cursor-pointer items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-bold whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 has-[>svg]:px-3 sm:ms-auto [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4">
              {" "}
              Login / Signup
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>🔑 Log in to Your Account</DialogTitle>
                <DialogDescription>
                  Log in to access free healthcare services, doctor
                  consultations, and medical camp updates. Stay informed and
                  take advantage of our health programs.
                </DialogDescription>
              </DialogHeader>

              <Form {...form2} key="login-form">
                <form
                  onSubmit={form2.handleSubmit(onSubmit2)}
                  className="space-y-3"
                >
                  <FormField
                    control={form2.control}
                    name="emailId"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="Email" {...field} type="email" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form2.control}
                    name="passwordGive"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Password"
                            type="password"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <LoadingButton
                    loading={ispending}
                    type="submit"
                    className="w-full cursor-pointer"
                  >
                    Submit
                  </LoadingButton>
                </form>
              </Form>
              <p
                className="block cursor-pointer text-center hover:underline"
                onClick={() => setDialogPoup(true)}
              >
                Create a new account
              </p>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </nav>
  );
}

export default NoSessionNavBar;

export function NoNavBarPhoneMenuBar({ className }: NavBarProps) {
  const [hmbegarMenu, setHmbegarMenu] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [poup, setpoup] = useState(false);
  const toggleDropdown = (menu: any) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const [dialogPoup, setDialogPoup] = useState(true);
  const [ispending, startTransation] = useTransition();
  const form = useForm<SignupValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      displayname: "",
      passwordHash: "",
      phone: "",
      email: "",
    },
  });

  async function onSubmit(value: SignupValues) {
    startTransation(async () => {
      const { error } = await signup(value);

      if (error) toast.error(error);
    });
  }

  const form2 = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      emailId: "",
      passwordGive: "",
    },
  });

  async function onSubmit2(value: LoginValues) {
    startTransation(async () => {
      const { error } = await login(value);

      if (error) toast.error(error);
    });
  }

  return (
    <>
      {/* Overlay (Background Blur) */}
      <div
        onClick={() => setHmbegarMenu(false)}
        className={`fixed top-0 left-0 z-30 h-screen w-full bg-black/80 transition-opacity ${
          hmbegarMenu ? "visible opacity-100" : "invisible opacity-0"
        }`}
      ></div>

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 z-40 min-h-screen w-[280px] overflow-y-auto bg-white p-5 shadow-lg transition-transform duration-300 ${
          hmbegarMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end">
          <Button
            className="rounded-full"
            variant="ghost"
            onClick={() => setHmbegarMenu(false)}
          >
            <X className="size-5" />
          </Button>
        </div>

        {/* Navigation Menu */}
        <ul className="space-y-3">
          <li className="font-bold">
            <Link href={"/"} className="block w-full text-left">
              Home
            </Link>
          </li>

          {/* About Us Dropdown */}
          <li className="font-bold">
            <div
              className="flex w-full cursor-pointer items-center justify-between text-left"
              onClick={() => toggleDropdown("about")}
            >
              About Us{" "}
              <ChevronDown
                className={`transition-transform ${openDropdown === "about" ? "rotate-180" : ""}`}
              />
            </div>
            <ul
              className={`mt-2 space-y-1 overflow-hidden transition-all duration-300 ${
                openDropdown === "about"
                  ? "max-h-[300px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              {[
                { name: "Our Foundation", link: "/our-foundation" },
                { name: "Our Team", link: "/our-team" },
                {
                  name: "Trust's Goals & Initiatives",
                  link: "/trusts-goals-initiatives",
                },
                {
                  name: "Our Work & Achievements",
                  link: "/our-work-achievements",
                },
              ].map((item, index) => (
                <li
                  key={index}
                  className="ml-4 border-l-2 border-gray-300 pl-2"
                  onClick={() => setHmbegarMenu(false)}
                >
                  <Link
                    href={item.link}
                    className="block w-full text-left text-gray-700 transition hover:text-blue-600"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          {/* Services Dropdown */}
          <li className="font-bold">
            <div
              className="flex w-full cursor-pointer items-center justify-between text-left"
              onClick={() => toggleDropdown("services")}
            >
              Services{" "}
              <ChevronDown
                className={`transition-transform ${openDropdown === "services" ? "rotate-180" : ""}`}
              />
            </div>
            <ul
              className={`mt-2 space-y-1 overflow-hidden transition-all duration-300 ${
                openDropdown === "services"
                  ? "max-h-[300px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              {[
                {
                  name: "Homeopathy Ayurveda Help",
                  link: "/homeopathy-ayurveda-help",
                },
                {
                  name: "BPL Patients Free Treatment",
                  link: "/bpl-patients-free-treatment",
                },
                {
                  name: "Book A Free Consultation",
                  link: "/book-a-free-consultation",
                },
                {
                  name: "Health Awareness Campaigns",
                  link: "/health-awareness-campaigns",
                },
                {
                  name: "Treatment Results & Reviews",
                  link: "/treatment-results-reviews",
                },
              ].map((item, index) => (
                <li
                  key={index}
                  className="ml-4 border-l-2 border-gray-300 pl-2"
                  onClick={() => setHmbegarMenu(false)}
                >
                  <Link
                    href={item.link}
                    className="block w-full text-left text-gray-700 transition hover:text-blue-600"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          <li className="font-bold">
            <Link href={"/contact"} className="block w-full text-left">
              Contact Us
            </Link>
          </li>
        </ul>

       
        <BookAppoinmet isOpen={poup} onClose={() => setpoup(false)} />
        <div className="mt-9 space-y-6">
        <Button
          className="btnshow w-full duration-.5 mr-4 cursor-pointer font-bold"
          onClick={() => setpoup(true)}
        >
          <Heart className="mr-4 size-4" fill="red" />
          Book Appointment
        </Button>
          {dialogPoup ? (
            <Dialog>
              <DialogTrigger className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground hover:bg-primary/90 btnshow duration-.5 mr-4 inline-flex h-9 w-full shrink-0 cursor-pointer items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-bold whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 has-[>svg]:px-3 sm:ms-auto [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4">
                {" "}
                Login / Signup
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>🔒 Create Your Account Securely</DialogTitle>
                  <DialogDescription>
                    Register now to access free treatment for BPL patients,
                    healthcare services, and expert consultations. Please fill
                    in the required details below and become a part of our
                    mission. Your data is completely secure with us.
                  </DialogDescription>
                </DialogHeader>

                <Form {...form} key="signup-form">
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-3"
                  >
                    <FormField
                      control={form.control}
                      name="displayname"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Full Name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Email"
                              {...field}
                              type="email"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="phone Number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="passwordHash"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Password"
                              type="password"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <LoadingButton
                      loading={ispending}
                      type="submit"
                      className="w-full cursor-pointer"
                    >
                      Submit
                    </LoadingButton>
                  </form>
                </Form>
                <p
                  className="block cursor-pointer text-center hover:underline"
                  onClick={() => setDialogPoup(false)}
                >
                  Already have an account? Log in
                </p>
              </DialogContent>
            </Dialog>
          ) : (
            <Dialog>
              <DialogTrigger className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground hover:bg-primary/90 btnshow duration-.5 mr-4 inline-flex h-9 w-full shrink-0 cursor-pointer items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-bold whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 has-[>svg]:px-3 sm:ms-auto [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4">
                {" "}
                Login / Signup
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>🔑 Log in to Your Account</DialogTitle>
                  <DialogDescription>
                    Log in to access free healthcare services, doctor
                    consultations, and medical camp updates. Stay informed and
                    take advantage of our health programs.
                  </DialogDescription>
                </DialogHeader>

                <Form {...form2} key="login-form">
                  <form
                    onSubmit={form2.handleSubmit(onSubmit2)}
                    className="space-y-3"
                  >
                    <FormField
                      control={form2.control}
                      name="emailId"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Email"
                              {...field}
                              type="email"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form2.control}
                      name="passwordGive"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Password"
                              type="password"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <LoadingButton
                      loading={ispending}
                      type="submit"
                      className="w-full cursor-pointer"
                    >
                      Submit
                    </LoadingButton>
                  </form>
                </Form>
                <p
                  className="block cursor-pointer text-center hover:underline"
                  onClick={() => setDialogPoup(true)}
                >
                  Create a new account
                </p>
              </DialogContent>
            </Dialog>
          )}
        </div>
      </div>

      {/* Top Navbar */}
      <div
        className={`relative flex w-full items-center justify-between bg-white p-3 shadow-md ${className}`}
      >
        <MenuIcon
          onClick={() => setHmbegarMenu(true)}
          className="cursor-pointer"
        />
        <div className="bg-primary absolute top-0 left-[53px] flex h-[100px] w-[110px] items-center justify-center rounded-b-md">
          <Image src={logo} alt="logo" width={100} height={100} />
        </div>
        <Button className="btnshow font-bold sm:ms-auto">
          <Heart className="mr-4 size-4" fill="red" />
          Donate Now
        </Button>
      </div>
    </>
  );
}
