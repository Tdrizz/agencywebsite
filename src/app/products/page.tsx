import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Products | UnifiedOps",
};

const products = [
  {
    title: "Functional Website",
    description:
      "A fast, mobile-friendly website built to turn visitors into leads. We design with your trade and your customers in mind — clean layout, clear calls to action, and pages built to rank in local search.",
    features: [
      "10-20 page custom site",
      "Mobile-first design",
      "Click-to-call & text buttons",
      "Built-in contact forms",
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
    title: "Missed Call Text Back",
    description:
      "Every missed call is a missed job. When you can't answer, we automatically send a text back within seconds — day or night — so the conversation keeps going instead of going to a competitor.",
    features: ["Automatic 24/7 response", "Custom message templates"],
    path: <path d="M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />,
  },
  {
    title: "One-Click Marketing Campaigns",
    description:
      "Ready-to-go campaigns for referrals and repeat customers, so you can bring in more work without writing copy or building a funnel. Pick a campaign, hit send.",
    features: ["Referral campaigns", "Repeat-customer follow-ups"],
    path: (
      <>
        <path d="M22 2 11 13" />
        <path d="M22 2 15 22l-4-9-9-4z" />
      </>
    ),
  },
  {
    title: "Local SEO",
    description:
      "Getting found online in your service area takes more than a nice website. We optimize your site and listings so nearby customers find you organically — not just through paid ads.",
    features: ["On-site SEO", "Google Business Profile setup"],
    path: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="M21 21l-4.3-4.3" />
      </>
    ),
  },
  {
    title: "Review Management",
    description:
      "Automated requests make it effortless for happy customers to leave a review, so you build trust with new leads without ever having to chase anyone down.",
    features: ["Automatic review requests", "One-click request links"],
    path: (
      <path d="M12 2l2.9 6.3 6.9.9-5 4.8 1.3 6.8L12 17.6 6 20.8l1.3-6.8-5-4.8 6.9-.9z" />
    ),
  },
  {
    title: "All-in-One Inbox",
    description:
      "Texts, calls, and messages from every channel land in one place, so nothing slips through the cracks and every lead gets a fast reply.",
    features: ["Unified conversations", "Team-friendly inbox"],
    path: (
      <>
        <path d="M4 4h16v16H4z" />
        <path d="M22 6l-10 7L2 6" />
      </>
    ),
  },
];

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Everything a contractor needs, in one system"
        subtitle="Six tools, working together, built specifically for how contractors get and keep customers."
      />

      <section className="py-24 px-6 max-w-5xl mx-auto space-y-16">
        {products.map((product) => (
          <div
            key={product.title}
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
                {product.path}
              </svg>
            </span>
            <div>
              <h2 className="text-2xl font-bold heading-font mb-3">
                {product.title}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {product.description}
              </p>
              <ul className="grid sm:grid-cols-2 gap-3 text-sm text-gray-700">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <span className="check-dot check-dot-light">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      <CtaBand
        heading="See it all together on a call"
        body="We'll walk you through exactly how each piece works for your business."
      />
    </>
  );
}
