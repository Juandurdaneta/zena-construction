"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useForm } from "react-hook-form";
import {
  Eye,
  BookOpen,
  DollarSign,
  CheckCircle,
  ArrowRight,
  Shield,
  Lock,
} from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

interface FormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  projectType: string;
  message: string;
}

const benefits = [
  {
    icon: Eye,
    title: "Complete Property Assessment",
    description: "Revealing damage you can't see from the ground",
  },
  {
    icon: BookOpen,
    title: "Hands-On Material Education",
    description:
      "Finally understand the difference between builder-grade, mid-grade, and premium",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing Breakdown",
    description: "See exactly where every dollar goes—no hidden costs",
  },
];

const qualifications = [
  "Serious about protecting or improving their property",
  "Ready to make confident decisions once they have clarity",
  "Looking for a trusted partner",
  "Willing to invest in quality that lasts decades",
];

export function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          subject: `New Property Evaluation Request from ${data.name}`,
          from_name: "Zena Construction Website",
          ...data,
        }),
      });

      const result = await response.json();
      if (!result.success) {
        throw new Error(result.message || "Failed to submit form");
      }

      setIsSubmitted(true);
    } catch (error) {
      console.error("Form submission error:", error);
      alert("There was an error submitting your request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section
      background="gradient"
      paddingY="xl"
      id="contact"
      className="relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-64 h-64 bg-primary-100/40 rounded-full blur-3xl" />

      <div ref={ref} className="relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="section-label">Limited Availability</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-charcoal-950 leading-tight mb-4">
            Claim Your{" "}
            <span className="text-primary-500">FREE</span> Property Evaluation
          </h2>
          <div className="inline-flex items-center gap-2 bg-charcoal-950 text-white px-6 py-2 rounded-full mb-6">
            <span className="text-charcoal-400">Valued at</span>
            <span className="text-xl font-display font-bold text-primary-400">
              $1,200
            </span>
          </div>
          <p className="text-lg text-charcoal-600 leading-relaxed">
            During your no-obligation evaluation, our certified experts will 
            assess your specific situation and show you exactly how to move 
            forward with complete confidence.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Benefits & Qualifications */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            {/* What You'll Discover */}
            <div className="mb-10">
              <h3 className="text-xl font-display font-semibold text-charcoal-950 mb-6">
                Here&apos;s what you&apos;ll discover:
              </h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-start gap-4 bg-white/80 backdrop-blur-sm rounded-xl p-4 
                                 border border-charcoal-100"
                    >
                      <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-lg
                                      flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-charcoal-950 mb-1">
                          {benefit.title}
                        </h4>
                        <p className="text-sm text-charcoal-600">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* This is for... */}
            <div className="bg-charcoal-950 rounded-2xl p-6 md:p-8">
              <h3 className="text-lg font-display font-semibold text-white mb-4">
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

              {/* Scarcity Element */}
              <div className="mt-6 pt-6 border-t border-charcoal-700">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-primary-400 rounded-full animate-pulse" />
                  <span className="text-primary-400 font-semibold">
                    Places are strictly limited to 5 residential clients per month
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-soft-lg border border-charcoal-100">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-trust-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-trust-500" />
                  </div>
                  <h3 className="text-2xl font-display font-semibold text-charcoal-950 mb-3">
                    Thank You!
                  </h3>
                  <p className="text-charcoal-600 mb-2">
                    We&apos;ve received your evaluation request.
                  </p>
                  <p className="text-charcoal-600">
                    A member of our team will contact you within 24 hours to 
                    schedule your free property evaluation.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-charcoal-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      className="input-field"
                      placeholder="John Smith"
                      {...register("name", { required: "Name is required" })}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-charcoal-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        className="input-field"
                        placeholder="john@example.com"
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address",
                          },
                        })}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-charcoal-700 mb-2">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        className="input-field"
                        placeholder="(713) 555-0123"
                        {...register("phone", {
                          required: "Phone is required",
                        })}
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-charcoal-700 mb-2">
                      Property Address
                    </label>
                    <input
                      type="text"
                      className="input-field"
                      placeholder="123 Main St, Houston, TX"
                      {...register("address")}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-charcoal-700 mb-2">
                      Project Type
                    </label>
                    <select
                      className="input-field"
                      {...register("projectType")}
                    >
                      <option value="">Select a project type</option>
                      <option value="roofing">Roofing</option>
                      <option value="storm-damage">Storm Damage Repair</option>
                      <option value="restoration">Restoration</option>
                      <option value="construction">Construction</option>
                      <option value="other">Other / Not Sure</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-charcoal-700 mb-2">
                      Tell us about your property concerns
                    </label>
                    <textarea
                      className="textarea-field"
                      rows={4}
                      placeholder="Describe your current situation or concerns..."
                      {...register("message")}
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    fullWidth
                    loading={isSubmitting}
                    icon={<ArrowRight className="w-5 h-5" />}
                  >
                    {isSubmitting
                      ? "Submitting..."
                      : "Get My Free Property Evaluation"}
                  </Button>

                  {/* Trust Elements */}
                  <div className="flex items-center justify-center gap-6 pt-4 text-xs text-charcoal-500">
                    <div className="flex items-center gap-1.5">
                      <Lock className="w-3.5 h-3.5" />
                      <span>Secure form</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Shield className="w-3.5 h-3.5" />
                      <span>No spam, ever</span>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
