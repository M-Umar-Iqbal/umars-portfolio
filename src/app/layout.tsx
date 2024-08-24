import { cn } from "@/utils/client-utils";
import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import { DM_Sans } from "next/font/google";
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
    <html lang="en" className="antialiased">
              <body
        className={cn(
          "bg-slate-50 dark:bg-dark pt-[60px] md:pt-[48px]",
          dmsans.className
        )}
      >
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