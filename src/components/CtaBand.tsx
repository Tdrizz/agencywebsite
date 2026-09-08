import Link from "next/link";

export default function CtaBand({
  heading,
  body,
}: {
  heading: string;
  body: string;
}) {
  return (
    <section className="cta-band text-center py-20 px-6 text-white">
      <h2 className="heading-font text-3xl md:text-4xl font-bold mb-4">
        {heading}
      </h2>
      <p className="text-lg text-slate-300 mb-8 max-w-xl mx-auto">{body}</p>
      <Link href="/contact" className="btn-primary">
        Book a Free Call
      </Link>
    </section>
  );
}
