import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "CalcWise — Free Online Finance Calculators",
    short_name: "CalcWise",
    description:
      "Free online calculators for mortgage, loans, investments, taxes, and more.",
    start_url: "/",
    display: "standalone",
    background_color: "#f7fafc",
    theme_color: "#1a365d",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
