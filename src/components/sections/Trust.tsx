"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Palette,
  Award,
  TrendingUp,
  Handshake,
  Heart,
} from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

const benefits = [
  {
    icon: Palette,
    title: "Design Clarity",
    description:
      "Know exactly what\u2019s possible in your space, what works with your home\u2019s structure, and what fits your budget.",
  },
  {
    icon: Award,
    title: "Quality That Lasts",
    description:
      "Premium materials, expert installation, and craftsmanship you\u2019ll be proud of for 30+ years.",
  },
  {
    icon: TrendingUp,
    title: "Property Value Protection",
    description:
      "Clear ROI projections showing how your remodel adds $40K-$80K to your home\u2019s worth.",
  },
  {
    icon: Heart,
    title: "Stress-Free Process",
    description:
      "No more wondering if you chose the right contractor, just clear timelines, daily updates, and work that exceeds expectations.",
  },
  {
    icon: Handshake,
    title: "One Partner for Life",
    description:
      "Never search for contractors again\u2014one trusted relationship for all future home projects.",
  },
];

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "1,000+", label: "Homes Transformed" },
  { value: "100+", label: "Families Guided" },
  { value: "98%", label: "Client Satisfaction" },
];

export function Trust() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Section background="light" paddingY="lg" id="trust">
      <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Column - Image & Stats */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Main Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-soft-lg">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
              alt="Beautiful Houston home transformation"
              className="w-full h-[320px] sm:h-[400px] md:h-[500px] object-cover"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/40 to-transparent" />
          </div>

          {/* Floating Stats Card */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.95 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="relative mt-[-32px] mx-4 md:mx-0 md:absolute md:-bottom-6 md:-right-6 lg:bottom-8 lg:-right-8 bg-white rounded-2xl p-4 md:p-6 shadow-soft-lg border border-charcoal-100"
          >
            <div className="grid grid-cols-4 md:grid-cols-2 gap-3 md:gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-xl md:text-3xl font-display font-bold text-primary-500">
                    {stat.value}
                  </div>
                  <div className="text-[10px] md:text-xs text-charcoal-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Decorative element */}
          <div className="hidden md:block absolute -top-4 -left-4 w-24 h-24 bg-primary-100 rounded-2xl -z-10" />
        </motion.div>

        {/* Right Column - Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="section-label">Why Choose Zena</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-charcoal-950 leading-tight mb-6">
            Finally... A Clear Path To Your Dream Home Without Months Of Remodeling{" "}
            <span className="text-primary-500">Chaos</span>
          </h2>
          <p className="text-lg text-charcoal-600 leading-relaxed mb-8">
            You&apos;re not looking for the cheapest remodel. You&apos;re looking for
            someone you can trust to tell you the truth about what your project
            needs, what it will cost, and what quality actually looks like.
          </p>
          <p className="text-charcoal-600 leading-relaxed mb-4">
            In the last 10 years, we&apos;ve guided <strong>1,000+ homeowners</strong> through
            this exact situation, whether they came to us with:
          </p>
          <ul className="text-charcoal-600 leading-relaxed mb-4 space-y-1 list-disc pl-5">
            <li>An outdated kitchen they&apos;d been dreaming of renovating for years</li>
            <li>A bathroom that needed complete transformation</li>
            <li>A whole-home remodel to create their forever space</li>
            <li>Fire or water damage requiring complete restoration</li>
          </ul>
          <p className="text-charcoal-600 leading-relaxed mb-8">
            We developed a <strong>proven consultation process</strong> that takes you from
            overwhelmed to confident in just 90 minutes.
          </p>

          {/* Benefits List */}
          <div className="space-y-4 mb-10">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal-950 mb-1">
                      {benefit.title}
                    </h4>
                    <p className="text-sm text-charcoal-600">{benefit.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <Button
            size="lg"
            icon={<ArrowRight className="w-5 h-5" />}
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Start Your Dream Remodel Today
          </Button>
        </motion.div>
      </div>
    </Section>
  );
}
