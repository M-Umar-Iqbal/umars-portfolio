import { cn } from "@/utils/client-utils";
import type { Metadata } from "next";
import Script from "next/script";
import { DM_Sans } from "next/font/google";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const dmsans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://umars-portfolio-smoky.vercel.app/"),
  title: "Umar Iqbal",
  description: "Developer, writer, and creator.",
  openGraph: {
    title: "Umar Iqbal",
    description: "Developer, writer, and creator.",
    url: "https://umars-portfolio-smoky.vercel.app/",
    siteName: "Umar Iqbal",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "Umar Iqbal",
    card: "summary_large_image",
  },
  icons: {
    icon: "/images/icon.png",
  },
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-DNK7XEY3L9"></Script>
        <Script id="google-analytics">
          {` window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-DNK7XEY3L9');
          `}
        </Script>
      </head>
      <body>
        <div className={cn("bg-slate-50 dark:bg-dark pt-[60px] md:pt-[60px]", dmsans.className)}>
          <ThemeProvider attribute="class" defaultTheme="light">
            <Navbar />
            {children}
            <Footer />
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
