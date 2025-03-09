import localFont from "next/font/local";

const ZaxSans = localFont({
  src: [
    {
      path: "./Barlow-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Barlow-Medium.ttf",
      weight: "500",
      style: "medium",
    },
    {
      path: "./Barlow-SemiBold.ttf",
      weight: "600",
      style: "semibold",
    },
    {
      path: "./Barlow-Bold.ttf",
      weight: "700",
      style: "bold",
    },
    {
      path: "./Barlow-ExtraBold.ttf",
      weight: "900",
      style: "extrabold",
    },
  ],
  display: "swap",
  variable: "--font-zaxsans",
});

const ZaxSansSemiCondensed = localFont({
  src: [
    {
      path: "./BarlowSemiCondensed-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./BarlowSemiCondensed-Medium.ttf",
      weight: "500",
      style: "medium",
    },
    {
      path: "./BarlowSemiCondensed-Bold.ttf",
      weight: "700",
      style: "bold",
    },
    {
      path: "./BarlowSemiCondensed-ExtraBold.ttf",
      weight: "900",
      style: "extrabold",
    },
  ],
  display: "swap",
  variable: "--font-zaxsanssemicondensed",
});

const ZaxCasual = localFont({
  src: [
    {
      path: "./ZaxCasual-Bold.woff2",
    },
  ],
  display: "swap",
  variable: "--font-zaxcasual",
});

const ZaxSerif = localFont({
  src: [
    {
      path: "./zaxserif-regular.woff2",
    },
  ],
  display: "swap",
  variable: "--font-zaxserif",
});

export { ZaxSans, ZaxSansSemiCondensed, ZaxCasual, ZaxSerif };
