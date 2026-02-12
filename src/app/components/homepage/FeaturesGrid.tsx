import { Code2, BarChart3, Sparkles, Users, Shield, Puzzle } from "lucide-react";
import { motion } from "framer-motion";
import { GlassCard } from "../../utils/GlassCard";

const features = [
    {
      icon: Sparkles    ,
      title: 'AI Automation',
      description: 'Leverage advanced AI to automate complex workflows and decision-making processes.',
    },
    {
      icon: BarChart3,
      title: 'Smart Analytics',
      description: 'Get real-time insights and analytics to optimize your automated workflows.',
    },
    {
      icon: Code2,
      title: 'No-Code Builder',
      description: 'Build powerful automations without writing a single line of code.',
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Work together seamlessly with your team on shared workflows and projects.',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with SOC 2 compliance and end-to-end encryption.',
    },
    {
      icon: Puzzle,
      title: 'Integrations',
      description: 'Connect with 1000+ apps and services to streamline your entire workflow.',
    },
  ];

export function FeaturesGrid() {
    return (
        <section className="py-32 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent" />
            <div className="container mx-auto max-w-7xl px-6 relative">
                <motion.div
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 0.6}}
                className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Everything you need to{' '}
                        <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">automate</span>    
                    </h2>
                    <p className="text-xl text-muted max-w-2xl mx-auto">
                        Powerful features designed to make workflow automation simple, fast, and scalable.
                    </p>
                </motion.div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <GlassCard key={index}>
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6">
                                <feature.icon className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                            <p className="text-muted">{feature.description}</p>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </section>
    )
}