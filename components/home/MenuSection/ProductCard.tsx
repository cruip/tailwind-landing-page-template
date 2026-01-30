import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";

interface ProductCardProps {
  image?: StaticImageData | string;
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
    <div className={`group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition hover:shadow-md ${className}`}>
      {image && (
        <div className="aspect-square overflow-hidden">
          <Image
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform group-hover:scale-105"
            width={300}
            height={300}
          />
        </div>
      )}
      {badge && (
        <div className="absolute top-2 right-2 z-10">
          {badge}
        </div>
      )}
      <div className="p-4">
        <h3 className="mb-1 font-semibold text-gray-900">{title}</h3>
        {description && (
          <p className="mb-2 text-sm text-gray-600">{description}</p>
        )}
        {price && (
          <p className="text-lg font-bold text-gray-900">{price}</p>
        )}
      </div>
    </div>
  );
}
