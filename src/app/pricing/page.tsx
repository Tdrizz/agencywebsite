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
  "First month of Basic hosting included",
];

const carePlans = [
  {
    name: "Basic",
    price: "$25",
    description:
      "Hosting and domain management, required for every website build. First month is included in the build, then $25/month.",
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
      "Quarterly review of messaging and search visibility",
    ],
  },
];

const marketingFeatures = [
  "Functional website (10-20 pages)",
  "Automated lead follow up",
  "Missed call text back",
  "Review management",
  "One click marketing campaigns",
  "Local SEO",
  "All in one inbox",
];

const faqs = [
  {
    question: "What's the difference between the website build and the marketing system?",
    answer:
      "The $800 build is a single flat fee for a custom website that you own, with an optional care plan for hosting and small updates starting at $25/month. The $297/month marketing system bundles a website with ongoing tools like missed call text back, review requests, and local SEO. No large upfront cost, cancel anytime.",
  },
  {
    question: "Is there a contract on the website build?",
    answer:
      "The website build is billed once, and it includes your first month of Basic hosting. After that, Basic is billed monthly since we host every site we build. Standard and Care Plan are optional upgrades on top of Basic, also billed monthly, cancel anytime.",
  },
  {
    question: "Is there a contract on the marketing system?",
    answer: "No. The marketing system is billed monthly, cancel anytime.",
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
    question: "Can I cancel the monthly website care plan?",
    answer:
      "You can drop down from Standard or Care Plan to Basic anytime. Since Basic covers hosting for the site we built, canceling it takes your site offline at the end of the billing period. You keep your domain either way.",
  },
  {
    question: "Do I need a care plan for the website build?",
    answer:
      "The Basic plan is required. We host every site we build, so it covers your hosting, domain, and technical upkeep. Your first month is included in the $800 build, and it's $25/month after that. Standard and Care Plan are optional upgrades if you want us handling small updates too.",
  },
  {
    question: "What if I want more than the marketing system's core plan?",
    answer:
      "Google Business Profile optimization, advanced SEO, and paid ad management are available as additions for businesses that want to grow faster. We'll go over what makes sense for you on your call.",
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Two ways to work with us"
        subtitle="A single flat fee website build, or an all in one monthly marketing system. Pick whichever fits your business."
      />

      <section className="pt-24 pb-8 px-6 max-w-4xl mx-auto text-center">
        <span className="eyebrow">Option 1</span>
        <h2 className="heading-font text-3xl md:text-4xl font-bold mt-5 mb-4">
          Website Build
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          A custom website you own outright, for a single flat fee.
        </p>
      </section>

      <section className="pb-24 px-6 max-w-4xl mx-auto">
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
            We host every site we build, so the Basic plan is required, and
            your first month is covered by the $800 build. Standard and Care
            Plan add more support on top and are entirely optional. Start or
            cancel anytime.
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
                  {plan.required ? "Required" : "Optional"}
                </span>
              </div>
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
          Every site starts on Basic. No pressure to upgrade. You can move
          to Standard or Care Plan anytime.
        </p>
      </section>

      <section className="pt-24 pb-8 px-6 max-w-4xl mx-auto text-center">
        <span className="eyebrow">Option 2</span>
        <h2 className="heading-font text-3xl md:text-4xl font-bold mt-5 mb-4">
          Marketing System
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Everything a contractor needs to get and keep customers, bundled
          into one monthly plan. No upfront build cost.
        </p>
      </section>

      <section className="pb-24 px-6 max-w-4xl mx-auto">
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
            {marketingFeatures.map((feature) => (
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
          See how each tool works on the{" "}
          <Link href="/products" className="text-blue-600 hover:underline">
            marketing system page
          </Link>
          .
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
        body="Tell us about your business and we'll show you what fits best."
      />
    </>
  );
}
