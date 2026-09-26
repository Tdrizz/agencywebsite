import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Contact | UnifiedOps",
};

export default function ContactPage() {
  return (
    <section className="contact-hero min-h-[calc(100vh-73px)] flex flex-col justify-between py-20 px-6 text-center">
      <div className="max-w-xl mx-auto w-full">
        <span className="eyebrow eyebrow-dark mb-6">Get in touch</span>
        <h1 className="heading-font text-4xl font-bold mb-4 text-white mt-6">
          Let&apos;s Talk
        </h1>
        <p className="text-lg text-slate-300 mb-10">
          Fill out the form and we&apos;ll be in touch within 24 hours.
        </p>
        <div className="bg-white p-4 sm:p-8 rounded-2xl shadow-2xl text-left">
          <iframe
            src="https://api.unifiedops.io/widget/form/N1jPO0u1eW3dwHvS7b8S"
            style={{ width: "100%", height: "860px", border: "none", borderRadius: "0px" }}
            id="inline-N1jPO0u1eW3dwHvS7b8S"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="3.0 Contact Form"
            data-height="860"
            data-layout-iframe-id="inline-N1jPO0u1eW3dwHvS7b8S"
            data-form-id="N1jPO0u1eW3dwHvS7b8S"
            data-cookie-consent="true"
            data-cookie-consent-provider="auto"
            title="3.0 Contact Form"
          />
        </div>
      </div>
      <Script src="https://api.unifiedops.io/js/form_embed.js" strategy="afterInteractive" />
    </section>
  );
}
