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

const backgroundClasses = {
  light: "",
  dark: "text-white",
  cream: "",
  gradient: "",
};

const backgroundInlineStyles: Record<string, React.CSSProperties> = {
  light: { backgroundColor: '#ffffff' },
  dark: { backgroundColor: '#1a1a1f' },
  cream: { backgroundColor: '#fdfbf7' },
  gradient: { background: 'linear-gradient(to bottom, #fdfbf7, #ffffff)' },
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
        className={`${backgroundClasses[background]} ${paddingStyles[paddingY]} ${className}`}
        style={backgroundInlineStyles[background]}
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
      className={`${backgroundClasses[background]} ${paddingStyles[paddingY]} ${className}`}
      style={backgroundInlineStyles[background]}
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
          className="section-label font-semibold text-sm tracking-wider uppercase mb-4 inline-block"
          style={{ color: dark ? '#D4BC8C' : '#AB8D5E' }}
        >
          {label}
        </span>
      )}
      <h2
        className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold leading-tight mb-4"
        style={{ textWrap: "balance", color: dark ? '#ffffff' : '#1a1a1f' } as React.CSSProperties}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="text-lg md:text-xl leading-relaxed"
          style={{ color: dark ? '#b8b8c1' : '#5d5d6c' }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
