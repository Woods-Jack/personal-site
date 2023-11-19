import type { Metadata } from 'next'
import { Nunito, Playfair_Display } from 'next/font/google'
import './globals.css'

export const metadata: Metadata = {
  title: 'Jack Woods',
  description: 'A personal portfolio for Jack Woods - a London based software engineer.',
}

const nunito = Nunito({ 
  subsets: ['latin'],
  variable: '--font-nunito',
})
const playfair_display = Playfair_Display({ 
  subsets: ['latin' ],
  variable: '--font-playfair',
})

export default function RootLayout({children}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
        <body className={`${nunito.variable} ${playfair_display.variable}`}>{children}</body>
      </html>
  )
}
