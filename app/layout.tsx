import "./globals.css";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import type { ReactNode } from "react";

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist"
});

export const metadata: Metadata = {
  title: "Gagner de l'argent sans rien faire | Guide pratique",
  description:
    "Guide pratique pour construire des revenus passifs responsables et durables sans y consacrer un temps plein."
};

export default function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <html lang="fr" className={urbanist.variable}>
      <body>{children}</body>
    </html>
  );
}
