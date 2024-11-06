import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex" aria-label="DongA">
      <Image width={28} height={28} src="/images/logo.webp" alt="logo"/>
    </Link>
  );
}
