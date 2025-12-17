"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, CheckCircle, Award } from "lucide-react";
import { Section } from "@/components/ui/Section";

const guarantees = [
  {
    title: "Roofing Workmanship",
    duration: "3-5 Year",
    description: "Complete coverage on all roofing installation and repairs",
  },
  {
    title: "Construction & Restoration",
    duration: "1-3 Year",
    description: "Full workmanship guarantee on all construction projects",
  },
  {
    title: "Material Warranties",
    duration: "Manufacturer",
    description: "Additional manufacturer warranties on all premium materials",
  },
];

export function Guarantee() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Section background="dark" paddingY="lg" id="guarantee" className="relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-trust-500/5 rounded-full blur-3xl" />

      <div ref={ref} className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label" style={{ color: '#fbbf24' }}>Peace of Mind</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-white leading-tight mb-6">
              Our Rock-Solid{" "}
              <span style={{ color: '#fbbf24' }}>Guarantee</span>
            </h2>
            <p className="text-lg leading-relaxed mb-8" style={{ color: '#b8b8c1' }}>
              At Zena Construction, every project is backed by industry-leading 
              warranties. We stand behind our work because we&apos;re confident in 
              the quality we deliver.
            </p>

            {/* Guarantee Cards */}
            <div className="space-y-4">
              {guarantees.map((guarantee, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
                  className="flex items-start gap-4 bg-white/5 rounded-xl p-5 border border-white/10"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'rgba(34, 197, 94, 0.2)' }}>
                    <CheckCircle className="w-6 h-6" style={{ color: '#4ade80' }} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-lg font-semibold text-white">
                        {guarantee.title}
                      </span>
                      <span className="px-2 py-0.5 text-xs font-bold rounded" style={{ backgroundColor: 'rgba(245, 158, 11, 0.2)', color: '#fbbf24' }}>
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
          </motion.div>

          {/* Right - Badge/Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Main Badge */}
              <div className="relative w-72 h-72 md:w-80 md:h-80">
                {/* Outer Ring */}
                <div className="absolute inset-0 rounded-full border-4 border-amber-500/30" />
                
                {/* Middle Ring */}
                <div className="absolute inset-4 rounded-full border-2 border-amber-500/20" />
                
                {/* Inner Circle */}
                <div className="absolute inset-8 rounded-full bg-gradient-to-br from-amber-500/20 to-amber-600/10 
                                flex flex-col items-center justify-center text-center p-6">
                  <Shield className="w-16 h-16 mb-3" style={{ color: '#fbbf24' }} />
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
                <div className="absolute -bottom-4 -left-4 w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#f59e0b' }}>
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
