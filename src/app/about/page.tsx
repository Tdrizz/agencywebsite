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
      "If it takes a manual to use, we didn't build it right. Everything we hand you should make sense in five minutes.",
  },
  {
    title: "No fluff, no contracts",
    description:
      "We'd rather earn your business every month than lock you in. Straight talk, straightforward pricing.",
  },
  {
    title: "Built for the trades",
    description:
      "We design for how contractors actually work — on the go, on the phone, between jobs.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Simple systems that actually work"
        subtitle="UnifiedOps was built by two people who got tired of watching good contractors lose jobs to bad marketing."
      />

      <section className="py-24 px-6 max-w-3xl mx-auto">
        <h2 className="heading-font text-2xl font-bold mb-4">
          Why we started UnifiedOps
        </h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          We started UnifiedOps because we kept seeing the same problem:
          skilled contractors doing great work, but losing business to slow
          websites, missed calls, and marketing that never got followed up
          on. None of that is a skills problem — it&apos;s a systems problem,
          and it&apos;s fixable.
        </p>
        <p className="text-gray-600 leading-relaxed">
          So we built UnifiedOps to be the systems layer for local trades — a
          website that actually converts, automatic follow-up so no lead
          gets missed, and marketing tools simple enough to use without a
          marketing degree.
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
        body="Book a free call — no pressure, just a straight answer on whether we're a fit."
      />
    </>
  );
}
