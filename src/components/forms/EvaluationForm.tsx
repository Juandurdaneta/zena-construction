"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Send, AlertCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface FormData {
  name: string;
  email: string;
  phone: string;
  propertyType: string;
  message: string;
}

export function EvaluationForm() {
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
          subject: `New Property Evaluation Request from ${data.name}`,
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
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-charcoal-700 mb-2"
        >
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          placeholder="John Smith"
          className={`input-field ${errors.name ? "border-red-400 focus:border-red-400 focus:ring-red-100" : ""}`}
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
            <AlertCircle className="w-4 h-4" />
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Email & Phone Row */}
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-charcoal-700 mb-2"
          >
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            placeholder="john@example.com"
            className={`input-field ${errors.email ? "border-red-400 focus:border-red-400 focus:ring-red-100" : ""}`}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
              <AlertCircle className="w-4 h-4" />
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-charcoal-700 mb-2"
          >
            Phone <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            placeholder="(713) 555-0123"
            className={`input-field ${errors.phone ? "border-red-400 focus:border-red-400 focus:ring-red-100" : ""}`}
            {...register("phone", { required: "Phone is required" })}
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
              <AlertCircle className="w-4 h-4" />
              {errors.phone.message}
            </p>
          )}
        </div>
      </div>

      {/* Property Type */}
      <div>
        <label
          htmlFor="propertyType"
          className="block text-sm font-medium text-charcoal-700 mb-2"
        >
          Property Type
        </label>
        <select
          id="propertyType"
          className="input-field appearance-none cursor-pointer"
          {...register("propertyType")}
        >
          <option value="">Select property type...</option>
          <option value="single-family">Single Family Home</option>
          <option value="townhouse">Townhouse</option>
          <option value="condo">Condo</option>
          <option value="multi-family">Multi-Family</option>
          <option value="commercial">Commercial</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-charcoal-700 mb-2"
        >
          Tell us about your property needs
        </label>
        <textarea
          id="message"
          rows={4}
          placeholder="Describe any issues you're experiencing or improvements you're considering..."
          className="textarea-field"
          {...register("message")}
        />
      </div>

      {/* Privacy Note */}
      <p className="text-xs text-charcoal-500">
        By submitting this form, you agree to be contacted about your property 
        evaluation. We respect your privacy and will never share your information.
      </p>

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
            <Send className="w-5 h-5" />
          )
        }
      >
        {isSubmitting ? "Sending..." : "Request Free Evaluation"}
      </Button>
    </form>
  );
}
