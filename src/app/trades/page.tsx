import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Trades We Serve | UnifiedOps",
};

const featuredTrades = [
  "Landscaping",
  "Roofing",
  "Plumbing",
  "Electrical",
  "HVAC",
  "Handyman",
  "Painting",
  "Decks & Patios",
  "Pressure Washing",
  "Remodeling",
  "Pool Construction",
  "General Contracting",
  "Fencing",
  "Flooring & Carpet",
  "Pest Control",
  "Tree Service",
];

export default function TradesPage() {
  return (
    <>
      <PageHero
        eyebrow="Trades We Serve"
        title="Built for the trades, not big brands"
        subtitle="If you run a local service business, UnifiedOps is built for you."
      />

      <section className="py-24 px-6 max-w-5xl mx-auto">
        <h2 className="heading-font text-2xl font-bold mb-8 text-center">
          Popular trades
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-16">
          {featuredTrades.map((trade) => (
            <div key={trade} className="trade-chip">
              {trade}
            </div>
          ))}
        </div>

        <h2 className="heading-font text-2xl font-bold mb-6 text-center">
          And more, including
        </h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto leading-relaxed">
          Concrete &amp; Paving, Hardscaping, Siding, Windows &amp; Doors,
          Gutters, Garage Doors, Insulation, Waterproofing, Solar, Locksmith,
          Moving Companies, Cleaning Services, Appliance Repair, Home
          Inspection, Excavation, Demolition, Cabinets &amp; Countertops, and
          most other local trade and home service businesses.
        </p>
        <p className="text-center mt-8">
          <Link href="/contact" className="text-blue-600 font-semibold hover:underline">
            Don&apos;t see your trade? Ask us on a call →
          </Link>
        </p>
      </section>

      <CtaBand
        heading="Whatever you build, fix, or install — we've got you"
        body="Book a call and we'll show you what UnifiedOps looks like for your trade."
      />
    </>
  );
}
