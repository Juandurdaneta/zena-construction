"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Calendar,
  ClipboardCheck,
  FileText,
  Wrench,
  PartyPopper,
} from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";

const steps = [
  {
    icon: Calendar,
    title: "Schedule Your Evaluation",
    description:
      "Book your free 90-minute property evaluation at a time that works for you.",
    color: "bg-amber-100 text-amber-600",
  },
  {
    icon: ClipboardCheck,
    title: "Comprehensive Assessment",
    description:
      "Our certified experts inspect your property using thermal imaging and drone technology.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: FileText,
    title: "Clear Recommendations",
    description:
      "Receive a detailed report with transparent pricing and material education.",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: Wrench,
    title: "Expert Execution",
    description:
      "If you choose to proceed, our manufacturer-certified crews deliver quality work.",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: PartyPopper,
    title: "Peace of Mind",
    description:
      "Enjoy your transformed property backed by our rock-solid warranties.",
    color: "bg-rose-100 text-rose-600",
  },
];

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Section background="light" paddingY="lg" id="process">
      <SectionHeader
        label="Our Process"
        title="Simply Follow Our Proven Property Evaluation Process"
        subtitle="You'll avoid costly mistakes and get dramatically better results when you follow our proven decision framework."
      />

      <div ref={ref} className="relative">
        {/* Connection Line - Desktop */}
        <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-0.5 bg-charcoal-200" />

        {/* Mobile/Tablet Vertical Timeline */}
        <div className="lg:hidden flex flex-col items-center">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === steps.length - 1;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative flex flex-col items-center text-center w-full max-w-sm"
              >
                {/* Step Number */}
                <div className="w-10 h-10 bg-charcoal-950 text-white rounded-full flex items-center justify-center text-base font-bold z-10">
                  {index + 1}
                </div>

                {/* Connector Line to Icon */}
                <div className="w-0.5 h-4 bg-charcoal-200" />

                {/* Icon Container */}
                <div
                  className={`w-20 h-20 ${step.color} rounded-2xl flex items-center justify-center`}
                >
                  <Icon className="w-8 h-8" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-display font-semibold text-charcoal-950 mb-2 mt-4">
                  {step.title}
                </h3>
                <p className="text-sm text-charcoal-600 leading-relaxed px-4">
                  {step.description}
                </p>

                {/* Connector Line to Next Step */}
                {!isLast && <div className="w-0.5 h-8 bg-charcoal-200 mt-6" />}
              </motion.div>
            );
          })}
        </div>

        {/* Desktop Steps Grid */}
        <div className="hidden lg:grid lg:grid-cols-5 gap-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative text-center"
              >
                {/* Icon Container */}
                <div className="relative inline-flex mb-4">
                  <div
                    className={`w-20 h-20 ${step.color} rounded-2xl flex items-center justify-center
                                mx-auto relative z-10`}
                  >
                    <Icon className="w-8 h-8" />
                  </div>

                  {/* Step Number Badge */}
                  <div className="absolute -top-2 -right-2 w-7 h-7 bg-charcoal-950 text-white
                                  rounded-full flex items-center justify-center text-xs font-bold z-20">
                    {index + 1}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-display font-semibold text-charcoal-950 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-charcoal-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Emotional Close */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="mt-16 text-center max-w-3xl mx-auto"
      >
        <p className="text-xl text-charcoal-700 leading-relaxed font-display">
          Stop losing sleep over storm warnings. Stop carrying the mental weight 
          of an unresolved decision. 
          <span className="text-charcoal-950 font-semibold">
            {" "}Make a confident choice today.
          </span>
        </p>
      </motion.div>
    </Section>
  );
}
