export const metadata = {
  title: 'OneStudy.io',
  description: 'Page description',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
import Newsletter from '@/components/newsletter'
import Head from 'next/head'

export default function Home() {
  return (
    <>
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
      <Hero />
      <Features />
      <FeaturesBlocks />      
      <Newsletter />
    </>
  )
}
