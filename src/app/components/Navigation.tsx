import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export function Navigation() {
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);

    const links = [
        { label: "Home", path: "/" },
        { label: "Pricing", path: "/pricing" },
        { label: "Contact", path: "/contact" },
    ];

    const closeMenu = () => setMenuOpen(false);

    return (
        <motion.nav
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/60"
        >
            <div className="container mx-auto max-w-7xl px-6 py-3.5">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2.5" onClick={closeMenu}>
                        <div className="w-7 h-7 rounded-md bg-primary flex items-center justify-center">
                            <span className="text-white font-bold text-sm leading-none">F</span>
                        </div>
                        <span className="text-base font-bold tracking-tight text-foreground">FlowAI</span>
                    </Link>

                    {/* Desktop nav links */}
                    <div className="hidden md:flex items-center gap-7">
                        {links.map((link) => (
                            <Link
                                to={link.path}
                                key={link.path}
                                className="relative text-sm text-muted hover:text-foreground transition-colors duration-200"
                            >
                                {link.label}
                                {location.pathname === link.path && (
                                    <motion.div
                                        layoutId="navbar-indicator"
                                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                                    />
                                )}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden md:flex items-center gap-4">
                        <Link
                            to="/contact"
                            className="text-sm text-muted hover:text-foreground transition-colors duration-200"
                        >
                            Book a Demo
                        </Link>
                        <Link
                            to="/"
                            className="px-4 py-2 rounded-lg bg-primary text-white font-semibold text-sm hover:bg-primary/90 transition-colors duration-200"
                        >
                            Get Started Free
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        type="button"
                        onClick={() => setMenuOpen((o) => !o)}
                        className="md:hidden p-2 rounded-lg text-muted hover:text-foreground hover:bg-card/60 transition-colors"
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                    >
                        {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="md:hidden overflow-hidden border-t border-border bg-background/98 backdrop-blur-md"
                    >
                        <div className="container mx-auto max-w-7xl px-6 py-5 flex flex-col gap-5">
                            {links.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    onClick={closeMenu}
                                    className={`text-base font-medium transition-colors ${
                                        location.pathname === link.path
                                            ? "text-primary"
                                            : "text-muted hover:text-foreground"
                                    }`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <div className="flex flex-col gap-2.5 pt-4 border-t border-border">
                                <Link
                                    to="/contact"
                                    onClick={closeMenu}
                                    className="text-center py-3 rounded-lg border border-border text-foreground hover:bg-card/50 transition-colors font-medium text-sm"
                                >
                                    Book a Demo
                                </Link>
                                <Link
                                    to="/"
                                    onClick={closeMenu}
                                    className="text-center py-3 rounded-lg bg-primary text-white font-semibold text-sm hover:bg-primary/90 transition-colors"
                                >
                                    Get Started Free
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
