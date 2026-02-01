import OptimizedImage from "@/components/common/Image/OptimizedImage";
import { cn } from "@/lib/utils";

interface TrainerCardProps {
  name: string;
  title: string;
  imageUrl: string;
  className?: string;
}

export default function TrainerCard({
  name,
  title,
  imageUrl,
  className,
}: TrainerCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[24px] shadow-[0_6px_10px_4px_rgba(0,0,0,0.15),0_2px_3px_0_rgba(0,0,0,0.3)]",
        className
      )}
    >
      <div className="relative aspect-[3/4]">
        <OptimizedImage
          src={imageUrl}
          alt={name}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 320px, 240px"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/70 mix-blend-multiply" />
      </div>
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 text-[#fdf9f3]">
        <div>
          <p className="text-[22px] font-bold leading-tight md:text-[24px]">
            {name}
          </p>
          <p className="text-[14px] text-white/80">{title}</p>
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-[12px] border-2 border-[#df5f64] text-[#df5f64]">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <path d="M7 17L17 7" />
            <path d="M7 7h10v10" />
          </svg>
        </div>
      </div>
    </div>
  );
}
