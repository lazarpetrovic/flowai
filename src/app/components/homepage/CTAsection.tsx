import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export function CTAsection() {
    return (
      <section className="py-32 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, -180, 0],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute bottom-0 right-1/4 w-[30rem] h-[30rem] bg-secondary/20 rounded-full blur-3xl"
          />
        </div>
  
        <div className="container mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            {/* Main Content */}
            <div className="relative p-12 md:p-16 rounded-3xl bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-border overflow-hidden">
              {/* Grid Pattern */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
              
              <div className="relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h2 className="text-4xl md:text-6xl font-bold mb-6">
                    Ready to{' '}
                    <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      automate
                    </span>
                    ?
                  </h2>
                  <p className="text-xl text-muted mb-10 max-w-2xl mx-auto">
                    Join thousands of teams already using FlowAI to streamline their workflows and boost productivity.
                  </p>
                </motion.div>
  
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                <Link to="/" className=" inline-flex items-center justify-center font-medium bg-gradient-to-r from-primary to-secondary text-background hover:shadow-lg hover:shadow-primary/20 hover:scale-105 px-8 py-4 text-lg rounded-lg transition-shadow transition-transform duration-300">
                    Get Started Free
                </Link>
                <Link to="/contact" className="inline-flex items-center justify-center font-medium bg-card/80 backdrop-blur-sm text-foreground border border-border hover:border-primary/50 hover:bg-card px-8 py-4 text-lg rounded-lg transition-border transition-colors duration-300">
                    Book a Demo
                </Link>
                </motion.div>
  
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="mt-8 text-sm text-muted"
                >
                  No credit card required • Free 14-day trial • Cancel anytime
                </motion.p>
              </div>
            </div>
  
            {/* Feature Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-12 flex flex-wrap justify-center gap-8 text-sm"
            >
              <div className="flex items-center gap-2 text-muted">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span>SOC 2 Certified</span>
              </div>
              <div className="flex items-center gap-2 text-muted">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span>GDPR Compliant</span>
              </div>
              <div className="flex items-center gap-2 text-muted">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span>99.9% Uptime</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    );
  }