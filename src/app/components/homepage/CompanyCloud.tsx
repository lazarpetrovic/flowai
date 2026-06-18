import { motion } from "framer-motion";

const companies = ["Slack", "Notion", "GitHub", "Figma", "Stripe", "Shopify", "Linear", "Vercel", "HubSpot", "Salesforce"];

export function CompanyCloud() {
  // Duplicate for seamless loop
  const doubled = [...companies, ...companies];

  return (
    <section className="py-16 border-t border-border/50 overflow-hidden">
      <div className="container mx-auto max-w-7xl px-6 mb-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-[0.12em] text-muted/60 font-medium text-center"
        >
          Trusted by teams at
        </motion.p>
      </div>

      {/* Marquee */}
      <div className="relative">
        {/* Fade masks */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-background to-transparent" />

        <div className="marquee-track">
          {doubled.map((company, i) => (
            <div
              key={i}
              className="flex items-center justify-center px-10 py-2"
            >
              <span className="text-muted/50 hover:text-muted font-semibold text-sm transition-colors duration-200 whitespace-nowrap cursor-default select-none">
                {company}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
