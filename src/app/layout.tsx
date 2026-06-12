import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geist.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col antialiased">{children}</body>
    </html>
  );
}
