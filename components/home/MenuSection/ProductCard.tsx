import { ReactNode } from "react";

interface ProductCardProps {
  image?: ReactNode;
  title: string;
  description?: string;
  price?: string;
  badge?: ReactNode;
  className?: string;
}

export default function ProductCard({
  image,
  title,
  description,
  price,
  badge,
  className = "",
}: ProductCardProps) {
  return (
    <div className={`group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md md:rounded-3xl ${className}`}>
      {/* Placeholder image - gray/blue view */}
      <div className="aspect-square overflow-hidden bg-gray-200">
        {image || (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300">
            <div className="text-center text-gray-500">
              <div className="mb-2 text-4xl">🥤</div>
              <div className="text-xs">Product Image</div>
            </div>
          </div>
        )}
      </div>
      {badge && (
        <div className="absolute top-2 right-2 z-10">
          {badge}
        </div>
      )}
      <div className="p-5 md:p-6">
        <h3 className="mb-1 text-base font-semibold text-gray-900 md:text-lg">{title}</h3>
        {description && (
          <p className="mb-2 text-sm leading-[140%] text-gray-600">{description}</p>
        )}
        {price && (
          <p className="text-lg font-bold text-gray-900">{price}</p>
        )}
      </div>
    </div>
  );
}
