import Link from "next/link";
import CtaBand from "@/components/CtaBand";

const heroChecks = [
  {
    label: "Custom design built around your business",
    path: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 9h18" />
      </>
    ),
  },
  {
    label: "Mobile friendly on every device",
    path: (
      <>
        <rect x="7" y="2" width="10" height="20" rx="2" />
        <path d="M11 18h2" />
      </>
    ),
  },
  {
    label: "Flat project pricing, agreed before work starts",
    path: <path d="M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />,
  },
  {
    label: "Launched on your own domain",
    path: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20" />
      </>
    ),
  },
];

const steps = [
  {
    title: "Free Consultation",
    description:
      "A quick call or email to learn about your business and what you need your site to do.",
  },
  {
    title: "Proposal & Deposit",
    description:
      "You get a flat price proposal. Work starts once you approve it and pay a 50% deposit.",
  },
  {
    title: "Build & Launch",
    description:
      "Your site is designed, built, and revised with your feedback, then launched on your domain.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero-bg px-6 pt-20 pb-24">
        <div className="max-w-6xl mx-auto relative grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="eyebrow">Websites for small businesses & nonprofits</span>
            <h1 className="heading-font text-5xl font-bold leading-tight tracking-tight mt-6 mb-6">
              A custom website for your business, built right the first time
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-xl">
              I design and build custom websites for small businesses and
              nonprofits in Alaska and Hawaii, with optional SEO, Google Ads
              setup, and ongoing maintenance. Flat project pricing, agreed
              up front.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Get a Quote
              </Link>
              <Link href="/portfolio" className="btn-secondary">
                See My Work
              </Link>
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-3 mt-10 text-sm text-gray-500">
              <span>✓ Flat project pricing</span>
              <span>✓ Mobile friendly</span>
              <span>✓ You own your content and domain</span>
            </div>
          </div>

          <div className="hero-panel p-8">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-4">
              What you get
            </p>
            <ul className="space-y-4">
              {heroChecks.map((item) => (
                <li key={item.label} className="flex items-center gap-3">
                  <span className="icon-badge">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      {item.path}
                    </svg>
                  </span>
                  <span className="font-medium">{item.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* How It Works Teaser */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="eyebrow">Simple process</span>
            <h2 className="heading-font text-3xl md:text-4xl font-bold mt-5 mb-4">
              How It Works
            </h2>
            <p className="text-gray-600">
              From first call to live site, without the runaround.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10 mb-12">
            {steps.map((step, index) => (
              <div key={step.title} className="text-center">
                <div className="step-num mx-auto mb-5">{index + 1}</div>
                <h3 className="text-lg font-semibold mb-2 heading-font">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/process" className="btn-secondary">
              See the Full Process
            </Link>
          </div>
        </div>
      </section>

      {/* Services Teaser */}
      <section className="py-24 px-6 max-w-4xl mx-auto text-center">
        <span className="eyebrow">Services</span>
        <h2 className="heading-font text-3xl md:text-4xl font-bold mt-5 mb-4">
          Websites, SEO, ads, and ongoing care
        </h2>
        <p className="text-gray-600 mb-4 max-w-xl mx-auto">
          From a custom website build to full SEO and Google Ads setup, to
          monthly maintenance that keeps everything running.
        </p>
        <p className="mb-8">
          <span className="text-4xl font-bold heading-font">$2,500</span>
          <span className="text-gray-500"> starting price for a custom website</span>
        </p>
        <Link href="/services" className="btn-primary">
          See Services & Pricing
        </Link>
      </section>

      <CtaBand
        heading="Ready for a website that's actually yours?"
        body="Tell me about your business and I'll send over a flat-price proposal."
      />
    </>
  );
}
