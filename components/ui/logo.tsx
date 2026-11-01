import Link from "next/link";
import Image from "next/image";
import LogoImg from "@/public/images/esaa-logo-dark.png";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex items-center" aria-label="ESAA">
      <Image
        src={LogoImg}
        alt="ESAA"
        width={104}
        height={34}
        priority
        className="h-7 w-auto"
      />
    </Link>
  );
}
