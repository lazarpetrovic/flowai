import { motion } from "framer-motion";

export function ContactPage() {
    return (
        <div className="pt-32">
            <div className="pb-20">
                <div className="container mx-auto px-6">
                    <motion.div
                    initial={{opacity: 0, y: 30}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.6}}
                    className="text-center max-w-3xl mx-auto">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6">
                            Let's{' '}
                            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                                talk
                            </span>
                        </h1>
                        <p className="text-xl text-muted">
                            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}