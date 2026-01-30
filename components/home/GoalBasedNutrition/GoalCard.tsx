import { ReactNode } from "react";

interface GoalCardProps {
  title: string;
  image?: ReactNode;
  className?: string;
}

export default function GoalCard({
  title,
  image,
  className = "",
}: GoalCardProps) {
  return (
    <div className={`group relative overflow-hidden rounded-2xl bg-white shadow-md transition hover:shadow-lg md:rounded-3xl ${className}`}>
      {/* Placeholder image - gray/blue view */}
      <div className="aspect-square bg-gray-300">
        {image || (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-gray-300 to-gray-400">
            <div className="text-center text-gray-600">
              <div className="mb-2 text-4xl">💪</div>
              <div className="text-xs">Image</div>
            </div>
          </div>
        )}
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-white/95 p-3 backdrop-blur-sm md:p-4">
        <h3 className="text-sm font-semibold text-gray-900 md:text-base">{title}</h3>
      </div>
    </div>
  );
}
