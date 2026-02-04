import { motion } from "framer-motion"

const companies = ["Slack", "Notion", "GitHub", "Figma", "Stripe", "Shopify"]

export function CompanyCloud() {
    return (
        <section className="py-20 border-t border-white/10">
            <div className="container mx-auto px-6">
                <motion.div
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 0.6}}
                className="text-center mb-12">
                    <p className="text-sm text-muted uppercase tracking-wider">
                        Trusted by Leading Teams
                    </p>
                </motion.div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
                    {companies.map((company, index) => (
                        <motion.div
                        key={company}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.15 }}
                        className="flex items-center justify-center"
                        >
                        <div className="px-6 py-4 text-muted hover:text-foreground transition-colors text-lg font-semibold">
                            {company}
                        </div>

                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}