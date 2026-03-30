import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingContact } from "@/components/ui/Widgets";
import { CookieBanner } from "@/components/ui/CookieBanner";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { SITE_META } from "@/lib/constants";
import "./globals.css";

const playfair = Playfair_Display({ subsets: ["latin", "latin-ext"], variable: "--font-heading", display: "swap" });
const dmSans = DM_Sans({ subsets: ["latin", "latin-ext"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  title: { default: SITE_META.title, template: `%s | ${SITE_META.title}` },
  description: SITE_META.description,
  metadataBase: new URL(SITE_META.url),
  openGraph: { title: SITE_META.title, description: SITE_META.description, url: SITE_META.url, siteName: SITE_META.title, locale: "ro_RO", type: "website" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro" className={`${playfair.variable} ${dmSans.variable}`} suppressHydrationWarning>
      <body className="font-body bg-[#fafbfd] dark:bg-dark-bg text-gray-900 dark:text-dark-text antialiased">
        <a href="#main-content" className="skip-link">Salt la conținut</a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <FloatingContact />
        <ScrollToTop />
        <CookieBanner />
      </body>
    </html>
  );
}
