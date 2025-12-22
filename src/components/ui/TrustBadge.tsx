"use client";

import { motion } from "framer-motion";
import { Shield, Award, Users, CheckCircle } from "lucide-react";

interface TrustBadgeProps {
  icon: "shield" | "award" | "users" | "check";
  text: string;
  className?: string;
}

const icons = {
  shield: Shield,
  award: Award,
  users: Users,
  check: CheckCircle,
};

export function TrustBadge({ icon, text, className = "" }: TrustBadgeProps) {
  const Icon = icons[icon];

  return (
    <div
      className={`inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm 
                  rounded-full shadow-soft border border-charcoal-100 ${className}`}
    >
      <Icon className="w-4 h-4 text-trust-600" />
      <span className="text-sm font-medium text-charcoal-700">{text}</span>
    </div>
  );
}

interface TrustBannerProps {
  className?: string;
  variant?: "light" | "dark";
}

export function TrustBanner({ className = "", variant = "light" }: TrustBannerProps) {
  const badges = [
    { icon: "shield" as const, text: "IICRC Certified" },
    { icon: "award" as const, text: "10+ Years Experience" },
    { icon: "users" as const, text: "1,000+ Properties Transformed" },
  ];

  const bgStyles = variant === "light"
    ? "bg-charcoal-50/80 backdrop-blur-sm border-charcoal-200"
    : "bg-charcoal-950/90 backdrop-blur-sm border-charcoal-600";

  const textStyles = variant === "light"
    ? "text-charcoal-700"
    : "text-white";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.5 }}
      className={`flex flex-wrap items-center justify-center gap-4 md:gap-8 
                  px-6 py-4 rounded-2xl border ${bgStyles} ${className}`}
    >
      {badges.map((badge, index) => {
        const Icon = icons[badge.icon];
        return (
          <div
            key={index}
            className={`flex items-center gap-2 ${textStyles}`}
          >
            <Icon className="w-5 h-5 text-primary-500" />
            <span className="text-sm font-medium whitespace-nowrap">{badge.text}</span>
          </div>
        );
      })}
    </motion.div>
  );
}
