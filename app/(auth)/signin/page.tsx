export const metadata = {
  title: 'Sign In - Simple',
  description: 'Page description',
}

import Link from 'next/link'

export default function SignIn() {
  return (
    <>
      <>
        <div className="mb-10">
          <h1 className="text-4xl font-bold">Sign in to your account</h1>
        </div>
        {/* Form */}
        <form>
          <div className="space-y-4">
            <div>
              <label
                className="block text-sm text-gray-700 font-medium mb-1"
                htmlFor="email"
              >
                Email
              </label>
              <input
                id="email"
                className="form-input py-2 w-full"
                type="email"
                placeholder="corybarker@email.com"
                required
              />
            </div>
            <div>
              <label
                className="block text-sm text-gray-700 font-medium mb-1"
                htmlFor="password"
              >
                Password
              </label>
              <input
                id="password"
                className="form-input py-2 w-full"
                type="password"
                autoComplete="on"
                placeholder="••••••••"
                required
              />
            </div>
          </div>
          <div className="mt-6">
            <button className="btn text-white bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] hover:bg-[length:100%_150%] bg-[bottom] shadow w-full">
              Sign In
            </button>
          </div>
        </form>
        {/* Bottom link */}
        <div className="text-center mt-6">
          <Link
            className="text-sm text-gray-700 underline hover:no-underline"
            href="/reset-password"
          >
            Forgot password
          </Link>
        </div>
      </>

    </>
  )
}
