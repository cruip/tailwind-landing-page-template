import { cn } from "@/lib/utils";
import Image from "next/image";

interface GoalCardProps {
  title: string;
  imageKey?: string;
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
}

const GOAL_IMAGES: Record<string, string> = {
  muscleGain:
    "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&h=400&fit=crop",
  recovery:
    "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=400&fit=crop",
  energy:
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=400&fit=crop",
  weightLoss:
    "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=400&fit=crop",
  wellness:
    "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop",
};

export default function GoalCard({
  title,
  imageKey,
  imageSrc,
  imageAlt,
  className = "",
}: GoalCardProps) {
  const src = imageSrc || (imageKey ? GOAL_IMAGES[imageKey] : undefined);

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl bg-gray-800 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] md:rounded-3xl",
        className
      )}
    >
      <div className="relative aspect-square">
        {src ? (
          <Image
            src={src}
            alt={imageAlt || title}
            fill
            className="object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
            sizes="(max-width: 768px) 50vw, 33vw"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-gray-600 to-gray-700" />
        )}
        {/* Reddish tint overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-red-900/10" />
        {/* Red border accent on hover */}
        <div className="absolute inset-0 rounded-2xl border-2 border-transparent transition-colors group-hover:border-red-500/40 md:rounded-3xl" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 md:p-4">
        <h3 className="text-sm font-semibold text-white md:text-base">{title}</h3>
      </div>
    </div>
  );
}
