import Image from "next/image";

/**
 * Background: goal-based-background.webp with gradient overlay
 */
export default function GoalBasedBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <Image
        src="/images/goal-based-background.webp"
        alt=""
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      {/* Linear gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0) 21.77%, rgba(0,0,0,0.5) 100%)",
        }}
      />
    </div>
  );
}
