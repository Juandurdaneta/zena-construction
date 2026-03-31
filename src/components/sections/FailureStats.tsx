"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { AlertTriangle, ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export function FailureStats() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Section background="dark" paddingY="lg" className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl" />

      <div ref={ref} className="relative z-10 text-center max-w-3xl mx-auto">
        {/* Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center justify-center w-16 h-16 bg-primary-500/20 rounded-full mb-8"
        >
          <AlertTriangle className="w-8 h-8 text-primary-400" />
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-white leading-tight mb-8"
        >
          67% Of Houston Homeowners Regret Their Remodeling Decision{" "}
          <span className="text-primary-400">Within 5 Years</span>
        </motion.h2>

        {/* Body Copy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="space-y-6 mb-10"
        >
          <p className="text-lg text-white/80 leading-relaxed">
            Most homeowners end up regretting their kitchen, bathroom, or whole-home
            remodel within 5 years. It&apos;s not their fault &mdash; they just haven&apos;t been taught
            how to evaluate contractor claims, verify material quality, or spot the difference
            between genuine craftsmanship and smooth sales pitches.
          </p>
          <p className="text-lg text-white/80 leading-relaxed">
            It doesn&apos;t have to be this way for you. We can show you exactly how{" "}
            <strong className="text-white">100+ families</strong> created their dream spaces
            and avoided the regret, wasted money, and stress most homeowners experience.
          </p>
          <p className="text-xl text-white/90 font-display leading-relaxed">
            Reserve your consultation today to get the results you want much faster than you
            thought possible, without the nightmare stories you&apos;ve heard from neighbors.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <Button
            size="lg"
            icon={<ArrowRight className="w-5 h-5" />}
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Start Your Dream Remodel Today
          </Button>
        </motion.div>
      </div>
    </Section>
  );
}
