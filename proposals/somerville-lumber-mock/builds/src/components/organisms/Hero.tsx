"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "../atoms/Button";

/**
 * Organism: Hero
 * The "Star of the Show" entry section with goal-driven motion.
 */
export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 overflow-hidden px-8">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Text Content */}
        <div className="z-10 flex flex-col items-start gap-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-5xl lg:text-7xl font-sans font-black tracking-tighter leading-[1.1]"
          >
            The Future of <span className="text-brand-primary">AI Tools</span>, Curated for Discovery.
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="text-lg lg:text-xl text-foreground/70 max-w-lg leading-relaxed"
          >
            Empowering the next generation of creators with a high-fidelity hub for professional AI resources and insights.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.4, 
              delay: 0.6,
              type: "spring",
              stiffness: 260,
              damping: 20
            }}
          >
            <Button size="lg" className="shadow-lg shadow-brand-secondary/20">
              Explore the Hub
            </Button>
          </motion.div>
        </div>

        {/* Visual Asset */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative aspect-square lg:aspect-auto h-[600px] rounded-radius-xl overflow-hidden shadow-24 shadow-black/20"
        >
          <Image
            src="/hero-asset.png" // Mocked path for now, need to ensure the real asset is used
            alt="AI Tool Hub Visualization"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark/40 to-transparent" />
        </motion.div>
      </div>
      
      {/* Background Decorative Element */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-primary/10 blur-[120px] rounded-full" />
    </section>
  );
}
