"use client";

import { type ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: "light" | "dark" | "cream" | "gradient";
  containerWidth?: "narrow" | "wide" | "full";
  paddingY?: "sm" | "md" | "lg" | "xl";
  animate?: boolean;
}

const backgroundStyles = {
  light: "bg-white",
  dark: "bg-charcoal-950 text-white",
  cream: "bg-cream-100",
  gradient: "bg-gradient-to-b from-cream-100 to-white",
};

const containerStyles = {
  narrow: "max-w-5xl mx-auto",
  wide: "max-w-7xl mx-auto",
  full: "w-full",
};

const paddingStyles = {
  sm: "py-12 md:py-16",
  md: "py-16 md:py-24",
  lg: "py-20 md:py-32",
  xl: "py-24 md:py-40",
};

export function Section({
  children,
  className = "",
  id,
  background = "cream",
  containerWidth = "wide",
  paddingY = "lg",
  animate = true,
}: SectionProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const content = (
    <div className={`section-padding ${containerStyles[containerWidth]}`}>
      {children}
    </div>
  );

  if (!animate) {
    return (
      <section
        id={id}
        className={`${backgroundStyles[background]} ${paddingStyles[paddingY]} ${className}`}
      >
        {content}
      </section>
    );
  }

  return (
    <motion.section
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`${backgroundStyles[background]} ${paddingStyles[paddingY]} ${className}`}
    >
      {content}
    </motion.section>
  );
}

interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  alignment?: "left" | "center";
  dark?: boolean;
}

export function SectionHeader({
  label,
  title,
  subtitle,
  alignment = "center",
  dark = false,
}: SectionHeaderProps) {
  const alignmentStyles = alignment === "center" ? "text-center mx-auto" : "";

  return (
    <div className={`max-w-3xl mb-12 md:mb-16 ${alignmentStyles}`}>
      {label && (
        <span
          className={`section-label ${dark ? "text-amber-400" : "text-amber-600"}`}
        >
          {label}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-display font-semibold leading-tight mb-4 ${
          dark ? "text-white" : "text-charcoal-950"
        }`}
        style={{ textWrap: "balance" } as React.CSSProperties}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-lg md:text-xl leading-relaxed ${
            dark ? "text-charcoal-300" : "text-charcoal-600"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
