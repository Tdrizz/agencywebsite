import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Refund Policy | AK Website Agency",
};

export default function RefundPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Refund Policy"
        subtitle="Last updated: October 2026"
      />

      <section className="py-20 px-6 max-w-3xl mx-auto">
        <div className="bg-amber-50 border border-amber-200 text-amber-900 text-sm rounded-xl p-4 mb-10">
          This is a plain-language summary and should be reviewed by a
          lawyer before you rely on it legally.
        </div>

        <div className="space-y-10 text-gray-700 leading-relaxed text-sm">
          <div>
            <h2 className="text-xl font-bold heading-font text-gray-900 mb-3">
              Project Deposits
            </h2>
            <p>
              Deposits are non-refundable once work begins. The deposit
              reserves time on the schedule and covers the start of design
              and development work on your project.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold heading-font text-gray-900 mb-3">
              Canceling Before Launch
            </h2>
            <p>
              If a project is canceled before it launches, you only pay for
              the work completed up to that point. If the work completed
              is worth less than the deposit already paid, the difference
              is refunded. If it&apos;s worth more, you&apos;ll be invoiced
              for the remaining amount.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold heading-font text-gray-900 mb-3">
              Monthly Maintenance
            </h2>
            <p>
              Website Maintenance can be canceled anytime with 30 days&apos;
              notice. There are no refunds for the current month once
              it&apos;s been billed, since maintenance covers ongoing
              monitoring for that period.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold heading-font text-gray-900 mb-3">
              Questions
            </h2>
            <p>
              If something about a specific project or invoice doesn&apos;t
              seem right, reach out through the{" "}
              <a href="/contact" className="text-blue-600 hover:underline">
                contact page
              </a>{" "}
              and I&apos;ll work with you to sort it out.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
