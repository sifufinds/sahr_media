import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { Mail, Phone, MapPin, CheckCircle, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Book A Strategy Call",
  description:
    "Book a free 30-minute strategy call with SAHR MEDIA. We'll map out a custom lead generation plan for your SaaS or Construction business.",
};

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@sahrmedia.com",
    href: "mailto:hello@sahrmedia.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+44 70 0000 0000",
    href: "tel:+447000000000",
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Within 24 hours",
    href: null,
  },
  {
    icon: MapPin,
    label: "Based In",
    value: "United Kingdom",
    href: null,
  },
];

const promises = [
  "No hard sell — just a genuine conversation",
  "Custom plan built around your business",
  "Honest assessment of what's achievable",
  "Clear pricing with no hidden fees",
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0F172A] pt-32 pb-20 relative overflow-hidden">
        <div className="hero-grid absolute inset-0" aria-hidden="true" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(37,99,235,0.15) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />
        <div className="container-max relative z-10 text-center">
          <p className="text-xs font-semibold tracking-widest text-[#10B981] uppercase mb-4">
            Let&apos;s Talk
          </p>
          <h1
            className="text-white font-black leading-tight mb-5"
            style={{ fontSize: "clamp(2rem, 1.5rem + 3vw, 4rem)" }}
          >
            Ready to fill your sales pipeline?
          </h1>
          <p className="text-slate-400 max-w-xl mx-auto text-base leading-relaxed">
            Book a free 30-minute strategy call. We&apos;ll map out a custom lead
            generation campaign built around your ICP and revenue targets.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-pad bg-[#F8FAFC]" aria-label="Contact section">
        <div className="container-max">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left sidebar */}
            <aside className="lg:col-span-2 space-y-8">
              {/* Strategy call card */}
              <div
                id="book"
                className="bg-[#0F172A] rounded-2xl p-7"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-[#10B981] mb-2">
                  Free Strategy Call
                </p>
                <h2 className="text-white font-black text-xl mb-3">
                  Book A 30-Minute Call
                </h2>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  Fill in the form and we&apos;ll reach out within 24 hours to
                  schedule a call at a time that works for you.
                </p>

                {/* Promises */}
                <ul className="space-y-2.5">
                  {promises.map((p) => (
                    <li key={p} className="flex items-center gap-2.5 text-slate-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-[#10B981] shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact details */}
              <div className="bg-white rounded-2xl p-7 border border-[#E2E8F0]">
                <h3 className="text-[#0F172A] font-bold mb-5">
                  Contact Details
                </h3>
                <ul className="space-y-4">
                  {contactDetails.map((item) => {
                    const Icon = item.icon;
                    return (
                      <li key={item.label} className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center shrink-0">
                          <Icon className="w-4 h-4 text-[#64748B]" />
                        </div>
                        <div>
                          <div className="text-xs text-[#94A3B8] mb-0.5">
                            {item.label}
                          </div>
                          {item.href ? (
                            <a
                              href={item.href}
                              className="text-[#0F172A] font-medium text-sm hover:text-[#2563EB] transition-colors"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <span className="text-[#0F172A] font-medium text-sm">
                              {item.value}
                            </span>
                          )}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </aside>

            {/* Main form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl p-8 border border-[#E2E8F0]">
                <h2 className="text-[#0F172A] font-black text-2xl mb-2">
                  Get My Free Lead Generation Strategy
                </h2>
                <p className="text-[#64748B] text-sm mb-8">
                  Fill in the form below and we&apos;ll be in touch within 24
                  hours with a tailored strategy for your business.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
