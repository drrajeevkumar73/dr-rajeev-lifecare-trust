/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useState } from "react";

export default function InstallPWA() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const handler = (event: any) => {
      event.preventDefault();
      setDeferredPrompt(event);
      console.log("✅ beforeinstallprompt event triggered");
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (deferredPrompt) {
        setShowPopup(true);
      }
    }, 5000); // 5 second ka interval

    return () => clearInterval(interval);
  }, [deferredPrompt]);

  const handleInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const choiceResult = await deferredPrompt.userChoice;
      console.log("User Choice: ", choiceResult.outcome);
      setDeferredPrompt(null);
      setShowPopup(false);
    }
  };

  return (
    <>
      {showPopup && (
        <div className="fixed left-0 top-0 z-[999999999] flex h-screen w-full items-center justify-center bg-black/80">
          <h1
            onClick={handleInstall}
            className="cursor-pointer rounded bg-white p-4 shadow-lg"
          >
            Click to Install My App
          </h1>
        </div>
      )}
    </>
  );
}
