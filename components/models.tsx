export default function Models() {
  const groups = [
    {
      label: "Cloud",
      items: [
        "OpenAI",
        "Anthropic",
        "Google Gemini / Vertex AI",
        "Azure OpenAI",
        "AWS Bedrock",
        "Mistral",
        "OpenRouter",
        "Nebius",
      ],
    },
    {
      label: "Self-hosted",
      items: [
        "Ollama",
        "LM Studio",
        "vLLM",
        "llama.cpp",
        "Any OpenAI-compatible server",
      ],
    },
    {
      label: "Gateways",
      items: ["LiteLLM proxy", "Portkey", "Bifrost"],
    },
  ];

  return (
    <section id="models" className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,var(--color-slate-200),transparent)1] md:py-20">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Copy */}
            <div data-aos="fade-right">
              <div className="mb-4 inline-flex rounded-full bg-blue-100/70 px-3 py-1 text-sm font-semibold text-blue-700">
                Any AI model
              </div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                Use the models you trust — cloud or fully local
              </h2>
              <p className="mb-6 text-lg text-gray-700">
                Admins choose a default model per task — chat, OCR, image
                understanding and more — and users can switch models per chat.
                Embedding and reranking run on ESAA&apos;s own model server, so
                sensitive work never has to leave your network.
              </p>
              <ul className="space-y-3 text-[15px] text-gray-700">
                {[
                  "Mix providers freely and switch per conversation",
                  "Run entirely offline with Ollama or LM Studio",
                  "Route through LiteLLM, Portkey or Bifrost gateways",
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg
                      className="mt-0.5 h-5 w-5 shrink-0 fill-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm4.7 6.3-5.4 5.4a1 1 0 0 1-1.4 0L5.3 10.1a1 1 0 1 1 1.4-1.4l1.9 1.9 4.7-4.7a1 1 0 1 1 1.4 1.4Z" />
                    </svg>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            {/* Model groups */}
            <div className="space-y-4" data-aos="fade-left">
              {groups.map((group, index) => (
                <div
                  key={index}
                  className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200/70"
                >
                  <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-500">
                    {group.label}
                  </h3>
                  <ul className="flex flex-wrap gap-2">
                    {group.items.map((item, i) => (
                      <li
                        key={i}
                        className="rounded-lg border border-gray-200 bg-gray-50 px-2.5 py-1 text-[13px] font-medium text-gray-700"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
