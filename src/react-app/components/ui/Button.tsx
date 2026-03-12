import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  onClick?: () => void;
  href?: string;
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  onClick,
  href,
  className = "",
}: ButtonProps) {
  const variantClasses = {
    primary:
      "px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-lg hover:from-orange-600 hover:to-amber-700 transition-all font-semibold text-lg shadow-lg shadow-orange-500/20",
    secondary:
      "px-8 py-4 bg-transparent text-white rounded-lg hover:bg-slate-800 transition-all font-semibold text-lg border border-slate-700",
    ghost:
      "px-8 py-4 bg-transparent text-white rounded-lg hover:bg-slate-800 transition-all font-semibold text-lg border border-slate-700",
  };

  const baseClasses = `${variantClasses[variant]} ${className} text-center inline-block`;

  if (href) {
    return (
      <a href={href} className={baseClasses}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={baseClasses}>
      {children}
    </button>
  );
}
