import { ReactNode } from "react";

interface LinkProps {
  children: ReactNode;
  href: string;
  className?: string;
}

export default function Link({ children, href, className = "" }: LinkProps) {
  return (
    <a
      href={href}
      className={`inline-block text-sm text-purple-400 hover:text-purple-300 transition-colors font-medium ${className}`}
    >
      {children} →
    </a>
  );
}
