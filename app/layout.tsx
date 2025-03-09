import type { Metadata } from "next";
import "./globals.css";
import {
  ZaxSans,
  ZaxCasual,
  ZaxSansSemiCondensed,
  ZaxSerif,
} from "@/components/fonts";

export const metadata: Metadata = {
  title: "Your Zaxbys",
  description:
    "Consistently creating encore experiences that enrich lives one person at a time",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ZaxSans.variable} ${ZaxCasual.variable} ${ZaxSansSemiCondensed.variable} ${ZaxSerif.variable} font-sans antialiased bg-[url('/tile.png')] bg-repeat`}
      >
        {children}
      </body>
    </html>
  );
}
