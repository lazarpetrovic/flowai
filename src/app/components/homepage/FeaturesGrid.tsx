import { Code2, BarChart3, Sparkles, Users, Shield, Puzzle } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Sparkles,
    title: "AI Automation",
    description:
      "Leverage advanced AI to automate complex workflows and decision-making processes. Handles edge cases, retries, and branching logic automatically.",
    wide: true,
  },
  {
    icon: BarChart3,
    title: "Smart Analytics",
    description: "Real-time insights and analytics to continuously optimize your automated workflows.",
    tall: true,
  },
  {
    icon: Code2,
    title: "No-Code Builder",
    description: "Build powerful automations without writing a single line of code.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Work together on shared workflows with version history and role-based access.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "SOC 2 compliance and end-to-end encryption built in from day one.",
  },
  {
    icon: Puzzle,
    title: "1000+ Integrations",
    description: "Connect with every tool your team already uses.",
    wide: true,
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08 },
  }),
};

export function FeaturesGrid() {
  return (
    <section className="py-28 relative border-t border-border/50">
      <div className="container mx-auto max-w-7xl px-6">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-xs uppercase tracking-[0.12em] text-muted font-medium mb-4">
            Features
          </p>
          <h2 className="text-4xl md:text-5xl font-bold max-w-xl">
            Everything you need to{" "}
            <span className="text-primary">automate</span>
          </h2>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-3 grid-rows-[auto_auto_auto] gap-4">
          {/* F1 — AI Automation: wide (col-span-2) */}
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
            className="col-span-2 rounded-xl border border-border bg-card/60 p-7 flex flex-col gap-5 group hover:border-border/80 transition-colors duration-300"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">{features[0].title}</h3>
              <p className="text-sm text-muted leading-relaxed">{features[0].description}</p>
            </div>
            {/* Mini workflow strip */}
            <div className="mt-auto flex items-center gap-2 pt-4 border-t border-border/60">
              {["Trigger", "AI Process", "Branch", "Action"].map((step, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className={`px-2.5 py-1 rounded text-[10px] font-medium border ${
                    i === 1
                      ? "bg-primary/10 border-primary/30 text-primary"
                      : "bg-background/50 border-border text-muted"
                  }`}>
                    {step}
                  </div>
                  {i < 3 && <div className="w-3 h-px bg-border" />}
                </div>
              ))}
            </div>
          </motion.div>

          {/* F2 — Analytics: tall (row-span-2) */}
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
            className="row-span-2 rounded-xl border border-border bg-card/60 p-7 flex flex-col group hover:border-border/80 transition-colors duration-300"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center mb-5">
              <BarChart3 className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{features[1].title}</h3>
            <p className="text-sm text-muted leading-relaxed">{features[1].description}</p>

            {/* Mini bar chart */}
            <div className="mt-auto pt-6 border-t border-border/60">
              <div className="flex items-end gap-1.5 h-20">
                {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                  <div key={i} className="flex-1 flex flex-col justify-end">
                    <div
                      className={`rounded-sm w-full transition-all duration-500 ${
                        i === 5 ? "bg-primary" : "bg-border/60"
                      }`}
                      style={{ height: `${h}%` }}
                    />
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-2 text-[10px] text-muted">
                <span>Mon</span><span>Sun</span>
              </div>
              <div className="mt-3 text-xs text-emerald-400 font-medium">↑ 24% this week</div>
            </div>
          </motion.div>

          {/* F3 — No-Code */}
          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
            className="rounded-xl border border-border bg-card/60 p-7 group hover:border-border/80 transition-colors duration-300"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center mb-5">
              <Code2 className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{features[2].title}</h3>
            <p className="text-sm text-muted leading-relaxed">{features[2].description}</p>
          </motion.div>

          {/* F4 — Team */}
          <motion.div
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
            className="rounded-xl border border-border bg-card/60 p-7 group hover:border-border/80 transition-colors duration-300"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center mb-5">
              <Users className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{features[3].title}</h3>
            <p className="text-sm text-muted leading-relaxed">{features[3].description}</p>
          </motion.div>

          {/* F5 — Security */}
          <motion.div
            custom={4}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
            className="rounded-xl border border-border bg-card/60 p-7 group hover:border-border/80 transition-colors duration-300"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center mb-5">
              <Shield className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{features[4].title}</h3>
            <p className="text-sm text-muted leading-relaxed">{features[4].description}</p>
          </motion.div>

          {/* F6 — Integrations: wide (col-span-2) */}
          <motion.div
            custom={5}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
            className="col-span-2 rounded-xl border border-border bg-card/60 p-7 flex flex-col gap-5 group hover:border-border/80 transition-colors duration-300"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center">
              <Puzzle className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">{features[5].title}</h3>
              <p className="text-sm text-muted leading-relaxed">{features[5].description}</p>
            </div>
            {/* Integration logos (text-based) */}
            <div className="mt-auto flex flex-wrap gap-2 pt-4 border-t border-border/60">
              {["Slack", "GitHub", "Stripe", "Notion", "Salesforce", "HubSpot", "+ 994 more"].map((name) => (
                <span
                  key={name}
                  className="px-2.5 py-1 rounded border border-border text-[11px] text-muted font-medium"
                >
                  {name}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
