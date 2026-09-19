import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Portfolio | UnifiedOps",
};

const projects = [
  {
    name: "Alamont Builders",
    industry: "Commercial Construction · Mat-Su Borough, AK",
    description:
      "A custom site for a commercial remodel and construction contractor. Clean design, mobile friendly, with a contact form that sends estimate requests straight to their inbox.",
  },
  {
    name: "In & Out Flooring",
    industry: "Flooring Contractor · Alaska",
    description:
      "A custom site for a licensed and insured flooring contractor serving residential, rental, and commercial properties. Clean, mobile-friendly design built to turn visitors into calls.",
    url: "https://inanoutflooringak.com",
  },
];

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Sites we've built"
        subtitle="A look at the kind of work we do for local businesses."
      />

      <section className="py-24 px-6 max-w-4xl mx-auto">
        <div className="grid gap-8">
          {projects.map((project) => {
            return (
              <div key={project.name} className="service-card p-8">
                <div className="h-56 rounded-xl bg-slate-100 border border-dashed border-slate-300 flex items-center justify-center text-slate-400 text-sm mb-6">
                  Project screenshot
                </div>
                <div className="flex items-start justify-between gap-4 mb-1">
                  <h3 className="text-xl font-semibold heading-font">
                    {project.name}
                  </h3>
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:underline"
                    >
                      View Live Site
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M7 17 17 7" />
                        <path d="M7 7h10v10" />
                      </svg>
                    </a>
                  )}
                </div>
                <p className="text-sm text-blue-600 font-medium mb-3">
                  {project.industry}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            );
          })}
        </div>
        <p className="text-center text-gray-500 text-sm mt-10">
          More projects added as they launch.
        </p>
      </section>

      <CtaBand
        heading="Want your business featured here?"
        body="Tell us about your business and we'll show you what we'd build."
      />
    </>
  );
}
