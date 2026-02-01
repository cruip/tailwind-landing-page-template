import OptimizedImage from "@/components/common/Image/OptimizedImage";
import { cn } from "@/lib/utils";

interface GoalCardProps {
  title: string;
  imageUrl: string;
  className?: string;
}

export default function GoalCard({ title, imageUrl, className }: GoalCardProps) {
  return (
    <div
      className={cn(
        "relative h-[282px] w-[282px] rounded-[24px] p-[2px] shadow-[0px_8px_12px_6px_rgba(0,0,0,0.15),0px_4px_4px_0px_rgba(0,0,0,0.3)]",
        className
      )}
      style={{
        backgroundImage:
          "linear-gradient(315deg, #df5f64 0%, rgba(255, 255, 255, 0) 50%, #df5f64 100%)",
      }}
    >
      <div className="relative flex h-full w-full items-center overflow-clip rounded-[23px]">
        <div className="relative aspect-[243/243] min-h-px min-w-px flex-[1_0_0]">
          <OptimizedImage
            src={imageUrl}
            alt={title}
            fill
            className="object-cover grayscale"
            sizes="282px"
          />
        </div>
        <div
          className="absolute left-[-2px] top-[-2px] h-[282px] w-[282px] rounded-[24px] backdrop-blur-[30px] mix-blend-multiply"
          style={{
            backgroundImage:
              "linear-gradient( rgba(0, 0, 0, 0) 55%, rgba(0, 0, 0, 0.25) 68%, rgba(0, 0, 0, 0.65) 78%, rgba(0, 0, 0, 0.92) 90%, rgba(0, 0, 0, 1) 100%)",
            opacity: 0.45,
          }}
        />
        <div className="absolute bottom-[37px] left-[22px] flex translate-y-1/2 flex-col justify-center whitespace-nowrap text-[32px] font-bold not-italic leading-[0] text-[#df5f64]">
          <p className="leading-normal">{title}</p>
        </div>
      </div>
    </div>
  );
}
