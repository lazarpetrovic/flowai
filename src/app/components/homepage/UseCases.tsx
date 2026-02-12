import { motion } from "framer-motion";
import { Building2, ShoppingCart, Users, Zap } from "lucide-react";
import { GlassCard } from "../../utils/GlassCard";

const useCases = [
    {
      icon: Building2,
      category: 'Sales & Marketing',
      title: 'Lead Generation',
      description: 'Automatically qualify leads, send follow-ups, and schedule meetings with prospects.',
      metrics: '3x faster',
    },
    {
      icon: ShoppingCart,
      category: 'E-commerce',
      title: 'Order Processing',
      description: 'Streamline order fulfillment, inventory management, and customer notifications.',
      metrics: '80% less time',
    },
    {
      icon: Users,
      category: 'HR & Operations',
      title: 'Employee Onboarding',
      description: 'Automate paperwork, training schedules, and equipment provisioning for new hires.',
      metrics: '10x efficiency',
    },
    {
      icon: Zap,
      category: 'IT & DevOps',
      title: 'Incident Response',
      description: 'Detect issues, notify teams, and trigger automated remediation workflows.',
      metrics: '99.9% uptime',
    },
  ];
  
  export function UseCases() {
    return (
      <section className="py-32 relative">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/10 via-transparent to-transparent" />
        
        <div className="container mx-auto max-w-7xl px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Built for every{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                use case
              </span>
            </h2>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              From startups to enterprises, FlowAI adapts to your unique workflow needs.
            </p>
          </motion.div>
  
          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <GlassCard key={index}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0">
                    <useCase.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-primary font-semibold uppercase tracking-wider mb-2">
                      {useCase.category}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
                    <p className="text-muted mb-4">{useCase.description}</p>
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                      <span className="text-sm text-primary font-semibold">{useCase.metrics}</span>
                    </div>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
  
          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-16"
          >
            <p className="text-muted mb-4">Can't find your use case?</p>
            <a href="/contact" className="text-primary hover:text-secondary transition-colors font-semibold">
              Talk to our team →
            </a>
          </motion.div>
        </div>
      </section>
    );
  }
  