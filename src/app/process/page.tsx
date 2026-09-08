import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Our Process | UnifiedOps",
};

const steps = [
  {
    title: "Discovery Call",
    description:
      "A quick 20-minute call where we learn about your business, answer your questions, and walk you through exactly what we'd build — no pressure, no jargon.",
  },
  {
    title: "Onboarding & Buildout",
    description:
      "You fill out a short onboarding form with your business details, branding, and goals. We take it from there — your website and marketing systems are built and ready to go in about 7-10 days.",
  },
  {
    title: "Launch & Training",
    description:
      "We walk you through your new site and tools on a live call, answer every question, and make sure you're confident running things day to day. It's simple — no degree required.",
  },
  {
    title: "Ongoing Support",
    description:
      "We're a call or text away for changes, questions, or tuning your marketing as your business grows. No contracts — we earn your business every month.",
  },
];

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Process"
        title="What working with us looks like"
        subtitle="No long onboarding, no runaround — just a clear path from call to live system."
      />

      <section className="py-24 px-6 max-w-4xl mx-auto">
        <div className="space-y-14">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="grid md:grid-cols-[auto_1fr] gap-6 items-start"
            >
              <div className="step-num step-num-lg">{index + 1}</div>
              <div>
                <h2 className="text-2xl font-bold heading-font mb-2">
                  {step.title}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaBand
        heading="Ready to get started?"
        body="Book your discovery call — it takes 20 minutes."
      />
    </>
  );
}
