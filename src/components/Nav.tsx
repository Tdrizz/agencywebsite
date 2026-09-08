import Link from "next/link";

const links = [
  { href: "/products", label: "Products" },
  { href: "/pricing", label: "Pricing" },
  { href: "/trades", label: "Trades We Serve" },
  { href: "/process", label: "Our Process" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  return (
    <nav className="site-nav">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="logo-mark">UO</span>
          <span className="text-lg font-bold heading-font tracking-tight">
            UnifiedOps
          </span>
        </Link>
        <ul className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-600">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:text-blue-600">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/contact" className="btn-primary btn-primary-sm">
          Book a Call
        </Link>
      </div>
    </nav>
  );
}
