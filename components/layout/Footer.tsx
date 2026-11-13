"use client";

import React from "react";
import { siteConfig } from "@/data/siteData";
import { Logo } from "@/components/brand/Logo";
import { useLanguage } from "@/context/LanguageContext";
import { Phone, MessageCircle, MapPin, ArrowUp } from "lucide-react";
import { ShapeOrganicBlossom } from "@/components/ui/ShapesGallery";

export const Footer: React.FC = () => {
  const { isGujarati } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary-dark text-ivory py-16 border-t border-white/10 relative overflow-hidden">
      {/* Shapes Gallery Background Art — Shape 47 Organic Blossom */}
      <div className="absolute -bottom-12 -right-8 text-white pointer-events-none select-none" aria-hidden="true">
        <ShapeOrganicBlossom className="w-56 h-56 text-white" opacity={0.03} />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main 3-Column Footer Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Column 1: Official Brand Logo & Coach Identity */}
          <div className="md:col-span-5 space-y-4">
            <Logo variant="dark" size="sm" />
            
            <p className="text-sage-light text-[14px] sm:text-[15px] max-w-sm font-sans leading-relaxed">
              {isGujarati
                ? "ગરિમા વેલનેસ સેન્ટર – યોગ્ય પોષણ, સ્વસ્થ જીવનશૈલી અને સકારાત્મક માર્ગદર્શન દ્વારા કાયમી સુખાકારી લાવવા માટે સમર્પિત."
                : "Dedicated to inspiring vibrant, healthy living through personalized nutrition, sustainable lifestyle habits, and direct 1-on-1 mentorship."}
            </p>

            <div className="pt-1">
              <span className="text-label !text-[11px] text-terracotta-light block">
                Certified Wellness Coach
              </span>
              <p className="text-[15px] font-sans font-semibold text-white mt-0.5">
                {siteConfig.founder.name} ({siteConfig.founder.title})
              </p>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-[13px] font-sans font-semibold uppercase tracking-wider text-ivory/90 mb-4">
              {isGujarati ? "ઝડપી લિંક્સ" : "Quick Navigation"}
            </h4>
            <ul className="space-y-2.5">
              {siteConfig.navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-[14px] sm:text-[15px] font-sans text-sage-light hover:text-white transition-colors py-0.5 inline-block"
                  >
                    {isGujarati ? link.gujaratiName : link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Direct Contact Information */}
          <div className="md:col-span-4 space-y-3.5">
            <h4 className="text-[13px] font-sans font-semibold uppercase tracking-wider text-ivory/90 mb-4">
              {isGujarati ? "સંપર્ક માહિતી" : "Contact Information"}
            </h4>

            <div className="flex items-center gap-2.5 text-[14px] sm:text-[15px] text-sage-light font-sans">
              <Phone className="w-4.5 h-4.5 text-terracotta-light shrink-0" />
              <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-white transition-colors">
                {siteConfig.contact.displayPhone}
              </a>
            </div>

            <div className="flex items-center gap-2.5 text-[14px] sm:text-[15px] text-sage-light font-sans">
              <MessageCircle className="w-4.5 h-4.5 text-sage-light shrink-0" />
              <a
                href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                +91 97268 76369 (WhatsApp)
              </a>
            </div>

            <div className="flex items-start gap-2.5 text-[14px] sm:text-[15px] text-sage-light font-sans">
              <MapPin className="w-4.5 h-4.5 text-terracotta-light shrink-0 mt-0.5" />
              <span className="leading-relaxed">
                {isGujarati
                  ? siteConfig.contact.address.fullGujarati
                  : `${siteConfig.contact.address.line1}, ${siteConfig.contact.address.city}, Gujarat`}
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-xs font-sans text-sage-light/75">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved. Results may vary from person to person.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-[14px] font-sans text-sage-light hover:text-white transition-colors cursor-pointer"
            aria-label="Back to top"
          >
            <span>{isGujarati ? "ટોચ પર પાછા જાઓ" : "Back to top"}</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
