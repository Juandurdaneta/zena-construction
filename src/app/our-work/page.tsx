"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X, ArrowLeft, ArrowRight, ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Header, Footer } from "@/components/sections";

const projects = [
  {
    src: "/images/portfolio/Steve Full Kitchen Remodel.png",
    alt: "Steve's Full Kitchen Remodel",
    title: "Full Kitchen Remodel",
    category: "Kitchen",
    description: "Complete kitchen transformation featuring modern cabinetry, premium countertops, and updated appliances.",
  },
  {
    src: "/images/portfolio/Christina Master Bathroom.png",
    alt: "Christina's Master Bathroom",
    title: "Master Bathroom Renovation",
    category: "Bathroom",
    description: "Elegant master bathroom renovation with luxury fixtures and timeless design.",
  },
  {
    src: "/images/portfolio/Bryan Master Bathroom_Master Closet Remodel.png",
    alt: "Bryan's Master Bathroom and Closet Remodel",
    title: "Bathroom & Closet Remodel",
    category: "Full Renovation",
    description: "Comprehensive master suite update including bathroom and walk-in closet renovation.",
  },
  {
    src: "/images/portfolio/Alex Master Bathroom Shower.png",
    alt: "Alex's Master Bathroom Shower",
    title: "Shower Renovation",
    category: "Bathroom",
    description: "Custom shower installation with premium tile work and modern glass enclosure.",
  },
  {
    src: "/images/portfolio/Resized_20220907_131403.jpeg",
    alt: "Construction Project",
    title: "Home Renovation",
    category: "Renovation",
    description: "Quality craftsmanship showcased in this detailed renovation project.",
  },
  {
    src: "/images/portfolio/IMG_3695.jpeg",
    alt: "Construction Work",
    title: "Property Improvement",
    category: "Construction",
    description: "Professional construction work demonstrating our attention to detail and quality.",
  },
  {
    src: "/images/portfolio/Screen Shot 2022-07-16 at 10.23.46 PM.png",
    alt: "Project Showcase",
    title: "Project Showcase",
    category: "Renovation",
    description: "Another example of our commitment to excellence in every project we undertake.",
  },
];

const categories = ["All", "Kitchen", "Bathroom", "Full Renovation", "Renovation", "Construction"];

export default function OurWork() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto";
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredProjects.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="pt-8 pb-16 md:pt-12 md:pb-20" style={{ backgroundColor: '#1a1a1f' }}>
          <div className="section-padding container-wide">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20
                         text-white rounded-lg transition-all duration-300 mb-8 font-medium text-sm"
            >
              <ChevronLeft className="w-4 h-4" />
              Home
            </Link>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary-400 text-sm font-semibold uppercase tracking-wider">
                Portfolio
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-white mt-4 mb-6">
                Our Work
              </h1>
              <p className="text-xl text-charcoal-300 max-w-2xl">
                Explore our portfolio of completed projects. Each project represents our commitment
                to quality craftsmanship and customer satisfaction.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter Bar */}
        <section className="py-8 border-b border-charcoal-200" style={{ backgroundColor: '#fdfbf7' }}>
          <div className="section-padding container-wide">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex flex-wrap gap-3"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300
                              ${selectedCategory === category
                                ? "bg-charcoal-950 text-white"
                                : "bg-charcoal-100 text-charcoal-700 hover:bg-charcoal-200"
                              }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16 md:py-24" style={{ backgroundColor: '#fdfbf7' }}>
          <div className="section-padding container-wide">
            <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              <AnimatePresence mode="wait">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.src}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="group cursor-pointer"
                    onClick={() => openLightbox(index)}
                  >
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4">
                      <Image
                        src={project.src}
                        alt={project.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-charcoal-950/0 group-hover:bg-charcoal-950/40
                                      transition-colors duration-300 flex items-center justify-center">
                        <span className="text-white font-semibold opacity-0 group-hover:opacity-100
                                         transition-opacity duration-300 px-6 py-3 border-2 border-white rounded-lg">
                          View Project
                        </span>
                      </div>
                    </div>
                    <span className="text-primary-600 text-sm font-semibold uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-display font-semibold text-charcoal-950 mt-1">
                      {project.title}
                    </h3>
                    <p className="text-charcoal-600 mt-2 line-clamp-2">
                      {project.description}
                    </p>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-16">
                <p className="text-charcoal-500 text-lg">No projects found in this category.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24" style={{ backgroundColor: '#1a1a1f' }}>
          <div className="section-padding container-wide text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-semibold text-white mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-charcoal-300 text-lg mb-8 max-w-2xl mx-auto">
                Let&apos;s discuss how we can transform your property. Get a free evaluation today.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary-500 text-charcoal-950
                           font-semibold rounded-xl hover:bg-primary-400 transition-all duration-300
                           hover:-translate-y-0.5 hover:shadow-lg"
              >
                Get Your Free Evaluation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-charcoal-950/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-2 text-white/70 hover:text-white transition-colors z-10"
              aria-label="Close lightbox"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Navigation */}
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 md:left-8 p-3 text-white/70 hover:text-white
                         bg-white/10 hover:bg-white/20 rounded-full transition-all z-10"
              aria-label="Previous image"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 md:right-8 p-3 text-white/70 hover:text-white
                         bg-white/10 hover:bg-white/20 rounded-full transition-all z-10"
              aria-label="Next image"
            >
              <ArrowRight className="w-6 h-6" />
            </button>

            {/* Image */}
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-5xl mx-4 md:mx-8 aspect-[4/3]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={filteredProjects[currentIndex].src}
                alt={filteredProjects[currentIndex].alt}
                fill
                className="object-contain"
                sizes="90vw"
                priority
              />
            </motion.div>

            {/* Caption */}
            <div className="absolute bottom-8 left-0 right-0 text-center px-4">
              <h3 className="text-white font-display font-semibold text-xl md:text-2xl">
                {filteredProjects[currentIndex].title}
              </h3>
              <p className="text-charcoal-400 mt-2">
                {filteredProjects[currentIndex].description}
              </p>
              <p className="text-charcoal-500 text-sm mt-4">
                {currentIndex + 1} / {filteredProjects.length}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
}
