import Link from "next/link";

const siteLinks = [
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/process", label: "How It Works" },
  { href: "/about", label: "About" },
];

const CONTACT_EMAIL = "tittanolsondev@gmail.com";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer px-6 pt-16 pb-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 mb-12">
        <div>
          <div className="mb-4">
            <span className="text-lg font-bold heading-font text-white">
              AK Website Agency
            </span>
          </div>
          <p className="text-sm max-w-xs">
            Custom websites for small businesses and nonprofits in Alaska
            and Hawaii. Flat project pricing, no surprises.
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
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-3 text-xs text-slate-500">
        <span>
          &copy; {year} AK Website Agency. All rights reserved. ·{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </span>
        <div className="flex items-center gap-5">
          <Link href="/terms">Terms of Service</Link>
          <Link href="/refund-policy">Refund Policy</Link>
          <Link href="/privacy">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
