import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "C-Link - 수원 C-Station 통합 지원 포털",
  description: "주거와 창업을 위한 원스톱 서비스 플랫폼",
  keywords: ["C-Station", "수원", "주거", "창업", "통합지원", "포털"],
  authors: [{ name: "한국스마트협동조합" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}