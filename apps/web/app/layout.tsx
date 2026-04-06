import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";
import { AppProviders } from "@/app/providers";
import { ChatWidget } from "@/shared/ui/chat-widget";

const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  variable: "--font-pretendard",
  weight: "45 920",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PLEASE LOGIN",
  description: "Aegis Corp. Employee Access System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={pretendard.variable}>
      <body>
        <AppProviders>
          {children}
          <ChatWidget />
        </AppProviders>
      </body>
    </html>
  );
}
