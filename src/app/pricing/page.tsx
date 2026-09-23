import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Pricing | UnifiedOps",
};

const coreFeatures = [
  "Custom website built around your business",
  "Automated lead follow up",
  "Missed call text back",
  "Review management",
  "One click marketing campaigns",
  "Local SEO",
  "All in one inbox",
  "Hosting and domain management",
];

const carePlans = [
  {
    name: "Basic",
    price: "$25",
    description:
      "Hosting and domain management, included in your monthly total by default.",
    features: [
      "Hosting and domain management",
      "Uptime monitoring",
      "SSL and technical upkeep",
    ],
    required: true,
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
    description: "Priority support and a regular review of your site.",
    features: [
      "Everything in Standard",
      "Priority turnaround within 48 hours",
      "Quarterly review of your website",
    ],
  },
];

const faqs = [
  {
    question: "What does the $500 setup cover?",
    answer:
      "Your custom website build and onboarding into the marketing system: missed call text back, review management, one click marketing campaigns, local SEO, and the shared inbox. Your first month, $300 marketing plus $25 Basic hosting, is free, so nothing else is due until month two.",
  },
  {
    question: "Is there a contract?",
    answer:
      "No. After the $500 setup, everything is billed monthly and you can cancel anytime.",
  },
  {
    question: "How much is it after the first month?",
    answer:
      "$300 a month for the marketing system, plus your hosting tier. Basic hosting is $25 a month, so most clients pay $325 a month starting in month two.",
  },
  {
    question: "How fast can we launch?",
    answer: "Most builds are live within 3-5 business days after we get your details.",
  },
  {
    question: "What if I want more pages later?",
    answer:
      "That's a quick addition. Extra pages like a services page, testimonials, or a blog are quoted separately once we know what you need.",
  },
  {
    question: "Can I cancel?",
    answer:
      "Yes, anytime. Your site stays live through the end of your current billing period, and you keep your domain either way.",
  },
  {
    question: "Do I need Standard or Care Plan?",
    answer:
      "No, they're optional upgrades on top of Basic hosting if you want us handling small updates or giving your site priority attention. Most clients start on Basic and upgrade later if they need to.",
  },
  {
    question: "What if I want more than the core plan?",
    answer:
      "Google Business Profile optimization, advanced SEO, and paid ad management are available as additions for businesses that want to grow faster. We'll go over what makes sense for you on your call.",
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Simple, all included pricing"
        subtitle="$500 to get started, with your first month free. Then $300 a month plus hosting."
      />

      <section className="py-24 px-6 max-w-4xl mx-auto">
        <div className="pricing-card p-10 max-w-md mx-auto">
          <span className="pricing-badge absolute -top-4 left-1/2 -translate-x-1/2">
            All Included
          </span>
          <h3 className="text-xl font-bold mb-1 text-center heading-font">
            UnifiedOps Core
          </h3>
          <p className="text-center text-slate-400 text-sm mb-6">
            Your website, built and launched, plus the full marketing system
          </p>
          <p className="text-center mb-1">
            <span className="text-5xl font-extrabold heading-font">$500</span>
            <span className="text-slate-400"> to start</span>
          </p>
          <p className="text-center text-slate-400 text-sm mb-8">
            First month free, then $300/month plus $25/month Basic hosting
          </p>
          <ul className="space-y-4 mb-9">
            {coreFeatures.map((feature) => (
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
        <p className="text-center text-gray-500 text-sm mt-8">
          See how each tool works on the{" "}
          <Link href="/products" className="text-blue-600 hover:underline">
            what&apos;s included page
          </Link>
          .
        </p>
      </section>

      <section className="py-4 px-6 max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="eyebrow">Hosting Tier</span>
          <h2 className="heading-font text-3xl md:text-4xl font-bold mt-5 mb-4">
            Choose how much support you want
          </h2>
          <p className="text-gray-600">
            Every plan includes the $300/month marketing system plus a
            hosting tier. Basic is the default and is included in your
            monthly total. Standard and Care Plan are optional upgrades.
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
              <div className="flex items-center justify-between gap-2 mb-1">
                <h3 className="text-lg font-semibold heading-font">
                  {plan.name}
                </h3>
                <span
                  className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                    plan.required
                      ? "bg-blue-100 text-blue-700"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {plan.required ? "Default" : "Optional"}
                </span>
              </div>
              <p className="text-gray-600 text-sm mb-5">{plan.description}</p>
              <p className="mb-1">
                <span className="text-3xl font-extrabold heading-font">
                  {plan.price}
                </span>
                <span className="text-gray-500 text-sm">/month</span>
              </p>
              <p className="text-gray-400 text-xs mb-6">
                $300 marketing + {plan.price} hosting
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
          Every plan starts on Basic. No pressure to upgrade. You can move
          to Standard or Care Plan anytime.
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
