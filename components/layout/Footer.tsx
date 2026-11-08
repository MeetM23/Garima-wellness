"use client";

import React from "react";
import { siteConfig } from "@/data/siteData";
import { Logo } from "@/components/brand/Logo";
import { useLanguage } from "@/context/LanguageContext";
import { Phone, MessageCircle, MapPin, ArrowUp } from "lucide-react";

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
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main 3-Column Footer Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Column 1: Official Brand Logo & Coach Identity */}
          <div className="md:col-span-5 space-y-4">
            <Logo variant="dark" size="sm" />
            
            <p className="text-sage-light text-xs sm:text-sm max-w-sm font-poppins font-light leading-relaxed">
              {isGujarati
                ? "ગરિમા વેલનેસ સેન્ટર – યોગ્ય પોષણ, સ્વસ્થ જીવનશૈલી અને સકારાત્મક માર્ગદર્શન દ્વારા કાયમી સુખાકારી લાવવા માટે સમર્પિત."
                : "Dedicated to inspiring vibrant, healthy living through personalized nutrition, sustainable lifestyle habits, and direct 1-on-1 mentorship."}
            </p>

            <div className="pt-1">
              <span className="text-label !text-[10px] text-terracotta-light block">
                Certified Wellness Coach
              </span>
              <p className="text-xs sm:text-sm font-poppins font-medium text-white mt-0.5">
                {siteConfig.founder.name} ({siteConfig.founder.title})
              </p>
            </div>
          </div>

          {/* Column 2: Essential Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-label !text-[11px] text-terracotta-light">
              {isGujarati ? "ઝડપી નેવિગેશન" : "Navigation"}
            </h4>
            <ul className="space-y-2">
              {siteConfig.navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-xs font-poppins text-sage-light hover:text-white transition-colors"
                  >
                    {isGujarati ? link.gujaratiName : link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Address */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-label !text-[11px] text-terracotta-light">
              {isGujarati ? "કેન્દ્ર સરનામું અને સંપર્ક" : "Center & Contact"}
            </h4>

            <div className="space-y-2.5 text-xs font-poppins text-sage-light font-light">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-terracotta-light shrink-0 mt-0.5" />
                <span>
                  {siteConfig.contact.address.line1}, {siteConfig.contact.address.landmark},{" "}
                  {siteConfig.contact.address.city}, Dist. {siteConfig.contact.address.district} - {siteConfig.contact.address.pincode}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-terracotta-light shrink-0" />
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.contact.displayPhone}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
                    "Hello, I would like to know more about your wellness programs."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#25D366] transition-colors font-medium"
                >
                  WhatsApp: {siteConfig.contact.displayPhone}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 text-[11px] font-poppins text-sage-light hover:text-white transition-colors border border-white/10 px-3 py-1 rounded-full"
              >
                <span>Back to top</span>
                <ArrowUp className="w-3 h-3" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] font-poppins text-sage-light/70 gap-3">
          <p>
            © {new Date().getFullYear()} Garima Wellness Center. All rights reserved.
          </p>
          <p>
            Una, Gir Somnath, Gujarat • Direct Line: +91 99136 62102
          </p>
        </div>

      </div>
    </footer>
  );
};
