import './css/style.css'

import { Inter } from 'next/font/google'

import Header from '@/components/ui/header'
import Banner from '@/components/banner'
import Footer from '@/components/ui/footer'
import Head from 'next/head'
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

export const metadata = {
  title: 'OneStudy.io',
  description: 'Comprehensive study companion for med students',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-inter antialiased bg-white text-gray-900 tracking-tight`}>
        <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
          <Head>
            {/* Open Graph */}
            <meta property="og:title" content="OneStudy" />
            <meta property="og:description" content="More than flashcards. Your comprehensive study companion." />
            <meta property="og:image" content="/images/OneStudy-social.png" />
            <meta property="og:type" content="website" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={"OneStudy"} />
            <meta name="twitter:description" content="More than flashcards. Your comprehensive study companion." />
            <meta name="twitter:image" content="/images/OneStudy-social.png"></meta>
            <link rel="icon" href="public/favicon.ico" />
          </Head>
          <Header />
          {children}   
          <Footer />     
          <Analytics />  
        </div>
      </body>
    </html>
  )
}
