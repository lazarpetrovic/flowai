import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

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
        <div className="container mx-auto max-w-7xl px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
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

                <motion.h1
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y:0}}
                transition={{delay: 0.3}}
                className="text-5xl md:text-7xl font-bold leading-tight">
                    Automate Your{' '}
                    <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        Workflows
                    </span>{' '}
                    with AI
                </motion.h1>

                <motion.p
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y:0}}
                transition={{delay: 0.4}}
                className="text-lg text-muted max-w-xl">
                    Build, deploy and scale AI-powered automation in minutes. No coding required.
              </motion.p>

              <motion.div
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{delay: 0.5}}
              className="flex flex-col sm:flex-row gap-4">
                <Link to="/" className=" inline-flex items-center justify-center font-medium bg-gradient-to-r from-primary to-secondary text-background hover:shadow-lg hover:shadow-primary/20 hover:scale-105 px-8 py-4 text-lg rounded-lg transition-shadow transition-transform duration-300">
                    Get Started Free <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link to="/contact" className="inline-flex items-center justify-center font-medium bg-card/80 backdrop-blur-sm text-foreground border border-border hover:border-primary/50 hover:bg-card px-8 py-4 text-lg rounded-lg transition-border transition-colors duration-300">
                    Book a Demo <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </motion.div> 

              <motion.div
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{delay: 0.6}}
              className="flex gap-8 pt-4">
                <div>
                    <div className="text-3xl font-bold text-primary">10k+</div>
                    <div className="text-sm text-muted">Active Users</div>
                </div>
                <div>
                    <div className="text-3xl font-bold text-primary">1M+</div>
                    <div className="text-sm text-muted">Workflows Automated</div>
                </div>
                <div>
                    <div className="text-3xl font-bold text-primary">99.9%</div>
                    <div className="text-sm text-muted">Uptime</div>
                </div>
              </motion.div>
            </motion.div>
            <motion.div
            initial={{opacity: 0, x:50}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 0.8}}
            className="relative h-[600px] hidden lg:block">
                <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [-2, 2, -2],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute top-20 left-0 w-64 p-6 rounded-2xl bg-card/80 backdrop-blur-xl border border-border shadow-xl"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-background" />
              </div>
              <div className="text-sm font-semibold mb-2">AI Automation</div>
              <div className="text-xs text-muted">Automate complex workflows with AI</div>
              <div className="mt-4 h-2 bg-background/50 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '75%' }}
                  transition={{ delay: 1, duration: 1.5 }}
                  className="h-full bg-gradient-to-r from-primary to-secondary"
                />
              </div>
            </motion.div>

            {/* Floating Card 2 */}
            <motion.div
              animate={{
                y: [0, 20, 0],
                rotate: [2, -2, 2],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.5,
              }}
              className="absolute top-40 right-0 w-72 p-6 rounded-2xl bg-card/80 backdrop-blur-xl border border-border shadow-xl"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-sm font-semibold">Analytics Dashboard</div>
                <div className="text-xs text-primary">+24%</div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-muted">Tasks Completed</span>
                  <span className="text-sm font-semibold">1,284</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-muted">Time Saved</span>
                  <span className="text-sm font-semibold">156h</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-muted">Success Rate</span>
                  <span className="text-sm font-semibold">98.5%</span>
                </div>
              </div>
            </motion.div>

            {/* Floating Card 3 */}
            <motion.div
              animate={{
                y: [0, -15, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1,
              }}
              className="absolute bottom-20 left-10 w-56 p-6 rounded-2xl bg-card/80 backdrop-blur-xl border border-border shadow-xl"
            >
              <div className="text-sm font-semibold mb-4">Team Collaboration</div>
              <div className="flex -space-x-2 mb-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary border-2 border-card"
                  />
                ))}
                <div className="w-8 h-8 rounded-full bg-background/50 border-2 border-card flex items-center justify-center">
                  <span className="text-xs">+12</span>
                </div>
              </div>
              <div className="text-xs text-muted">16 team members active</div>
            </motion.div>
            </motion.div>
            </div>
        </div>
    </section>
}