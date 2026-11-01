import Image from "next/image";
import { CONNECTORS, CONNECTOR_CATEGORY_ORDER } from "./connectors.data";

export default function Connectors() {
  const byCategory = CONNECTOR_CATEGORY_ORDER.map((category) => ({
    category,
    items: CONNECTORS.filter((c) => c.category === category),
  })).filter((g) => g.items.length > 0);

  const extend = [
    {
      title: "MCP servers",
      body: "Connect any Model Context Protocol server — a CRM, Notion, Zoho and more — as chat tools, with API-token or OAuth sign-in.",
      icon: (
        <path d="M12 2 4 6v6c0 5 3.4 8.2 8 10 4.6-1.8 8-5 8-10V6l-8-4Zm0 2.2 6 3V12c0 3.9-2.5 6.5-6 8-3.5-1.5-6-4.1-6-8V7.2l6-3Z" />
      ),
    },
    {
      title: "Custom actions (OpenAPI)",
      body: "Turn any REST API into a tool by importing its OpenAPI definition — shared or per-user credentials.",
      icon: (
        <path d="M8.7 3.3a1 1 0 0 1 0 1.4L5.4 8l3.3 3.3a1 1 0 1 1-1.4 1.4l-4-4a1 1 0 0 1 0-1.4l4-4a1 1 0 0 1 1.4 0Zm6.6 0a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 1 1-1.4-1.4L18.6 8l-3.3-3.3a1 1 0 0 1 0-1.4Z" />
      ),
    },
    {
      title: "Ingestion API",
      body: "Push documents straight into the index from your own systems — anything the connectors don't cover.",
      icon: (
        <path d="M12 2a1 1 0 0 1 1 1v8.6l2.3-2.3a1 1 0 1 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.4L11 11.6V3a1 1 0 0 1 1-1ZM5 16a1 1 0 0 1 1 1v2h12v-2a1 1 0 1 1 2 0v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1Z" />
      ),
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
              57 connectors
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
              Index content on a schedule and keep it in sync. Document
              permissions are respected where the source supports them — and
              anything else can be added through MCP, OpenAPI actions or the
              ingestion API.
            </p>
          </div>

          {/* Connector groups */}
          <div className="space-y-10">
            {byCategory.map((group, gi) => (
              <div key={group.category} data-aos="fade-up" data-aos-delay={gi * 40}>
                <div className="mb-4 flex items-center gap-3">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                    {group.category}
                  </h3>
                  <span className="h-px grow bg-linear-to-r from-gray-200 to-transparent" />
                  <span className="text-xs font-medium text-gray-400">
                    {group.items.length}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {group.items.map((c) => (
                    <div
                      key={c.key}
                      className="group inline-flex items-center gap-2.5 rounded-xl border border-gray-200 bg-white py-2 pl-2 pr-3.5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
                    >
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-50 ring-1 ring-gray-100">
                        <Image
                          src={c.file}
                          alt={c.name}
                          width={20}
                          height={20}
                          unoptimized
                          className="h-5 w-5 object-contain"
                        />
                      </span>
                      <span className="whitespace-nowrap text-sm font-medium text-gray-700">
                        {c.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Extend with anything — MCP / OpenAPI / Ingestion API */}
          <div
            className="relative mt-14 overflow-hidden rounded-2xl bg-gray-900 p-8 md:p-10"
            data-aos="fade-up"
          >
            <div
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative">
              <div className="mb-8 max-w-2xl">
                <div className="mb-3 inline-flex rounded-full bg-blue-500/10 px-3 py-1 text-sm font-semibold text-blue-300">
                  Not on the list? Add it.
                </div>
                <h3 className="mb-2 text-2xl font-bold text-gray-100 md:text-3xl">
                  Any system can become a connector
                </h3>
                <p className="text-gray-400">
                  The 57 built-in sources are a starting point, not a limit.
                  Connect anything your company runs — as a searchable source or
                  a tool the agent can call.
                </p>
              </div>
              <div className="grid gap-px overflow-hidden rounded-xl bg-gray-800 sm:grid-cols-3">
                {extend.map((item, i) => (
                  <div key={i} className="bg-gray-900 p-6">
                    <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-linear-to-br from-blue-500 to-violet-500 text-white">
                      <svg
                        className="h-5 w-5 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        {item.icon}
                      </svg>
                    </div>
                    <h4 className="mb-1.5 font-semibold text-gray-100">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-400">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
