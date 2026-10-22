import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy | AK Website Agency",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="Last updated: October 2026"
      />

      <section className="py-20 px-6 max-w-3xl mx-auto">
        <div className="space-y-10 text-gray-700 leading-relaxed text-sm">
          <div>
            <h2 className="text-xl font-bold heading-font text-gray-900 mb-3">
              What I Collect
            </h2>
            <p>
              When you contact me by email, I receive whatever contact
              information you choose to share, such as your name, email
              address, and any business details or project information you
              include in your message.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold heading-font text-gray-900 mb-3">
              How I Use It
            </h2>
            <p>
              I use that information only to respond to your inquiry and,
              if you become a client, to deliver and support your website
              project or maintenance plan.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold heading-font text-gray-900 mb-3">
              What I Don&apos;t Do
            </h2>
            <p>
              I don&apos;t sell your information to anyone, and I don&apos;t
              share it except with service providers needed to do the work
              you&apos;ve hired me for (for example, hosting your site), or
              if required by law.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold heading-font text-gray-900 mb-3">
              Questions
            </h2>
            <p>
              If you have questions about this policy or want your
              information removed, reach out through the{" "}
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
