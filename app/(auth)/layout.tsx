import Image from "next/image"
import Logo from "@/components/ui/logo"
import AuthBg from "@/public/images/auth-bg.svg"

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <header className="absolute w-full z-30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Site branding */}
            <div className="shrink-0 mr-4">
              <Logo />
            </div>
          </div>
        </div>
      </header>

      <main className="relative grow flex">

        <div className="absolute left-0 -translate-x-1/3 bottom-0 pointer-events-none" aria-hidden="true">
          <div className="w-80 h-80 rounded-full bg-gradient-to-tr from-blue-500 opacity-70 blur-[160px]"></div>
        </div>

        {/* Content */}
        <div className="w-full">

          <div
            className="h-full flex flex-col justify-center before:min-h-[4rem] md:before:min-h-[5rem] before:flex-1 after:flex-1">

            <div className="px-4 sm:px-6">
              <div className="w-full max-w-sm mx-auto">
                <div className="py-16 md:py-20">

                  {children}

                </div>
              </div>
            </div>

          </div>

        </div>

        <>
          {/* Right side */}
          <div className="hidden relative lg:block shrink-0 w-[572px] my-6 mr-6 rounded-2xl overflow-hidden">
            {/* Background */}
            <div
              className="bg-blue-50 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 -ml-24 pointer-events-none -z-10"
              aria-hidden="true"
            >
              <Image
                src={AuthBg}
                className="max-w-none"
                width={1285}
                height={1684}
                alt="Auth bg"
              />
            </div>
            {/* Illustration */}
            <div className="absolute top-1/2 -translate-y-1/2 left-32 w-[500px]">
              <div className="w-full aspect-video bg-gray-900 rounded-2xl px-5 py-3 shadow-xl transition duration-300">
                <div className="relative flex items-center justify-between before:block before:w-[41px] before:h-[9px] before:[background-image:radial-gradient(circle_at_4.5px_4.5px,_theme(colors.gray.600)_4.5px,_transparent_0)] before:bg-[length:16px_9px] after:w-[41px] mb-8">
                  <span className="text-white font-medium text-[13px]">cruip.com</span>
                </div>
                <div className="text-gray-500 font-mono [&_span]:opacity-0 text-sm transition duration-300">
                  <span className="text-gray-200 animate-[code-1_10s_infinite]">
                    npm login
                  </span>{" "}
                  <span className="animate-[code-2_10s_infinite]">
                    --registry=https://npm.pkg.github.com
                  </span>
                  <br />
                  <span className="animate-[code-3_10s_infinite]">
                    --scope=@phanatic
                  </span>{" "}
                  <span className="animate-[code-4_10s_infinite]">
                    Successfully logged-in.
                  </span>
                  <br />
                  <br />
                  <span className="text-gray-200 animate-[code-5_10s_infinite]">
                    npm publish
                  </span>
                  <br />
                  <span className="animate-[code-6_10s_infinite]">
                    Package published.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </>


      </main>
    </>
  )
}
