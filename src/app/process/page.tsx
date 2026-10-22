import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "How It Works | AK Website Agency",
};

const steps = [
  {
    title: "Free Consultation",
    description:
      "A quick call or email where I learn about your business, your goals, and what you need your site to do.",
  },
  {
    title: "Proposal With a Flat Price",
    description:
      "You get a written proposal with a flat price for the work, agreed up front. No hourly billing, no surprise invoices.",
  },
  {
    title: "50% Deposit",
    description:
      "Once you approve the proposal, a 50% deposit gets the project started and reserves time on my schedule.",
  },
  {
    title: "Build & Revisions",
    description:
      "Your site is designed and built around your business. You review it, and revisions continue until it's right.",
  },
  {
    title: "Launch & Final Payment",
    description:
      "Once you're happy with the site, it goes live on your domain and the remaining 50% is due.",
  },
  {
    title: "Optional Monthly Maintenance",
    description:
      "If you'd rather not manage updates and monitoring yourself, Website Maintenance keeps everything running for $100/month. No obligation to sign up.",
  },
];

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="How It Works"
        title="What working together looks like"
        subtitle="A clear, flat-priced path from first conversation to a live website."
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
        body="Reach out and tell me about your business. It takes a few minutes."
      />
    </>
  );
}
