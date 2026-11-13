import { ReactNode } from "react";

interface CardProps {
  children?: ReactNode;
  className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <div className={`bg-surface border border-ink/10 rounded-none ${className}`}>
      {children}
    </div>
  );
}

interface CardHeaderProps {
  children?: ReactNode;
  className?: string;
}

export function CardHeader({ children, className = "" }: CardHeaderProps) {
  return (
    <div className={`px-6 py-4 border-b border-ink/10 ${className}`}>
      {children}
    </div>
  );
}

interface CardContentProps {
  children?: ReactNode;
  className?: string;
}

export function CardContent({ children, className = "" }: CardContentProps) {
  return (
    <div className={`px-6 py-4 ${className}`}>
      {children}
    </div>
  );
}

interface CardFooterProps {
  children?: ReactNode;
  className?: string;
}

export function CardFooter({ children, className = "" }: CardFooterProps) {
  return (
    <div className={`px-6 py-4 border-t border-ink/10 ${className}`}>
      {children}
    </div>
  );
}
