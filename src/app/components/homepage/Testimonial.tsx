import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO at TechCorp",
    content:
      "FlowAI transformed our operations. We automated 80% of our repetitive tasks in the first month.",
  },
  {
    name: "Michael Rodriguez",
    role: "Founder at StartupXYZ",
    content:
      "The no-code builder is incredibly intuitive. Our non-technical team was up and running in hours.",
  },
  {
    name: "Emily Watson",
    role: "Operations Manager",
    content:
      "Best automation platform we've used. The AI capabilities are truly next-level.",
  },
];

export function Testimonials() {
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
            Testimonials
          </p>
          <h2 className="text-4xl md:text-5xl font-bold max-w-xl">
            Loved by{" "}
            <span className="text-primary">thousands</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-xl border border-border bg-card/60 p-7 flex flex-col gap-6 hover:border-border/80 transition-colors duration-300"
            >
              {/* Quote */}
              <p className="text-sm text-foreground/85 leading-relaxed flex-1">
                "{t.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border/60">
                <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs font-bold flex-shrink-0">
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 flex items-center justify-center gap-8 text-sm text-muted"
        >
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-foreground">4.9</span>
            <span className="text-muted">/5 average rating</span>
          </div>
          <div className="h-4 w-px bg-border" />
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-foreground">2,000+</span>
            <span className="text-muted">verified reviews</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
