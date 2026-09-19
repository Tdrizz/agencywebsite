import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Pricing | UnifiedOps",
};

const buildFeatures = [
  "Custom design built around your business, not a template",
  "Mobile friendly on every device",
  "Working contact form so leads land in your inbox",
  "Deployed and live on your domain",
];

const carePlans = [
  {
    name: "Basic",
    price: "$25",
    description: "Hosting and domain management, handled for you.",
    features: [
      "Hosting and domain management",
      "Uptime monitoring",
      "SSL and technical upkeep",
    ],
  },
  {
    name: "Standard",
    price: "$50",
    description: "Everything in Basic, plus small updates when you need them.",
    features: [
      "Everything in Basic",
      "Up to 2 content updates a month",
      "New photos, hours, or contact info",
    ],
    featured: true,
  },
  {
    name: "Care Plan",
    price: "$100",
    description: "Priority support and a regular check-in on your site.",
    features: [
      "Everything in Standard",
      "48-hour priority turnaround",
      "Quarterly check-in on messaging and search visibility",
    ],
  },
];

const faqs = [
  {
    question: "Is there a contract?",
    answer:
      "The website build is a one-time cost. Care plans are month-to-month, cancel anytime.",
  },
  {
    question: "How fast can we launch?",
    answer: "Most builds are live within a week or two after we get your details.",
  },
  {
    question: "What if I want more pages later?",
    answer:
      "That's a quick add-on. Extra pages like a services page, testimonials, or a blog are quoted separately once we know what you need.",
  },
  {
    question: "Can I cancel the monthly plan?",
    answer:
      "Yes, anytime. Your site stays live through the end of the billing period, and you keep your domain either way.",
  },
  {
    question: "Do I need a care plan?",
    answer:
      "No, it's optional. Some clients just want the build and handle hosting themselves. Most pick Standard so small updates don't pile up.",
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Simple, honest pricing"
        subtitle="A one-time build, plus an optional plan to keep your site running."
      />

      <section className="py-24 px-6 max-w-4xl mx-auto">
        <div className="pricing-card p-10 max-w-md mx-auto">
          <span className="pricing-badge absolute -top-4 left-1/2 -translate-x-1/2">
            Website Build
          </span>
          <h3 className="text-xl font-bold mb-1 text-center heading-font">
            Custom Website
          </h3>
          <p className="text-center text-slate-400 text-sm mb-6">
            A site built for your business, live and ready to send customers to
          </p>
          <p className="text-center mb-8">
            <span className="text-5xl font-extrabold heading-font">$800</span>
            <span className="text-slate-400"> one time</span>
          </p>
          <ul className="space-y-4 mb-9">
            {buildFeatures.map((feature) => (
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
            Get Started
          </Link>
        </div>
      </section>

      <section className="py-4 px-6 max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="eyebrow">Ongoing Care</span>
          <h2 className="heading-font text-3xl md:text-4xl font-bold mt-5 mb-4">
            Keep your site running smoothly
          </h2>
          <p className="text-gray-600">
            Once your site is live, pick a plan to handle hosting and keep
            things up to date. Optional, and you can start or cancel anytime.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {carePlans.map((plan) => (
            <div
              key={plan.name}
              className={`service-card p-7 ${
                plan.featured ? "border-2 border-blue-500" : ""
              }`}
            >
              <h3 className="text-lg font-semibold mb-1 heading-font">
                {plan.name}
              </h3>
              <p className="text-gray-600 text-sm mb-5">{plan.description}</p>
              <p className="mb-6">
                <span className="text-3xl font-extrabold heading-font">
                  {plan.price}
                </span>
                <span className="text-gray-500 text-sm">/month</span>
              </p>
              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="check-dot check-dot-light">
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
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-500 text-sm mt-8 max-w-lg mx-auto">
          No pressure on a plan. Most clients start with Standard and adjust
          later.
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
        body="Tell us about your business and we'll show you what we'd build."
      />
    </>
  );
}
