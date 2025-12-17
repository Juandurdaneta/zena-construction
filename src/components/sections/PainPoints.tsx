"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  AlertTriangle,
  Clock,
  HelpCircle,
  Home,
  DollarSign,
} from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

const painPoints = [
  {
    icon: AlertTriangle,
    title: "Property Condition Worries",
    description:
      "Visible damage, aging materials, or storm wear that keeps you up during weather warnings.",
  },
  {
    icon: Clock,
    title: "Past Contractor Nightmares",
    description:
      "Timeline delays, poor communication, or work that looked fine until it failed.",
  },
  {
    icon: HelpCircle,
    title: "Decision Paralysis",
    description:
      "Terrified of making a $30K+ mistake you'll regret for decades, whether fixing critical damage or planning upgrades.",
  },
  {
    icon: Home,
    title: "Neighbor Comparison",
    description:
      'Frustrated watching neighbors improve their homes while yours sits in "someday we\'ll handle this" limbo.',
  },
  {
    icon: DollarSign,
    title: "Pricing Confusion",
    description:
      'One contractor quotes $18K, another $42K for "the same work," and you have no idea what accounts for the difference.',
  },
];

export function PainPoints() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <Section background="cream" paddingY="lg" id="pain-points">
      <SectionHeader
        title="Most Homeowners Are Struggling With the Same Issues..."
        subtitle="Sound familiar? You're not alone. These challenges affect thousands of Houston homeowners every year."
      />

      <div ref={containerRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {painPoints.map((point, index) => {
          const Icon = point.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative bg-white rounded-2xl p-6 border border-charcoal-100 
                         hover:border-amber-200 hover:shadow-soft-lg transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-charcoal-100 group-hover:bg-amber-100 
                              rounded-xl flex items-center justify-center mb-4 
                              transition-colors duration-300">
                <Icon className="w-6 h-6 text-charcoal-600 group-hover:text-amber-600 transition-colors" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-display font-semibold text-charcoal-950 mb-2">
                {point.title}
              </h3>
              <p className="text-charcoal-600 leading-relaxed text-sm">
                {point.description}
              </p>

              {/* Hover decoration */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-amber-50 to-transparent 
                              rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          );
        })}
      </div>

      {/* Truth Statement */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="relative bg-charcoal-950 rounded-3xl p-8 md:p-12 text-center overflow-hidden"
      >
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-500/5 rounded-full blur-2xl" />

        <div className="relative z-10">
          <p className="text-xl md:text-2xl text-white font-display leading-relaxed mb-6 max-w-3xl mx-auto">
            Here&apos;s the truth:{" "}
            <span className="text-amber-400 font-semibold">It&apos;s not your fault.</span>{" "}
            The construction industry makes it nearly impossible to make confident 
            decisions, whether you&apos;re fixing urgent problems or planning strategic upgrades.
          </p>

          <Button
            variant="primary"
            size="lg"
            icon={<ArrowRight className="w-5 h-5" />}
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Get Your Free Property Evaluation
          </Button>
        </div>
      </motion.div>
    </Section>
  );
}
