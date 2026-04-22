"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, CheckCircle, Award } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

const guarantees = [
  {
    title: "Major Project Workmanship",
    duration: "3-5 Year",
    description: "Complete workmanship guarantee on kitchen, bathroom, and whole-home remodels",
  },
  {
    title: "Smaller Renovations",
    duration: "1-3 Year",
    description: "Full workmanship guarantee on all smaller renovation projects",
  },
  {
    title: "Decision Confidence Promise",
    duration: "100%",
    description: "If after your 90-minute consultation you don\u2019t feel 100% confident, we\u2019ll give you a $500 credit toward any future service",
  },
];

export function Guarantee() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Section background="dark" paddingY="lg" id="guarantee" className="relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-trust-500/5 rounded-full blur-3xl" />

      <div ref={ref} className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label" style={{ color: '#D4BC8C' }}>Peace of Mind</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-white leading-tight mb-6">
              Our Rock-Solid Workmanship{" "}
              <span style={{ color: '#D4BC8C' }}>Guarantee</span>
            </h2>
            <p className="text-lg leading-relaxed mb-4" style={{ color: '#b8b8c1' }}>
              Every Zena Construction remodel comes with real protection: 3-5 year
              workmanship guarantees on major projects and 1-3 year guarantees on
              smaller renovations. No fine print, no games, just work we stand behind.
            </p>
            <p className="text-lg leading-relaxed mb-8" style={{ color: '#b8b8c1' }}>
              Plus, if you choose us and aren&apos;t satisfied with our communication
              before we start the project, we&apos;ll refund your deposit, no questions asked.
            </p>

            {/* Guarantee Cards */}
            <div className="space-y-4 mb-8">
              {guarantees.map((guarantee, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
                  className="bg-white/5 rounded-xl p-5 border border-white/10"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-lg font-semibold text-white">
                        {guarantee.title}
                      </span>
                      <span className="px-2 py-0.5 text-xs font-bold rounded" style={{ backgroundColor: 'rgba(196, 167, 125, 0.2)', color: '#D4BC8C' }}>
                        {guarantee.duration}
                      </span>
                    </div>
                    <p className="text-sm" style={{ color: '#91919f' }}>
                      {guarantee.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Start Your Dream Remodel Today
            </Button>
          </motion.div>

          {/* Right - Badge/Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative max-w-full">
              {/* Main Badge */}
              <div className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80">
                {/* Outer Ring */}
                <div className="absolute inset-0 rounded-full border-4 border-primary-500/30" />

                {/* Middle Ring */}
                <div className="absolute inset-4 rounded-full border-2 border-primary-500/20" />

                {/* Inner Circle */}
                <div className="absolute inset-8 rounded-full bg-gradient-to-br from-primary-500/20 to-primary-600/10
                                flex flex-col items-center justify-center text-center p-6">
                  <Shield className="w-16 h-16 mb-3" style={{ color: '#D4BC8C' }} />
                  <span className="text-2xl font-display font-bold text-white mb-1">
                    100% Backed
                  </span>
                  <span className="text-sm" style={{ color: '#b8b8c1' }}>
                    Industry-Leading Warranties
                  </span>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#22c55e' }}>
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#C4A77D' }}>
                  <Award className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="absolute -top-8 -right-8 bg-white rounded-xl p-3 shadow-soft-lg"
              >
                <span className="text-2xl font-display font-bold" style={{ color: '#1a1a1f' }}>10+</span>
                <span className="text-xs block" style={{ color: '#5d5d6c' }}>Years</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
                className="absolute -bottom-8 -left-8 bg-white rounded-xl p-3 shadow-soft-lg"
              >
                <span className="text-2xl font-display font-bold" style={{ color: '#1a1a1f' }}>1000+</span>
                <span className="text-xs block" style={{ color: '#5d5d6c' }}>Projects</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
