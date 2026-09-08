"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/products", label: "Products" },
  { href: "/pricing", label: "Pricing" },
  { href: "/trades", label: "Trades We Serve" },
  { href: "/process", label: "Our Process" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="site-nav">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image src="/logo.svg" alt="UnifiedOps" width={34} height={34} className="rounded-[9px]" />
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
        <div className="flex items-center gap-3">
          <span className="hidden sm:inline-flex">
            <Link href="/contact" className="btn-primary btn-primary-sm">
              Book a Call
            </Link>
          </span>
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-gray-200 text-gray-700"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6 6 18" />
                <path d="M6 6l12 12" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 6h18" />
                <path d="M3 12h18" />
                <path d="M3 18h18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white px-6 py-4">
          <ul className="flex flex-col gap-1 text-sm font-medium text-gray-700 mb-4">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block py-2.5 ${
                    pathname === link.href ? "text-blue-600" : "hover:text-blue-600"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="btn-primary w-full"
          >
            Book a Call
          </Link>
        </div>
      )}
    </nav>
  );
}
