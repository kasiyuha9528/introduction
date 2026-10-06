import type { Metadata } from "next";
import localFont from "next/font/local";
import { profile } from "@/data/profile";
import "./globals.css";

// サイトで使う文字だけに絞ったフォント（scripts/subset-font.mjs で生成）
const zenMaru = localFont({
  variable: "--font-zen-maru",
  src: [
    { path: "./fonts/ZenMaruGothic-Regular.woff2", weight: "400" },
    { path: "./fonts/ZenMaruGothic-Bold.woff2", weight: "700" },
    { path: "./fonts/ZenMaruGothic-Black.woff2", weight: "900" },
  ],
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
