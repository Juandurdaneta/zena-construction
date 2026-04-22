"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";
import { motion, useInView } from "framer-motion";
import { useForm } from "react-hook-form";
import {
  Eye,
  GraduationCap,
  DollarSign,
  Shield,
  ArrowRight,
  Loader2,
  CheckCircle,
  Users,
  Clock,
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
    title: "Complete Space Assessment",
    text: "See what\u2019s actually possible within your home\u2019s structure and your budget",
  },
  {
    icon: GraduationCap,
    title: "Hands-on Material Education",
    text: "Finally understand the difference between builder-grade, mid-grade, and premium finishes in your actual lighting",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing Breakdown",
    text: "Showing exactly where every dollar goes\u2014no hidden costs or surprise change orders",
  },
];

const qualifications = [
  "Serious about creating their dream kitchen, bathroom, or whole-home remodel",
  "Ready to make confident decisions once they have clarity",
  "Looking for a trusted partner who delivers on promises",
  "Willing to invest in quality that lasts decades",
];

export function ContactCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "edde0732-14be-4472-a979-50cfc7cf57e4",
          subject: `New Remodeling Consultation Request from ${data.name}`,
          from_name: "Zena Construction Website",
          ...data,
        }),
      });

      const result = await response.json();
      if (!result.success) {
        throw new Error(result.message || "Failed to submit form");
      }

      router.push("/thank-you");
    } catch (error) {
      console.error("Form submission error:", error);
      alert("There was an error submitting your request. Please try again.");
    }
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
            <span className="text-primary-500">FREE</span> Remodeling Consultation
          </h2>

          {/* Value Badge */}
          <div className="inline-flex items-center gap-2 bg-charcoal-950 text-white px-4 py-2 rounded-full mb-6">
            <span className="text-charcoal-400">Valued at</span>
            <span className="text-xl font-display font-bold text-primary-400">$1,200</span>
          </div>

          <p className="text-lg text-charcoal-600 leading-relaxed mb-8">
            During your no-obligation consultation, our experts will assess your
            space and show you exactly how to create the home you&apos;ve been dreaming of.
          </p>

          {/* Benefits */}
          <div className="space-y-4 mb-8">
            <h3 className="text-lg font-semibold text-charcoal-950">
              Here&apos;s what you&apos;ll discover in your FREE consultation:
            </h3>
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
                  className="flex items-start gap-4 bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-charcoal-100"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal-950 mb-1">{benefit.title}</h4>
                    <p className="text-sm text-charcoal-600">{benefit.text}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Qualification Box */}
          <div className="bg-charcoal-950 rounded-2xl p-6 mb-8">
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <Users className="w-5 h-5 text-primary-400" />
              This is ONLY for homeowners who are:
            </h3>
            <ul className="space-y-3">
              {qualifications.map((qual, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-trust-400 flex-shrink-0 mt-0.5" />
                  <span className="text-charcoal-300">{qual}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Scarcity */}
          <div className="flex items-center gap-2 text-primary-700 bg-primary-50 px-4 py-3 rounded-xl border border-primary-200">
            <Clock className="w-5 h-5 flex-shrink-0" />
            <span className="font-semibold">
              Places are strictly limited to 5 clients per month.
            </span>
          </div>
        </motion.div>

        {/* Right Column - Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="bg-white rounded-3xl shadow-soft-lg p-6 sm:p-8 md:p-10 border border-charcoal-100">
                <h3 className="text-2xl font-display font-semibold text-charcoal-950 mb-2">
                  Request Your Consultation
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
                      placeholder="Describe your remodeling project or goals..."
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
                    {isSubmitting ? "Submitting..." : "Start Your Dream Remodel Today"}
                  </Button>

                  {/* Trust Note */}
                  <p className="text-center text-sm text-charcoal-500 flex items-center justify-center gap-2">
                    <Shield className="w-4 h-4" />
                    We respect your privacy. No spam, ever.
                  </p>
                </form>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
