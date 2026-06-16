import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "SAHR MEDIA Privacy Policy, how we collect, use, and protect your data.",
  robots: { index: false, follow: false },
};

export default function PrivacyPage() {
  return (
    <main className="bg-white min-h-screen">
      <div className="container-max pt-36 pb-20">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-[#0F172A] font-black text-4xl mb-4">Privacy Policy</h1>
          <p className="text-[#64748B] text-sm mb-10">Last updated: June 2026</p>

          <div className="prose prose-slate max-w-none space-y-8 text-[#1E293B] text-sm leading-relaxed">
            <section>
              <h2 className="font-bold text-lg text-[#0F172A] mb-2">1. Information We Collect</h2>
              <p>
                We collect information you provide directly to us, such as when you complete
                our contact form, book a strategy call, or subscribe to our newsletter. This
                may include your name, email address, phone number, company name, and details
                about your business.
              </p>
            </section>

            <section>
              <h2 className="font-bold text-lg text-[#0F172A] mb-2">2. How We Use Your Information</h2>
              <p>
                We use the information we collect to respond to your enquiries, deliver our
                lead generation services, send relevant communications with your consent, and
                improve our products and services.
              </p>
            </section>

            <section>
              <h2 className="font-bold text-lg text-[#0F172A] mb-2">3. Data Sharing</h2>
              <p>
                We do not sell or rent your personal data to third parties. We may share data
                with trusted service providers who assist in operating our business, subject to
                confidentiality obligations.
              </p>
            </section>

            <section>
              <h2 className="font-bold text-lg text-[#0F172A] mb-2">4. Your Rights</h2>
              <p>
                Under UK GDPR, you have the right to access, correct, delete, or restrict
                processing of your personal data. To exercise these rights, contact us at{" "}
                <a href="mailto:hello@sahrmedia.com" className="text-[#2563EB] hover:underline">
                  hello@sahrmedia.com
                </a>.
              </p>
            </section>

            <section>
              <h2 className="font-bold text-lg text-[#0F172A] mb-2">5. Contact</h2>
              <p>
                For privacy-related queries, contact SAHR MEDIA at{" "}
                <a href="mailto:hello@sahrmedia.com" className="text-[#2563EB] hover:underline">
                  hello@sahrmedia.com
                </a>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
