import './globals.css'
import { Inter } from 'next/font/google'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Danger Ro',
  description: 'Fractional CTO experts. Headless web and app development, devops, project management, digital strategy, media and events',
  keywords: 'Fractional CTO, CTO, Tech Lead, Business Lead, Online Strategy, Mobile Apps, NextJS, Craft CMS, Strapi',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <h1 className="text-red-700 mx-auto max-w-full text-4xl">Danger RO(OT)</h1>
        {children}
        <p className="font-black">Whoop!!</p>
      </body>
    </html>
  )
}
