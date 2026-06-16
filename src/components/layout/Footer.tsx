import Link from "next/link";
import { ArrowRight, Mail, Phone } from "lucide-react";

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
    <footer className="bg-[#0C1220] text-white">
      {/* CTA strip */}
      <div className="border-b border-white/[0.07]">
        <div className="container-max py-12">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <h3 className="font-display font-bold text-2xl lg:text-3xl text-white">
                Let&apos;s fill your pipeline
                <em className="italic font-normal text-slate-400"> with qualified leads.</em>
              </h3>
            </div>
            <Link
              href="/contact#book"
              className="shrink-0 inline-flex items-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold px-7 py-3.5 rounded-lg transition-all duration-200 shadow-md shadow-blue-600/20 text-sm w-full lg:w-auto justify-center"
            >
              Book A Strategy Call
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-max py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-0 mb-5">
              <span className="font-display italic text-white text-xl font-normal tracking-tight">
                Sahr
              </span>
              <span className="text-white font-black text-xl tracking-tighter ml-1.5">
                MEDIA
              </span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              B2B lead generation specialists for SaaS and Construction
              companies. We deliver qualified sales opportunities directly to
              your team.
            </p>
            <div className="flex items-center gap-2.5">
              <a
                href="https://linkedin.com/company/sahrmedia"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-white/[0.05] hover:bg-[#2563EB] flex items-center justify-center transition-colors text-xs font-bold text-slate-400 hover:text-white"
              >
                in
              </a>
              <a
                href="https://twitter.com/sahrmedia"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="w-9 h-9 rounded-lg bg-white/[0.05] hover:bg-[#2563EB] flex items-center justify-center transition-colors text-xs font-bold text-slate-400 hover:text-white"
              >
                𝕏
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-slate-500 hover:text-white text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-slate-500 hover:text-white text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-5">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:hello@sahrmedia.com"
                  className="flex items-center gap-3 text-slate-500 hover:text-white text-sm transition-colors group"
                >
                  <span className="w-8 h-8 rounded-lg bg-white/[0.05] group-hover:bg-[#2563EB] flex items-center justify-center transition-colors shrink-0">
                    <Mail className="w-3.5 h-3.5" />
                  </span>
                  hello@sahrmedia.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+447000000000"
                  className="flex items-center gap-3 text-slate-500 hover:text-white text-sm transition-colors group"
                >
                  <span className="w-8 h-8 rounded-lg bg-white/[0.05] group-hover:bg-[#2563EB] flex items-center justify-center transition-colors shrink-0">
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
      <div className="border-t border-white/[0.07]">
        <div className="container-max py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-xs">
            &copy; {new Date().getFullYear()} SAHR MEDIA. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-slate-600 hover:text-slate-400 text-xs transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-slate-600 hover:text-slate-400 text-xs transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
