import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) => {
  const baseStyles =
  "font-medium inline-flex items-center justify-center rounded-full " +
  "transition-all duration-150 " +
  "active:translate-y-[1px] active:scale-[0.98] active:shadow-sm" +
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";


const variants = {
  primary:
    "bg-[hsl(var(--primary))] text-[hsl(var(--white))] hover:bg-[hsl(var(--primary)/0.9)] dark:hover:text-[#f5f9f7]",
  secondary:
    "bg-[hsl(var(--secondary))] text-[hsl(var(--green-1))] hover:bg-[hsl(var(--secondary)/0.9)]",
  outline:
    "border border-[hsl(var(--border))] text-[hsl(var(--green-1))] hover:bg-[hsl(var(--muted))]",
};


  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2.5 text-[14px]",
    lg: "px-8 py-3.5 text-lg",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;