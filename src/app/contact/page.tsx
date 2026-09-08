import type { Metadata } from "next";

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
        <form className="text-left space-y-5 bg-white p-8 rounded-2xl shadow-2xl">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Jane Contractor"
              className="form-field"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Your Email
            </label>
            <input
              type="email"
              placeholder="jane@example.com"
              className="form-field"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              How can we help?
            </label>
            <textarea
              placeholder="Tell us a bit about your business"
              className="form-field h-32"
            />
          </div>
          <button type="submit" className="btn-primary w-full">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
