import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "About | AK Website Agency",
};

const values = [
  {
    title: "Simple over clever",
    description:
      "Your site should be easy to explain and easy to use. No unnecessary complexity, on either side.",
  },
  {
    title: "Flat, upfront pricing",
    description:
      "You get a flat price before any work starts, so there are no surprise invoices along the way.",
  },
  {
    title: "Built around your business",
    description:
      "Not a template with your logo dropped in. I design around what you actually do and who you're trying to reach.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A website that actually fits your business"
        subtitle="AK Website Agency builds custom websites for small businesses and nonprofits in Alaska and Hawaii."
      />

      <section className="py-24 px-6 max-w-3xl mx-auto">
        <h2 className="heading-font text-2xl font-bold mb-4">
          Why AK Website Agency
        </h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          I started AK Website Agency because I kept seeing the same
          problem: good small businesses and nonprofits doing great work,
          held back by a website that was slow, outdated, or never quite
          finished. That&apos;s not a skills problem. It&apos;s usually just
          a matter of having someone build it right the first time, at a
          price that&apos;s agreed up front.
        </p>
        <p className="text-gray-600 leading-relaxed">
          I build custom, mobile-friendly websites, and can add SEO, Google
          Ads setup, or ongoing maintenance on top. Every project is quoted
          as a flat fee, so you know the cost before work begins.
        </p>
      </section>

      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-font text-2xl font-bold mb-10 text-center">
            What I believe
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
        body="Reach out and I'll give you a straight answer on whether I'm a fit."
      />
    </>
  );
}
