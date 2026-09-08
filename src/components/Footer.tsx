import Link from "next/link";

const siteLinks = [
  { href: "/products", label: "Products" },
  { href: "/pricing", label: "Pricing" },
  { href: "/trades", label: "Trades We Serve" },
  { href: "/process", label: "Our Process" },
  { href: "/about", label: "About" },
];

export default function Footer() {
  return (
    <footer className="site-footer px-6 pt-16 pb-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 mb-12">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="logo-mark">UO</span>
            <span className="text-lg font-bold heading-font text-white">
              UnifiedOps
            </span>
          </div>
          <p className="text-sm max-w-xs">
            Websites and marketing systems built for contractors — simple to
            use, no fluff.
          </p>
        </div>
        <div>
          <p className="text-white font-semibold text-sm mb-4">Site</p>
          <ul className="space-y-3 text-sm">
            {siteLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-white font-semibold text-sm mb-4">Get Started</p>
          <ul className="space-y-3 text-sm">
            <li>
              <Link href="/contact">Book a Call</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto border-t border-slate-800 pt-6 text-center text-xs text-slate-500">
        &copy; 2026 UnifiedOps. All rights reserved.
      </div>
    </footer>
  );
}
