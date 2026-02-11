import { motion } from "framer-motion";
import { Mail, Phone, Calendar, MapPin } from "lucide-react";
import { useState } from "react";
import { CTAsection } from "../components/homepage/CTAsection.tsx";

export function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form submitted', formData);
    }

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
            <div className="container mx-auto px-6 mb-20">
                <div className="flex flex-col lg:flex-row gap-16 max-w-6xl mx-auto items-start">
                    <motion.div
                    initial={{opacity: 0, x:-30}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: 0.6}}
                    className="p-8 rounded-3xl bg-card/50 backdrop-blur-xl border border-border w-full lg:flex-1 lg:min-w-0 self-start">
                        <h2 className="text-3xl font-bold mb-6">Send us a message</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2">
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border focus:border-primary focus:outline-none transition-colors"
                                placeholder="John Doe"
                                required
                            />
                            </div>

                            <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border focus:border-primary focus:outline-none transition-colors"
                                placeholder="john@company.com"
                                required
                            />
                            </div>

                            <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                rows={5}
                                className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border focus:border-primary focus:outline-none transition-colors resize-none"
                                placeholder="Tell us about your needs..."
                                required
                            />
                            </div>

                            <button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary text-background hover:shadow-lg hover:shadow-primary/20 hover:scale-105 px-8 py-4 text-lg rounded-lg transition-shadow transition-transform duration-300">
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                    <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-8 w-full lg:flex-1 lg:min-w-0 self-start"
                    >
                    {/* Contact Cards */}
                    <div className="space-y-4">
                        <div className="p-6 rounded-2xl bg-card/50 backdrop-blur-xl border border-border">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0">
                            <Mail className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                            <h3 className="font-semibold mb-1">Email Us</h3>
                            <p className="text-muted text-sm mb-2">Our team is here to help</p>
                            <a href="mailto:hello@flowai.com" className="text-primary hover:text-secondary transition-colors">
                                hello@flowai.com
                            </a>
                            </div>
                        </div>
                        </div>

                        <div className="p-6 rounded-2xl bg-card/50 backdrop-blur-xl border border-border">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0">
                            <Phone className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                            <h3 className="font-semibold mb-1">Call Us</h3>
                            <p className="text-muted text-sm mb-2">Mon-Fri from 8am to 6pm</p>
                            <a href="tel:+1234567890" className="text-primary hover:text-secondary transition-colors">
                                +1 (234) 567-890
                            </a>
                            </div>
                        </div>
                        </div>

                        <div className="p-6 rounded-2xl bg-card/50 backdrop-blur-xl border border-border">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0">
                            <Calendar className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                            <h3 className="font-semibold mb-1">Book a Demo</h3>
                            <p className="text-muted text-sm mb-2">Schedule a personalized demo</p>
                            <a href="#" className="text-primary hover:text-secondary transition-colors">
                                Schedule Now
                            </a>
                            </div>
                        </div>
                        </div>
                    </div>

                    {/* Office Location */}
                    <div className="p-8 rounded-3xl bg-card/50 backdrop-blur-xl border border-border">
                        <div className="flex items-start gap-4 mb-6">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0">
                            <MapPin className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Visit Our Office</h3>
                            <p className="text-muted">
                            123 AI Street<br />
                            San Francisco, CA 94102<br />
                            United States
                            </p>
                        </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="aspect-video rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-border flex items-center justify-center">
                        <div className="text-muted text-sm">Map View</div>
                        </div>
                    </div>
                    </motion.div>
                </div>
            </div>
            <CTAsection />
        </div>
    )
}