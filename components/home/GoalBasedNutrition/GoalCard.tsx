import Image, { StaticImageData } from "next/image";

interface GoalCardProps {
  src: StaticImageData | string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  animationDelay?: string;
}

export default function GoalCard({
  src,
  alt,
  width,
  height,
  className = "",
  animationDelay,
}: GoalCardProps) {
  return (
    <div className={`animate-[breath_8s_ease-in-out_infinite_both] ${className}`} style={animationDelay ? { animationDelay } : undefined}>
      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
        <Image
          className="relative"
          src={src}
          width={width}
          height={height}
          alt={alt}
        />
      </div>
    </div>
  );
}
