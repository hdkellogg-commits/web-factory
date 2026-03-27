"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Button from "@/components/atoms/Button";
import Navbar from "@/components/organisms/Navbar";
import ToolCard from "@/components/molecules/ToolCard";

const MOCK_TOOLS_BOLD = [
  { title: "NeuroPulse", description: "Bypassing traditional neural constraints.", category: "Disruptive" },
  { title: "ChaosEngine", description: "Generative entropy for creative breakthroughs.", category: "Entropy" },
  { title: "GlowCore", description: "Neon-integrated intelligence frameworks.", category: "Visual" }
];

export default function BoldVariant() {
  const { scrollYProgress } = useScroll();
  const xMarquee = useTransform(scrollYProgress, [0, 1], [0, -500]);

  return (
    <main className="bg-black text-white min-h-screen overflow-hidden selection:bg-brand-secondary selection:text-black">
      <Navbar />
      
      {/* Kinetic Background Type */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-5 select-none overflow-hidden">
        <motion.div 
          style={{ x: xMarquee }}
          className="text-[40rem] font-black whitespace-nowrap leading-none"
        >
          DISRUPTIVE AI DISRUPTIVE AI
        </motion.div>
      </div>

      {/* Broken Grid Hero */}
      <section className="relative pt-48 pb-32 px-8 max-w-7xl mx-auto flex flex-col lg:flex-row gap-0 items-center">
        
        {/* Overlapping Text */}
        <div className="lg:w-2/3 z-20 mix-blend-difference">
          <motion.h1 
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-7xl lg:text-[10rem] font-black tracking-tighter leading-[0.85] uppercase"
          >
            Break <br />
            <span className="text-brand-secondary italic">Everything.</span>
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 max-w-md bg-white text-black p-8 rounded-none border-l-[12px] border-brand-secondary"
          >
            <p className="font-mono text-sm leading-relaxed">
              [SYSTEM_OVERRIDE]: Somerville Lumber has evolved. The standard hub is obsolete. 
              The future is non-linear. The future is disruptive.
            </p>
            <Button variant="outline" className="mt-8 border-black text-black hover:bg-black hover:text-white rounded-none border-2">
              Bypass Reality
            </Button>
          </motion.div>
        </div>

        {/* Floating / Broken Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 1.2, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: -2 }}
          transition={{ duration: 1 }}
          className="lg:w-1/2 -mt-24 lg:-ml-24 z-10 relative aspect-[4/5] w-full max-w-lg shadow-[40px_-40px_0px_rgba(16,185,129,0.1)]"
        >
          <Image 
            src="/hero-bold.png"
            alt="Bold Variant Visualization"
            fill
            className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
            priority
          />
          <div className="absolute inset-0 border-[1px] border-white/20 pointer-events-none" />
        </motion.div>
      </section>

      {/* Asymmetrical Tool Grid */}
      <section className="max-w-7xl mx-auto py-24 px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4 flex flex-col justify-center">
          <h2 className="text-4xl font-black uppercase tracking-widest text-brand-secondary rotate-180 [writing-mode:vertical-lr] absolute -left-4">
            CORE_MODELS
          </h2>
          <p className="text-white/40 font-mono text-xs uppercase tracking-[0.4em] mb-8">
            // Non-linear toolsets //
          </p>
          <p className="text-lg font-bold leading-snug">
            The Bold Variant represents the "Disruptive" (10/10) tier of the Web Factory engine.
          </p>
        </div>

        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {MOCK_TOOLS_BOLD.map((tool, index) => (
            <motion.div 
              key={index}
              initial={{ skewY: 5, opacity: 0 }}
              whileInView={{ skewY: 0, opacity: 1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-neutral-900 border-r-4 border-brand-secondary p-8"
            >
              <h3 className="text-2xl font-black mb-2 uppercase">{tool.title}</h3>
              <p className="text-white/60 text-sm mb-4">{tool.description}</p>
              <span className="text-[10px] p-1 bg-white text-black font-bold uppercase tracking-widest">
                {tool.category}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Kinetic Footer */}
      <div className="w-full bg-brand-secondary py-4 overflow-hidden mask-fade-x">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="flex gap-24 whitespace-nowrap text-black font-black text-2xl uppercase"
        >
          <span>// Kinetic Type //</span>
          <span>// Broken Grids //</span>
          <span>// Disruptive Motion //</span>
          <span>// Non-Linear UX //</span>
          <span>// Kinetic Type //</span>
          <span>// Broken Grids //</span>
          <span>// Disruptive Motion //</span>
          <span>// Non-Linear UX //</span>
        </motion.div>
      </div>
    </main>
  );
}
