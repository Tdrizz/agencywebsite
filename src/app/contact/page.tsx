import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | AK Website Agency",
};

const CONTACT_EMAIL = "tittanolsondev@gmail.com";

export default function ContactPage() {
  return (
    <section className="contact-hero min-h-[calc(100vh-73px)] flex flex-col justify-center py-20 px-6 text-center">
      <div className="max-w-xl mx-auto w-full">
        <span className="eyebrow eyebrow-dark mb-6">Get in touch</span>
        <h1 className="heading-font text-4xl font-bold mb-4 text-white mt-6">
          Let&apos;s Talk
        </h1>
        <p className="text-lg text-slate-300 mb-10">
          I serve small businesses and nonprofits in Alaska and Hawaii.
          Email me about your project and I&apos;ll follow up with next
          steps.
        </p>

        <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-2xl text-left">
          <p className="text-sm font-medium text-gray-700 mb-1.5">Email</p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-2xl font-bold heading-font text-blue-600 hover:underline break-all"
          >
            {CONTACT_EMAIL}
          </a>
          <p className="text-gray-600 text-sm mt-4 mb-6">
            Tell me a bit about your business, what you need your website
            to do, and any deadlines you&apos;re working with.
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
              "Website inquiry"
            )}`}
            className="btn-primary w-full"
          >
            Email Me
          </a>
        </div>

        <p className="text-slate-400 text-sm mt-8">
          Serving small businesses and nonprofits across Alaska and Hawaii.
        </p>
      </div>
    </section>
  );
}
