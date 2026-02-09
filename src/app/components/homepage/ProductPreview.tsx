import { motion } from "framer-motion";
import { Play } from "lucide-react";

export function ProductPreview() {
    return (
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              See{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                FlowAI
              </span>{' '}
              in action
            </h2>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              Watch how easy it is to build and deploy powerful AI workflows.
            </p>
          </motion.div>
  
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl overflow-hidden bg-card/50 backdrop-blur-xl border border-border p-2"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary opacity-20 blur-2xl" />
            
            <div className="relative aspect-video bg-gradient-to-br from-card to-background rounded-2xl flex items-center justify-center group cursor-pointer overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
              
              {/* Play Button */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="relative z-10 w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/30 group-hover:shadow-2xl group-hover:shadow-primary/50 transition-all duration-300"
              >
                <Play className="w-8 h-8 text-background ml-1" fill="currentColor" />
              </motion.div>
  
              {/* Mock UI Elements */}
              <div className="absolute inset-0 p-12 opacity-30">
                <div className="flex gap-4 mb-8">
                  <div className="w-32 h-8 rounded-lg bg-primary/20" />
                  <div className="w-24 h-8 rounded-lg bg-secondary/20" />
                  <div className="w-28 h-8 rounded-lg bg-primary/20" />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-32 rounded-xl bg-card border border-border" />
                  <div className="h-32 rounded-xl bg-card border border-border" />
                  <div className="h-32 rounded-xl bg-card border border-border" />
                </div>
              </div>
            </div>
          </motion.div>
  
          {/* Stats Below */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8"
          >
            {[
              { value: '3min', label: 'Average Setup Time' },
              { value: '10k+', label: 'Templates Available' },
              { value: '1000+', label: 'Integrations' },
              { value: '24/7', label: 'Support' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    );
  }