import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Terms of Service | UnifiedOps",
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        subtitle="Last updated: January 2026"
      />

      <section className="py-20 px-6 max-w-3xl mx-auto">
        <div className="space-y-10 text-gray-700 leading-relaxed text-sm">
          <div>
            <h2 className="text-xl font-bold heading-font text-gray-900 mb-3">
              1. Agreement to Terms
            </h2>
            <p>
              These Terms of Service (&quot;Terms&quot;) govern your use of
              the UnifiedOps website and services. By booking a call,
              signing up for a plan, or otherwise using our services, you
              agree to these Terms. If you don&apos;t agree, please don&apos;t
              use our services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold heading-font text-gray-900 mb-3">
              2. Our Services
            </h2>
            <p>
              UnifiedOps designs and builds custom websites for small
              businesses, with an optional ongoing care plan for hosting and
              updates, as described on our{" "}
              <a href="/pricing" className="text-blue-600 hover:underline">
                Pricing
              </a>{" "}
              page.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold heading-font text-gray-900 mb-3">
              3. Accounts &amp; Onboarding
            </h2>
            <p>
              To get started, you&apos;ll provide accurate information about
              your business during onboarding. You&apos;re responsible for
              keeping your account and business information current and
              accurate.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold heading-font text-gray-900 mb-3">
              4. Billing
            </h2>
            <p>
              The website build is billed as a one-time, upfront fee. If you
              choose an ongoing care plan, that portion is billed on a
              recurring monthly basis as described on our{" "}
              <a href="/pricing" className="text-blue-600 hover:underline">
                Pricing
              </a>{" "}
              page, and renews automatically each month until canceled.
              You&apos;re responsible for all charges incurred under your
              account.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold heading-font text-gray-900 mb-3">
              5. Cancellation
            </h2>
            <p>
              There&apos;s no contract on the website build itself — it&apos;s
              a one-time purchase. A care plan can be canceled at any time,
              effective at the end of your current billing period. If we
              host your site as part of a care plan and it&apos;s canceled,
              hosting ends, though you keep your domain and we&apos;ll
              export your site&apos;s content to you.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold heading-font text-gray-900 mb-3">
              6. Acceptable Use
            </h2>
            <p className="mb-3">You agree not to use our services to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Violate any applicable law or regulation</li>
              <li>Send unsolicited or misleading communications</li>
              <li>Infringe on the intellectual property or rights of others</li>
              <li>Interfere with or disrupt the operation of our services</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold heading-font text-gray-900 mb-3">
              7. Intellectual Property
            </h2>
            <p>
              Upon full payment, you own the content and branding created
              specifically for your website. UnifiedOps retains ownership of
              our underlying tools, templates, and processes used to deliver
              our services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold heading-font text-gray-900 mb-3">
              8. Disclaimers
            </h2>
            <p>
              Our services are provided &quot;as is.&quot; While we build
              your site to a high standard, we don&apos;t guarantee
              specific business results, traffic, or revenue, as those
              depend on many factors outside our control.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold heading-font text-gray-900 mb-3">
              9. Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by law, UnifiedOps will not be
              liable for any indirect, incidental, or consequential damages
              arising from your use of our services. Our total liability for
              any claim will not exceed the amount you paid us in the three
              months prior to the claim.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold heading-font text-gray-900 mb-3">
              10. Termination
            </h2>
            <p>
              We may suspend or terminate your access to our services if you
              violate these Terms or fail to pay applicable fees.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold heading-font text-gray-900 mb-3">
              11. Changes to These Terms
            </h2>
            <p>
              We may update these Terms from time to time. Continued use of
              our services after changes take effect means you accept the
              updated Terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold heading-font text-gray-900 mb-3">
              12. Contact Us
            </h2>
            <p>
              Questions about these Terms? Reach out through our{" "}
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
