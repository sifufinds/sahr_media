import Link from "next/link";
import { Mail, Phone, ArrowUpRight, ExternalLink } from "lucide-react";

const services = [
  { label: "SaaS Lead Generation", href: "/services#saas" },
  { label: "Construction Lead Generation", href: "/services#construction" },
  { label: "Lead Qualification", href: "/services#qualification" },
  { label: "Appointment Setting", href: "/services#appointment" },
  { label: "Sales Pipeline Development", href: "/services#pipeline" },
];

const company = [
  { label: "About Us", href: "/about" },
  { label: "AI Engine", href: "/ai-engine" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white">
      {/* CTA Strip */}
      <div className="border-b border-white/10">
        <div className="container-max py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-xs font-semibold tracking-widest text-[#10B981] uppercase mb-2">
                Ready to scale?
              </p>
              <h3 className="text-2xl lg:text-3xl font-black">
                Let&apos;s fill your pipeline with qualified leads.
              </h3>
            </div>
            <Link
              href="/contact#book"
              className="shrink-0 inline-flex items-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 shadow-lg shadow-blue-500/25"
            >
              Book A Strategy Call
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-max py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 group mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#2563EB] flex items-center justify-center">
                <span className="text-white font-black text-sm">S</span>
              </div>
              <span className="text-white font-black text-lg tracking-tight">
                SAHR <span className="text-[#2563EB]">MEDIA</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              B2B lead generation specialists for SaaS and Construction
              companies. We deliver qualified sales opportunities directly to
              your team.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com/company/sahrmedia"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#2563EB] flex items-center justify-center transition-colors text-xs font-bold"
              >
                in
              </a>
              <a
                href="https://twitter.com/sahrmedia"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#2563EB] flex items-center justify-center transition-colors text-xs font-bold"
              >
                𝕏
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-[#10B981] mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-white text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-[#10B981] mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-white text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-[#10B981] mb-5">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:hello@sahrmedia.com"
                  className="flex items-center gap-3 text-slate-400 hover:text-white text-sm transition-colors group"
                >
                  <span className="w-8 h-8 rounded-lg bg-white/5 group-hover:bg-[#2563EB] flex items-center justify-center transition-colors shrink-0">
                    <Mail className="w-3.5 h-3.5" />
                  </span>
                  hello@sahrmedia.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+447000000000"
                  className="flex items-center gap-3 text-slate-400 hover:text-white text-sm transition-colors group"
                >
                  <span className="w-8 h-8 rounded-lg bg-white/5 group-hover:bg-[#2563EB] flex items-center justify-center transition-colors shrink-0">
                    <Phone className="w-3.5 h-3.5" />
                  </span>
                  +44 70 0000 0000
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-max py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs">
            &copy; {new Date().getFullYear()} SAHR MEDIA. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-slate-500 hover:text-slate-300 text-xs transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-slate-500 hover:text-slate-300 text-xs transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
