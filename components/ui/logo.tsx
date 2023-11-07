import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="aplos-logo">
      <img src="images/aplos-logo.png" className="h-10" alt=""/>
    </Link>
  )
}
