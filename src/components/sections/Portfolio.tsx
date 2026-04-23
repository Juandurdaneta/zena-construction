"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Section, SectionHeader } from "@/components/ui/Section";

const featuredProjects = [
  { title: "Kitchen Remodel", category: "Full Renovation" },
  { title: "Master Bathroom", category: "Bathroom" },
  { title: "Bathroom & Closet", category: "Full Renovation" },
  { title: "Shower Renovation", category: "Bathroom" },
];

export function Portfolio() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Section background="light" paddingY="md" id="portfolio">
      <SectionHeader
        label="Our Work"
        title="Quality Craftsmanship You Can See"
        subtitle="Browse our portfolio of completed projects and see the difference that expert construction makes."
      />

      <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 max-w-4xl mx-auto">
        {featuredProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: index * 0.08, duration: 0.4 }}
            className="rounded-xl border border-charcoal-100 bg-white px-4 py-4 text-center hover:border-primary-300 transition-colors"
          >
            <span className="block text-[11px] font-semibold uppercase tracking-wider text-primary-600">
              {project.category}
            </span>
            <h3 className="mt-1 font-display font-semibold text-charcoal-950 text-base lg:text-lg">
              {project.title}
            </h3>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 0.4, duration: 0.4 }}
        className="mt-8 flex justify-center"
      >
        <Link
          href="/our-work"
          className="inline-flex items-center gap-2 px-6 py-3 bg-charcoal-950 text-white font-semibold
                     rounded-xl hover:bg-charcoal-900 transition-all duration-300 hover:-translate-y-0.5
                     hover:shadow-lg group"
        >
          View All Projects
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </Link>
      </motion.div>
    </Section>
  );
}
