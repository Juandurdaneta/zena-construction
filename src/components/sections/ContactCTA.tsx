"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useForm } from "react-hook-form";
import {
  CheckCircle2,
  Eye,
  GraduationCap,
  DollarSign,
  Shield,
  ArrowRight,
  Loader2,
} from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

interface FormData {
  name: string;
  email: string;
  phone: string;
  propertyDescription: string;
}

const benefits = [
  {
    icon: Eye,
    text: "Complete property assessment—revealing damage you can't see from the ground",
  },
  {
    icon: GraduationCap,
    text: "Hands-on material education—finally understand the difference between builder-grade, mid-grade, and premium",
  },
  {
    icon: DollarSign,
    text: "Transparent pricing breakdown showing exactly where every dollar goes—no hidden costs",
  },
];

const qualifications = [
  "Serious about protecting or improving their property",
  "Ready to make confident decisions once they have clarity",
  "Looking for a trusted partner",
  "Willing to invest in quality that lasts decades",
];

export function ContactCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form submitted:", data);
    setIsSubmitted(true);
  };

  return (
    <Section background="gradient" paddingY="xl" id="contact">
      <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Left Column - Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Limited Availability</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-charcoal-950 leading-tight mb-4">
            Claim Your{" "}
            <span className="text-primary-500">FREE</span> Property Evaluation
          </h2>
          <p className="text-lg text-charcoal-600 leading-relaxed mb-8">
            During your no-obligation evaluation, our certified experts will assess 
            your specific situation and show you exactly how to move forward with 
            complete confidence.
          </p>

          {/* Value Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-100 px-4 py-2 rounded-full mb-8">
            <span className="text-charcoal-700">Total Value:</span>
            <span className="text-xl font-display font-bold text-primary-600">$1,200</span>
            <span className="text-charcoal-500">•</span>
            <span className="text-trust-600 font-semibold">Yours FREE</span>
          </div>

          {/* Benefits */}
          <div className="space-y-4 mb-10">
            <h3 className="text-lg font-semibold text-charcoal-950">
              Here&apos;s what you&apos;ll discover:
            </h3>
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-trust-100 rounded-lg flex items-center justify-center">
                    <Icon className="w-4 h-4 text-trust-600" />
                  </div>
                  <p className="text-charcoal-700 leading-relaxed">{benefit.text}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Qualifications */}
          <div className="rounded-2xl p-6 md:p-8" style={{ backgroundColor: '#1a1a1f' }}>
            <h4 className="text-white font-semibold mb-4">
              This is ONLY for Houston homeowners who are:
            </h4>
            <ul className="space-y-3">
              {qualifications.map((qual, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#4ade80' }} />
                  <span style={{ color: '#b8b8c1' }}>{qual}</span>
                </li>
              ))}
            </ul>

            {/* Scarcity */}
            <div className="mt-6 pt-6 border-t" style={{ borderColor: '#41414b' }}>
              <div className="flex items-center gap-2 text-primary-400">
                <Shield className="w-5 h-5" />
                <span className="font-semibold">
                  Places are strictly limited to 5 residential clients per month.
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="bg-white rounded-3xl shadow-soft-lg p-8 md:p-10 border border-charcoal-100">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="w-16 h-16 bg-trust-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8 text-trust-600" />
                </div>
                <h3 className="text-2xl font-display font-semibold text-charcoal-950 mb-3">
                  Thank You!
                </h3>
                <p className="text-charcoal-600 leading-relaxed">
                  We&apos;ve received your request. A member of our team will contact 
                  you within 24 hours to schedule your free property evaluation.
                </p>
              </motion.div>
            ) : (
              <>
                <h3 className="text-2xl font-display font-semibold text-charcoal-950 mb-2">
                  Request Your Evaluation
                </h3>
                <p className="text-charcoal-600 mb-8">
                  Fill out the form below and we&apos;ll contact you within 24 hours.
                </p>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-charcoal-700 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      {...register("name", { required: "Name is required" })}
                      className="input-field"
                      placeholder="John Smith"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-charcoal-700 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                      className="input-field"
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-charcoal-700 mb-2"
                    >
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      {...register("phone", { required: "Phone number is required" })}
                      className="input-field"
                      placeholder="(713) 555-0123"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
                    )}
                  </div>

                  {/* Property Description */}
                  <div>
                    <label
                      htmlFor="propertyDescription"
                      className="block text-sm font-medium text-charcoal-700 mb-2"
                    >
                      Tell us about your property (optional)
                    </label>
                    <textarea
                      id="propertyDescription"
                      {...register("propertyDescription")}
                      rows={4}
                      className="textarea-field"
                      placeholder="Describe any concerns, visible damage, or improvements you're considering..."
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    fullWidth
                    disabled={isSubmitting}
                    icon={
                      isSubmitting ? (
                        <Loader2 className="w-5 h-5 animate-spin" />
                      ) : (
                        <ArrowRight className="w-5 h-5" />
                      )
                    }
                  >
                    {isSubmitting ? "Submitting..." : "Get My Free Evaluation"}
                  </Button>

                  {/* Trust Note */}
                  <p className="text-center text-sm text-charcoal-500 flex items-center justify-center gap-2">
                    <Shield className="w-4 h-4" />
                    We respect your privacy. No spam, ever.
                  </p>
                </form>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
