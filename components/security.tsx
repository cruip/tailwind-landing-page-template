export default function Security() {
  const controls = [
    {
      title: "Single sign-on & SCIM",
      body: "Google OAuth, OIDC and SAML, with SCIM 2.0 provisioning from Okta, Entra ID or any IdP.",
    },
    {
      title: "Granular access control",
      body: "Each document is visible to only you, selected groups or everyone — with bulk changes and an oversharing scan.",
    },
    {
      title: "Roles & groups",
      body: "Admins, group managers scoped to their groups, and basic users. Share agents and document sets by group.",
    },
    {
      title: "Audit log",
      body: "An append-only record of administrative actions, plus chat history review and export for admins.",
    },
    {
      title: "Cost & usage limits",
      body: "Global, per-group and per-user token budgets, with usage analytics by user, model and agent.",
    },
    {
      title: "Network & retention",
      body: "IP allowlist, automatic chat retention, API keys and personal access tokens for integrations.",
    },
  ];

  return (
    <section
      id="security"
      className="relative before:absolute before:inset-0 before:-z-20 before:bg-gray-900"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
            <div className="mb-4 inline-flex rounded-full bg-blue-500/10 px-3 py-1 text-sm font-semibold text-blue-300">
              Enterprise controls
            </div>
            <h2 className="mb-4 text-3xl font-bold text-gray-200 md:text-4xl">
              Built for IT, security and compliance from day one
            </h2>
            <p className="text-lg text-gray-400">
              Self-hosted on your infrastructure, with the controls your
              administrators expect — and your data never leaves your network.
            </p>
          </div>
          {/* Controls grid */}
          <div className="grid gap-px overflow-hidden rounded-2xl bg-gray-800 sm:grid-cols-2 lg:grid-cols-3">
            {controls.map((control, index) => (
              <div
                key={index}
                className="bg-gray-900 p-6 transition-colors hover:bg-gray-800/60"
                data-aos="fade-up"
                data-aos-delay={index * 60}
              >
                <h3 className="mb-2 flex items-center gap-2 font-semibold text-gray-100">
                  <svg
                    className="h-4 w-4 fill-blue-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 1 2 3.5v4C2 11 4.5 13.3 8 14.5 11.5 13.3 14 11 14 7.5v-4L8 1Z" />
                  </svg>
                  {control.title}
                </h3>
                <p className="text-[15px] text-gray-400">{control.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
