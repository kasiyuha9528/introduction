import type { Metadata } from "next";
import { Zen_Maru_Gothic } from "next/font/google";
import { profile } from "@/data/profile";
import "./globals.css";

const zenMaru = Zen_Maru_Gothic({
  variable: "--font-zen-maru",
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

const description = `${profile.name}の自己紹介サイト。できること・作ったもの・勉強中のものを紹介しています。`;

export const metadata: Metadata = {
  title: `${profile.name} | 自己紹介`,
  description,
  openGraph: {
    title: `${profile.name} | 自己紹介`,
    description,
    type: "website",
    locale: "ja_JP",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ja" className={`${zenMaru.variable} antialiased`}>
      <body className="min-h-dvh font-sans">{children}</body>
    </html>
  );
}
