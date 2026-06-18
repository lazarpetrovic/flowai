import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function CTAsection() {
  return (
    <section className="py-28 border-t border-border/50">
      <div className="container mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl border border-border overflow-hidden"
        >
          {/* Dot grid */}
          <div className="absolute inset-0 bg-[radial-gradient(rgba(245,242,238,0.035)_1px,transparent_1px)] bg-[size:22px_22px]" />
          {/* Warm top glow */}
          <div className="absolute inset-0 [background:radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(249,115,22,0.08),transparent)]" />

          <div className="relative z-10 px-10 py-16 md:px-16 md:py-20">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-[1.0]">
                Ready to<br />
                automate?
              </h2>
              <p className="text-base text-muted mb-10 max-w-md leading-relaxed">
                Join thousands of teams already using FlowAI to streamline their
                workflows and save hours every week.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/"
                  className="inline-flex items-center justify-center gap-2 font-semibold bg-primary text-white hover:bg-primary/90 px-7 py-3.5 rounded-lg transition-colors duration-200 text-sm"
                >
                  Get Started Free <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 font-medium text-foreground border border-border hover:border-foreground/25 hover:bg-card/60 px-7 py-3.5 rounded-lg transition-colors duration-200 text-sm"
                >
                  Book a Demo
                </Link>
              </div>

              <p className="mt-6 text-xs text-muted/70">
                No credit card required · Free 14-day trial · Cancel anytime
              </p>
            </div>

            {/* Trust badges — right aligned on desktop */}
            <div className="absolute bottom-10 right-10 hidden md:flex flex-col gap-2 text-right">
              {["SOC 2 Certified", "GDPR Compliant", "99.9% Uptime"].map((badge) => (
                <div key={badge} className="flex items-center justify-end gap-2 text-xs text-muted">
                  <span>{badge}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
