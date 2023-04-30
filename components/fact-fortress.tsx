'use client'

import { useState } from 'react'
import Image from 'next/image'
import Logo from '@/public/images/transparent_logo.png'
import Modal from '@/components/utils/modal'
import Link from "next/link";

export default function Hero() {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);

  const [videoModalOpen, setVideoModalOpen] = useState<boolean>(false)

  return (
    <section className="relative">
    
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Image className="mx-auto" src={Logo} width={600} priority alt="Hero" />
          </div>
          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">On-Chain Zero-Knowledge Proof Solution to Fact-Checking.</p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
              
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
          <a
                href="/demo"
                className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0" 
                onClick={() => setMobileNavOpen(false)}
              >
                <span>Demo</span>
              </a>

          </div>


          </div>
      </div>
    </section>
  )
}