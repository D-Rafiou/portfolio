import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: 'Rafiou Diallo | ML & Cybersecurity',
  description: 'Rafiou Diallo is a machine learning and cybersecurity professional specializing in offensive security, applied AI, security systems, and interpretable ML.',
  keywords: ['Machine Learning', 'Cybersecurity', 'AI', 'Python', 'PyTorch', 'Security Engineer'],
  authors: [{ name: 'Rafiou Diallo' }],
  openGraph: {
    title: 'Rafiou Diallo | ML & Cybersecurity Engineer',
    description: 'Building intelligent systems at the intersection of machine learning, cybersecurity, and real-world deployment.',
    type: 'website',
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
