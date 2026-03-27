"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Button from "../atoms/Button";

interface ToolCardProps {
  title: string;
  description: string;
  category: string;
}

/**
 * Molecule: ToolCard
 * A modular card representing an AI tool.
 */
export default function ToolCard({ title, description, category }: ToolCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="glass p-6 rounded-radius-xl flex flex-col gap-4 group relative overflow-hidden"
    >
      <div className="flex justify-between items-start">
        <span className="text-xs font-sans font-bold text-brand-primary uppercase tracking-widest">
          {category}
        </span>
        <ArrowUpRight className="w-5 h-5 text-brand-primary opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      
      <h3 className="text-xl font-sans font-bold leading-tight">
        {title}
      </h3>
      
      <p className="text-foreground/70 text-sm leading-relaxed line-clamp-2">
        {description}
      </p>
      
      <Button variant="outline" size="sm" className="mt-2 self-start opacity-0 group-hover:opacity-100 transition-opacity">
        Learn More
      </Button>
    </motion.div>
  );
}
