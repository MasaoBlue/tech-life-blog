import GoogleAnalytics from "@/app/GoogleAnalytics";
import { APP_TITLE, GOOGLE_ANALYTICS_TRACKING_ID } from "@/constants";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import MainLayout from "./MainLayout";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: APP_TITLE,
  description: "tmaseaobclueh's blog about my technical life",
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <head>
        {GOOGLE_ANALYTICS_TRACKING_ID && (
          <GoogleAnalytics trackingId={GOOGLE_ANALYTICS_TRACKING_ID} />
        )}
      </head>
      <body className={inter.className}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
