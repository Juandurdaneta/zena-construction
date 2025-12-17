"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "elevated" | "bordered" | "ghost";
  hover?: boolean;
  padding?: "sm" | "md" | "lg";
}

const variantStyles = {
  default: "bg-white shadow-soft",
  elevated: "bg-white shadow-soft-lg border border-charcoal-100",
  bordered: "bg-white border-2 border-charcoal-200",
  ghost: "bg-charcoal-50/50",
};

const paddingStyles = {
  sm: "p-4 md:p-5",
  md: "p-6 md:p-8",
  lg: "p-8 md:p-10",
};

export function Card({
  children,
  className = "",
  variant = "default",
  hover = true,
  padding = "md",
}: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -4 } : undefined}
      transition={{ duration: 0.2 }}
      className={`
        rounded-2xl ${variantStyles[variant]} ${paddingStyles[padding]}
        ${hover ? "transition-shadow duration-300 hover:shadow-soft-lg" : ""}
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}

interface IconCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  iconBg?: string;
  className?: string;
}

export function IconCard({
  icon,
  title,
  description,
  iconBg = "bg-amber-100",
  className = "",
}: IconCardProps) {
  return (
    <Card className={className}>
      <div
        className={`w-14 h-14 ${iconBg} rounded-xl flex items-center justify-center mb-5 text-amber-600`}
      >
        {icon}
      </div>
      <h3 className="text-xl font-display font-semibold text-charcoal-950 mb-3">
        {title}
      </h3>
      <p className="text-charcoal-600 leading-relaxed">{description}</p>
    </Card>
  );
}

interface NumberCardProps {
  number: string;
  title: string;
  description: string;
  className?: string;
}

export function NumberCard({
  number,
  title,
  description,
  className = "",
}: NumberCardProps) {
  return (
    <Card className={className} variant="bordered">
      <div className="flex items-start gap-5">
        <span className="text-5xl font-display font-bold text-amber-500">
          {number}
        </span>
        <div>
          <h3 className="text-xl font-display font-semibold text-charcoal-950 mb-2">
            {title}
          </h3>
          <p className="text-charcoal-600 leading-relaxed">{description}</p>
        </div>
      </div>
    </Card>
  );
}
