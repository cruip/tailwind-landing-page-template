export const metadata = {
  title: 'Home - Simple',
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
        <meta property="og:image" content="/images/OneStudy-social.png"></meta>
        <meta name="twitter:image" content="/images/OneStudy-social.png"></meta>
      </Head>
      <Hero />
      <Features />
      <FeaturesBlocks />      
      <Newsletter />
    </>
  )
}
