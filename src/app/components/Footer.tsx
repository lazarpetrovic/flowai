import { Link } from "react-router-dom";
import { Twitter, Github, Linkedin } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-border/50 bg-card/30">
            <div className="container mx-auto max-w-7xl px-6 py-14">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
                    {/* Brand */}
                    <div className="space-y-4">
                        <Link to="/" className="flex items-center gap-2">
                            <div className="w-7 h-7 rounded-md bg-primary flex items-center justify-center">
                                <span className="text-white font-bold text-sm leading-none">F</span>
                            </div>
                            <span className="text-base font-bold text-foreground tracking-tight">FlowAI</span>
                        </Link>
                        <p className="text-sm text-muted leading-relaxed max-w-xs">
                            Build, deploy and scale AI-powered automation workflows in minutes.
                        </p>
                        <div className="flex gap-3">
                            {[
                                { icon: Twitter, href: "#" },
                                { icon: Github, href: "#" },
                                { icon: Linkedin, href: "#" },
                            ].map(({ icon: Icon, href }, i) => (
                                <a
                                    key={i}
                                    href={href}
                                    className="w-8 h-8 rounded-lg border border-border flex items-center justify-center text-muted hover:text-foreground hover:border-border/80 transition-colors duration-200"
                                >
                                    <Icon className="w-3.5 h-3.5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Product */}
                    <div>
                        <h4 className="text-sm font-semibold mb-4 text-foreground">Product</h4>
                        <ul className="space-y-2.5">
                            {["Features", "Pricing", "Integrations", "Documentation"].map((item) => (
                                <li key={item}>
                                    <Link
                                        to={item === "Pricing" ? "/pricing" : "/"}
                                        className="text-sm text-muted hover:text-foreground transition-colors duration-200"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-sm font-semibold mb-4 text-foreground">Company</h4>
                        <ul className="space-y-2.5">
                            {["About", "Contact", "Careers", "Blog"].map((item) => (
                                <li key={item}>
                                    <Link
                                        to={item === "Contact" ? "/contact" : "/"}
                                        className="text-sm text-muted hover:text-foreground transition-colors duration-200"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="text-sm font-semibold mb-4 text-foreground">Legal</h4>
                        <ul className="space-y-2.5">
                            {["Privacy Policy", "Terms of Service", "Cookie Policy", "Security"].map((item) => (
                                <li key={item}>
                                    <Link
                                        to="/"
                                        className="text-sm text-muted hover:text-foreground transition-colors duration-200"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="pt-6 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-3">
                    <p className="text-xs text-muted/60">
                        © {currentYear} FlowAI. All rights reserved.
                    </p>
                    <p className="text-xs text-muted/60">
                        Built with care
                    </p>
                </div>
            </div>
        </footer>
    );
}
