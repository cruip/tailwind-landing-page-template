export default function LargeTestimonial() {
  return (
    <section id="newsletter">
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <div className="py-12 md:py-20 text-center" data-aos="zoom-y-out">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            Stay informed
          </h2>
          <p className="mb-8 text-lg text-gray-600">
            Get occasional updates on UK workforce trends, new guides, and free
            tools. No spam, unsubscribe any time.
          </p>
          <form className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <input
              type="email"
              placeholder="Your email address"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:w-72"
            />
            <button
              type="submit"
              className="btn bg-gray-800 text-gray-200 shadow-sm hover:bg-gray-900"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
