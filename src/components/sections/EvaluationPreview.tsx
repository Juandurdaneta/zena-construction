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
    title: "Hidden Damage Warning",
    highlight: "$15K+ in Hidden Damage",
    description:
      "Can you see your roof deck? Your attic ventilation? Water behind your siding? We use thermal imaging and drones to reveal damage most homeowners never discover until it becomes an expensive emergency.",
    details: [
      "Thermal imaging reveals moisture intrusion invisible to the naked eye",
      "Drone inspection captures roof conditions safely and comprehensively",
      "Detailed photo documentation of all findings",
    ],
  },
  {
    icon: Lightbulb,
    number: "02",
    title: "Material Selection Strategy",
    highlight: "Avoid $10K Mistakes",
    description:
      "We'll reveal the exact framework we use to match materials to your situation: when premium makes sense, when mid-grade is smarter, and how to avoid both overspending AND going dangerously cheap.",
    details: [
      "Side-by-side material comparisons tailored to your property",
      "Cost-benefit analysis for each tier of materials",
      "Long-term value projections based on Houston's climate",
    ],
  },
  {
    icon: AlertOctagon,
    number: "03",
    title: "5 Devastating Mistakes",
    highlight: "Nearly Every Houston Property Owner Makes",
    description:
      "Almost everyone planning roofing or construction makes these common yet costly mistakes: choosing on price alone, accepting vague specs, ignoring ventilation, trusting 'per square' pricing, making color choices without design guidance.",
    details: [
      "How to spot red flags in contractor bids",
      "Questions to ask that reveal expertise (or lack thereof)",
      "Warning signs in contracts and quotes",
    ],
  },
  {
    icon: TrendingUp,
    number: "04",
    title: "3 Value-Add Material Decisions",
    highlight: "$40K+ Property Value Increase",
    description:
      "These strategic choices cost surprisingly little more upfront but dramatically increase curb appeal and resale value—most contractors never mention them because they don't understand property investment strategy.",
    details: [
      "Which upgrades deliver the highest ROI",
      "Design choices that boost curb appeal significantly",
      "Strategic improvements that appraisers notice",
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
        label="Free Property Evaluation"
        title="Here's What We'll Cover In Your FREE Property Evaluation..."
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
          <span style={{ color: '#91919f' }}>•</span>
          <span className="font-semibold text-primary-400" >Yours FREE</span>
        </div>

        <div className="block">
          <Button
            size="lg"
            icon={<ArrowRight className="w-5 h-5" />}
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Claim Your Free Evaluation
          </Button>
        </div>
      </motion.div>
    </Section>
  );
}
