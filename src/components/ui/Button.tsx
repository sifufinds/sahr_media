"use client";

import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "white";
  size?: "sm" | "md" | "lg";
  href?: string;
  as?: "button" | "a";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      children,
      ...props
    },
    ref
  ) => {
    const base =
      "inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed select-none";

    const variants = {
      primary:
        "bg-[#2563EB] hover:bg-[#1D4ED8] active:bg-[#1E40AF] text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 focus-visible:ring-blue-500",
      secondary:
        "bg-[#0F172A] hover:bg-[#1E293B] text-white focus-visible:ring-slate-700",
      outline:
        "border-2 border-[#2563EB] text-[#2563EB] hover:bg-[#2563EB] hover:text-white focus-visible:ring-blue-500",
      ghost:
        "text-[#64748B] hover:text-[#0F172A] hover:bg-[#F8FAFC] focus-visible:ring-slate-300",
      white:
        "bg-white text-[#0F172A] hover:bg-[#F8FAFC] shadow-lg focus-visible:ring-white/50 focus-visible:ring-offset-[#0F172A]",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-sm",
      lg: "px-8 py-4 text-base",
    };

    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
