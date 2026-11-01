export default function LargeTestimonial() {
  return (
    <section>
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="space-y-5 text-center">
            <div
              className="relative inline-flex"
              aria-hidden="true"
              data-aos="fade-up"
            >
              <svg
                className="fill-blue-500"
                width={44}
                height={34}
                viewBox="0 0 44 34"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 34V21.6C0 9.7 6.9 1.5 18.4 0l1.6 6.1C13.6 7.6 9.9 11.6 9.4 17H18v17H0Zm26 0V21.6C26 9.7 32.9 1.5 44.4 0L46 6.1C39.6 7.6 35.9 11.6 35.4 17H44v17H26Z" />
              </svg>
            </div>
            <p
              className="text-2xl font-bold text-gray-900 md:text-3xl"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              A self-hosted ChatGPT for your company that{" "}
              <em className="italic text-blue-500">knows your documents</em>, can
              use your business systems, and keeps your data{" "}
              <em className="italic text-blue-500">inside your network</em>.
            </p>
            <div
              className="text-sm font-medium text-gray-500"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              The ESAA promise, in one sentence
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
