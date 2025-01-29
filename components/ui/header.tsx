import Link from "next/link";
import Logo from "./logo";
import WaveLogo from "./wave-logo";
import '@fortawesome/fontawesome-free/css/all.css';

export default function Header() {
  return (
    <header className="fixed top-2 z-30 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/90 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-sm before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
  
          {/* Desktop navigation */}
          <nav className="flex flex-1 items-center justify-between">
            {/* Endly branding */}
            <div>
              <Link
                href="/"
                className="flex items-center gap-2"
                aria-label="Endly"
              >
                <WaveLogo />
                <span className="text-2xl font-semibold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Endly</span>
                </Link>
            </div>

            {/* Desktop sign in links */}
            <ul className="flex items-center gap-3">
              <li>
                <Link href="https://www.linkedin.com" className="btn-sm bg-white text-black-800 shadow hover:bg-gray-50">
                  {/* LinkedIn Icon */}
                  <i className="fab fa-linkedin"></i>
                </Link>
              </li>
              <li>
                <Link href="https://twitter.com" className="btn-sm bg-white-800 text-black-800 shadow hover:bg-gray-900">
                  {/* Twitter Icon */}
                  <i className="fab fa-x-twitter"></i>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
