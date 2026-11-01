import Accordion from "@/components/accordion";

export default function Faq() {
  const faqs = [
    {
      q: "Where does our data live?",
      a: "Everything runs on your own infrastructure. ESAA is self-hosted, so documents and chats stay inside your network. You can use cloud AI models or fully local ones — with local models, no data has to leave your servers at all.",
    },
    {
      q: "Which AI models can we use?",
      a: "OpenAI, Anthropic, Google, Azure, AWS Bedrock, Mistral and OpenRouter, or self-hosted models via Ollama, LM Studio, vLLM and any OpenAI-compatible server. Admins set a default per task and users can switch models per chat.",
    },
    {
      q: "How does ESAA avoid making things up?",
      a: "ESAA searches your connected sources and uploaded files, then answers from what it finds — and every answer cites the documents it used, so people can verify the source in one click.",
    },
    {
      q: "Can it connect to a system that isn't on the list?",
      a: "Yes. Beyond the 57 built-in connectors, you can add any Model Context Protocol (MCP) server, turn any REST API into a tool with an OpenAPI definition, or push documents in through the ingestion API.",
    },
    {
      q: "How do you handle access control and compliance?",
      a: "Per-document access, user groups and roles, SSO (Google, OIDC, SAML) with SCIM provisioning, audit logs, IP allowlists, token and cost limits, and chat retention. Document permissions are respected where the source supports them.",
    },
    {
      q: "What does it cost?",
      a: "There is one free ESAA edition. You pay only for the infrastructure you run it on and any paid AI models you choose to use — there are no per-seat licence fees.",
    },
  ];

  return (
    <section className="relative">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,var(--color-slate-200),transparent)1] md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-10 text-center md:pb-12">
            <div
              className="mb-4 inline-flex rounded-full bg-blue-100/70 px-3 py-1 text-sm font-semibold text-blue-700"
              data-aos="fade-up"
            >
              FAQ
            </div>
            <h2
              className="text-3xl font-bold text-gray-900 md:text-4xl"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              Questions, answered
            </h2>
          </div>
          {/* Accordions */}
          <div className="mx-auto max-w-2xl space-y-3" data-aos="fade-up" data-aos-delay={150}>
            {faqs.map((faq, index) => (
              <Accordion key={index} title={faq.q} id={`faq-${index}`} active={index === 0}>
                {faq.a}
              </Accordion>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
