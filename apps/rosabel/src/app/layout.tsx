import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Rosabel!',
  description: 'And now we have next Mono-Repos. Ho Ho Ho',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
      <p className="font-black">Ass, Ass, Booty, Booty </p> 
      </body>
     
    </html>
  )
}
