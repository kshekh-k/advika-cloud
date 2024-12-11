import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const poppins = Poppins({
  variable: "--poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Advika Enterprises Cloud Server",
  description: "Advika Cloud provide best cloud server solutions",
  icons: {
    icon: [
      { url: "./favicon.svg", sizes: "16x16", type: "image/svg" },
      { url: "./favicon.svg", sizes: "32x32", type: "image/svg" },
      {
        url: "./favicon.svg",
        sizes: "192x192",
        type: "image/png",
      },
    ],
    shortcut: ["./favicon.svg"],
    apple: [
      { url: "./favicon.svg" },
      { url: "./favicon.svg", sizes: "180x180", type: "image/svg" },
    ],
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "./favicon.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <body className={cn("antialiased overflow-x-hidden")}>
        {children}
      </body>
    </html>
  );
}
