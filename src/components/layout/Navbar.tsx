"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/ai-engine", label: "AI Engine" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled || isOpen
          ? "bg-[#0C1220]/96 backdrop-blur-md border-b border-white/[0.06]"
          // Mobile always solid so the header is clearly visible.
          // Desktop stays transparent until scrolled.
          : "bg-[#0C1220]/96 backdrop-blur-md lg:bg-transparent lg:backdrop-blur-none"
      )}
    >
      <nav className="container-max">
        <div className="flex items-center justify-between h-16 lg:h-[4.5rem]">

          {/* Wordmark */}
          <Link
            href="/"
            className="flex items-center gap-0 group"
            aria-label="SAHR MEDIA, Home"
          >
            <span className="font-display italic text-white text-xl font-normal tracking-tight">
              Sahr
            </span>
            <span className="text-white font-black text-xl tracking-tighter ml-1.5">
              MEDIA
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors relative group",
                  pathname === link.href
                    ? "text-white"
                    : "text-slate-400 hover:text-white"
                )}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute -bottom-0.5 left-0 w-full h-px bg-[#2563EB] rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/client-login"
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
            >
              Client Login
            </Link>
            <Link
              href="/contact#book"
              className="inline-flex items-center gap-1.5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all duration-200 shadow-md shadow-blue-600/20 hover:shadow-blue-600/35"
            >
              Book A Call
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2.5 -mr-1 text-slate-300 hover:text-white transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300 ease-in-out",
            isOpen ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="py-4 border-t border-white/[0.07] space-y-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-2 py-3 text-slate-300 hover:text-white text-sm font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-white/[0.07] space-y-2.5">
              <Link
                href="/client-login"
                onClick={() => setIsOpen(false)}
                className="block px-2 py-2.5 text-slate-400 hover:text-white text-sm transition-colors"
              >
                Client Login
              </Link>
              <Link
                href="/contact#book"
                onClick={() => setIsOpen(false)}
                className="block text-center bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-sm font-semibold px-5 py-3.5 rounded-lg transition-colors"
              >
                Book A Strategy Call
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
