import { motion } from "framer-motion";
import { Play } from "lucide-react";

export function ProductPreview() {
  return (
    <section className="py-28 border-t border-border/50">
      <div className="container mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-xs uppercase tracking-[0.12em] text-muted font-medium mb-4">
            Product
          </p>
          <h2 className="text-4xl md:text-5xl font-bold max-w-xl">
            See{" "}
            <span className="text-primary">FlowAI</span>
            {" "}in action
          </h2>
        </motion.div>

        {/* Video frame */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-xl overflow-hidden border border-border bg-card/40"
        >
          <div className="relative aspect-video flex items-center justify-center group cursor-pointer">
            {/* Dot grid */}
            <div className="absolute inset-0 bg-[radial-gradient(rgba(245,242,238,0.025)_1px,transparent_1px)] bg-[size:22px_22px]" />

            {/* Mock UI chrome */}
            <div className="absolute inset-0 p-10 opacity-20 pointer-events-none">
              <div className="flex gap-3 mb-6">
                {["Dashboard", "Workflows", "Analytics", "Settings"].map((t) => (
                  <div key={t} className="px-3 py-1.5 rounded border border-border text-xs text-muted">
                    {t}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-4 gap-3">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className={`rounded-lg border border-border bg-card/80 ${i % 3 === 0 ? "col-span-2 h-24" : "h-16"}`} />
                ))}
              </div>
            </div>

            {/* Play button */}
            <motion.div
              whileHover={{ scale: 1.08 }}
              className="relative z-10 w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/30 transition-shadow duration-300 group-hover:shadow-xl group-hover:shadow-primary/40"
            >
              <Play className="w-6 h-6 text-white ml-0.5" fill="currentColor" />
            </motion.div>
          </div>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { value: "3 min", label: "Average Setup Time" },
            { value: "10k+", label: "Templates Available" },
            { value: "1000+", label: "Integrations" },
            { value: "24/7", label: "Support" },
          ].map((stat) => (
            <div key={stat.label} className="rounded-xl border border-border bg-card/40 px-5 py-4">
              <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-xs text-muted">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
