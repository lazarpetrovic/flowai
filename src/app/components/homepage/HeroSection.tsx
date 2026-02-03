import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function HeroSection() {
    return <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />        
            <motion.div 
            animate={{scale: [1, 1.2, 1], rotate: [0, 90, 0]}}
            transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 
            rounded-full blur-3xl" />

            <motion.div 
            animate={{scale: [1, 1.3, 1], rotate: [0, -90, 0]}}
            transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-secondary/20 
            rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
            <motion.div 
            initial={{opacity: 0, x: -50}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 0.8}}
            className="space-y-8">
                <motion.div
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y:0}}
                transition={{delay: 0.2}}
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                    <Sparkles className="w-4 h-4 text-primary" />
                    <span className="text-sm text-foreground">AI-Powered Automation</span>
                </motion.div>
            </motion.div>
        </div>
    </section>
}