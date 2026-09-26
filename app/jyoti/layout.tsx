import type { Metadata } from "next";
import { Sora } from "next/font/google";
import { LangProvider } from "@/lib/lang";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Nav, Footer, Blobs } from "./_ui";

const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });

export const metadata: Metadata = {
  title: "Hotel Kesar Palace — Ujjain | Jyoti Demo",
  description: "300 m from Mahakaleshwar Temple. Rooms from ₹1,499, Bhasma Aarti assistance, pure-veg restaurant.",
};

export default function JyotiLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${sora.variable} relative min-h-screen bg-[#150E1F] font-[family-name:var(--font-sora)] text-[#F5EFFF]`}>
      <LangProvider>
        <Blobs />
        <div className="relative">
          <Nav />
          {children}
          <Footer />
          <WhatsAppFloat />
        </div>
      </LangProvider>
    </div>
  );
}
