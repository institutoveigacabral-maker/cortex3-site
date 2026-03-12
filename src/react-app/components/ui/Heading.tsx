import { ReactNode } from "react";

interface HeadingProps {
  children: ReactNode;
  variant?: "display" | "h1" | "h2" | "h3";
  centered?: boolean;
  className?: string;
}

export default function Heading({
  children,
  variant = "h2",
  centered = false,
  className = "",
}: HeadingProps) {
  const variantClasses = {
    display:
      "text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight",
    h1: "text-5xl md:text-6xl font-bold text-white leading-tight",
    h2: "text-4xl font-bold text-white",
    h3: "text-2xl font-bold text-white",
  };

  const centeredClass = centered ? "text-center" : "";

  return (
    <h2
      className={`${variantClasses[variant]} ${centeredClass} ${className}`}
    >
      {children}
    </h2>
  );
}
