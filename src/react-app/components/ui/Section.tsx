import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  children: ReactNode;
  variant?: "dark" | "medium" | "light";
  className?: string;
}

export default function Section({
  id,
  children,
  variant = "dark",
  className = "",
}: SectionProps) {
  const variantClasses = {
    dark: "bg-slate-950/50",
    medium: "bg-slate-900/30",
    light: "bg-slate-900/50",
  };

  return (
    <section
      id={id}
      className={`py-24 px-6 ${variantClasses[variant]} ${className}`}
    >
      {children}
    </section>
  );
}
