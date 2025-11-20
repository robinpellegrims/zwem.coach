import type { Metadata } from 'next'
import { Inter, Poppins, Jua } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { getSiteUrl, getOgImageUrl, SITE_NAME, SITE_LOCALE } from '@/lib/site-config'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
})

const jua = Jua({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-jua',
  display: 'swap',
})

const siteUrl = getSiteUrl()
const ogImageUrl = getOgImageUrl()

export const metadata: Metadata = {
  title: 'zwem.coach | Technieklessen Crawl Vilvoorde',
  description:
    'Technieklessen crawl zwemmen met Olympische expertise van Pieter Timmers en Ward Pellegrims in Vilvoorde. Van beginners tot gevorderden. 10 wekelijkse sessies voor alle niveaus.',
  keywords: [
    'zwemmen',
    'crawl',
    'Vilvoorde',
    'zwemles',
    'technieklessen',
    'Pieter Timmers',
    'Ward Pellegrims',
    'zwemcoach',
    'triatlon',
    'Olympisch',
  ],
  authors: [{ name: SITE_NAME }],
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'zwem.coach | Technieklessen Crawl Vilvoorde',
    description:
      'Technieklessen crawl zwemmen met Olympische expertise van Pieter Timmers en Ward Pellegrims. Van beginners tot gevorderden.',
    url: siteUrl,
    siteName: SITE_NAME,
    type: 'website',
    locale: SITE_LOCALE,
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: 'zwem.coach - Technieklessen Crawl Vilvoorde',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'zwem.coach | Technieklessen Crawl Vilvoorde',
    description:
      'Technieklessen crawl zwemmen met Olympische expertise van Pieter Timmers en Ward Pellegrims. Van beginners tot gevorderden.',
    images: [ogImageUrl],
  },
  alternates: {
    canonical: siteUrl,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl" className={`${inter.variable} ${poppins.variable} ${jua.variable}`}>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
