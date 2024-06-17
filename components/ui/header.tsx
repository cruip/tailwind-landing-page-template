'use client'

import { useState, useEffect } from 'react'

import Link from 'next/link'
import Logo from './logo'

export default function Header() {

  const [top, setTop] = useState<boolean>(true)

  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true)
  }  

  useEffect(() => {
    scrollHandler()
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [top])

  return (
    <header className="fixed top-2 md:top-6 w-full z-30">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div
        className="relative flex items-center justify-between gap-3 h-14 rounded-2xl px-3 backdrop-blur-sm bg-white/90 shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[mask-composite:exclude_!important] before:pointer-events-none">

          {/* Site branding */}
          <div className="flex-1 flex items-center">
            <Logo />
          </div>

          {/* Desktop sign in links */}
          <ul className="flex-1 flex justify-end items-center gap-3">
            <li>
              <Link href="/signin" className="btn-sm text-gray-800 bg-white hover:bg-gray-50 shadow">Login</Link>
            </li>
            <li>
              <Link href="/signup" className="btn-sm text-gray-200 bg-gray-800 hover:bg-gray-900 shadow">Register</Link>
            </li>
          </ul>

        </div>
      </div>
    </header>
  )
}
