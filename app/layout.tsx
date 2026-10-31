import type { Metadata } from "next";
import "./globals.css";

const description =
  "水戸市の火葬式専門葬儀社 LilCere(リトセレ)。ご安置＋火葬一式209,000円(税込)。24時間セルフ面会ができる安置施設「故人の宿」と、下入野斎場での火葬。追加費用ゼロのシンプルなお見送り。";

export const metadata: Metadata = {
  title: "LilCere（リトセレ）｜水戸市の火葬式専門葬儀社",
  description,
  openGraph: {
    title: "LilCere（リトセレ）｜水戸市の火葬式専門葬儀社",
    description,
    locale: "ja_JP",
    type: "website",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&family=Noto+Serif+JP:wght@400;600&display=swap"
        />
      </head>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
