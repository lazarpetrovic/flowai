import { Link } from "react-router-dom";
import { Twitter, Github, Linkedin } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();
  
    return (
      <footer className="relative border-t border-border bg-card/50">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />
  
        <div className="container mx-auto px-6 py-16 relative">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Brand Column */}
            <div className="space-y-4">
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <span className="text-background font-bold text-lg">F</span>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  FlowAI
                </span>
              </Link>
              <p className="text-sm text-muted max-w-xs">
                Automate your workflows with AI. Build, deploy and scale AI-powered automation in minutes.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-muted hover:text-primary transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-muted hover:text-primary transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="text-muted hover:text-primary transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
  
            {/* Product Column */}
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Product</h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="text-sm text-muted hover:text-primary transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link to="/pricing" className="text-sm text-muted hover:text-primary transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-sm text-muted hover:text-primary transition-colors">
                    Integrations
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-sm text-muted hover:text-primary transition-colors">
                    Documentation
                  </Link>
                </li>
              </ul>
            </div>
  
            {/* Company Column */}
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Company</h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="text-sm text-muted hover:text-primary transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-sm text-muted hover:text-primary transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-sm text-muted hover:text-primary transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-sm text-muted hover:text-primary transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
  
            {/* Legal Column */}
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Legal</h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="text-sm text-muted hover:text-primary transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-sm text-muted hover:text-primary transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-sm text-muted hover:text-primary transition-colors">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-sm text-muted hover:text-primary transition-colors">
                    Security
                  </Link>
                </li>
              </ul>
            </div>
          </div>
  
          {/* Bottom Bar */}
          <div className="pt-8 border-t border-border">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-sm text-muted">
                © {currentYear} FlowAI. All rights reserved.
              </p>
              <p className="text-sm text-muted">
                Built with precision and care
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }