import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex" aria-label="Goodblend">
      {/* Blender/Spinning Top Icon - Red */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        {/* Stem */}
        <rect x="15" y="2" width="2" height="4" fill="#EF4444" />
        {/* Main body - spinning top/diamond shape */}
        <path
          d="M16 6L22 14L16 22L10 14L16 6Z"
          fill="#EF4444"
        />
        {/* Base circle */}
        <circle cx="16" cy="22" r="2.5" fill="#EF4444" />
      </svg>
    </Link>
  );
}
