import { Link, useLocation } from "react-router-dom";
import {motion} from 'framer-motion';

export function Navigation() {
    const location = useLocation();

    const links = [
        { label: 'Home', path: '/' },
        {label: 'Pricing', path: '/pricing' },
        {label: 'Contact', path: '/contact' },
    ]

    return (<motion.nav initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
                <Link to="/" className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                        <span className="text-background font-bold text-lg">F</span>
                    </div>
                    <span className="text-xl font-bold bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent">FlowAI</span>
                </Link>
            
                {/** Desktop Navigation links*/}
                <div className="hidden md:flex items-center space-x-8">
                    {links.map((link) => (<Link to={link.path} key={link.path} 
                    className="relative text-sm text-muted 
                    hover:text-foreground transition-colors">
                        {link.label}
                        {location.pathname === link.path && (
                        <motion.div
                        layoutId="navbar-indicator"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary"
                        />
                    )}</Link>))}
                </div>
            
            <div className="flex items-center space-x-4">
                <Link to="/contact" className="hidden md:inline-block text-sm text-foreground hover:text-primary transition-colors">Book a Demo</Link>
                <Link to="/" className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-primary to-secondary text-background font-medium text-sm hover:shadow-lg hover:shadow-primary/20 transition-shadow duration-300">Get Started Free</Link>
            </div>
            </div>
        </div>
    </motion.nav>)  
}