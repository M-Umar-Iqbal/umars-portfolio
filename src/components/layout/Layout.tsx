import { cn } from "@/utils/client-utils";
import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import { DM_Sans } from "next/font/google";
import { ThemeProvider } from "../ThemeProvider";
import Navbar from "@/components/layout/Navbar";

const dmsans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://gitcoder.vercel.app/"),
  title: "Yassine Haimouch",
  description: "Developer, writer, and creator.",
  openGraph: {
    title: "Yassine Haimouch",
    description: "Developer, writer, and creator.",
    url: "https://gitcoder.vercel.app",
    siteName: "Yassine Haimouch",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "Yassine Haimouch",
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
    <div
      className={cn(
        "bg-slate-50 dark:bg-dark pt-[60px] md:pt-[48px]",
        dmsans.className
      )}
    >
      <ThemeProvider attribute="class" defaultTheme="light">
        <Navbar />
        {children}
        <Footer />
      </ThemeProvider>
    </div>
  );
}
