import type { Metadata, Viewport } from "next";
import { Cinzel, Inter_Tight } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["500", "600"],
});

export const metadata: Metadata = {
  title: "BOJA Real Estate | Property in Lagos & Abuja for Living and Investing",
  description:
    "BOJA Real Estate helps you buy, rent and invest in verified homes across Lagos, Abuja and beyond, with interest-free instalments, 0% commission and full diaspora support.",
  openGraph: {
    title: "BOJA Real Estate",
    description: "Real Estate in Nigeria: Ideal for Living and Investing.",
    images: ["/images/hero.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${interTight.variable} ${cinzel.variable}`}>
      <body>{children}</body>
    </html>
  );
}
