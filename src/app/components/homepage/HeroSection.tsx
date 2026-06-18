import { motion } from "framer-motion";
import { ArrowRight, Activity, Clock, CheckCircle, Zap, Filter, Mail, MessageSquare, Webhook } from "lucide-react";
import { Link } from "react-router-dom";

/* ── Workflow node inside the mockup ───────────────────────────────────── */
interface NodeProps {
  icon: React.ElementType;
  label: string;
  sub: string;
  active?: boolean;
  iconColor?: string;
  iconBg?: string;
}

function WorkflowNode({ icon: Icon, label, sub, active = false, iconColor = "text-muted", iconBg = "bg-border/20" }: NodeProps) {
  return (
    <div className={`
      w-[118px] flex-shrink-0 rounded-lg border p-3 transition-colors duration-200
      ${active
        ? "border-primary/50 bg-primary/5 ring-1 ring-primary/15"
        : "border-border bg-card/80"}
    `}>
      <div className={`w-7 h-7 rounded mb-2.5 flex items-center justify-center ${iconBg}`}>
        <Icon className={`w-3.5 h-3.5 ${iconColor}`} />
      </div>
      <div className="text-xs font-semibold text-foreground leading-tight">{label}</div>
      <div className="text-[10px] text-muted mt-0.5">{sub}</div>
      {active && (
        <div className="mt-2 flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse inline-block" />
          <span className="text-[10px] text-primary font-medium">Running</span>
        </div>
      )}
    </div>
  );
}

/* ── Connector line ────────────────────────────────────────────────────── */
function Connector() {
  return (
    <div className="flex items-center self-stretch pt-[22px]">
      <div className="h-px w-5 border-t border-dashed border-border/70" />
      <div className="w-1 h-1 rounded-full bg-border/70 flex-shrink-0" />
    </div>
  );
}

/* ── Workflow UI mockup ────────────────────────────────────────────────── */
function WorkflowMockup() {
  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden shadow-2xl shadow-black/40">
      {/* Browser chrome */}
      <div className="flex items-center gap-3 px-4 py-3 border-b border-border bg-background/50">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-border/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-border/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-border/60" />
        </div>
        <div className="flex-1 flex justify-center">
          <div className="text-[11px] text-muted font-mono px-3 py-1 rounded bg-background/60 border border-border/50">
            app.flowai.io / workflows / onboarding
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse inline-block" />
          <span className="text-[11px] text-muted">Live</span>
        </div>
      </div>

      {/* Workflow name bar */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-border/40 bg-background/20">
        <span className="text-xs font-semibold text-foreground/80">Customer Onboarding</span>
        <div className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
          <span className="text-[10px] text-emerald-400 font-medium">Active</span>
        </div>
      </div>

      {/* Canvas with dot grid */}
      <div className="p-5 bg-[radial-gradient(rgba(245,242,238,0.025)_1px,transparent_1px)] bg-[size:18px_18px]">
        <div className="flex items-center gap-0">
          <WorkflowNode
            icon={Webhook}
            label="Webhook"
            sub="New signup"
            iconColor="text-primary"
            iconBg="bg-primary/15"
          />
          <Connector />
          <WorkflowNode
            icon={Zap}
            label="AI Classify"
            sub="Analyzing..."
            active
            iconColor="text-primary"
            iconBg="bg-primary/15"
          />
          <Connector />
          <WorkflowNode
            icon={Filter}
            label="Filter"
            sub="High priority"
            iconColor="text-amber-400"
            iconBg="bg-amber-500/15"
          />
          <Connector />
          <WorkflowNode
            icon={MessageSquare}
            label="Slack"
            sub="#sales-team"
            iconColor="text-sky-400"
            iconBg="bg-sky-500/15"
          />
        </div>

        {/* Second dimmer workflow row */}
        <div className="mt-4 flex items-center gap-0 opacity-35">
          <WorkflowNode
            icon={Mail}
            label="Email Trigger"
            sub="Daily digest"
            iconColor="text-violet-400"
            iconBg="bg-violet-500/15"
          />
          <Connector />
          <WorkflowNode
            icon={Zap}
            label="Summarize"
            sub="GPT-4o"
            iconColor="text-primary"
            iconBg="bg-primary/15"
          />
          <Connector />
          <WorkflowNode
            icon={Mail}
            label="Send Email"
            sub="to subscribers"
            iconColor="text-violet-400"
            iconBg="bg-violet-500/15"
          />
        </div>
      </div>

      {/* Footer stats */}
      <div className="border-t border-border px-4 py-3 flex items-center gap-5 bg-background/30">
        <div className="flex items-center gap-1.5 text-[11px] text-muted">
          <Activity className="w-3 h-3" />
          <span>284 runs today</span>
        </div>
        <div className="flex items-center gap-1.5 text-[11px] text-muted">
          <Clock className="w-3 h-3" />
          <span>Avg 1.8s</span>
        </div>
        <div className="flex items-center gap-1.5 text-[11px] text-muted">
          <CheckCircle className="w-3 h-3 text-emerald-400" />
          <span>98.7% success</span>
        </div>
      </div>
    </div>
  );
}

/* ── Hero ──────────────────────────────────────────────────────────────── */
export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Dot grid background — no blobs */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(245,242,238,0.04)_1px,transparent_1px)] bg-[size:28px_28px]" />
      {/* Subtle radial fade from top */}
      <div className="absolute inset-0 [background:radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(249,115,22,0.07),transparent)]" />

      <div className="container mx-auto max-w-7xl px-6 relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — editorial text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="space-y-8"
          >
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="inline-flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse inline-block" />
              <span className="text-xs uppercase tracking-[0.12em] text-muted font-medium">
                AI-Powered Automation
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="text-5xl md:text-7xl font-bold leading-[1.0] tracking-tight"
            >
              Build workflows<br />
              that{" "}
              <span className="text-primary">scale</span>
              {" "}with<br />
              intelligence.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="text-base text-muted max-w-md leading-relaxed"
            >
              Connect your tools, define your logic, let AI handle the rest.
              From prototype to production in minutes — no code required.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="flex flex-col sm:flex-row gap-3"
            >
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
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex gap-8 pt-5 border-t border-border"
            >
              <div>
                <div className="text-2xl font-bold text-foreground">10k+</div>
                <div className="text-xs text-muted mt-0.5">Active Users</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">1M+</div>
                <div className="text-xs text-muted mt-0.5">Workflows Automated</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">99.9%</div>
                <div className="text-xs text-muted mt-0.5">Uptime</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right — workflow UI mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="hidden lg:block"
          >
            <WorkflowMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
