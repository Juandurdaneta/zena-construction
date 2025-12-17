"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { TrustBanner } from "@/components/ui/TrustBadge";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgba(26, 26, 31, 0.92) 0%, rgba(26, 26, 31, 0.75) 45%, rgba(26, 26, 31, 0.35) 100%)'
          }}
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-amber-500/5 rounded-full blur-2xl" />

      {/* Content */}
      <div className="relative z-10 section-padding container-wide pt-32 pb-20">
        <div className="max-w-4xl">
          {/* Pre-headline Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/20 rounded-full mb-8"
          >
            <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
            <span className="text-amber-300 text-sm font-medium">
              Houston&apos;s Trusted Construction Partner
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-semibold text-white leading-[1.1] mb-6"
            style={{ textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}
          >
            Transform Your Property Into Your{" "}
            <span className="relative">
              <span className="relative z-10 text-amber-400">Best Investment</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute bottom-2 left-0 right-0 h-3 bg-amber-500/30 -rotate-1 origin-left"
              />
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl md:text-2xl text-white/90 leading-relaxed mb-10 max-w-2xl"
            style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}
          >
            Without contractor nightmares, budget surprises, or 30 years of buyer&apos;s remorse. 
            Discover exactly what your home needs with{" "}
            <span className="text-white font-medium">zero obligation</span> and{" "}
            <span className="text-white font-medium">complete transparency</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <Button
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get Your Free Property Evaluation
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="text-white border-2 border-white/50 hover:bg-white/10 hover:border-white/70"
              icon={<Play className="w-5 h-5" />}
              iconPosition="left"
            >
              See Our Work
            </Button>
          </motion.div>

          {/* Trust Banner */}
          <TrustBanner variant="dark" />
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1 h-2 bg-white/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
