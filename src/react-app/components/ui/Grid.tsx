import { ReactNode } from "react";

interface GridProps {
  children: ReactNode;
  cols?: 1 | 2 | 3 | 4;
  gap?: number;
  className?: string;
}

export default function Grid({
  children,
  cols = 2,
  gap = 6,
  className = "",
}: GridProps) {
  const colsClasses = {
    1: "grid-cols-1",
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  };

  const gapClass = `gap-${gap}`;

  return (
    <div className={`grid ${colsClasses[cols]} ${gapClass} ${className}`}>
      {children}
    </div>
  );
}
