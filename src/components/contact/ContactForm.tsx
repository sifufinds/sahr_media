"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { CheckCircle, Loader2 } from "lucide-react";

interface FormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  website: string;
  industry: string;
  monthlyRevenue: string;
  teamSize: string;
  serviceRequired: string;
  marketingBudget: string;
  message: string;
}

const industries = [
  "SaaS / Software",
  "Construction",
  "Property Development",
  "Professional Services",
  "Other",
];

const revenueRanges = [
  "Under £100K",
  "£100K – £500K",
  "£500K – £1M",
  "£1M – £5M",
  "£5M+",
];

const teamSizes = [
  "Just me",
  "2–10 people",
  "11–50 people",
  "51–200 people",
  "200+ people",
];

const services = [
  "SaaS Lead Generation",
  "Construction Lead Generation",
  "Lead Qualification",
  "Appointment Setting",
  "Sales Pipeline Development",
  "Full-Service Campaign",
];

const budgets = [
  "£1,000 – £2,500/mo",
  "£2,500 – £5,000/mo",
  "£5,000 – £10,000/mo",
  "£10,000+/mo",
  "Not sure yet",
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (_data: FormData) => {
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1200));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 rounded-full bg-[#10B981]/10 flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-[#10B981]" />
        </div>
        <h3 className="text-[#0F172A] font-black text-xl mb-2">
          Enquiry Received!
        </h3>
        <p className="text-[#64748B] text-sm max-w-sm mx-auto">
          Thank you for reaching out. A member of the SAHR MEDIA team will be
          in touch within 24 hours.
        </p>
      </div>
    );
  }

  const fieldClass =
    "w-full px-4 py-3 rounded-lg border border-[#E2E8F0] text-sm text-[#0F172A] placeholder:text-[#CBD5E1] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-shadow";
  const labelClass = "block text-sm font-medium text-[#1E293B] mb-1.5";
  const errorClass = "text-xs text-red-500 mt-1";
  const selectClass = `${fieldClass} bg-white appearance-none`;

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className={labelClass}>
            Full Name <span className="text-red-400">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            placeholder="John Smith"
            className={fieldClass}
            aria-invalid={!!errors.fullName}
            {...register("fullName", { required: "Full name is required" })}
          />
          {errors.fullName && (
            <p className={errorClass} role="alert">
              {errors.fullName.message}
            </p>
          )}
        </div>

        {/* Company */}
        <div>
          <label htmlFor="companyName" className={labelClass}>
            Company Name <span className="text-red-400">*</span>
          </label>
          <input
            id="companyName"
            type="text"
            placeholder="Acme Ltd"
            className={fieldClass}
            aria-invalid={!!errors.companyName}
            {...register("companyName", {
              required: "Company name is required",
            })}
          />
          {errors.companyName && (
            <p className={errorClass} role="alert">
              {errors.companyName.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className={labelClass}>
            Email Address <span className="text-red-400">*</span>
          </label>
          <input
            id="email"
            type="email"
            placeholder="john@acme.com"
            className={fieldClass}
            aria-invalid={!!errors.email}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please enter a valid email address",
              },
            })}
          />
          {errors.email && (
            <p className={errorClass} role="alert">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="+44 7000 000000"
            className={fieldClass}
            {...register("phone")}
          />
        </div>

        {/* Website */}
        <div className="sm:col-span-2">
          <label htmlFor="website" className={labelClass}>
            Company Website <span className="text-red-400">*</span>
          </label>
          <input
            id="website"
            type="url"
            placeholder="https://yourcompany.com"
            className={fieldClass}
            aria-invalid={!!errors.website}
            {...register("website", {
              required: "Company website is required",
              pattern: {
                value: /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/i,
                message: "Please enter a valid website URL",
              },
            })}
          />
          {errors.website && (
            <p className={errorClass} role="alert">
              {errors.website.message}
            </p>
          )}
        </div>

        {/* Industry */}
        <div>
          <label htmlFor="industry" className={labelClass}>
            Industry <span className="text-red-400">*</span>
          </label>
          <select
            id="industry"
            className={selectClass}
            aria-invalid={!!errors.industry}
            {...register("industry", { required: "Please select an industry" })}
          >
            <option value="">Select your industry</option>
            {industries.map((i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </select>
          {errors.industry && (
            <p className={errorClass} role="alert">
              {errors.industry.message}
            </p>
          )}
        </div>

        {/* Monthly Revenue */}
        <div>
          <label htmlFor="monthlyRevenue" className={labelClass}>
            Monthly Revenue
          </label>
          <select
            id="monthlyRevenue"
            className={selectClass}
            {...register("monthlyRevenue")}
          >
            <option value="">Select revenue range</option>
            {revenueRanges.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </div>

        {/* Team Size */}
        <div>
          <label htmlFor="teamSize" className={labelClass}>
            Team Size
          </label>
          <select
            id="teamSize"
            className={selectClass}
            {...register("teamSize")}
          >
            <option value="">Select team size</option>
            {teamSizes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        {/* Service Required */}
        <div>
          <label htmlFor="serviceRequired" className={labelClass}>
            Service Required <span className="text-red-400">*</span>
          </label>
          <select
            id="serviceRequired"
            className={selectClass}
            aria-invalid={!!errors.serviceRequired}
            {...register("serviceRequired", {
              required: "Please select a service",
            })}
          >
            <option value="">Select a service</option>
            {services.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          {errors.serviceRequired && (
            <p className={errorClass} role="alert">
              {errors.serviceRequired.message}
            </p>
          )}
        </div>

        {/* Marketing Budget */}
        <div className="sm:col-span-2">
          <label htmlFor="marketingBudget" className={labelClass}>
            Monthly Marketing Budget
          </label>
          <select
            id="marketingBudget"
            className={selectClass}
            {...register("marketingBudget")}
          >
            <option value="">Select budget range</option>
            {budgets.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div className="sm:col-span-2">
          <label htmlFor="message" className={labelClass}>
            Additional Information
          </label>
          <textarea
            id="message"
            rows={4}
            placeholder="Tell us about your business, your target customers, and any specific challenges you're facing..."
            className={`${fieldClass} resize-none`}
            {...register("message")}
          />
        </div>
      </div>

      {/* Submit */}
      <div className="mt-6">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-4 px-8 rounded-lg transition-all duration-200 text-base shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Sending...
            </>
          ) : (
            "Get My Free Lead Generation Strategy"
          )}
        </button>
        <p className="text-center text-[#94A3B8] text-xs mt-3">
          We&apos;ll respond within 24 hours. No spam, ever.
        </p>
      </div>
    </form>
  );
}
