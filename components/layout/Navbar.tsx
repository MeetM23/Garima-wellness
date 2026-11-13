"use client";

import React, { useState, useEffect } from "react";
import { siteConfig } from "@/data/siteData";
import { Logo } from "@/components/brand/Logo";
import { useLanguage } from "@/context/LanguageContext";
import { Menu, X, Globe, ArrowUpRight } from "lucide-react";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const { toggleLanguage, isGujarati } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sectionIds = ["hero", "approach", "archive", "testimonials", "contact"];
      const scrollPos = window.scrollY + 120;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-ivory/95 backdrop-blur-md shadow-xs border-b border-charcoal-border/50 py-3"
          : "bg-transparent py-4 md:py-5"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Official Supplied Brand Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero")}
            className="focus:outline-none"
            aria-label="Garima Wellness Center Home"
          >
            <Logo size="sm" variant="default" />
          </a>

          {/* Clean Desktop Navigation (15px, font-medium) */}
          <nav className="hidden lg:flex items-center gap-8">
            {siteConfig.navLinks.map((link) => {
              const linkId = link.href.replace("#", "");
              const isActive = activeSection === linkId;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-[15px] font-sans transition-colors relative py-1.5 ${
                    isActive
                      ? "text-primary font-semibold"
                      : "text-charcoal-muted hover:text-charcoal font-medium"
                  }`}
                >
                  {isGujarati ? link.gujaratiName : link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Header Action: Language Pill & Prominent Consultation CTA (Desktop lg+) */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={toggleLanguage}
              aria-label="Toggle Gujarati and English language"
              className="flex items-center gap-1.5 px-3.5 py-2 min-h-[44px] rounded-full border border-charcoal-border/80 text-xs font-sans font-medium text-charcoal hover:border-primary hover:text-primary transition-colors bg-white shadow-2xs"
            >
              <Globe className="w-3.5 h-3.5 text-sage-dark" />
              <span>{isGujarati ? "English" : "ગુજરાતી"}</span>
            </button>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="btn-primary !py-2.5 !px-5 text-sm font-semibold uppercase tracking-wider"
            >
              <span>{isGujarati ? "કન્સલ્ટેશન બુક કરો" : "Book Consultation"}</span>
              <ArrowUpRight className="w-4 h-4 ml-1" />
            </a>
          </div>

          {/* Mobile Menu & Language Switch */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleLanguage}
              aria-label="Toggle Language"
              className="px-3 py-1.5 min-h-[40px] text-xs font-sans font-semibold rounded-full border border-charcoal-border bg-white text-charcoal shadow-2xs"
            >
              {isGujarati ? "EN" : "ગુજ"}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg text-charcoal hover:bg-black/5 transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Professional Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-ivory/98 backdrop-blur-xl border-b border-charcoal-border/60 px-6 pt-3 pb-6 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-2">
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-[16px] font-sans font-medium text-charcoal hover:text-primary transition-colors py-2.5 border-b border-charcoal-border/30"
              >
                {isGujarati ? link.gujaratiName : link.name}
              </a>
            ))}

            <div className="pt-3">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="w-full btn-primary !py-3.5 text-sm uppercase tracking-wider justify-center"
              >
                <span>{isGujarati ? "કન્સલ્ટેશન બુક કરો" : "Book a Consultation"}</span>
                <ArrowUpRight className="w-4 h-4 ml-1.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
