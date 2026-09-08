import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy | UnifiedOps",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="Last updated: January 2026"
      />

      <section className="py-20 px-6 max-w-3xl mx-auto prose-legal">
        <div className="space-y-10 text-gray-700 leading-relaxed text-sm">
          <div>
            <h2 className="text-xl font-bold heading-font text-gray-900 mb-3">
              1. Overview
            </h2>
            <p>
              UnifiedOps (&quot;UnifiedOps,&quot; &quot;we,&quot;
              &quot;us,&quot; or &quot;our&quot;) provides websites and
              marketing systems for contractors and local service
              businesses. This Privacy Policy explains what information we
              collect from you as a visitor, prospective client, or client,
              how we use it, and the choices you have.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold heading-font text-gray-900 mb-3">
              2. Information We Collect
            </h2>
            <p className="mb-3">We collect information you provide directly to us, such as:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Contact details (name, email address, phone number, business name) submitted through our contact form or booking a call</li>
              <li>Information you share with us during a discovery call or onboarding</li>
              <li>Billing and account information if you become a client</li>
            </ul>
            <p className="mt-3">
              We also automatically collect limited technical information
              when you visit our site, such as your IP address, browser
              type, and pages viewed, typically through standard analytics
              tools.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold heading-font text-gray-900 mb-3">
              3. Text Messages &amp; Calls
            </h2>
            <p>
              If you provide your phone number, you may receive calls or
              text messages from us related to your inquiry, onboarding, or
              the services you&apos;ve signed up for. Message and data rates
              may apply. You can opt out of text messages at any time by
              replying &quot;STOP,&quot; and you can ask to be removed from
              our call list at any time by telling us directly.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold heading-font text-gray-900 mb-3">
              4. How We Use Your Information
            </h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>To respond to inquiries and schedule calls</li>
              <li>To build, deliver, and support the website and marketing systems you&apos;ve purchased</li>
              <li>To send account, billing, or service-related communications</li>
              <li>To improve our website and services</li>
              <li>To comply with legal obligations</li>
            </ul>
            <p className="mt-3">
              We do not sell your personal information to third parties.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold heading-font text-gray-900 mb-3">
              5. How We Share Your Information
            </h2>
            <p>
              We may share information with service providers who help us
              operate our business (such as hosting, scheduling, payment
              processing, and communication tools), and only to the extent
              needed for them to perform those services. We may also
              disclose information if required by law or to protect our
              rights.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold heading-font text-gray-900 mb-3">
              6. Cookies &amp; Tracking
            </h2>
            <p>
              Our website may use cookies and similar technologies to
              understand site traffic and improve your experience. You can
              control cookies through your browser settings.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold heading-font text-gray-900 mb-3">
              7. Data Retention
            </h2>
            <p>
              We retain personal information for as long as needed to
              provide our services and for legitimate business or legal
              purposes, after which it is deleted or anonymized.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold heading-font text-gray-900 mb-3">
              8. Your Rights
            </h2>
            <p>
              Depending on where you live, you may have the right to
              access, correct, or delete your personal information, or to
              opt out of certain uses of it. To exercise any of these
              rights, contact us using the information below.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold heading-font text-gray-900 mb-3">
              9. Children&apos;s Privacy
            </h2>
            <p>
              Our services are intended for business owners and are not
              directed to children. We do not knowingly collect personal
              information from anyone under 18.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold heading-font text-gray-900 mb-3">
              10. Data Security
            </h2>
            <p>
              We use reasonable administrative, technical, and physical
              safeguards designed to protect your information. No method of
              transmission or storage is completely secure, so we can&apos;t
              guarantee absolute security.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold heading-font text-gray-900 mb-3">
              11. Third-Party Links
            </h2>
            <p>
              Our website may link to third-party sites. We are not
              responsible for the privacy practices of those sites, and
              encourage you to review their policies.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold heading-font text-gray-900 mb-3">
              12. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Changes
              will be posted on this page with an updated &quot;last
              updated&quot; date.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold heading-font text-gray-900 mb-3">
              13. Contact Us
            </h2>
            <p>
              If you have questions about this Privacy Policy or want to
              exercise your privacy rights, reach out to us through our{" "}
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
