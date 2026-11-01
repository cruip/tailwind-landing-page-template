export default function WhoItsFor() {
  const audiences = [
    {
      role: "Employees",
      body: "Find any document, policy, test report or lesson learnt in seconds instead of searching folders.",
    },
    {
      role: "Engineering & quality",
      body: "Ask across test reports, design reviews and supplier catalogues — and check equipment qualification documents automatically.",
    },
    {
      role: "Sales & service",
      body: "Look up customers, deals and tickets in CRM and ServiceNow directly from chat.",
    },
    {
      role: "Finance & operations",
      body: "Query SAP, analyse spreadsheets and get charts without writing a single formula.",
    },
    {
      role: "IT & administrators",
      body: "One platform with SSO, access control, audit logs and usage reporting, deployed with Docker.",
    },
    {
      role: "Regulated teams (GxP)",
      body: "A dedicated review workflow checks URS, DQ, IQ, OQ, PQ and traceability evidence, requirement by requirement.",
    },
  ];

  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,var(--color-slate-200),transparent)1] md:py-20">
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
            <div
              className="mb-4 inline-flex rounded-full bg-blue-100/70 px-3 py-1 text-sm font-semibold text-blue-700"
              data-aos="fade-up"
            >
              Who it&apos;s for
            </div>
            <h2
              className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              One workspace, every team
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {audiences.map((audience, index) => (
              <div
                key={index}
                className="group relative rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200/70 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:ring-blue-200"
                data-aos="fade-up"
                data-aos-delay={index * 75}
              >
                <span className="mb-3 block text-sm font-semibold text-blue-600">
                  {audience.role}
                </span>
                <p className="text-[15px] text-gray-600">{audience.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
