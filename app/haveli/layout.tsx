import type { Metadata } from "next";
import { Lora, Inter } from "next/font/google";
import { LangProvider } from "@/lib/lang";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Nav, Footer } from "./_ui";

const lora = Lora({ subsets: ["latin"], variable: "--font-lora" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Hotel Kesar Palace — Ujjain | Haveli Demo",
  description: "300 m from Mahakaleshwar Temple. Clean family rooms from ₹1,499, pure-veg restaurant, Bhasma Aarti assistance.",
};

export default function HaveliLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${lora.variable} ${inter.variable} bg-[#FBF9F4] font-[family-name:var(--font-inter)] text-[#22292B]`}>
      <LangProvider>
        <Nav />
        {children}
        <Footer />
        <WhatsAppFloat />
      </LangProvider>
    </div>
  );
}
