import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { LangProvider } from "@/lib/lang";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Nav, Footer } from "./_ui";

const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-cormorant" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export const metadata: Metadata = {
  title: "Hotel Kesar Palace — Ujjain | Rajwada Demo",
  description: "A heritage stay 300 m from Mahakaleshwar Jyotirlinga. Rooms from ₹1,499.",
};

export default function RajwadaLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${cormorant.variable} ${manrope.variable} bg-[#12100C] font-[family-name:var(--font-manrope)] text-[#EFE7DA]`}>
      <LangProvider>
        <Nav />
        {children}
        <Footer />
        <WhatsAppFloat />
      </LangProvider>
    </div>
  );
}
