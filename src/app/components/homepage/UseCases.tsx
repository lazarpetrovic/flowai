import { motion } from "framer-motion";
import { Building2, ShoppingCart, Users, Zap } from "lucide-react";

const useCases = [
  {
    icon: Building2,
    category: "Sales & Marketing",
    title: "Lead Generation",
    description:
      "Automatically qualify leads, send follow-ups, and schedule meetings with prospects.",
    metrics: "3x faster",
  },
  {
    icon: ShoppingCart,
    category: "E-commerce",
    title: "Order Processing",
    description:
      "Streamline order fulfillment, inventory management, and customer notifications.",
    metrics: "80% less time",
  },
  {
    icon: Users,
    category: "HR & Operations",
    title: "Employee Onboarding",
    description:
      "Automate paperwork, training schedules, and equipment provisioning for new hires.",
    metrics: "10x efficiency",
  },
  {
    icon: Zap,
    category: "IT & DevOps",
    title: "Incident Response",
    description:
      "Detect issues, notify teams, and trigger automated remediation workflows.",
    metrics: "99.9% uptime",
  },
];

export function UseCases() {
  return (
    <section className="py-28 border-t border-border/50">
      <div className="container mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 grid md:grid-cols-[1fr_auto] items-end gap-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            One platform.<br />Every team.
          </h2>
          <p className="text-sm text-muted max-w-[260px] leading-relaxed md:pb-1">
            From sales to engineering — FlowAI adapts to how your team actually works.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {useCases.map((uc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(249,115,22,0.08)", transition: { type: "spring", stiffness: 380, damping: 28 } }}
              className="relative overflow-hidden rounded-xl border border-border bg-card/60 p-7 flex gap-5 hover:border-primary/20 transition-colors duration-300 group"
            >
              <div className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 [background:radial-gradient(ellipse_100%_60%_at_50%_0%,rgba(249,115,22,0.05),transparent)]" />
              <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                <uc.icon className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-muted mb-1.5">
                  {uc.category}
                </p>
                <h3 className="text-base font-semibold mb-2">{uc.title}</h3>
                <p className="text-sm text-muted leading-relaxed mb-4">{uc.description}</p>
                <div className="inline-flex items-center px-2.5 py-1 rounded border border-primary/25 bg-primary/8">
                  <span className="text-xs text-primary font-semibold">{uc.metrics}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-muted">
            Don't see your use case?{" "}
            <a href="/contact" className="text-primary hover:text-primary/80 transition-colors font-medium">
              Talk to our team →
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
