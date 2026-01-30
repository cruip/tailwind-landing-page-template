import Image, { StaticImageData } from "next/image";

interface TrainerCardProps {
  image: StaticImageData | string;
  name: string;
  role: string;
  company: string;
  companyLink: string;
  quote: string;
  highlight?: string;
}

export default function TrainerCard({
  image,
  name,
  role,
  company,
  companyLink,
  quote,
  highlight,
}: TrainerCardProps) {
  return (
    <div className="space-y-3 text-center">
      <div className="relative inline-flex">
        <svg
          className="absolute -left-6 -top-2 -z-10"
          width={40}
          height={49}
          viewBox="0 0 40 49"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.7976 -0.000136375L39.9352 23.4746L33.4178 31.7234L13.7686 11.4275L22.7976 -0.000136375ZM9.34947 17.0206L26.4871 40.4953L19.9697 48.7441L0.320491 28.4482L9.34947 17.0206Z"
            fill="#D1D5DB"
          />
        </svg>
        <Image
          className="rounded-full"
          src={image}
          width={48}
          height={48}
          alt={name}
        />
      </div>
      <p className="text-2xl font-bold text-gray-900">
        {quote.split(highlight || "").map((part, index, array) => (
          <span key={index}>
            {part}
            {index < array.length - 1 && (
              <em className="italic text-gray-500">{highlight}</em>
            )}
          </span>
        ))}
      </p>
      <div className="text-sm font-medium text-gray-500">
        <span className="text-gray-700">{name}</span>{" "}
        <span className="text-gray-400">/</span>{" "}
        <a className="text-blue-500" href={companyLink}>
          {role} at {company}
        </a>
      </div>
    </div>
  );
}
