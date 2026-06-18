import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Starter",
    price: "0",
    description: "Perfect for trying out FlowAI",
    features: [
      "100 tasks per month",
      "3 active workflows",
      "Basic integrations",
      "Community support",
    ],
    cta: "Start Free",
    popular: false,
  },
  {
    name: "Professional",
    price: "49",
    description: "For growing teams and businesses",
    features: [
      "10,000 tasks per month",
      "Unlimited workflows",
      "All integrations",
      "Priority support",
      "Advanced analytics",
      "Team collaboration",
    ],
    cta: "Start Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations",
    features: [
      "Unlimited tasks",
      "Unlimited workflows",
      "Custom integrations",
      "Dedicated support",
      "SLA guarantee",
      "Advanced security",
      "Custom training",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export function Pricing() {
  return (
    <section className="py-28 border-t border-border/50">
      <div className="container mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Simple,<br />transparent pricing.
          </h2>
          <p className="text-sm text-muted max-w-[240px] leading-relaxed md:text-right md:pb-1">
            No hidden fees. No surprise bills.<br />
            Change or cancel anytime.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 max-w-5xl">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`
                relative rounded-xl border p-7 flex flex-col transition-colors duration-300
                ${plan.popular
                  ? "border-primary/50 bg-primary/5"
                  : "border-border bg-card/60 hover:border-border/80"}
              `}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-6">
                  <div className="px-3 py-1 rounded bg-primary text-white text-xs font-semibold">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-bold mb-1">{plan.name}</h3>
                <p className="text-xs text-muted">{plan.description}</p>
              </div>

              <div className="mb-7">
                {plan.price === "Custom" ? (
                  <span className="text-4xl font-bold">Custom</span>
                ) : (
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold">${plan.price}</span>
                    <span className="text-sm text-muted">/month</span>
                  </div>
                )}
              </div>

              <div className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/80">{feature}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/pricing"
                className={`
                  w-full inline-flex items-center justify-center gap-2 font-semibold
                  px-6 py-3 rounded-lg text-sm transition-colors duration-200
                  ${plan.popular
                    ? "bg-primary text-white hover:bg-primary/90"
                    : "border border-border text-foreground hover:border-foreground/25 hover:bg-card"}
                `}
              >
                {plan.cta} <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8"
        >
          <a href="/pricing" className="text-sm text-primary hover:text-primary/80 transition-colors font-medium">
            See full feature comparison →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
