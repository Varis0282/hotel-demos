import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hotel Website Demos — 5 Styles",
  description:
    "One hotel, five completely different websites. Room availability on WhatsApp, Hindi/English, rooms & tariff, amenities, gallery and map — pick the design you love.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
