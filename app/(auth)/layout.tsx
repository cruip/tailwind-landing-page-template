import Image from "next/image";
import Logo from "@/components/ui/logo";
import AuthBg from "@/public/images/auth-bg.svg";
import AppShot from "@/public/images/esaa-app.png";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="absolute z-30 w-full">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex h-16 items-center justify-between md:h-20">
            {/* Site branding */}
            <div className="mr-4 shrink-0">
              <Logo />
            </div>
          </div>
        </div>
      </header>

      <main className="relative flex grow">
        <div
          className="pointer-events-none absolute bottom-0 left-0 -translate-x-1/3"
          aria-hidden="true"
        >
          <div className="h-80 w-80 rounded-full bg-linear-to-tr from-blue-500 opacity-70 blur-[160px]"></div>
        </div>

        {/* Content */}
        <div className="w-full">
          <div className="flex h-full flex-col justify-center before:min-h-[4rem] before:flex-1 after:flex-1 md:before:min-h-[5rem]">
            <div className="px-4 sm:px-6">
              <div className="mx-auto w-full max-w-sm">
                <div className="py-16 md:py-20">{children}</div>
              </div>
            </div>
          </div>
        </div>

        <>
          {/* Right side */}
          <div className="relative my-6 mr-6 hidden w-[572px] shrink-0 overflow-hidden rounded-2xl lg:block">
            {/* Background */}
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 -z-10 -ml-24 -translate-x-1/2 -translate-y-1/2 bg-blue-50"
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
            <div className="absolute left-32 top-1/2 w-[500px] -translate-y-1/2">
              <div className="rounded-2xl bg-gray-900 p-2 shadow-xl transition duration-300">
                <div className="flex items-center gap-1.5 px-2 py-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-gray-600/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-gray-600/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-gray-600/80" />
                  <span className="ml-2 text-[12px] font-medium text-gray-400">
                    ESAA
                  </span>
                </div>
                <Image
                  src={AppShot}
                  width={1853}
                  height={958}
                  alt="ESAA workspace"
                  className="w-full rounded-lg"
                  priority
                />
              </div>
              <p className="mt-6 max-w-xs text-sm text-gray-600">
                One private AI workspace for your company&apos;s knowledge, files
                and business systems.
              </p>
            </div>
          </div>
        </>
      </main>
    </>
  );
}
