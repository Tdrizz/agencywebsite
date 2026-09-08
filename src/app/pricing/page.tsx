import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Pricing | UnifiedOps",
};

const pricingFeatures = [
  "Functional website (10-20 pages)",
  "Automated lead follow-up",
  "Missed call text back",
  "Review management",
  "One-click marketing campaigns",
  "Local SEO",
  "All-in-one inbox",
];

const faqs = [
  {
    question: "Is there a contract?",
    answer: "No. UnifiedOps is month-to-month — cancel anytime.",
  },
  {
    question: "How fast can we launch?",
    answer: "Most builds are live in 7-10 days after our onboarding call.",
  },
  {
    question: "What happens if I cancel?",
    answer:
      "You keep your domain and any exported content. Access to the hosted site and automation tools ends when the subscription ends.",
  },
  {
    question: "Do you offer anything beyond the core plan?",
    answer:
      "Yes — Google Business Profile optimization, advanced SEO, and paid ad management are available as add-ons for businesses that want to grow faster.",
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Simple, honest pricing"
        subtitle="One plan. Everything included. No contracts."
      />

      <section className="py-24 px-6 max-w-4xl mx-auto">
        <div className="pricing-card p-10 max-w-md mx-auto">
          <span className="pricing-badge absolute -top-4 left-1/2 -translate-x-1/2">
            Most Popular
          </span>
          <h3 className="text-xl font-bold mb-1 text-center heading-font">
            UnifiedOps Core
          </h3>
          <p className="text-center text-slate-400 text-sm mb-6">
            Everything a contractor needs to grow
          </p>
          <p className="text-center mb-8">
            <span className="text-5xl font-extrabold heading-font">$297</span>
            <span className="text-slate-400">/month</span>
          </p>
          <ul className="space-y-4 mb-9">
            {pricingFeatures.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <span className="check-dot">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
                <span className="text-slate-200 text-sm">{feature}</span>
              </li>
            ))}
          </ul>
          <Link href="/contact" className="btn-primary w-full">
            Book a Call
          </Link>
        </div>
        <p className="text-center text-gray-500 text-sm mt-8 max-w-lg mx-auto">
          Need more? Google Business Profile optimization, advanced SEO, and
          paid ad management are available as add-ons — we&apos;ll go over
          what makes sense for you on your call.
        </p>
      </section>

      <section className="py-20 px-6 max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="eyebrow">FAQ</span>
          <h2 className="heading-font text-3xl font-bold mt-5">
            Questions, answered
          </h2>
        </div>
        <div>
          {faqs.map((faq) => (
            <div key={faq.question} className="faq-item">
              <h3 className="font-semibold mb-2">{faq.question}</h3>
              <p className="text-gray-600 text-sm">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBand
        heading="Ready to get started?"
        body="Book a free call and we'll show you exactly what we'd build."
      />
    </>
  );
}
