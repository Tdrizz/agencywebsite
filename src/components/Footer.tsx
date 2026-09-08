import Image from "next/image";
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
            <Image src="/logo.svg" alt="UnifiedOps" width={34} height={34} className="rounded-[9px]" />
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
      <div className="max-w-6xl mx-auto border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-3 text-xs text-slate-500">
        <span>&copy; 2026 UnifiedOps. All rights reserved.</span>
        <div className="flex items-center gap-5">
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
