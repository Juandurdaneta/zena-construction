"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Eye,
  Lightbulb,
  AlertOctagon,
  TrendingUp,
  ChevronDown,
  Sparkles,
} from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

const evaluationPoints = [
  {
    icon: Eye,
    number: "01",
    title: "Your Kitchen Remodel or Bathroom Renovation Could Cost $20K+ More Than Quoted If These Issues Aren\u2019t Addressed Upfront",
    highlight: "WARNING: Hidden Costs",
    description:
      "Hidden plumbing issues, electrical upgrades, structural modifications; we assess everything during initial consultation so there are no mid-project surprises that blow your kitchen or bathroom renovation budget.",
    details: [
      "Complete plumbing and electrical assessment before work begins",
      "Structural evaluation to identify potential modifications needed",
      "Detailed scope documentation to prevent surprise change orders",
    ],
  },
  {
    icon: Lightbulb,
    number: "02",
    title: "The Proven Material Selection Strategy We\u2019ve Used To Help 100+ Homes Get Designer Kitchen and Bathroom Results Without Designer Prices",
    highlight: "Designer Results Without Designer Prices",
    description:
      "We\u2019ll reveal the exact framework we use: when to splurge on impact materials (kitchen countertops, bathroom fixtures), when builder-grade is perfectly fine (inside kitchen cabinets), and how to maximize every dollar in your remodel.",
    details: [
      "Side-by-side material comparisons tailored to your project",
      "Cost-benefit analysis showing where to invest and where to save",
      "100+ families have used this strategy for designer results on a budget",
    ],
  },
  {
    icon: AlertOctagon,
    number: "03",
    title: "The 5 Mistakes Made By Nearly Every Homeowner Planning A Kitchen or Bathroom Remodel",
    highlight: "Avoid Costly Remodeling Errors",
    description:
      "Choosing contractors on price alone, not planning for hidden costs in bathroom plumbing or kitchen electrical, skipping the design phase, making permanent kitchen cabinet or bathroom tile choices without seeing samples in your lighting, trusting vague timelines. Find out how to avoid them all.",
    details: [
      "How to spot red flags in contractor bids and vague quotes",
      "Why skipping the design phase costs you more long-term",
      "The fixture selection mistake that leads to years of regret",
    ],
  },
  {
    icon: TrendingUp,
    number: "04",
    title: "3 Kitchen & Bathroom Design Decisions That Add $50K+ To Your Home Value Without Breaking Your Budget",
    highlight: "$50K+ Home Value Increase",
    description:
      "Strategic choices in kitchen layout, bathroom tile selections, countertop materials, and cabinet finishes that dramatically increase resale value and daily enjoyment. Most contractors never mention them because they don\u2019t understand property investment strategy.",
    details: [
      "Layout changes that transform both functionality and value",
      "Material and finish selections that appraisers notice immediately",
      "Design decisions that boost daily enjoyment and resale price",
    ],
  },
  {
    icon: Eye,
    number: "05",
    title: "The TRUTH About Why Kitchen Remodel Pricing Varies By $40K For \u201cThe Same Work\u201d",
    highlight: "The Cold Hard TRUTH",
    description:
      "One contractor quotes $35K for your kitchen remodel, another $75K. We\u2019ll show you exactly what accounts for the difference: kitchen cabinet quality, countertop materials, bathroom fixture grades, labor standards, and where cheap pricing will cost you more long-term.",
    details: [
      "Cabinet quality tiers and what you actually get at each price point",
      "How labor standards affect the longevity of your remodel",
      "Where cheap pricing will cost you more in the long run",
    ],
  },
];

function EvaluationCard({
  point,
  index,
  isInView,
}: {
  point: (typeof evaluationPoints)[0];
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
        {/* Header - Always Visible */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full p-6 md:p-8 text-left flex items-start gap-5"
        >
          {/* Number Badge */}
          <div className="flex-shrink-0">
            <span className="block text-4xl font-display font-bold text-charcoal-200 group-hover:text-primary-300 transition-colors">
              {point.number}
            </span>
          </div>

          {/* Content */}
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

              {/* Expand Icon */}
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

        {/* Expandable Content */}
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

export function EvaluationPreview() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Section background="gradient" paddingY="lg" id="evaluation">
      <SectionHeader
        label="Free Remodeling Consultation"
        title="Here's A Brief Outline Of What We'll Cover In Your FREE Kitchen & Bathroom Remodeling Consultation..."
        subtitle="A 90-minute session that takes you from confusion to complete clarity."
      />

      <div ref={ref} className="space-y-4 mb-12">
        {evaluationPoints.map((point, index) => (
          <EvaluationCard
            key={index}
            point={point}
            index={index}
            isInView={isInView}
          />
        ))}
      </div>

      {/* Value Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
        transition={{ delay: 0.5, duration: 0.4 }}
        className="text-center"
      >
        <div className="inline-flex items-center gap-3 text-white px-8 py-4 rounded-full mb-8" style={{ backgroundColor: '#1a1a1f' }}>
          <span style={{ color: '#91919f' }}>Total Value:</span>
          <span className="text-2xl font-display font-bold">
            $1,200
          </span>
          <span style={{ color: '#91919f' }}>&bull;</span>
          <span className="font-semibold text-primary-400" >Yours FREE</span>
        </div>

        <div className="block">
          <Button
            size="lg"
            icon={<ArrowRight className="w-5 h-5" />}
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Start Your Dream Remodel Today
          </Button>
        </div>
      </motion.div>
    </Section>
  );
}
