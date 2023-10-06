import Link from 'next/link'
import Image from 'next/image'; // Import the Image component from Next.js

// Import your logo from the public directory
import OneStudyLogo from '/public/images/OneStudyLogo.svg'

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="OneStudy">
      {/* Use the Image component with your logo */}
      <Image
        src={OneStudyLogo}
        alt="OneStudy Logo"
        width={150} // Set the width and height as needed
        height={150}
      />
    </Link>
  )
}

