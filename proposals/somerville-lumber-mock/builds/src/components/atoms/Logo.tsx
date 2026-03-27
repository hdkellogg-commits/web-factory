"use client";

import Link from "next/link";

/**
 * Atom: Logo
 * Brand identity element for Somerville Lumber Co.
 */
export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 group">
      <div className="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center text-white font-bold text-xl group-hover:rotate-12 transition-transform">
        S
      </div>
      <span className="font-sans font-black text-xl tracking-tighter text-foreground">
        SOMERVILLE<span className="text-brand-primary">LUMBER</span>
      </span>
    </Link>
  );
}
