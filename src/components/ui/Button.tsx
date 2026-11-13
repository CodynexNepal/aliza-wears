import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
}

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const baseClasses = "font-semibold rounded-none transition-colors focus:outline-none focus:ring-2 focus:ring-lime focus:ring-offset-2";
  
  const variantClasses = {
    primary: "bg-lime text-ink hover:bg-lime-dark",
    secondary: "bg-ink text-alabaster hover:bg-ink/90",
    ghost: "bg-transparent text-ink hover:bg-ink/5",
  };
  
  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };
  
  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
