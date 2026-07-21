import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#1f3b5b" },
    { media: "(prefers-color-scheme: dark)", color: "#0f1420" },
  ],
};

// Schema.org — Google înțelege structurat că e o școală
const schoolSchema = {
  "@context": "https://schema.org",
  "@type": "School",
  name: "Liceul Tehnologic Turceni",
  url: SITE_META.url,
  logo: `${SITE_META.url}/icon.svg`,
  foundingDate: "1982-09-01",
  telephone: "+40253335012",
  email: "licturceni@yahoo.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Str. Educației nr. 1",
    addressLocality: "Turceni",
    postalCode: "217520",
    addressRegion: "Gorj",
    addressCountry: "RO",
  },
  geo: { "@type": "GeoCoordinates", latitude: 44.681853677773404, longitude: 23.37467370552185 },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro" className={`${playfair.variable} ${dmSans.variable}`} suppressHydrationWarning>
      <head>
        {/* Anti-flash: aplică dark mode ÎNAINTE de primul paint */}
        <script dangerouslySetInnerHTML={{ __html:
          `try{var s=localStorage.getItem("ltt-dark-mode");if(s==="true"||(!s&&window.matchMedia("(prefers-color-scheme: dark)").matches))document.documentElement.classList.add("dark")}catch(e){}`
        }} />
      </head>
      <body className="font-body bg-[#fafbfd] dark:bg-dark-bg text-gray-900 dark:text-dark-text antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schoolSchema) }} />
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
