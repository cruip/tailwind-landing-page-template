import { ReactNode } from "react";

interface TrainerCardProps {
  image?: ReactNode;
  name: string;
  title: string;
  className?: string;
}

export default function TrainerCard({
  image,
  name,
  title,
  className = "",
}: TrainerCardProps) {
  return (
    <div className={`group relative overflow-hidden rounded-2xl bg-white shadow-lg transition hover:shadow-xl md:rounded-3xl ${className}`}>
      {/* Placeholder image - gray/blue view */}
      <div className="aspect-[3/4] overflow-hidden bg-gray-300">
        {image || (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-gray-300 to-gray-400">
            <div className="text-center text-gray-600">
              <div className="mb-2 text-6xl">💪</div>
              <div className="text-xs">Trainer Photo</div>
            </div>
          </div>
        )}
      </div>
      <div className="bg-white p-5 md:p-6">
        <h3 className="text-base font-semibold text-gray-900 md:text-lg">{name}</h3>
        <p className="text-sm leading-[140%] text-gray-600">{title}</p>
      </div>
    </div>
  );
}
