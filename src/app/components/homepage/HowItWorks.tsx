import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const steps = [
    {
      number: '01',
      title: 'Connect Your Apps',
      description: 'Link your favorite tools and services in seconds. Choose from 1000+ integrations.',
    },
    {
      number: '02',
      title: 'Design Your Workflow',
      description: 'Use our intuitive no-code builder to create powerful automation workflows.',
    },
    {
      number: '03',
      title: 'Let AI Do the Work',
      description: 'Activate your workflow and watch AI handle the rest automatically.',
    },
  ];

export function HowItWorks() {
    return (
        <section className="py-32 relative overflow-hidden">
            <div className="container mx-auto max-w-7xl px-6">
                <motion.div
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 0.6}}
                className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        How It{' '}
                        <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                            Works
                        </span>
                    </h2>
                    <p className="text-xl text-muted max-w-2xl mx-auto">
                        Get started in minutes with our simple three-step process.
                    </p>
                </motion.div>
                <div className="grid lg:grid-cols-3 gap-12 relative">
                    {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {/* Number Badge */}
              <div className="mb-6 relative inline-block">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <span className="text-2xl font-bold text-background">{step.number}</span>
                </div>
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: index * 0.5,
                  }}
                  className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary to-secondary blur-xl"
                />
              </div>

              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-muted text-lg">{step.description}</p>

              {/* Features List */}
              <div className="mt-6 space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Quick setup</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>No coding required</span>
                </div>
              </div>
            </motion.div>
          ))}
                </div>
            </div>
        </section>
    )
}