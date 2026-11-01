export default function WhyEsaa() {
  const items = [
    {
      title: "Answers from your own data",
      body: "Search across 55+ connected sources and uploaded files. Every answer cites the documents it used.",
      icon: (
        <path d="M10.5 1a6.5 6.5 0 0 1 5.15 10.46l3.44 3.45a1 1 0 0 1-1.41 1.41l-3.45-3.44A6.5 6.5 0 1 1 10.5 1Zm0 2a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Z" />
      ),
    },
    {
      title: "Your data stays with you",
      body: "Self-hosted on your own infrastructure. Use cloud AI models or fully local ones — no data has to leave your network.",
      icon: (
        <path d="M10 1 2 4v5c0 4.5 3.1 7.3 8 9 4.9-1.7 8-4.5 8-9V4l-8-3Zm0 2.1 6 2.25V9c0 3.3-2.1 5.5-6 6.9C6.1 14.5 4 12.3 4 9V5.35L10 3.1Z" />
      ),
    },
    {
      title: "Any AI model",
      body: "OpenAI, Anthropic, Google, Azure, Bedrock, Mistral, Ollama, LM Studio or any OpenAI-compatible server. Switch models per chat.",
      icon: (
        <path d="M10 1a3 3 0 0 1 3 3 3 3 0 0 1 2 5.24V12a3 3 0 0 1-3 3h-.17A3 3 0 0 1 7.17 15H7a3 3 0 0 1-3-3V9.24A3 3 0 0 1 6 4a3 3 0 0 1 3-3h1Zm-.5 2a1 1 0 0 0-1 1v8a1 1 0 0 0 2 0V4a1 1 0 0 0-1-1Z" />
      ),
    },
    {
      title: "Acts, not just answers",
      body: "Agents call your business systems — SAP, ServiceNow, CRM, MCP servers, any REST API — to look up and update records.",
      icon: (
        <path d="M11.3 1.05a1 1 0 0 1 .7 1.18L10.78 7H15a1 1 0 0 1 .8 1.6l-7 9.35A1 1 0 0 1 7 17.3L8.22 12H4a1 1 0 0 1-.8-1.6l7-9.35a1 1 0 0 1 1.1-.35Z" />
      ),
    },
    {
      title: "Real deliverables",
      body: "Generates Word, PowerPoint, Excel, PDF and charts straight from a chat — ready to download.",
      icon: (
        <path d="M5 1h6.59a2 2 0 0 1 1.4.59l2.42 2.41a2 2 0 0 1 .59 1.42V17a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2Zm6 1.5V5a1 1 0 0 0 1 1h2.5L11 2.5ZM6 10a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H6Zm0 4a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2H6Z" />
      ),
    },
    {
      title: "Enterprise controls",
      body: "SSO, SCIM provisioning, user groups, per-document access, audit logs, usage limits and white-label branding.",
      icon: (
        <path d="M10 1a4 4 0 0 1 4 4v2h1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1V5a4 4 0 0 1 4-4Zm0 2a2 2 0 0 0-2 2v2h4V5a2 2 0 0 0-2-2Zm0 8a1.5 1.5 0 0 0-.5 2.91V15a.5.5 0 0 0 1 0v-1.09A1.5 1.5 0 0 0 10 11Z" />
      ),
    },
  ];

  return (
    <section id="features" className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,var(--color-slate-200),transparent)1] md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
            <div
              className="mb-4 inline-flex rounded-full bg-blue-100/70 px-3 py-1 text-sm font-semibold text-blue-700"
              data-aos="fade-up"
            >
              Why ESAA
            </div>
            <h2
              className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              Every employee, every question, one trusted workspace
            </h2>
            <p
              className="text-lg text-gray-700"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              Ask questions, analyse files and get work done in plain language —
              over the documents and systems your company already runs on.
            </p>
          </div>
          {/* Cards */}
          <div className="mx-auto grid max-w-sm gap-6 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200/70 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:ring-blue-200"
                data-aos="fade-up"
                data-aos-delay={index * 75}
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br from-blue-500 to-blue-600 text-white shadow-md shadow-blue-500/20">
                  <svg
                    className="h-5 w-5 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                  >
                    {item.icon}
                  </svg>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-[15px] text-gray-600">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
