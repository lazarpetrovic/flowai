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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border"
        >
            <div className="container mx-auto max-w-7xl px-6 py-4">
                <div className="flex items-center justify-between">
                    <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                            <span className="text-background font-bold text-lg">F</span>
                        </div>
                        <span className="text-xl font-bold bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent">FlowAI</span>
                    </Link>

                    {/* Desktop Navigation links */}
                    <div className="hidden md:flex items-center space-x-8">
                        {links.map((link) => (
                            <Link
                                to={link.path}
                                key={link.path}
                                className="relative text-sm text-muted hover:text-foreground transition-colors"
                            >
                                {link.label}
                                {location.pathname === link.path && (
                                    <motion.div
                                        layoutId="navbar-indicator"
                                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary"
                                    />
                                )}
                            </Link>
                        ))}
                    </div>

                    <div className="flex items-center space-x-4">
                        <Link to="/contact" className="hidden md:inline-block text-sm text-foreground hover:text-primary transition-colors">Book a Demo</Link>
                        <Link to="/" className="hidden md:inline-block px-6 py-2.5 rounded-xl bg-gradient-to-r from-primary to-secondary text-background font-medium text-sm hover:shadow-lg hover:shadow-primary/20 transition-shadow duration-300">Get Started Free</Link>

                        {/* Mobile menu button */}
                        <button
                            type="button"
                            onClick={() => setMenuOpen((o) => !o)}
                            className="md:hidden p-2 rounded-lg text-foreground hover:bg-card/50 transition-colors"
                            aria-label={menuOpen ? "Close menu" : "Open menu"}
                        >
                            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu panel */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="md:hidden overflow-hidden border-t border-border bg-background/95 backdrop-blur-xl"
                    >
                        <div className="container mx-auto max-w-7xl px-6 py-6 flex flex-col gap-6">
                            {links.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    onClick={closeMenu}
                                    className={`text-lg font-medium transition-colors ${
                                        location.pathname === link.path
                                            ? "text-primary"
                                            : "text-muted hover:text-foreground"
                                    }`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <div className="flex flex-col gap-3 pt-4 border-t border-border">
                                <Link
                                    to="/contact"
                                    onClick={closeMenu}
                                    className="text-center py-3 rounded-xl text-foreground hover:bg-card/50 transition-colors font-medium"
                                >
                                    Book a Demo
                                </Link>
                                <Link
                                    to="/"
                                    onClick={closeMenu}
                                    className="text-center py-3.5 rounded-xl bg-gradient-to-r from-primary to-secondary text-background font-medium hover:shadow-lg hover:shadow-primary/20 transition-shadow"
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