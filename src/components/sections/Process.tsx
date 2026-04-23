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
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Calendar,
    title: "Schedule Your Consultation",
    description:
      "Book your free 90-minute remodeling consultation at a time that works for you.",
    color: "bg-amber-50 text-amber-700",
  },
  {
    icon: ClipboardCheck,
    title: "Space Assessment",
    description:
      "Our experts assess your kitchen or bathroom space and show you what\u2019s possible within your home\u2019s structure and budget.",
    color: "bg-stone-100 text-stone-600",
  },
  {
    icon: FileText,
    title: "Design & Pricing Clarity",
    description:
      "Get complete clarity on what your kitchen or bathroom space can become, transparent pricing you can trust, and material and design education with samples.",
    color: "bg-amber-100 text-amber-800",
  },
  {
    icon: Wrench,
    title: "Expert Execution",
    description:
      "Our expert crews deliver quality craftsmanship with clear timelines and daily updates.",
    color: "bg-stone-50 text-stone-700",
  },
  {
    icon: PartyPopper,
    title: "Dream Space Delivered",
    description:
      "Enjoy your transformed home backed by our rock-solid workmanship guarantee.",
    color: "bg-amber-50 text-amber-600",
  },
];

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Section background="light" paddingY="lg" id="process">
      <SectionHeader
        label="Our Process"
        title="Simply Follow Our Proven Kitchen & Bathroom Remodeling Process & You'll Avoid Costly Mistakes"
        subtitle="Why waste months struggling to figure this out alone? You can save time and get dramatically better results when you get expert design consultation and follow our proven kitchen and bathroom remodeling framework."
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
        <p className="text-xl text-charcoal-700 leading-relaxed font-display mb-8">
          Are you ready to stop putting off the kitchen remodel or bathroom renovation you&apos;ve wanted for years, stop feeling
          embarrassed about your outdated kitchen or bathroom, and{" "}
          <span className="text-charcoal-950 font-semibold">
            finally create the home you&apos;re proud to show guests?
          </span>
        </p>

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
