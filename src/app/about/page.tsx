import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "About | UnifiedOps",
};

const values = [
  {
    title: "Simple over clever",
    description:
      "Your site should be easy to explain and easy to use. No unnecessary complexity, on either side.",
  },
  {
    title: "No fluff, no contracts",
    description:
      "One flat price for the build. If you want ongoing care, it's billed monthly, cancel anytime. Straight talk, straightforward pricing.",
  },
  {
    title: "Built around your business",
    description:
      "Not a template with your logo dropped in. We design around what you actually do and who you're trying to reach.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Websites that actually fit your business"
        subtitle="UnifiedOps was built by two people who got tired of seeing good small businesses stuck with bad websites."
      />

      <section className="py-24 px-6 max-w-3xl mx-auto">
        <h2 className="heading-font text-2xl font-bold mb-4">
          Why we started UnifiedOps
        </h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          We started UnifiedOps because we kept seeing the same problem:
          good small businesses doing great work, held back by a website
          that was slow, outdated, or never quite finished. That&apos;s not
          a skills problem. It&apos;s usually just a matter of having
          someone build it right the first time.
        </p>
        <p className="text-gray-600 leading-relaxed">
          So we build simple, custom websites designed around your
          business, live on your own domain, with a straightforward price
          and no contract. For businesses that want more, our marketing
          system bundles the website with tools like missed call text
          back, review management, and local SEO, all in one monthly plan.
        </p>
      </section>

      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-font text-2xl font-bold mb-10 text-center">
            What we believe
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value) => (
              <div key={value.title} className="value-card">
                <h3 className="font-semibold mb-2 heading-font">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        heading="Let's talk about your business"
        body="Book a free call. No pressure, just a straight answer on whether we're a fit."
      />
    </>
  );
}
