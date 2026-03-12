import { ReactNode } from "react";

interface TextProps {
  children: ReactNode;
  variant?: "body-lg" | "body" | "caption";
  className?: string;
}

export default function Text({
  children,
  variant = "body",
  className = "",
}: TextProps) {
  const variantClasses = {
    "body-lg": "text-xl md:text-2xl text-slate-300 leading-relaxed",
    body: "text-lg text-slate-300 leading-relaxed",
    caption: "text-sm text-slate-400 leading-relaxed",
  };

  return <p className={`${variantClasses[variant]} ${className}`}>{children}</p>;
}
