export default function Stats() {
  const stats = [
    { value: "57", label: "Built-in connectors" },
    { value: "Any", label: "AI model — cloud or local" },
    { value: "100%", label: "Self-hosted on your network" },
    { value: "9", label: "Interface languages" },
  ];

  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-8 md:py-10">
          <div
            className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-gray-200/70 md:grid-cols-4"
            data-aos="fade-up"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gray-50 px-6 py-8 text-center"
              >
                <div className="bg-linear-to-r from-blue-500 to-violet-500 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm font-medium text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
