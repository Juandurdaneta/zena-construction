"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { href: "#pain-points", label: "Challenges" },
  { href: "#trust", label: "Why Zena" },
  { href: "#evaluation", label: "Free Evaluation" },
  { href: "#process", label: "Our Process" },
  { href: "#testimonials", label: "Reviews" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
                    ${
                      isScrolled
                        ? "bg-white/95 backdrop-blur-md shadow-soft py-3"
                        : "bg-transparent py-5"
                    }`}
      >
        <div className="section-padding container-wide">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2">
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center font-display font-bold text-lg
                            ${isScrolled ? "bg-primary-500 text-white" : "bg-white text-charcoal-950"}`}
              >
                Z
              </div>
              <span
                className={`text-xl font-display font-semibold hidden sm:block
                            ${isScrolled ? "text-charcoal-950" : "text-white"}`}
              >
                Zena Construction
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`text-sm font-medium transition-colors hover:text-primary-500
                              ${isScrolled ? "text-charcoal-700" : "text-white/90"}`}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:+17135550123"
                className={`flex items-center gap-2 text-sm font-medium
                            ${isScrolled ? "text-charcoal-700" : "text-white/90"}`}
              >
                <Phone className="w-4 h-4" />
                (713) 555-0123
              </a>
              <Button
                size="sm"
                icon={<ArrowRight className="w-4 h-4" />}
                onClick={() => handleNavClick("#contact")}
              >
                Free Evaluation
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors
                          ${
                            isScrolled
                              ? "text-charcoal-950 hover:bg-charcoal-100"
                              : "text-white hover:bg-white/10"
                          }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[72px] z-40 bg-white shadow-soft-lg lg:hidden"
          >
            <nav className="section-padding py-6">
              <div className="space-y-1">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className="block w-full text-left px-4 py-3 text-charcoal-700 font-medium 
                               rounded-lg hover:bg-charcoal-50 transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-charcoal-100 space-y-4">
                <a
                  href="tel:+17135550123"
                  className="flex items-center gap-2 text-charcoal-700 font-medium px-4"
                >
                  <Phone className="w-5 h-5" />
                  (713) 555-0123
                </a>
                <div className="px-4">
                  <Button
                    fullWidth
                    icon={<ArrowRight className="w-4 h-4" />}
                    onClick={() => handleNavClick("#contact")}
                  >
                    Get Free Evaluation
                  </Button>
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
