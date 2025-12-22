"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Eye,
  BookOpen,
  FileText,
  CheckCircle,
  Clock,
  Users,
} from "lucide-react";
import { Section } from "@/components/ui/Section";
import { EvaluationForm } from "@/components/forms/EvaluationForm";

const evaluationIncludes = [
  {
    icon: Eye,
    title: "Complete Property Assessment",
    description: "Revealing damage you can't see from the ground",
  },
  {
    icon: BookOpen,
    title: "Hands-on Material Education",
    description:
      "Understand the difference between builder-grade, mid-grade, and premium",
  },
  {
    icon: FileText,
    title: "Transparent Pricing Breakdown",
    description: "Exactly where every dollar goes—no hidden costs",
  },
];

const qualifications = [
  "Serious about protecting or improving their property",
  "Ready to make confident decisions once they have clarity",
  "Looking for a trusted partner",
  "Willing to invest in quality that lasts decades",
];

export function FinalCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Section
      background="gradient"
      paddingY="xl"
      id="contact"
      className="relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary-100/50 rounded-full blur-2xl" />

      <div ref={ref} className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">Limited Availability</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-charcoal-950 leading-tight mb-4">
              Claim Your{" "}
              <span className="text-primary-500">FREE</span> Property Evaluation
            </h2>
            <div className="inline-flex items-center gap-2 bg-charcoal-950 text-white px-4 py-2 rounded-full mb-6">
              <span className="text-charcoal-400">Valued at</span>
              <span className="text-xl font-display font-bold text-primary-400">
                $1,200
              </span>
            </div>

            <p className="text-lg text-charcoal-600 leading-relaxed mb-8">
              During your no-obligation evaluation, our certified experts will 
              assess your specific situation and show you exactly how to move 
              forward with complete confidence.
            </p>

            {/* What's Included */}
            <div className="space-y-4 mb-8">
              <h3 className="text-lg font-semibold text-charcoal-950">
                Here&apos;s what you&apos;ll discover:
              </h3>
              {evaluationIncludes.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
                    className="flex items-start gap-4"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-charcoal-950">
                        {item.title}
                      </h4>
                      <p className="text-sm text-charcoal-600">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Qualification Box */}
            <div className="bg-charcoal-950 rounded-2xl p-6 mb-8">
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-primary-400" />
                This is ONLY for Houston homeowners who are:
              </h3>
              <ul className="space-y-3">
                {qualifications.map((qual, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-trust-400 flex-shrink-0 mt-0.5" />
                    <span className="text-charcoal-300">{qual}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Scarcity Element */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="inline-flex items-center gap-3 bg-primary-100 border border-primary-200
                         rounded-xl px-5 py-3"
            >
              <Clock className="w-5 h-5 text-primary-600" />
              <span className="text-charcoal-800 font-medium">
                Places are strictly limited to{" "}
                <strong className="text-primary-700">5 residential clients</strong>{" "}
                per month.
              </span>
            </motion.div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="bg-white rounded-3xl shadow-soft-lg p-8 md:p-10 border border-charcoal-100">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-display font-semibold text-charcoal-950 mb-2">
                  Request Your Free Evaluation
                </h3>
                <p className="text-charcoal-600">
                  Fill out the form below and we&apos;ll contact you within 24 hours.
                </p>
              </div>

              <EvaluationForm />
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
