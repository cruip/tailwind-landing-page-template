export default function HowItWorks() {
  const steps = [
    {
      n: "01",
      title: "Connect your sources",
      body: "Point ESAA at the places your knowledge lives — drives, wikis, chat, tickets, CRM and ERP. It indexes on a schedule and keeps everything in sync, respecting existing permissions.",
    },
    {
      n: "02",
      title: "Ask in plain language",
      body: "Every employee asks questions and analyses files in their own words. ESAA decides what to search, reads the results and answers — always with citations back to the source.",
    },
    {
      n: "03",
      title: "Get answers — and actions",
      body: "Go beyond answers: generate Word, Excel, PowerPoint and PDF, run analyses, and let agents look up and update records in SAP, ServiceNow, your CRM and any API.",
    },
  ];

  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,var(--color-slate-200),transparent)1] md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
            <div
              className="mb-4 inline-flex rounded-full bg-blue-100/70 px-3 py-1 text-sm font-semibold text-blue-700"
              data-aos="fade-up"
            >
              How it works
            </div>
            <h2
              className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              From scattered knowledge to answers in three steps
            </h2>
          </div>
          {/* Steps */}
          <div className="relative grid gap-8 md:grid-cols-3">
            {/* connecting line */}
            <div
              className="pointer-events-none absolute inset-x-0 top-7 hidden h-px bg-linear-to-r from-transparent via-gray-200 to-transparent md:block"
              aria-hidden="true"
            />
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="relative z-10 mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-blue-500 to-blue-600 text-lg font-bold text-white shadow-lg shadow-blue-500/20">
                  {step.n}
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">
                  {step.title}
                </h3>
                <p className="text-[15px] text-gray-600">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
