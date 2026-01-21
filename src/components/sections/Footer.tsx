"use client";

import {
  Phone,
  Mail,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
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
    <footer className="text-white" style={{ backgroundColor: '#1a1a1f' }}>
      {/* Main Footer */}
      <div className="section-padding container-wide py-16 md:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Image
                src="/images/logo.png"
                alt="Zena Construction"
                width={48}
                height={48}
                className="h-10 w-auto"
              />
              <span className="text-xl font-display font-semibold">
                Zena Construction
              </span>
            </div>
            <p className="leading-relaxed mb-6 max-w-sm" style={{ color: '#91919f' }}>
              Houston&apos;s trusted partner for roofing, construction, and restoration. 
              Helping homeowners make confident property decisions for over 10 years.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="tel:+13052163246"
                className="flex items-center gap-3 hover:text-primary-400 transition-colors"
                style={{ color: '#b8b8c1' }}
              >
                <Phone className="w-5 h-5" />
                +1 (305) 216-3246
              </a>
              <a
                href="mailto:info@zenaconstruction.com"
                className="flex items-center gap-3 hover:text-primary-400 transition-colors"
                style={{ color: '#b8b8c1' }}
              >
                <Mail className="w-5 h-5" />
                info@zenaconstruction.com
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: '#91919f' }}>
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="hover:text-primary-400 transition-colors"
                    style={{ color: '#b8b8c1' }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: '#91919f' }}>
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="hover:text-primary-400 transition-colors"
                    style={{ color: '#b8b8c1' }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Column */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: '#91919f' }}>
              Get Started
            </h4>
            <p className="text-sm mb-4" style={{ color: '#91919f' }}>
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
      <div className="border-t" style={{ borderColor: '#41414b' }}>
        <div className="section-padding container-wide py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm" style={{ color: '#737384' }}>
              © {new Date().getFullYear()} Zena Construction. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-white transition-colors" style={{ color: '#737384' }}>
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors" style={{ color: '#737384' }}>
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
