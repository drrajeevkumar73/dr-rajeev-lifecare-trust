"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface TabProps {
  TabSecItems: {
    id: string;
    tabMain: string;
    tabSub: {
      id: string;
      tabImage: string | StaticImageData;
    }[];
  }[];
}

function TabBar({ TabSecItems }: TabProps) {
  const [activeTab, setActiveTab] = useState(TabSecItems[0].tabMain); // Store active tab state

  return (
    <Tabs defaultValue={TabSecItems[0].tabMain} onValueChange={setActiveTab}>
      <div className="mx-auto w-fit">
        <TabsList>
          {TabSecItems.map((v) => (
            <TabsTrigger value={v.tabMain} key={v.id}>
              {v.tabMain}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>

      <AnimatePresence>
        {TabSecItems.map(
          (v) =>
            // Only render the active tab content
            v.tabMain === activeTab && (
              <motion.div
                key={v.id}
                initial={{ opacity: 0, y: 20, visibility: "hidden" }}
                animate={{ opacity: 1, y: 0, visibility: "visible" }}
                exit={{ opacity: 0, y: 20, visibility: "hidden" }}
                transition={{ duration: 0.5, visibility: "visible" }}
              >
                <TabsContent value={v.tabMain}>
                  <div className="flex flex-wrap justify-center gap-6">
                    {v.tabSub.map((value) => (
                      <div
                        key={value.id}
                        className="group relative h-fit cursor-pointer shadow-lg"
                      >
                        <Image
                          src={value.tabImage}
                          alt=""
                          width={256}
                          height={256}
                          className="h-[256px] object-cover"
                        />

                        {/* Lightbox Component */}

                        <div className="absolute left-0 top-0 h-full w-full scale-0 bg-[rgba(0,0,0,.25)] duration-.5 group-hover:scale-[1]"></div>
                        <div className="absolute left-0 top-0 h-full w-full scale-0 bg-[rgba(255,255,255,.25)] delay-300 duration-.5 group-hover:scale-[1]"></div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </motion.div>
            ),
        )}
      </AnimatePresence>
    </Tabs>
  );
}

export default TabBar;

interface TabPropstabBarWithDialog {
  TabBarWithDialog: {
    id: string;
    tabMain: string;
    tabSub: {
      id: string;
      tabImage: string | StaticImageData;
      Description?: string;
    }[];
  }[];
}

export function TabBarWithDialog({
  TabBarWithDialog,
}: TabPropstabBarWithDialog) {
  const [activeTab, setActiveTab] = useState(TabBarWithDialog[0].tabMain);
  const [dialogTab, setDialogTab] = useState<string>();

  return (
    <Tabs
      defaultValue={TabBarWithDialog[0].tabMain}
      onValueChange={setActiveTab}
    >
      <div className="mx-auto w-fit">
        <TabsList>
          {TabBarWithDialog.map((v) => (
            <TabsTrigger value={v.tabMain} key={v.id}>
              {v.tabMain}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>

      <AnimatePresence>
        {TabBarWithDialog.map(
          (v) =>
            // Only render the active tab content
            v.tabMain === activeTab && (
              <motion.div
                key={v.id}
                initial={{ opacity: 0, y: 20, visibility: "hidden" }}
                animate={{ opacity: 1, y: 0, visibility: "visible" }}
                exit={{ opacity: 0, y: 20, visibility: "hidden" }}
                transition={{ duration: 0.5, visibility: "visible" }}
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <TabsContent value={v.tabMain}>
                      <div className="flex flex-wrap justify-center gap-6">
                        {v.tabSub.map((value) => (
                          <div
                            key={value.id}
                            className="group relative h-fit cursor-pointer"
                            onClick={() => setDialogTab(value.id)}
                          >
                            <Image
                              src={value.tabImage}
                              alt=""
                              width={254}
                              height={254}
                              className="h-[254px] object-cover"
                            />

                            {/* Lightbox Component */}

                            <div className="absolute left-0 top-0 h-full w-full scale-0 bg-[rgba(0,0,0,.25)] duration-.5 group-hover:scale-[1]"></div>
                            <div className="absolute left-0 top-0 h-full w-full scale-0 bg-[rgba(255,255,255,.25)] delay-300 duration-.5 group-hover:scale-[1]"></div>
                          </div>
                        ))}
                      </div>
                    </TabsContent>
                  </DialogTrigger>
                  {v.tabSub.map((valuSec) =>
                    dialogTab === valuSec.id ? (
                      <DialogContent
                        className="h-[35rem] w-full max-w-[64rem] overflow-y-auto"
                        key={valuSec.id}
                      >
                        <VisuallyHidden asChild>
                          <DialogHeader>
                            <DialogTitle></DialogTitle>
                            <DialogDescription></DialogDescription>
                          </DialogHeader>
                        </VisuallyHidden>
                        <div className="flex flex-wrap items-center justify-center gap-6 md:flex-nowrap">
                          <Image
                            src={valuSec.tabImage}
                            alt=""
                            width={500}
                            height={500}
                            className="object-cover"
                          />
                          <p className="text-justify">{valuSec.Description}</p>
                        </div>
                      </DialogContent>
                    ) : (
                      ""
                    ),
                  )}
                </Dialog>
              </motion.div>
            ),
        )}
      </AnimatePresence>
    </Tabs>
  );
}
