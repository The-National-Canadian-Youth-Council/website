import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "National Canadian Youth Council | Youth voices shaping youth rights",
    template: "%s | National Canadian Youth Council",
  },
  description:
    "National Canadian Youth Council (NCYC) is a youth-led national platform bringing together youth-led and youth-serving organizations including Dr. Interested, led by Chair Adil Mukhi, to advance children's and youth rights across Canada through the UN Convention on the Rights of the Child.",
  keywords:
    "National Canadian Youth Council, NCYC, youth rights Canada, youth advocacy Canada, children's rights Canada, UN Convention on the Rights of the Child Canada, UNCRC Canada, youth led organizations Canada, youth policy Canada, Adil Mukhi, Dr. Interested, youth consultations Canada, youth serving organizations, Canadian youth leadership",
  authors: [{ name: "National Canadian Youth Council" }],
  creator: "National Canadian Youth Council",
  publisher: "National Canadian Youth Council",
  metadataBase: new URL("https://ncycouncil.org"),
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://ncycouncil.org",
    title: "National Canadian Youth Council | Youth voices shaping youth rights",
    description:
      "Youth-led national platform led by Chair Adil Mukhi, advancing children's and youth rights across Canada through the UN Convention on the Rights of the Child.",
    siteName: "National Canadian Youth Council",
    images: [
      {
        url: "/images/colored-logo.png",
        width: 1200,
        height: 630,
        alt: "National Canadian Youth Council - Youth voices shaping youth rights",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "National Canadian Youth Council | Youth voices shaping youth rights",
    description: "Youth-led national platform advancing children's and youth rights across Canada.",
    images: ["/images/colored-logo.png"],
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
  icons: {
    icon: [
      {
        url: "/images/favicon.jpg",
        sizes: "any",
      },
      {
        url: "/images/favicon.jpg",
        type: "image/svg+xml",
      },
      {
        url: "/images/favicon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
    ],
    apple: "/images/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
