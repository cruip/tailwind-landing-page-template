export default function Connectors() {
  const categories = [
    {
      name: "Files & storage",
      sources: [
        "Google Drive",
        "SharePoint",
        "Dropbox",
        "Box",
        "Egnyte",
        "Amazon S3",
        "Google Cloud Storage",
        "Oracle Cloud",
      ],
    },
    {
      name: "Wikis & docs",
      sources: [
        "Confluence",
        "Notion",
        "Gitbook",
        "Document360",
        "Outline",
        "Guru",
        "MediaWiki",
        "Coda",
      ],
    },
    {
      name: "Communication",
      sources: [
        "Slack",
        "Microsoft Teams",
        "Gmail",
        "IMAP email",
        "Discord",
        "Zoom",
        "Fireflies",
        "Gong",
      ],
    },
    {
      name: "Project & tickets",
      sources: [
        "Jira",
        "Linear",
        "Asana",
        "ClickUp",
        "Airtable",
        "TestRail",
        "Zendesk",
        "Freshdesk",
      ],
    },
    {
      name: "Code",
      sources: ["GitHub", "GitLab", "Bitbucket"],
    },
    {
      name: "Business systems",
      sources: [
        "Salesforce",
        "HubSpot",
        "SAP",
        "ServiceNow",
        "Loopio",
        "Canvas",
      ],
    },
  ];

  return (
    <section id="connectors" className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,var(--color-slate-200),transparent)1] md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
            <div
              className="mb-4 inline-flex rounded-full bg-blue-100/70 px-3 py-1 text-sm font-semibold text-blue-700"
              data-aos="fade-up"
            >
              55+ connectors
            </div>
            <h2
              className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              Bring every source into one searchable workspace
            </h2>
            <p
              className="text-lg text-gray-700"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              Anything else can be added through MCP servers, OpenAPI actions or
              the ingestion API.
            </p>
          </div>
          {/* Category grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat, index) => (
              <div
                key={index}
                className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200/70"
                data-aos="fade-up"
                data-aos-delay={index * 75}
              >
                <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-gray-500">
                  <span className="h-2 w-2 rounded-full bg-linear-to-br from-blue-500 to-violet-500" />
                  {cat.name}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {cat.sources.map((source, i) => (
                    <li
                      key={i}
                      className="rounded-lg border border-gray-200 bg-gray-50 px-2.5 py-1 text-[13px] font-medium text-gray-700"
                    >
                      {source}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
