import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Terms of Service | AK Website Agency",
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        subtitle="Last updated: October 2026"
      />

      <section className="py-20 px-6 max-w-3xl mx-auto">
        <div className="space-y-10 text-gray-700 leading-relaxed text-sm">
          <div>
            <h2 className="text-xl font-bold heading-font text-gray-900 mb-3">
              1. Agreement
            </h2>
            <p>
              These Terms of Service govern any website project or
              maintenance work you book with AK Website Agency. By
              approving a proposal or paying a deposit, you agree to these
              Terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold heading-font text-gray-900 mb-3">
              2. How Services Are Quoted
            </h2>
            <p>
              Services are quoted as flat project fees, agreed in writing
              before work begins. You&apos;ll always know the price of a
              project up front. Details on what&apos;s offered are on the{" "}
              <a href="/services" className="text-blue-600 hover:underline">
                Services &amp; Pricing
              </a>{" "}
              page.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold heading-font text-gray-900 mb-3">
              3. Deposit &amp; Payment
            </h2>
            <p>
              Project work is billed in two parts: a 50% deposit to start
              the project, and the remaining 50% due at launch. Monthly
              maintenance, if you choose it, is billed monthly.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold heading-font text-gray-900 mb-3">
              4. Changes &amp; Revisions
            </h2>
            <p>
              Each project includes a set number of revision rounds, as
              described in the proposal. Changes that go beyond the
              original agreed scope, such as new pages or features added
              after the project starts, are quoted and agreed separately
              before that extra work begins.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold heading-font text-gray-900 mb-3">
              5. Ownership
            </h2>
            <p>
              You own the content, branding, and domain for your website.
              If you cancel maintenance or stop working with AK Website
              Agency, your site and domain remain yours.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold heading-font text-gray-900 mb-3">
              6. Your Responsibilities
            </h2>
            <p>
              You&apos;re responsible for providing accurate business
              information and content needed to build your site, and for
              using the finished site in compliance with applicable laws.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold heading-font text-gray-900 mb-3">
              7. Cancellation &amp; Refunds
            </h2>
            <p>
              Details on canceling a project or maintenance plan are on the{" "}
              <a
                href="/refund-policy"
                className="text-blue-600 hover:underline"
              >
                Refund Policy
              </a>{" "}
              page.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold heading-font text-gray-900 mb-3">
              8. No Guarantee of Results
            </h2>
            <p>
              I build your site to a high standard, but I can&apos;t
              guarantee specific traffic, rankings, ad performance, or
              revenue, since those depend on many factors outside my
              control.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold heading-font text-gray-900 mb-3">
              9. Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by law, AK Website Agency is
              not liable for indirect or consequential damages arising from
              your use of the website or services. Total liability for any
              claim is limited to the amount you&apos;ve paid for the
              project or plan in question.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold heading-font text-gray-900 mb-3">
              10. Changes to These Terms
            </h2>
            <p>
              These Terms may be updated from time to time. The current
              version always applies to new work booked after an update.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold heading-font text-gray-900 mb-3">
              11. Contact
            </h2>
            <p>
              Questions about these Terms? Reach out through the{" "}
              <a href="/contact" className="text-blue-600 hover:underline">
                contact page
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
