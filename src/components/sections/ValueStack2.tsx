"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Search,
  Clock,
  Paintbrush,
  Layout,
  ChevronDown,
  Sparkles,
} from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

const valuePoints = [
  {
    icon: Search,
    number: "01",
    title: 'The 7-Question "Remodeling Contractor BS Detector"',
    highlight: "Separates Quality From Smooth Talking",
    description:
      "These specific questions reveal contractor licensing, insurance validity, subcontractor vs. in-house crews, payment schedules, and change order policies\u201490% of homeowners never ask them.",
    details: [
      "Exact questions to ask about licensing and insurance validity",
      "How to evaluate subcontractor vs. in-house crew quality",
      "Payment schedule and change order red flags to watch for",
    ],
  },
  {
    icon: Clock,
    number: "02",
    title: "The Secret Timeline Your Remodel Should Actually Take",
    highlight: "Spot Over-Promising Contractors",
    description:
      "How long should your project REALLY take? We\u2019ll give you realistic timelines based on scope, so you can immediately spot contractors who over-promise or stretch projects unnecessarily.",
    details: [
      "Realistic timelines for kitchen, bathroom, and whole-home remodels",
      "Warning signs of contractors who over-promise on schedules",
      "How to identify projects being unnecessarily stretched out",
    ],
  },
  {
    icon: Paintbrush,
    number: "03",
    title: "What NEVER To Do When Choosing Finishes",
    highlight: "Avoid This Selection Mistake",
    description:
      "Please, never make this selection mistake: choosing materials in showroom lighting that look completely different in your home. We\u2019ll show you exactly how to test samples in your actual space.",
    details: [
      "Why showroom lighting deceives even experienced designers",
      "The exact process for testing samples in your home\u2019s lighting",
      "How to make finish selections you\u2019ll love for decades",
    ],
  },
  {
    icon: Layout,
    number: "04",
    title: 'The "Hidden" Decision That Determines If You Love Your Remodel in 10 Years',
    highlight: "It\u2019s Not the Countertops or Cabinets",
    description:
      "It\u2019s layout and workflow. 80% of homeowners focus only on aesthetics and ignore functionality, then hate using their \u201Cbeautiful\u201D kitchen daily.",
    details: [
      "Why layout and workflow matter more than surface finishes",
      "The functionality test that predicts long-term satisfaction",
      "How to balance aesthetics with daily usability",
    ],
  },
];

function ValueCard({
  point,
  index,
  isInView,
}: {
  point: (typeof valuePoints)[0];
  index: number;
  isInView: boolean;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const Icon = point.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group"
    >
      <div
        className={`bg-white rounded-2xl border-2 transition-all duration-300 overflow-hidden
                    ${isExpanded ? "border-primary-400 shadow-soft-lg" : "border-charcoal-100 hover:border-primary-200"}`}
      >
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full p-6 md:p-8 text-left flex items-start gap-5"
        >
          <div className="flex-shrink-0">
            <span className="block text-4xl font-display font-bold text-charcoal-200 group-hover:text-primary-300 transition-colors">
              {point.number}
            </span>
          </div>

          <div className="flex-grow min-w-0">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Icon className="w-5 h-5 text-primary-500" />
                  <span className="text-sm font-semibold text-primary-600 uppercase tracking-wide">
                    {point.highlight}
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-display font-semibold text-charcoal-950 mb-2">
                  {point.title}
                </h3>
                <p className="text-charcoal-600 leading-relaxed line-clamp-2">
                  {point.description}
                </p>
              </div>

              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="flex-shrink-0 w-10 h-10 bg-charcoal-100 group-hover:bg-primary-100
                           rounded-full flex items-center justify-center transition-colors"
              >
                <ChevronDown className="w-5 h-5 text-charcoal-600" />
              </motion.div>
            </div>
          </div>
        </button>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0 ml-[60px] md:ml-[76px]">
                <div className="border-t border-charcoal-100 pt-6">
                  <h4 className="text-sm font-semibold text-charcoal-950 uppercase tracking-wide mb-4">
                    What You&apos;ll Learn:
                  </h4>
                  <ul className="space-y-3">
                    {point.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Sparkles className="w-4 h-4 text-primary-500 flex-shrink-0 mt-1" />
                        <span className="text-charcoal-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export function ValueStack2() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Section background="gradient" paddingY="lg" id="value-stack-2">
      <SectionHeader
        label="Consultation Preview"
        title="Here's Another Taste Of What You Can Expect When You Book Your Complimentary Consultation..."
      />

      <div ref={ref} className="space-y-4 mb-12">
        {valuePoints.map((point, index) => (
          <ValueCard
            key={index}
            point={point}
            index={index}
            isInView={isInView}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
        transition={{ delay: 0.5, duration: 0.4 }}
        className="text-center"
      >
        <Button
          size="lg"
          icon={<ArrowRight className="w-5 h-5" />}
          onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
        >
          Start Your Dream Remodel Today
        </Button>
      </motion.div>
    </Section>
  );
}
