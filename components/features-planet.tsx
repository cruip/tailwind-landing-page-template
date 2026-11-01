import Image from "next/image";
import PlanetImg from "@/public/images/planet.png";
import PlanetOverlayImg from "@/public/images/planet-overlay.svg";

const planetTags = [
  {
    label: "Cited answer",
    className:
      "absolute -left-28 top-16 z-10 animate-[float_4s_ease-in-out_infinite_both] opacity-90",
  },
  {
    label: "Deep research",
    className:
      "absolute left-56 top-7 z-10 animate-[float_4s_ease-in-out_infinite_1s_both] opacity-50",
  },
  {
    label: "Run in SAP",
    className:
      "absolute -left-20 bottom-24 z-10 animate-[float_4s_ease-in-out_infinite_2s_both] opacity-50",
  },
  {
    label: "Export to Excel",
    className:
      "absolute bottom-32 left-64 z-10 animate-[float_4s_ease-in-out_infinite_3s_both] opacity-90",
  },
];

export default function FeaturesPlanet() {
  const features = [
    {
      title: "Agentic search (RAG)",
      body: "A hybrid keyword + semantic index. The AI decides what to search, reads the results and answers with citations to the source.",
      icon: (
        <path d="M7 1a6 6 0 0 1 4.75 9.66l3.3 3.3a1 1 0 0 1-1.42 1.42l-3.3-3.3A6 6 0 1 1 7 1Zm0 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z" />
      ),
    },
    {
      title: "Deep research",
      body: "Multi-step research that plans, searches several times and writes a structured report you can download.",
      icon: (
        <path d="M3 2a1 1 0 0 1 1-1h6l4 4v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2Zm6 1v3h3L9 3ZM5.5 9a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5h-5Zm0 3a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" />
      ),
    },
    {
      title: "Every file type, incl. scans",
      body: "Reads PDF, Office, CSV, images and legacy formats. Vision OCR transcribes scanned pages, photos and charts — locally if you choose.",
      icon: (
        <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1ZM2 8a6 6 0 0 1 11.2-3H10a1 1 0 0 0-1 1v3H5a1 1 0 0 0-1 1v2.2A5.98 5.98 0 0 1 2 8Zm6 6a6 6 0 0 1-2.2-.42V11h4a1 1 0 0 0 1-1V6h2.58A6 6 0 0 1 8 14Z" />
      ),
    },
    {
      title: "Code interpreter",
      body: "Runs Python in an isolated sandbox, analyses spreadsheets, draws charts and creates Word, PowerPoint, Excel, PDF and image files.",
      icon: (
        <path d="M6.3 4.3a1 1 0 0 1 0 1.4L4.42 7.5 6.3 9.3a1 1 0 1 1-1.4 1.4l-2.6-2.5a1 1 0 0 1 0-1.4l2.6-2.5a1 1 0 0 1 1.4 0Zm3.4 0a1 1 0 0 1 1.4 0l2.6 2.5a1 1 0 0 1 0 1.4l-2.6 2.5a1 1 0 1 1-1.4-1.4l1.88-1.8L9.7 5.7a1 1 0 0 1 0-1.4Z" />
      ),
    },
    {
      title: "Agents & actions",
      body: "Build custom agents and connect any MCP server, OpenAPI action, SAP or ServiceNow so the AI can look up and update records.",
      icon: (
        <path d="M8 1a2.5 2.5 0 0 1 2.45 2h.55a2 2 0 0 1 2 2v.55a2.5 2.5 0 0 1 0 4.9V15a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2.05a2.5 2.5 0 0 1 0-4.9V5a2 2 0 0 1 2-2h.55A2.5 2.5 0 0 1 8 1Z" />
      ),
    },
    {
      title: "Generative UI",
      body: "Agents can answer with live interfaces — charts, tables, forms and KPI cards that render as the answer streams, not just plain text.",
      icon: (
        <path d="M3 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H3Zm0 4h3v6H3V6Zm5 0h5v2.5H8V6Zm0 4h5v2H8v-2Z" />
      ),
    },
  ];

  return (
    <section className="relative before:absolute before:inset-0 before:-z-20 before:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-16 text-center md:pb-20">
            <div className="mb-4 inline-flex rounded-full bg-blue-500/10 px-3 py-1 text-sm font-semibold text-blue-300">
              Chat with your company knowledge
            </div>
            <h2 className="text-3xl font-bold text-gray-200 md:text-4xl">
              One place to search, research and act on everything you know
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              The assistant decides what to search, reads the results and answers
              with citations — then turns those answers into real work.
            </p>
          </div>
          {/* Planet */}
          <div className="pb-16 md:pb-20" data-aos="fade-up">
            <div className="text-center">
              <div className="relative inline-flex rounded-full before:absolute before:inset-0 before:-z-10 before:scale-[.85] before:animate-[pulse_4s_cubic-bezier(.4,0,.6,1)_infinite] before:bg-linear-to-b before:from-blue-900 before:to-sky-700/50 before:blur-3xl after:absolute after:inset-0 after:rounded-[inherit] after:[background:radial-gradient(closest-side,var(--color-blue-500),transparent)]">
                <Image
                  className="rounded-full bg-gray-900"
                  src={PlanetImg}
                  width={400}
                  height={400}
                  alt="Planet"
                />
                <div className="pointer-events-none" aria-hidden="true">
                  <Image
                    className="absolute -right-64 -top-20 z-10 max-w-none"
                    src={PlanetOverlayImg}
                    width={789}
                    height={755}
                    alt="Planet decoration"
                  />
                  <div>
                    {planetTags.map((tag, i) => (
                      <div key={i} className={tag.className}>
                        <div className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-gray-800/80 px-3 py-2 shadow-lg backdrop-blur-sm">
                          <span className="h-2 w-2 rounded-full bg-blue-400" />
                          <span className="whitespace-nowrap text-sm font-medium text-gray-200">
                            {tag.label}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Grid */}
          <div className="grid overflow-hidden sm:grid-cols-2 lg:grid-cols-3 *:relative *:p-6 *:before:absolute *:before:bg-gray-800 *:before:[block-size:100vh] *:before:[inline-size:1px] *:before:[inset-block-start:0] *:before:[inset-inline-start:-1px] *:after:absolute *:after:bg-gray-800 *:after:[block-size:1px] *:after:[inline-size:100vw] *:after:[inset-block-start:-1px] *:after:[inset-inline-start:0] md:*:p-10">
            {features.map((feature, index) => (
              <article
                key={index}
                data-aos="fade-up"
                data-aos-delay={(index % 3) * 100}
              >
                <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                  <svg
                    className="fill-blue-400"
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                  >
                    {feature.icon}
                  </svg>
                  <span>{feature.title}</span>
                </h3>
                <p className="text-[15px] text-gray-400">{feature.body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
