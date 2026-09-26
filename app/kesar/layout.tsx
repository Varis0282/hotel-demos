import type { Metadata } from "next";
import { Mukta } from "next/font/google";
import { LangProvider } from "@/lib/lang";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Nav, Footer } from "./_ui";

const mukta = Mukta({ subsets: ["latin", "devanagari"], weight: ["400", "500", "600", "700", "800"], variable: "--font-mukta" });

export const metadata: Metadata = {
  title: "Hotel Kesar Palace — Ujjain | Kesar Demo",
  description: "300 m from Mahakaleshwar Temple. Family rooms from ₹1,499, Bhasma Aarti assistance, saatvik food.",
};

export default function KesarLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${mukta.variable} bg-[#FFF6E9] font-[family-name:var(--font-mukta)] text-[#3A2A1A]`}>
      <LangProvider>
        <Nav />
        {children}
        <Footer />
        <WhatsAppFloat />
      </LangProvider>
    </div>
  );
}
