import { motion } from "framer-motion";
import { Link2, Wand2, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Link2,
    title: "Connect Your Apps",
    description:
      "Link your favorite tools and services in seconds. Choose from 1000+ integrations — Slack, Notion, GitHub, Stripe, and more.",
  },
  {
    number: "02",
    icon: Wand2,
    title: "Design Your Workflow",
    description:
      "Use our intuitive drag-and-drop builder to create powerful automation workflows. No coding knowledge required.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Let AI Do the Work",
    description:
      "Activate your workflow and watch AI handle the rest. Monitor runs in real time, inspect logs, and iterate instantly.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-28 relative border-t border-border/50 overflow-hidden">
      <div className="container mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Up and running<br />in three steps.
          </h2>
          <p className="text-sm text-muted max-w-xs leading-relaxed md:text-right md:pb-1">
            No setup calls. No long onboarding.<br />
            Connect, build, and go live in minutes.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid lg:grid-cols-3 gap-0 relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden lg:block absolute top-[26px] left-[calc(33.33%/2)] right-[calc(33.33%/2)] h-px border-t border-dashed border-border/60 z-0" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative z-10 flex flex-col px-0 lg:px-8 first:pl-0 last:pr-0 py-0 pb-12 lg:pb-0"
            >
              {/* Step indicator */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-[52px] h-[52px] rounded-xl border border-border bg-card flex items-center justify-center flex-shrink-0">
                  <step.icon className="w-5 h-5 text-primary" />
                </div>
                {/* Horizontal line between steps on mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex-1 h-px border-t border-dashed border-border/60" />
                )}
              </div>

              <div className="flex items-baseline gap-3 mb-3">
                <span className="text-xs font-mono text-muted/60">{step.number}</span>
                <h3 className="text-xl font-semibold">{step.title}</h3>
              </div>
              <p className="text-sm text-muted leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
