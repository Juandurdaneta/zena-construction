"use client";

import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

const footerLinks = {
  services: [
    { label: "Roofing", href: "#" },
    { label: "Storm Restoration", href: "#" },
    { label: "Construction", href: "#" },
    { label: "Property Evaluation", href: "#contact" },
  ],
  company: [
    { label: "About Us", href: "#trust" },
    { label: "Our Process", href: "#process" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ],
  resources: [
    { label: "Blog", href: "#" },
    { label: "FAQ", href: "#" },
    { label: "Service Areas", href: "#" },
    { label: "Careers", href: "#" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export function Footer() {
  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-charcoal-950 text-white">
      {/* Main Footer */}
      <div className="section-padding container-wide py-16 md:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center font-display font-bold text-lg">
                Z
              </div>
              <span className="text-xl font-display font-semibold">
                Zena Construction
              </span>
            </div>
            <p className="text-charcoal-400 leading-relaxed mb-6 max-w-sm">
              Houston&apos;s trusted partner for roofing, construction, and restoration. 
              Helping homeowners make confident property decisions for over 10 years.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <a
                href="tel:+17135550123"
                className="flex items-center gap-3 text-charcoal-300 hover:text-amber-400 transition-colors"
              >
                <Phone className="w-5 h-5" />
                (713) 555-0123
              </a>
              <a
                href="mailto:info@zenaconstruction.com"
                className="flex items-center gap-3 text-charcoal-300 hover:text-amber-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
                info@zenaconstruction.com
              </a>
              <div className="flex items-start gap-3 text-charcoal-300">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>
                  1234 Main Street, Suite 500<br />
                  Houston, TX 77002
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-charcoal-800 hover:bg-amber-500 rounded-lg 
                               flex items-center justify-center transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-charcoal-400 mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-charcoal-300 hover:text-amber-400 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-charcoal-400 mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-charcoal-300 hover:text-amber-400 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Column */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-charcoal-400 mb-4">
              Get Started
            </h4>
            <p className="text-charcoal-400 text-sm mb-4">
              Ready to transform your property? Schedule your free evaluation today.
            </p>
            <Button
              size="sm"
              icon={<ArrowRight className="w-4 h-4" />}
              onClick={() => handleNavClick("#contact")}
            >
              Free Evaluation
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-charcoal-800">
        <div className="section-padding container-wide py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-charcoal-500 text-sm">
              © {new Date().getFullYear()} Zena Construction. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-charcoal-500 hover:text-charcoal-300 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-charcoal-500 hover:text-charcoal-300 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
