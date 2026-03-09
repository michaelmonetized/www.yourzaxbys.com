import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Your ZAXBYS - Franchise Management Platform",
    short_name: "Your ZAXBYS",
    description: "The store level management portal for Zaxby's franchisees",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#dc2626",
    icons: [
      {
        src: "/logo.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
    orientation: "portrait",
    scope: "/",
    lang: "en-US",
    dir: "ltr",
    categories: ["business", "productivity", "food"],
  };
}
