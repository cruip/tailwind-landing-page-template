import OptimizedImage from "@/components/common/Image/OptimizedImage";
import { cn } from "@/lib/utils";

export interface ProductData {
  name: string;
  ingredients: string;
  calories: string;
  carbs: string;
  protein: string;
  fat: string;
  imageSrc: string;
  isNew?: boolean;
}

interface ProductCardProps {
  product: ProductData;
  className?: string;
}

export default function ProductCard({ product, className }: ProductCardProps) {
  return (
    <article
      className={cn(
        "relative flex w-[320px] flex-col overflow-hidden rounded-[24px] bg-[#fcfcfc] md:w-[360px] xl:w-[384px]",
        className
      )}
    >
      <div className="relative flex items-center justify-center rounded-[24px] bg-[#efefef] px-6 pb-6 pt-4">
        <div className="relative h-[220px] w-full">
          <OptimizedImage
            src={product.imageSrc}
            alt={product.name}
            fill
            className="object-contain"
            sizes="(min-width: 1280px) 340px, (min-width: 768px) 300px, 260px"
          />
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="space-y-2">
          <h3 className="text-[22px] font-bold leading-[1.4] text-[#505b66]">
            {product.name}
          </h3>
          <p className="text-[16px] leading-[1.5] text-[#505b66]">
            {product.ingredients}
          </p>
        </div>
        <div className="mt-auto grid grid-cols-4 gap-4 text-[#505b66]">
          {[
            { label: "CALORIES", value: product.calories },
            { label: "CARB", value: product.carbs },
            { label: "PROTEIN", value: product.protein },
            { label: "FAT", value: product.fat },
          ].map((item) => (
            <div key={item.label} className="space-y-1 text-center">
              <p className="text-[16px] font-medium leading-[1.5]">
                {item.value}
              </p>
              <p className="text-[12px] uppercase tracking-wide">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      {product.isNew && (
        <span className="absolute right-4 top-4 rounded-[12px] bg-gradient-to-r from-[#c1272d] to-[#f16464] px-3 py-1 text-[12px] font-bold uppercase tracking-wide text-[#fdf9f3]">
          New
        </span>
      )}
    </article>
  );
}
