"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

const painPoints = [
  "Visible damage or storm wear that keeps you up during weather warnings",
  "Past contractor nightmares — delays, poor communication, failed work",
  "Terrified of making a $30K+ mistake you'll regret for decades",
  'Your home sits in "someday we\'ll handle this" limbo',
  "Wildly different quotes with no idea what's actually fair",
];

export function PainPoints() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="pain-points" className="relative py-20 md:py-28 overflow-hidden bg-charcoal-950">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary-500/5 rounded-full blur-3xl" />
      </div>

      <div ref={containerRef} className="relative z-10 section-padding container-wide">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary-400 text-sm font-semibold tracking-wider uppercase mb-4 block">
            Sound Familiar?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-white leading-tight">
            You&apos;re Not Alone
          </h2>
        </motion.div>

        {/* Pain Points Grid */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="grid gap-4">
            {painPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative"
              >
                <div className={`flex items-center gap-4 md:gap-6 p-5 md:p-6 rounded-2xl bg-white/5 border border-white/10
                               hover:bg-white/10 hover:border-primary-500/30 transition-all duration-300
                               ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                  <span className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary-500/20
                                   flex items-center justify-center text-primary-400 font-display font-bold text-lg md:text-xl">
                    {index + 1}
                  </span>
                  <p className="text-white/90 text-base md:text-lg leading-relaxed">
                    {point}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Truth Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="text-xl md:text-2xl text-white/80 font-display leading-relaxed mb-8">
            Here&apos;s the truth:{" "}
            <span className="text-primary-400 font-semibold">It&apos;s not your fault.</span>{" "}
            The construction industry makes it nearly impossible to make confident decisions.
          </p>

          <Button
            variant="primary"
            size="lg"
            icon={<ArrowRight className="w-5 h-5" />}
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Get Your Free Property Evaluation
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
