import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Services & Pricing | AK Website Agency",
};

const services = [
  {
    title: "Custom Website",
    price: "Starting at $2,500",
    description:
      "A custom-built, mobile-friendly website designed around your business, with everything needed to get live on your own domain.",
    features: [
      "Custom design and development",
      "Hosting setup",
      "Domain connection",
      "Basic SEO",
      "Two rounds of revisions",
    ],
    path: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 9h18" />
        <circle cx="6.5" cy="6.5" r=".5" fill="currentColor" />
      </>
    ),
  },
  {
    title: "Custom Website + SEO",
    price: "Contact for a quote",
    description:
      "Everything in the Custom Website plan, plus a full SEO setup so customers in your area can actually find you.",
    features: [
      "Everything in Custom Website",
      "Google Business Profile setup",
      "Analytics setup",
      "Local search optimization",
    ],
    path: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="M21 21l-4.3-4.3" />
      </>
    ),
  },
  {
    title: "Custom Website + SEO + Ads",
    price: "Contact for a quote",
    description:
      "Everything in Custom Website + SEO, plus a Google Ads campaign setup to start bringing in paid traffic.",
    features: [
      "Everything in Custom Website + SEO",
      "Google Ads campaign setup",
      "Ad spend is billed separately by Google",
    ],
    path: (
      <path d="M22 2 11 13M22 2 15 22l-4-9-9-4z" />
    ),
  },
  {
    title: "Website Refresh",
    price: "Contact for a quote",
    description:
      "A redesign and cleanup of an existing website on its current platform. No full rebuild required.",
    features: [
      "Updated design and content",
      "Stays on your current platform",
    ],
    path: (
      <>
        <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
        <path d="M21 3v5h-5" />
        <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
        <path d="M3 21v-5h5" />
      </>
    ),
  },
  {
    title: "Website Maintenance",
    price: "$100/month",
    description:
      "Ongoing care so your site keeps running smoothly after launch, without you having to think about it.",
    features: [
      "Updates as needed",
      "Review every 6 months",
      "Monitoring of your site, domain, and subscriptions",
    ],
    path: (
      <>
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </>
    ),
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services & Pricing"
        title="Flat pricing for every stage of your website"
        subtitle="From a brand new custom build to ongoing maintenance. Prices are quoted up front, with no surprise fees."
      />

      <section className="py-24 px-6 max-w-5xl mx-auto space-y-16">
        {services.map((service) => (
          <div
            key={service.title}
            className="grid md:grid-cols-[auto_1fr] gap-6 items-start"
          >
            <span className="icon-badge icon-badge-lg">
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                {service.path}
              </svg>
            </span>
            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                <h2 className="text-2xl font-bold heading-font">
                  {service.title}
                </h2>
                <span className="text-lg font-bold heading-font text-blue-600">
                  {service.price}
                </span>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                {service.description}
              </p>
              <ul className="grid sm:grid-cols-2 gap-3 text-sm text-gray-700 mb-5">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="check-dot check-dot-light mt-0.5">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="text-sm font-semibold text-blue-600 hover:underline"
              >
                Get a quote for this service →
              </Link>
            </div>
          </div>
        ))}
      </section>

      <section className="py-4 px-6 max-w-3xl mx-auto text-center pb-20">
        <p className="text-gray-500 text-sm">
          Not sure what you need? See{" "}
          <Link href="/process" className="text-blue-600 hover:underline">
            how the process works
          </Link>{" "}
          from first consultation to launch, or just reach out and I&apos;ll
          help you figure it out.
        </p>
      </section>

      <CtaBand
        heading="Ready to get started?"
        body="Tell me about your business and I'll put together a flat-price proposal."
      />
    </>
  );
}
