"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

const testimonials = [
  {
    name: "Calina K.",
    role: "Houston, TX",
    rating: 5,
    project: "Bathroom & Drywall",
    content:
      "Everything came in on budget, by far one of the most organized contractors I have ever worked with. We had much needed bathroom vents installed in 2 bathrooms and ceiling drywall ripped out and replaced. Quality work!",
    highlight: "Most organized contractor",
  },
  {
    name: "Quin D.",
    role: "Houston, TX",
    rating: 5,
    project: "Insurance Claim & Restoration",
    content:
      "I cannot say enough great things about Jose and Zena Construction! Communication was excellent and Jose walked me through every step, including handling my insurance company! Once my insurance claim was approved, he showed up quickly to come up with a game plan and then he had guys here to start the work the very next day!! I could not be more thankful for Zena Construction and will absolutely be hiring them when I am ready to renovate my home!",
    highlight: "Excellent communication",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-5 h-5 ${
            i < rating ? "text-primary-400 fill-primary-400" : "text-charcoal-200"
          }`}
        />
      ))}
    </div>
  );
}

export function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Section background="cream" paddingY="lg" id="testimonials">
      <SectionHeader
        label="Client Stories"
        title="Here's What Houston Homeowners Say About Their Zena Experience..."
        subtitle="Real results from real homeowners who trusted us with their properties."
      />

      <div ref={ref} className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
            className="relative bg-white rounded-2xl p-6 md:p-8 shadow-soft border border-charcoal-100
                       hover:shadow-soft-lg transition-shadow duration-300"
          >
            {/* Quote Icon */}
            <div className="absolute top-6 right-6 w-10 h-10 bg-primary-100 rounded-full
                            flex items-center justify-center">
              <Quote className="w-5 h-5 text-primary-500" />
            </div>

            {/* Rating & Highlight */}
            <div className="mb-4">
              <StarRating rating={testimonial.rating} />
              <span className="inline-block mt-2 px-3 py-1 bg-charcoal-100 text-charcoal-700
                               text-xs font-semibold rounded-full">
                {testimonial.highlight}
              </span>
            </div>

            {/* Content */}
            <blockquote className="text-charcoal-700 leading-relaxed mb-6">
              &ldquo;{testimonial.content}&rdquo;
            </blockquote>

            {/* Author */}
            <div className="flex items-center gap-3 pt-4 border-t border-charcoal-100">
              {/* Avatar Placeholder */}
              <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-500
                              rounded-full flex items-center justify-center text-white
                              font-semibold text-lg">
                {testimonial.name.charAt(0)}
              </div>
              <div>
                <div className="font-semibold text-charcoal-950">
                  {testimonial.name}
                </div>
                <div className="text-sm text-charcoal-500">
                  {testimonial.role}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="mt-12 text-center"
      >
        <Button
          size="lg"
          icon={<ArrowRight className="w-5 h-5" />}
          onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
        >
          Get Your Free Property Evaluation
        </Button>
      </motion.div>
    </Section>
  );
}
