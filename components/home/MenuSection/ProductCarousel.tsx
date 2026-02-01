import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import ProductCard, { ProductData } from "./ProductCard";

interface ProductCarouselProps {
  products: ProductData[];
  className?: string;
}

const ProductCarousel = forwardRef<HTMLDivElement, ProductCarouselProps>(
  ({ products, className }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex gap-6 overflow-x-auto pb-2 pr-24", className)}
      >
        {products.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>
    );
  }
);

ProductCarousel.displayName = "ProductCarousel";

export default ProductCarousel;
