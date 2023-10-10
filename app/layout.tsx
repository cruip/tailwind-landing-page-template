import './css/style.css'

import { Inter } from 'next/font/google'

import Header from '@/components/ui/header'
import Banner from '@/components/banner'
import Footer from '@/components/ui/footer'
import Script from 'next/script'
import Head from 'next/head'
import { Analytics } from '@vercel/analytics/react';

const GTM_ID = 'GTM-8EWQSRB8MD';

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
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_ID}');
        `}
    </Script>
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
