import { ReactNode } from "react";

interface CardProps {
  children?: ReactNode;
  overline?: string;
  title?: string;
  subtitle?: string;
  body?: string;
  className?: string;
}

export default function Card({
  children,
  overline,
  title,
  subtitle,
  body,
  className = "",
}: CardProps) {
  return (
    <div
      className={`bg-slate-900/50 border border-slate-800/50 rounded-xl p-8 hover:border-slate-700 transition-all ${className}`}
    >
      {overline && (
        <p className="text-purple-400 text-sm font-medium mb-2">{overline}</p>
      )}
      {title && <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>}
      {subtitle && (
        <p className="text-purple-400 text-sm font-medium mb-4">{subtitle}</p>
      )}
      {body && <p className="text-slate-300 leading-relaxed">{body}</p>}
      {children}
    </div>
  );
}
