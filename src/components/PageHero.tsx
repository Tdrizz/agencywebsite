export default function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <section className="page-hero px-6 py-20 text-center">
      <span className="eyebrow eyebrow-dark">{eyebrow}</span>
      <h1 className="heading-font text-4xl md:text-5xl font-extrabold mt-6 mb-4">
        {title}
      </h1>
      <p className="text-lg text-slate-300 max-w-2xl mx-auto">{subtitle}</p>
    </section>
  );
}
