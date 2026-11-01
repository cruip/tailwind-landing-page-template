import Image from "next/image";

export default function Models() {
  const logos = [
    { name: "OpenAI", file: "/images/models/openai.svg" },
    { name: "Anthropic", file: "/images/models/anthropic.svg" },
    { name: "Google Gemini", file: "/images/models/gemini.svg" },
    { name: "Mistral", file: "/images/models/mistral.svg" },
    { name: "Meta Llama", file: "/images/models/meta.svg" },
    { name: "Cohere", file: "/images/models/cohere.svg" },
    { name: "DeepSeek", file: "/images/models/deepseek.svg" },
    { name: "Qwen", file: "/images/models/qwen.svg" },
  ];

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
          {/* Header */}
          <div className="mx-auto max-w-3xl pb-10 text-center md:pb-14" data-aos="fade-up">
            <div className="mb-4 inline-flex rounded-full bg-blue-100/70 px-3 py-1 text-sm font-semibold text-blue-700">
              Any AI model
            </div>
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Use the models you trust — cloud or fully local
            </h2>
            <p className="text-lg text-gray-700">
              Admins choose a default model per task; users switch models per
              chat. Embedding and reranking run on ESAA&apos;s own server, so
              sensitive work never has to leave your network.
            </p>
          </div>

          {/* Provider logo strip */}
          <div
            className="mx-auto mb-12 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            {logos.map((logo) => (
              <div
                key={logo.name}
                className="flex items-center justify-center gap-2.5 rounded-xl border border-gray-200 bg-white px-4 py-3.5 shadow-sm transition-colors hover:border-blue-200"
              >
                <Image
                  src={logo.file}
                  alt={logo.name}
                  width={22}
                  height={22}
                  unoptimized
                  className="h-5 w-5 shrink-0 object-contain"
                />
                <span className="text-sm font-medium text-gray-700">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>

          {/* Detailed lists */}
          <div className="grid gap-4 sm:grid-cols-3" data-aos="fade-up" data-aos-delay={150}>
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
    </section>
  );
}
