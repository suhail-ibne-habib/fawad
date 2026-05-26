import type { Metadata } from "next";
import { Orbitron, Inter } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "CorpTech AI | AI Consultancy - Automation, Cybersecurity & Marketing",
  description: "Empowering businesses through intelligent innovation. Expert AI consultancy specializing in automation, cybersecurity, and marketing solutions.",
  authors: [{ name: "CorpTech AI" }],
  openGraph: {
    title: "CorpTech AI | AI Consultancy",
    description: "Empowering businesses through intelligent innovation. Expert AI consultancy specializing in automation, cybersecurity, and marketing solutions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${orbitron.variable} ${inter.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#030712] text-zinc-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-300">
        {children}
      </body>
    </html>
  );
}
