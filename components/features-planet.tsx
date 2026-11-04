export default function FeaturesPlanet() {
  return (
    <section id="focus-areas" className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16" data-aos="zoom-y-out">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Three areas we focus on
            </h2>
          </div>
          {/* Grid */}
          <div className="grid overflow-hidden sm:grid-cols-3 *:relative *:p-6 *:before:absolute *:before:bg-gray-200 *:before:[block-size:100vh] *:before:[inline-size:1px] *:before:[inset-block-start:0] *:before:[inset-inline-start:-1px] *:after:absolute *:after:bg-gray-200 *:after:[block-size:1px] *:after:[inline-size:100vw] *:after:[inset-block-start:-1px] *:after:[inset-inline-start:0] md:*:p-10">
            <article data-aos="zoom-y-out" data-aos-delay={100}>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-900">
                <svg
                  className="fill-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                >
                  <path d="M8 0a1 1 0 0 1 1 1v14a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1Zm6 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h1a1 1 0 1 1 0 2h-1a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3h1a1 1 0 1 1 0 2h-1ZM1 1a1 1 0 0 0 0 2h1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 1 0 0 2h1a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3H1Z" />
                </svg>
                <span>Automation &amp; re-skilling</span>
              </h3>
              <p className="text-[15px] text-gray-600">
                Understand which roles are changing and what skills will still be
                in demand. Find pathways to re-train and adapt before the market
                moves further.
              </p>
            </article>
            <article data-aos="zoom-y-out" data-aos-delay={200}>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-900">
                <svg
                  className="fill-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                >
                  <path d="M14.29 2.614a1 1 0 0 0-1.58-1.228L6.407 9.492l-3.199-3.2a1 1 0 1 0-1.414 1.415l4 4a1 1 0 0 0 1.496-.093l7-9ZM1 14a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H1Z" />
                </svg>
                <span>Redundancy &amp; job loss</span>
              </h3>
              <p className="text-[15px] text-gray-600">
                Practical next steps if you've recently lost your job.
                Understand your rights, navigate benefits, rebuild confidence,
                and plan your next move.
              </p>
            </article>
            <article data-aos="zoom-y-out" data-aos-delay={300}>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-900">
                <svg
                  className="fill-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                >
                  <path d="M2 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4Zm2-4a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4H4Zm1 10a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H5Z" />
                </svg>
                <span>School leavers &amp; students</span>
              </h3>
              <p className="text-[15px] text-gray-600">
                Starting your career when the job market is shifting fast.
                Understand which skills matter, what paths are open, and how to
                make informed choices early on.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
