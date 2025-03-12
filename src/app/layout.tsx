import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s - Dr. Rajeev Lifecare Trust",
    default: "Dr. Rajeev Lifecare Trust",
  },
  description:
    "Committed to delivering care, compassion, and wellness for a healthier community.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
     
        <Toaster />
      </body>
    </html>
  );
}
