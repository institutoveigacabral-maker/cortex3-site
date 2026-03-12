import { ReactNode } from "react";

interface StackProps {
  children: ReactNode;
  gap?: number;
  className?: string;
}

export default function Stack({ children, gap = 6, className = "" }: StackProps) {
  const gapClass = `space-y-${gap}`;

  return <div className={`${gapClass} ${className}`}>{children}</div>;
}
