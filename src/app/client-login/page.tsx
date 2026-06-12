import { Metadata } from "next";
import { ClientAuthProvider } from "@/lib/client-auth";
import { ClientLoginForm } from "@/components/dashboard/ClientLoginForm";

export const metadata: Metadata = {
  title: "Client Login | SAHR MEDIA",
  description: "Access your SAHR MEDIA client dashboard.",
  robots: { index: false, follow: false },
};

export default function ClientLoginPage() {
  return (
    <ClientAuthProvider>
      <div className="min-h-screen bg-[#0A1120] flex flex-col items-center justify-center px-4 relative overflow-hidden">
        {/* Background grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(37,99,235,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.04) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
          aria-hidden="true"
        />
        {/* Glow */}
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse, rgba(37,99,235,0.12) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
          aria-hidden="true"
        />

        <div className="relative w-full max-w-md">
          {/* Logo */}
          <div className="flex items-center justify-center gap-2.5 mb-10">
            <div className="w-9 h-9 rounded-xl bg-[#2563EB] flex items-center justify-center shadow-lg shadow-blue-500/40">
              <span className="text-white font-black text-sm">S</span>
            </div>
            <span className="text-white font-black text-xl tracking-tight">
              SAHR <span className="text-[#2563EB]">MEDIA</span>
            </span>
          </div>

          {/* Card */}
          <div className="bg-[#111827]/80 backdrop-blur-sm border border-white/8 rounded-2xl p-8 shadow-2xl shadow-black/40">
            <h1 className="text-2xl font-bold text-white mb-1">Client Portal</h1>
            <p className="text-slate-400 text-sm mb-8">
              Sign in to access your leads, pipeline, and reports.
            </p>

            <ClientLoginForm />

            {/* Demo hint */}
            <div className="mt-6 p-3.5 rounded-xl bg-[#2563EB]/8 border border-[#2563EB]/20">
              <p className="text-xs text-slate-400 mb-1 font-medium">Demo credentials</p>
              <p className="text-xs text-slate-300 font-mono">
                demo@client.com / demo123
              </p>
            </div>
          </div>

          <p className="text-center text-xs text-slate-600 mt-6">
            Not a client yet?{" "}
            <a
              href="/contact#book"
              className="text-[#2563EB] hover:text-blue-400 transition-colors"
            >
              Book a strategy call
            </a>
          </p>
        </div>
      </div>
    </ClientAuthProvider>
  );
}
