"use client";

import Navbar from "@/components/organisms/Navbar";
import Hero from "@/components/organisms/Hero";
import ToolCard from "@/components/molecules/ToolCard";
import { motion } from "framer-motion";

const MOCK_TOOLS = [
  { title: "NeuroFlow 2.0", description: "Seamless neural network orchestration for distributed teams.", category: "Infrastructure" },
  { title: "OptiGraph AI", description: "Vector-based visualization for complex LLM outputs.", category: "Analytics" },
  { title: "ScribeAgent", description: "Context-aware documentation generator for modern codebases.", category: "Productivity" },
  { title: "VisionSynth", description: "Real-time generative video synthesis for professional editors.", category: "Creative" },
  { title: "LoomCore", description: "Interconnected thread management for multi-agent systems.", category: "Intelligence" },
  { title: "Synthetix Pro", description: "High-fidelity voice synthesis with emotional inflection.", category: "Audio" }
];

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      
      {/* Tool Grid Section */}
      <section className="max-w-7xl mx-auto w-full py-spacing-24 px-8">
        <div className="flex flex-col gap-4 mb-spacing-8">
          <h2 className="text-3xl font-sans font-bold tracking-tight">
            Curated <span className="text-brand-primary">AI Toolsets</span>
          </h2>
          <p className="text-foreground/60 max-w-xl">
            A hand-picked selection of high-performance tools designed to accelerate your workflow.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_TOOLS.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1 }}
            >
              <ToolCard {...tool} />
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* Footer Placeholder */}
      <footer className="w-full py-12 border-t border-foreground/10 flex justify-center text-sm text-foreground/40 font-sans uppercase tracking-[0.2em]">
        © 2026 Somerville Lumber Co. | Pioneering the AI Frontier
      </footer>
    </main>
  );
}
