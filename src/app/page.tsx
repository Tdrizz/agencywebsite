import Link from "next/link";
import CtaBand from "@/components/CtaBand";

const heroChecks = [
  {
    label: "A website that converts visitors into leads",
    path: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 9h18" />
      </>
    ),
  },
  {
    label: "Instant text-back when you miss a call",
    path: <path d="M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />,
  },
  {
    label: "Local SEO so nearby customers find you",
    path: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="M21 21l-4.3-4.3" />
      </>
    ),
  },
  {
    label: "Marketing campaigns ready to send",
    path: (
      <>
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <path d="M22 4L12 14.01l-3-3" />
      </>
    ),
  },
];

const services = [
  {
    title: "Functional Website",
    description:
      "A fast, mobile-friendly site built to turn visitors into leads — clean design, clear calls to action, and built with local search in mind.",
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
      "Never lose a lead to a missed call. When you can't pick up, we automatically send a text so the conversation keeps going.",
    path: <path d="M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />,
  },
  {
    title: "One-Click Marketing Campaigns",
    description:
      "Ready-to-go campaigns for referrals and repeat customers — no writing copy or building funnels, just pick and send.",
    path: (
      <>
        <path d="M22 2 11 13" />
        <path d="M22 2 15 22l-4-9-9-4z" />
      </>
    ),
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero-bg px-6 pt-20 pb-24">
        <div className="max-w-6xl mx-auto relative grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="eyebrow">Built for contractors</span>
            <h1 className="heading-font text-5xl font-extrabold leading-tight mt-6 mb-6">
              Websites &amp; marketing systems that keep your phone ringing
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-xl">
              UnifiedOps builds the website, follow-up, and marketing tools
              contractors need to turn missed calls into booked jobs — simple
              to use, no long-term contracts.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Book a Free Call
              </Link>
              <Link href="/products" className="btn-secondary">
                See What&apos;s Included
              </Link>
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-3 mt-10 text-sm text-gray-500">
              <span>✓ No long-term contracts</span>
              <span>✓ Live in 7-10 days</span>
              <span>✓ Built for local trades</span>
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

      {/* Products Teaser */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="eyebrow">What we offer</span>
          <h2 className="heading-font text-3xl md:text-4xl font-bold mt-5 mb-4">
            Everything you need, nothing you don&apos;t
          </h2>
          <p className="text-gray-600">
            One system that covers your website, your follow-up, and your
            marketing — built specifically for how contractors work.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.title} className="service-card p-7">
              <span className="icon-badge mb-5">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  {service.path}
                </svg>
              </span>
              <h3 className="text-lg font-semibold mb-2 heading-font">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/products" className="btn-secondary">
            See All Products
          </Link>
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
              From first call to live system in under two weeks.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10 mb-12">
            <div className="text-center">
              <div className="step-num mx-auto mb-5">1</div>
              <h3 className="text-lg font-semibold mb-2 heading-font">
                Discovery Call
              </h3>
              <p className="text-gray-600 text-sm">
                A quick 20-minute call to understand your business and show
                you exactly what we&apos;d build.
              </p>
            </div>
            <div className="text-center">
              <div className="step-num mx-auto mb-5">2</div>
              <h3 className="text-lg font-semibold mb-2 heading-font">
                We Build It
              </h3>
              <p className="text-gray-600 text-sm">
                Your website and marketing systems are built and ready to go
                in about 7-10 days.
              </p>
            </div>
            <div className="text-center">
              <div className="step-num mx-auto mb-5">3</div>
              <h3 className="text-lg font-semibold mb-2 heading-font">
                Launch &amp; Train
              </h3>
              <p className="text-gray-600 text-sm">
                We walk you through everything so you&apos;re confident using
                your new systems from day one.
              </p>
            </div>
          </div>
          <div className="text-center">
            <Link href="/process" className="btn-secondary">
              More About Our Process
            </Link>
          </div>
        </div>
      </section>

      <CtaBand
        heading="Ready to book more jobs?"
        body="Let's build you a system that works. Quick turnaround, no contracts."
      />
    </>
  );
}
