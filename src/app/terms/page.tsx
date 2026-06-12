import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "SAHR MEDIA Terms of Service.",
  robots: { index: false, follow: false },
};

export default function TermsPage() {
  return (
    <main className="bg-white min-h-screen">
      <div className="container-max pt-36 pb-20">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-[#0F172A] font-black text-4xl mb-4">Terms of Service</h1>
          <p className="text-[#64748B] text-sm mb-10">Last updated: June 2026</p>

          <div className="space-y-8 text-[#1E293B] text-sm leading-relaxed">
            <section>
              <h2 className="font-bold text-lg text-[#0F172A] mb-2">1. Services</h2>
              <p>
                SAHR MEDIA provides B2B lead generation, lead qualification, and appointment
                setting services as described in each individual client agreement. Service scope,
                pricing, and deliverables are defined in the applicable statement of work.
              </p>
            </section>

            <section>
              <h2 className="font-bold text-lg text-[#0F172A] mb-2">2. Payment</h2>
              <p>
                Fees are invoiced as agreed in your service contract. All prices are exclusive
                of VAT unless otherwise stated. Payment terms are net 14 days from invoice date
                unless agreed otherwise in writing.
              </p>
            </section>

            <section>
              <h2 className="font-bold text-lg text-[#0F172A] mb-2">3. Intellectual Property</h2>
              <p>
                All lead data, campaign strategies, and deliverables produced by SAHR MEDIA
                and delivered to you become your property upon full payment. SAHR MEDIA retains
                ownership of its proprietary methodologies, tools, and AI engine.
              </p>
            </section>

            <section>
              <h2 className="font-bold text-lg text-[#0F172A] mb-2">4. Limitation of Liability</h2>
              <p>
                SAHR MEDIA&apos;s liability is limited to the fees paid in the preceding 30 days.
                We do not guarantee specific revenue outcomes, as results depend on factors
                outside our control including your sales team&apos;s conversion performance.
              </p>
            </section>

            <section>
              <h2 className="font-bold text-lg text-[#0F172A] mb-2">5. Governing Law</h2>
              <p>
                These terms are governed by the laws of England and Wales. Any disputes shall
                be subject to the exclusive jurisdiction of the English courts.
              </p>
            </section>

            <section>
              <h2 className="font-bold text-lg text-[#0F172A] mb-2">6. Contact</h2>
              <p>
                For any queries regarding these terms, contact{" "}
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
