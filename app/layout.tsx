// app/layout.tsx
import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import "../styles/bg.css";
import "../styles/text.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans", // Assigns the font to a CSS variable
});

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-mono", // Assigns the font to a CSS variable
});

export const metadata: Metadata = {
  title: "Nexus Popflix",
  description: "A Netflix Clone built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${roboto.variable}`}>{children}</body>
    </html>
  );
}
