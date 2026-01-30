import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  const baseStyles = "font-medium text-white transition-all duration-200";
  
  const variants = {
    primary: "rounded-xl bg-gradient-to-r from-red-700 to-red-500 hover:from-red-800 hover:to-red-600 shadow-md hover:shadow-lg active:scale-95",
    secondary: "rounded-xl bg-gray-800 hover:bg-gray-700 active:scale-95",
    outline: "rounded-xl border border-white/20 bg-transparent hover:bg-white/10 active:scale-95",
  };

  const sizes = {
    sm: "px-4 py-1.5 text-sm h-8",
    md: "px-6 py-2.5 text-sm h-10",
    lg: "px-6 py-3.5 text-sm h-14", // Height 56px (14 * 4px = 56px)
  };

  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
