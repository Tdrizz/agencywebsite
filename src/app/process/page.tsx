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
      "A quick call where we learn about your business, answer your questions, and walk you through exactly what we'd build — no pressure, no jargon.",
  },
  {
    title: "Onboarding & Build",
    description:
      "You share your business details, branding, and content. We take it from there — your site is designed and built around your business, usually live within 3-5 business days.",
  },
  {
    title: "Launch",
    description:
      "We deploy your site live on your domain, walk you through it, and make sure you're happy before we call it done.",
  },
  {
    title: "Ongoing Care (Optional)",
    description:
      "If you'd rather not manage hosting and small updates yourself, pick a care plan and we'll keep things running. No contract — cancel anytime.",
  },
];

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Process"
        title="What working with us looks like"
        subtitle="No long onboarding, no runaround — just a clear path from call to live website."
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
