import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const comparePlans = [
    { feature: 'Monthly Tasks', starter: '100', pro: '10,000', enterprise: 'Unlimited' },
    { feature: 'Active Workflows', starter: '3', pro: 'Unlimited', enterprise: 'Unlimited' },
    { feature: 'Team Members', starter: '1', pro: '10', enterprise: 'Unlimited' },
    { feature: 'API Access', starter: false, pro: true, enterprise: true },
    { feature: 'Custom Branding', starter: false, pro: false, enterprise: true },
    { feature: 'SLA', starter: false, pro: false, enterprise: true },
];

export function CompareTable() {
    return <section className="py-32 border-t border-border">
                <div className="container mx-auto max-w-7xl px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    Compare{' '}
                    <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        features
                    </span>
                    </h2>
                    <p className="text-xl text-muted max-w-2xl mx-auto">
                    Detailed comparison of all features across plans.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="max-w-5xl mx-auto"
                >
                    <div className="p-8 rounded-3xl bg-card/50 backdrop-blur-xl border border-border overflow-x-auto">
                    <table className="w-full">
                        <thead>
                        <tr className="border-b border-border">
                            <th className="text-left py-4 px-4">Feature</th>
                            <th className="text-center py-4 px-4">Starter</th>
                            <th className="text-center py-4 px-4">Professional</th>
                            <th className="text-center py-4 px-4">Enterprise</th>
                        </tr>
                        </thead>
                        <tbody>
                        {comparePlans.map((row, i) => (
                            <tr key={i} className="border-b border-border/50 last:border-0">
                            <td className="py-4 px-4 text-foreground">{row.feature}</td>
                            <td className="py-4 px-4 text-center text-muted">
                                {typeof row.starter === 'boolean' ? (
                                row.starter ? <Check className="w-5 h-5 text-primary mx-auto" /> : <X className="w-5 h-5 text-muted/30 mx-auto" />
                                ) : (
                                row.starter
                                )}
                            </td>
                            <td className="py-4 px-4 text-center text-muted">
                                {typeof row.pro === 'boolean' ? (
                                row.pro ? <Check className="w-5 h-5 text-primary mx-auto" /> : <X className="w-5 h-5 text-muted/30 mx-auto" />
                                ) : (
                                row.pro
                                )}
                            </td>
                            <td className="py-4 px-4 text-center text-muted">
                                {typeof row.enterprise === 'boolean' ? (
                                row.enterprise ? <Check className="w-5 h-5 text-primary mx-auto" /> : <X className="w-5 h-5 text-muted/30 mx-auto" />
                                ) : (
                                row.enterprise
                                )}
                            </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    </div>
                </motion.div>
                </div>
  </section>
}