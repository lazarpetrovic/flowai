import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { Link } from "react-router-dom";
import { CompareTable } from "../components/pricing/CompareTable.tsx";
import { FAQ } from "../components/pricing/FAQ.tsx";
import { CTAsection } from "../components/homepage/CTAsection.tsx";

const plans = [
    {
      name: 'Starter',
      price: '0',
      period: 'month',
      description: 'Perfect for individuals and small projects',
      features: [
        { text: '100 tasks per month', included: true },
        { text: '3 active workflows', included: true },
        { text: 'Basic integrations', included: true },
        { text: 'Community support', included: true },
        { text: 'Advanced analytics', included: false },
        { text: 'Team collaboration', included: false },
        { text: 'Priority support', included: false },
        { text: 'Custom integrations', included: false },
      ],
      cta: 'Start Free',
      popular: false,
    },
    {
      name: 'Professional',
      price: '49',
      period: 'month',
      description: 'For growing teams and businesses',
      features: [
        { text: '10,000 tasks per month', included: true },
        { text: 'Unlimited workflows', included: true },
        { text: 'All integrations', included: true },
        { text: 'Priority support', included: true },
        { text: 'Advanced analytics', included: true },
        { text: 'Team collaboration', included: true },
        { text: 'SLA guarantee', included: false },
        { text: 'Custom integrations', included: false },
      ],
      cta: 'Start Trial',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations with custom needs',
      features: [
        { text: 'Unlimited tasks', included: true },
        { text: 'Unlimited workflows', included: true },
        { text: 'All integrations', included: true },
        { text: 'Dedicated support', included: true },
        { text: 'Advanced analytics', included: true },
        { text: 'Team collaboration', included: true },
        { text: 'SLA guarantee', included: true },
        { text: 'Custom integrations', included: true },
      ],
      cta: 'Contact Sales',
      popular: false,
    },
  ];

export function PricingPage() {
    return (
        <div className="pt-32">
            <section className="pb-20">
                <div className="container mx-auto max-w-7xl px-6">
                    <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.6}}
                    className="text-center max-w-3xl mx-auto">
                        <h1 className="text-5xl md-text:7xl font-bold mb-6">
                            Choose your{' '}
                            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                                plan
                            </span>
                        </h1>
                        <p className="text-xl text-muted">
                            Start free, scale as you grow. All plans include a 14-day free trial.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="pb-32">
                <div className="container mx-auto max-w-7xl px-6">
                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {plans.map((plan, index) => (
                            <motion.div
                            initial={{opacity: 0, y: 30}}
                            animate={{opacity: 1, y:0}}
                            transition={{duration: 0.6, delay: index * 0.1}}
                            className={`relative p-8 rounded-2xl border transition-all duration-300 ${plan.popular ? 'bg-gradient-to-b from-card to-card/50 border-primary scale-105 shadow-xl shadow-primary/20' : 'bg-card/50 border-border hover:border-primary/30'}`}>
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                        <div className="px-4 py-1 rounded-full bg-gradient-to-r from-primary to-secondary text-background text-sm font-semibold shadow-lg">
                                            Most Popular
                                        </div>
                                    </div>)}

                                <div className="mb-8">
                                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                                    <p className="text-muted text-sm">{plan.description}</p>
                                </div>

                                <div className="mb-8">
                                <div className="flex items-baseline gap-2">
                                    {plan.price === 'Custom' ? (
                                    <span className="text-5xl font-bold">{plan.price}</span>
                                    ) : (
                                    <>
                                        <span className="text-5xl font-bold">${plan.price}</span>
                                        {plan.period && <span className="text-muted">/{plan.period}</span>}
                                    </>
                                    )}
                                </div>
                                </div>

                                <div className="space-y-4 mb-8">
                                {plan.features.map((feature, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                    {feature.included ? (
                                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    ) : (
                                        <X className="w-5 h-5 text-muted/30 flex-shrink-0 mt-0.5" />
                                    )}
                                    <span className={`text-sm ${feature.included ? 'text-foreground' : 'text-muted/50'}`}>
                                        {feature.text}
                                    </span>
                                    </div>
                                ))}
                                </div>

                                <Link
                                className={plan.popular ? 'w-full inline-flex items-center justify-center font-medium bg-gradient-to-r from-primary to-secondary text-background hover:shadow-lg hover:shadow-primary/20 hover:scale-105 px-8 py-4 text-lg rounded-lg transition-shadow transition-transform duration-300' : 'w-full inline-flex items-center justify-center font-medium bg-card/80 backdrop-blur-sm text-foreground border border-border hover:border-primary/50 hover:bg-card px-8 py-4 text-lg rounded-lg transition-border transition-colors duration-300'}
                                to="/contact"
                                >
                                {plan.cta}
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            <CompareTable />
            <FAQ />
            <CTAsection />
        </div>
    )
}