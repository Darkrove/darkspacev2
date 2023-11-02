import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";
import { NavBar } from "@/components/layout/nav-tabs";
import { ThemeProvider } from "@/components/app/context/theme-provider";
import { Footer } from "@/components/layout/footer";
import { siteConfig } from "@/config/site";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          async
          defer
          data-website-id="96a61cba-83cb-4307-9abe-ca5f3ee64129"
          src="https://umami-darkspace.vercel.app/umami.js"
        ></script>
        <script async src="https://feedbacks.vercel.app/widget.js data-widget-id=65430d066f52ef5b065f"></script>
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="overflow-hidden dark:bg-[#030014]/60">
            <NavBar />
            <main className="dark z-10 w-full dark:text-white pb-10">
              {children}
            </main>
            <Footer />
          </div>
          <Toaster richColors position="bottom-right" />{" "}
        </ThemeProvider>
      </body>
    </html>
  );
}
