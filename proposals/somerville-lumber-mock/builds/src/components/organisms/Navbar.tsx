"use client";

import { usePathname } from "next/navigation";
import Logo from "../atoms/Logo";
import Button from "../atoms/Button";

/**
 * Organism: Navbar
 * Global navigation with glassmorphism and dynamic variant switching.
 */
export default function Navbar() {
  const pathname = usePathname();
  const isBold = pathname === "/bold";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-spacing-8">
      <div className="w-full max-w-7xl glass rounded-radius-xl px-8 py-4 flex justify-between items-center">
        <Logo />
        
        <div className="hidden md:flex items-center gap-8 font-sans font-bold text-sm uppercase tracking-widest text-foreground/80">
          <a href="#" className="hover:text-brand-primary transition-colors">Tools</a>
          <a href="#" className="hover:text-brand-primary transition-colors">Pricing</a>
          <a href="#" className="hover:text-brand-primary transition-colors">About</a>
        </div>
        
        <div className="flex items-center gap-4">
          <a 
            href={isBold ? "/" : "/bold"} 
            className="text-[10px] font-black tracking-[0.2em] px-3 py-1 bg-brand-secondary text-black rounded-none hover:bg-white transition-colors"
          >
            {isBold ? "STANDARD_MODE" : "BOLD_MODE"}
          </a>
          <Button variant="outline" size="sm" className="hidden sm:block">Login</Button>
          <Button size="sm">Get Started</Button>
        </div>


      </div>
    </nav>
  );
}
