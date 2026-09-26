import type { Metadata } from "next";
import { Libre_Franklin } from "next/font/google";
import { LangProvider } from "@/lib/lang";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Nav, Footer } from "./_ui";

const franklin = Libre_Franklin({ subsets: ["latin"], variable: "--font-franklin" });

export const metadata: Metadata = {
  title: "Hotel Kesar Palace — Ujjain | Shanti Demo",
  description: "300 m from Mahakaleshwar Temple, Ujjain. Rooms from ₹1,499. Confirmation on WhatsApp in 15 minutes.",
};

export default function ShantiLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${franklin.variable} bg-white font-[family-name:var(--font-franklin)] text-[#1A1A1A]`}>
      <LangProvider>
        <Nav />
        {children}
        <Footer />
        <WhatsAppFloat />
      </LangProvider>
    </div>
  );
}
