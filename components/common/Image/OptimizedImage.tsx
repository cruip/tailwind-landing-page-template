import Image, { ImageProps } from "next/image";
import { cn } from "@/lib/utils";

interface OptimizedImageProps extends Omit<ImageProps, "src"> {
  src: string | ImageProps["src"];
  className?: string;
}

export default function OptimizedImage({
  src,
  alt,
  className,
  ...props
}: OptimizedImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      className={cn("object-cover", className)}
      {...props}
    />
  );
}
