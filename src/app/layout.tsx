import type { Metadata } from "next";
import { Geist, Playfair_Display } from "next/font/google";
import { JsonLd } from "@/components/ui/JsonLd";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sahrmedia.com"),
  title: {
    default: "SAHR MEDIA | B2B Lead Generation Agency",
    template: "%s | SAHR MEDIA",
  },
  description:
    "SAHR MEDIA helps SaaS and Construction companies generate, qualify, and convert high-intent prospects into revenue. Human-verified leads delivered to your sales team.",
  keywords: [
    "SaaS Lead Generation Agency",
    "Construction Lead Generation",
    "B2B Lead Generation Services",
    "Qualified Sales Leads",
    "Appointment Setting Services",
    "Lead Qualification Agency",
    "Sales Pipeline Development",
    "Construction Marketing Agency",
    "SaaS Marketing Agency",
  ],
  authors: [{ name: "SAHR MEDIA" }],
  creator: "SAHR MEDIA",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://sahrmedia.com",
    siteName: "SAHR MEDIA",
    title: "SAHR MEDIA | B2B Lead Generation Agency",
    description:
      "Qualified leads delivered directly to your sales team. SaaS and Construction lead generation specialists.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SAHR MEDIA - B2B Lead Generation Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@sahrmedia",
    creator: "@sahrmedia",
    title: "SAHR MEDIA | B2B Lead Generation Agency",
    description:
      "Qualified leads delivered directly to your sales team. SaaS and Construction lead generation specialists.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://sahrmedia.com/#organization",
  name: "SAHR MEDIA",
  url: "https://sahrmedia.com",
  logo: {
    "@type": "ImageObject",
    url: "https://sahrmedia.com/og-image.png",
    width: 1200,
    height: 630,
  },
  description:
    "SAHR MEDIA is a specialist B2B lead generation agency for SaaS and Construction companies. We deliver qualified, human-verified leads directly to your sales team.",
  contactPoint: {
    "@type": "ContactPoint",
    email: "hello@sahrmedia.com",
    contactType: "sales",
    areaServed: "GB",
    availableLanguage: "English",
  },
  sameAs: [],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://sahrmedia.com/#website",
  url: "https://sahrmedia.com",
  name: "SAHR MEDIA",
  description: "B2B Lead Generation Agency for SaaS and Construction Companies",
  publisher: {
    "@id": "https://sahrmedia.com/#organization",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://sahrmedia.com/blog?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geist.variable} ${playfairDisplay.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col antialiased">
        <JsonLd schema={organizationSchema} />
        <JsonLd schema={websiteSchema} />
        {children}
      </body>
    </html>
  );
}
