import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
    {
      name: 'Starter',
      price: '0',
      description: 'Perfect for trying out FlowAI',
      features: [
        '100 tasks per month',
        '3 active workflows',
        'Basic integrations',
        'Community support',
      ],
      cta: 'Start Free',
      popular: false,
    },
    {
      name: 'Professional',
      price: '49',
      description: 'For growing teams and businesses',
      features: [
        '10,000 tasks per month',
        'Unlimited workflows',
        'All integrations',
        'Priority support',
        'Advanced analytics',
        'Team collaboration',
      ],
      cta: 'Start Trial',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large organizations',
      features: [
        'Unlimited tasks',
        'Unlimited workflows',
        'Custom integrations',
        'Dedicated support',
        'SLA guarantee',
        'Advanced security',
        'Custom training',
      ],
      cta: 'Contact Sales',
      popular: false,
    },
  ];
  
  export function Pricing() {
    return (
      <section className="py-32 relative">
        <div className="container mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Simple,{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                transparent
              </span>{' '}
              pricing
            </h2>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              Choose the plan that fits your needs. Always know what you'll pay.
            </p>
          </motion.div>
  
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`
                  relative p-8 rounded-2xl border transition-all duration-300
                  ${plan.popular
                    ? 'bg-gradient-to-b from-card to-card/50 border-primary scale-105 shadow-xl shadow-primary/20'
                    : 'bg-card/50 border-border hover:border-primary/30'
                  }
                `}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="px-4 py-1 rounded-full bg-gradient-to-r from-primary to-secondary text-background text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
  
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-muted text-sm">{plan.description}</p>
                </div>
  
                <div className="mb-8">
                  <div className="flex items-baseline gap-2">
                    {plan.price === 'Custom' ? (
                      <span className="text-4xl font-bold">{plan.price}</span>
                    ) : (
                      <>
                        <span className="text-4xl font-bold">${plan.price}</span>
                        <span className="text-muted">/month</span>
                      </>
                    )}
                  </div>
                </div>
  
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
  
                <Link
                  className={plan.popular ? 'w-full inline-flex items-center justify-center font-medium bg-gradient-to-r from-primary to-secondary text-background hover:shadow-lg hover:shadow-primary/20 hover:scale-105 px-8 py-4 text-lg rounded-lg transition-shadow transition-transform duration-300' : 'w-full inline-flex items-center justify-center font-medium bg-card/80 backdrop-blur-sm text-foreground border border-border hover:border-primary/50 hover:bg-card px-8 py-4 text-lg rounded-lg transition-border transition-colors duration-300'}
                  to="/pricing"
                >
                  {plan.cta} <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
  
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-12"
          >
            <a href="/pricing" className="text-primary hover:text-secondary transition-colors font-semibold">
              See detailed comparison →
            </a>
          </motion.div>
        </div>
      </section>
    );
  }