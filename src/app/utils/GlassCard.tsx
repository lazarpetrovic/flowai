import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface GlassCardProps {
    children: ReactNode;
    className?: string;
    hover?: boolean;
}

export function GlassCard({children, className=" ", hover = true}: GlassCardProps) {
    return (
        <motion.div
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true}}
        transition={{duration: 0.5}}
        whileHover={hover ? {y: -5, scale: 1.02, transition: {duration: 0.1}} : {}}
        className={`
            relative rounded-2xl p-8 
            bg-card/50 backdrop-blur-xl 
            border border-border
            ${hover ? 'hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10' : ''}
            transition-all duration-100
            ${className}
          `}>
            {hover && (        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 hover:opacity-100 transition-opacity duration-100 pointer-events-none" />
)}
            <div className="relative z-10">{children}</div>
        </motion.div>
    )
}