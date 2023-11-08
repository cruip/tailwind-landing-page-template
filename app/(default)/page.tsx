export const metadata = {
  title: 'Aplos Creative | Software Agency',
  description: 'Transform your ideas into digital reality',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import ServicesBlocks from '@/components/services-blocks'
import Testimonials from '@/components/testimonials'
import Newsletter from '@/components/newsletter'

export default function Home() {
  return (
    <>
      <Hero />
      <Testimonials />
      {/*<Features />*/}
      <ServicesBlocks />
      <Newsletter />
    </>
  )
}
