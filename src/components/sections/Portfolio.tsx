"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Section, SectionHeader } from "@/components/ui/Section";

const featuredProjects = [
  {
    src: "/images/portfolio/Steve Full Kitchen Remodel.png",
    alt: "Full Kitchen Remodel",
    title: "Kitchen Remodel",
    category: "Full Renovation",
  },
  {
    src: "/images/portfolio/Christina Master Bathroom.png",
    alt: "Master Bathroom Renovation",
    title: "Master Bathroom",
    category: "Bathroom",
  },
  {
    src: "/images/portfolio/Bryan Master Bathroom_Master Closet Remodel.png",
    alt: "Master Bathroom and Closet Remodel",
    title: "Bathroom & Closet",
    category: "Full Renovation",
  },
  {
    src: "/images/portfolio/Alex Master Bathroom Shower.png",
    alt: "Master Bathroom Shower",
    title: "Shower Renovation",
    category: "Bathroom",
  },
];

export function Portfolio() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Section background="light" paddingY="lg" id="portfolio">
      <SectionHeader
        label="Our Work"
        title="Quality Craftsmanship You Can See"
        subtitle="Browse our portfolio of completed projects and see the difference that expert construction makes."
      />

      <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {featuredProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group relative aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer"
          >
            <Image
              src={project.src}
              alt={project.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-charcoal-950/20 to-transparent
                            opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6">
              <span className="text-primary-300 text-xs font-semibold uppercase tracking-wider">
                {project.category}
              </span>
              <h3 className="text-white font-display font-semibold text-lg lg:text-xl mt-1">
                {project.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View All Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="mt-10 flex justify-center"
      >
        <Link
          href="/our-work"
          className="inline-flex items-center gap-2 px-8 py-4 bg-charcoal-950 text-white font-semibold
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
