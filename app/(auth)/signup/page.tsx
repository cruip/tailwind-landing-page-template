export const metadata = {
  title: 'Sign Up - Simple',
  description: 'Page description',
}

export default function SignUp() {
  return (
    <>
      <div className="mb-10">
        <h1 className="text-4xl font-bold">Create your account</h1>
      </div>

      {/* Form */}
      <form>
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-700 font-medium mb-1" htmlFor="name">Full name</label>
            <input id="name" className="form-input py-2 w-full" type="text" placeholder="Corey Barker" required />
          </div>
          <div>
            <label className="block text-sm text-gray-700 font-medium mb-1" htmlFor="email">Email</label>
            <input id="email" className="form-input py-2 w-full" type="email" placeholder="corybarker@email.com"
              required />
          </div>
          <div>
            <label className="block text-sm text-gray-700 font-medium mb-1" htmlFor="phone">Phone</label>
            <input id="phone" className="form-input py-2 w-full" type="text" placeholder="(+750) 932-8907"
              required />
          </div>
          <div>
            <label className="block text-sm text-gray-700 font-medium mb-1" htmlFor="password">Password</label>
            <input id="password" className="form-input py-2 w-full" type="password" autoComplete="on"
              placeholder="••••••••" required />
          </div>
        </div>
        <div className="space-y-3 mt-6">
          <button
            className="btn text-white bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] hover:bg-[length:100%_150%] bg-[bottom] shadow w-full">Register</button>
          <div className="italic text-sm text-gray-400 text-center">Or</div>
          <button
            className="btn text-white bg-gradient-to-t from-gray-900 to-gray-700 bg-[length:100%_100%] hover:bg-[length:100%_150%] bg-[bottom] shadow w-full">Continue
            with GitHub</button>
        </div>
      </form>

      {/* Bottom link */}
      <div className="text-center mt-6">
        <p className="text-sm text-gray-500">By signing up, you agree to the <a
          className="font-medium text-gray-700 underline hover:no-underline whitespace-nowrap" href="#0">Terms of Service</a> and <a className="font-medium text-gray-700 underline hover:no-underline whitespace-nowrap" href="#0">Privacy Policy</a>.</p>
      </div>
    </>
  )
}
