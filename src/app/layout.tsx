import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Larsoon Energy | Solarne elektrane za kućanstva i industriju",
  description:
    "Larsoon Energy d.o.o. — vodeći pružatelj solarnih rješenja u Hrvatskoj. Projektiranje, montaža i održavanje solarnih elektrana.",
  keywords: [
    "solarne elektrane",
    "solarni paneli",
    "Hrvatska",
    "obnovljivi izvori energije",
    "Larsoon Energy",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hr">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
