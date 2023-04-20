export const metadata = {
  title: "Sign In - Simple",
  description: "Page description",
};

import Link from "next/link";

export default function SignIn() {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1">Fact Fortress Demo</h1>
          </div>

          <div className="max-w-sm mx-auto text-center">PUT CARUSEL HERE</div>
        </div>
      </div>
    </section>
  );
}
