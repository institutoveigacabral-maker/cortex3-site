import { ReactNode } from "react";

interface ListItemProps {
  children: ReactNode;
  color?: "purple" | "orange" | "indigo";
}

export function ListItem({ children, color = "purple" }: ListItemProps) {
  const colorClasses = {
    purple: "bg-purple-500",
    orange: "bg-orange-500",
    indigo: "bg-indigo-500",
  };

  return (
    <li className="flex items-start gap-3">
      <div
        className={`w-2 h-2 ${colorClasses[color]} rounded-full mt-2 flex-shrink-0`}
      />
      <p className="text-slate-300 leading-relaxed">{children}</p>
    </li>
  );
}

interface ListProps {
  children: ReactNode;
  className?: string;
}

export default function List({ children, className = "" }: ListProps) {
  return <ul className={`space-y-4 ${className}`}>{children}</ul>;
}
