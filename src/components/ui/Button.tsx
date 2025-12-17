"use client";

import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
  loading?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: `
    bg-amber-500 text-charcoal-950 
    hover:bg-amber-400 
    focus:ring-amber-500/30
    shadow-sm hover:shadow-md
  `,
  secondary: `
    bg-charcoal-950 text-white 
    hover:bg-charcoal-800 
    focus:ring-charcoal-500/30
    shadow-sm hover:shadow-md
  `,
  outline: `
    bg-transparent border-2 border-charcoal-950 text-charcoal-950 
    hover:bg-charcoal-950 hover:text-white 
    focus:ring-charcoal-500/30
  `,
  ghost: `
    bg-transparent text-charcoal-700 
    hover:bg-charcoal-100 hover:text-charcoal-950 
    focus:ring-charcoal-500/30
  `,
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm gap-1.5",
  md: "px-6 py-3 text-base gap-2",
  lg: "px-8 py-4 text-lg gap-2.5",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      icon,
      iconPosition = "right",
      fullWidth = false,
      loading = false,
      className = "",
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles = `
      inline-flex items-center justify-center 
      font-semibold rounded-xl
      transition-all duration-300 ease-out
      focus:outline-none focus:ring-4
      disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
    `;

    return (
      <motion.button
        ref={ref}
        whileHover={!disabled ? { y: -2 } : undefined}
        whileTap={!disabled ? { y: 0, scale: 0.98 } : undefined}
        className={`
          ${baseStyles}
          ${variantStyles[variant]}
          ${sizeStyles[size]}
          ${fullWidth ? "w-full" : ""}
          ${className}
        `}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? (
          <span className="inline-flex items-center gap-2">
            <svg
              className="animate-spin h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Loading...
          </span>
        ) : (
          <>
            {icon && iconPosition === "left" && icon}
            {children}
            {icon && iconPosition === "right" && icon}
          </>
        )}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
