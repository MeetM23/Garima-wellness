"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const Hero: React.FC = () => {
  const { isGujarati } = useLanguage();

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative pt-28 pb-20 md:pt-36 md:pb-28 lg:pt-44 lg:pb-32 bg-ivory overflow-hidden">
      {/* Subtle decorative background element */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-sage/5 to-transparent" />
      </div>

      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl">

          {/* Pill Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-charcoal-border/80 shadow-xs mb-7">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-label text-charcoal">
              {isGujarati ? "ગરિમા વેલનેસ સેન્ટર • ઉના, ગીર સોમનાથ" : "Garima Wellness Center • Una, Gujarat"}
            </span>
          </div>

          {/* Hero Heading — full-width, typographically strong */}
          <h1 className="heading-hero mb-6">
            {isGujarati ? (
              <>
                યોગ્ય પોષણ અને સાચી જીવનશૈલીથી{" "}
                <span className="text-primary">તંદુરસ્ત જીવનની</span> નવી શરૂઆત.
              </>
            ) : (
              <>
                Sustainable Health,{" "}
                <span className="text-primary">Measurable</span>{" "}
                Transformations.
              </>
            )}
          </h1>

          {/* Supporting paragraph */}
          <p className="text-subtitle max-w-2xl mb-9">
            {isGujarati
              ? "કઠોર ભૂખમરા કે અસ્થાયી ડાયેટ પ્લાન વિના — કોચ અરૂણા મોડાશીયાના અંગત માર્ગદર્શન, સંતુલિત ઘરેલું પોષણ અને રોજિંદી આદતો દ્વારા સાચી શારીરિક સુખાકારી મેળવો."
              : "No extreme starvation or temporary crash diets. Experience lifelong vitality and visceral fat reduction through personalized nutrition, habit guidance, and 1-on-1 coaching by Aruna Modashia."}
          </p>

          {/* CTA Row */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10">
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, "contact")}
              className="btn-primary group"
            >
              <span>{isGujarati ? "કન્સલ્ટેશન શરૂ કરો" : "Book a Consultation"}</span>
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="#archive"
              onClick={(e) => handleScrollTo(e, "archive")}
              className="btn-secondary"
            >
              <span>{isGujarati ? "પરિણામો જુઓ" : "Explore Client Results"}</span>
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="pt-7 border-t border-charcoal-border/60 flex flex-wrap gap-x-6 gap-y-3">
            <div className="flex items-center gap-2 text-xs font-poppins text-charcoal-muted font-medium">
              <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
              <span>{isGujarati ? "અંગત 1-on-1 કોચિંગ" : "1-on-1 Personal Coaching"}</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-poppins text-charcoal-muted font-medium">
              <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
              <span>{isGujarati ? "કોઈ કડક ભૂખમરો નહીં" : "No Starvation Diets"}</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-poppins text-charcoal-muted font-medium">
              <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
              <span>{isGujarati ? "ઓનલાઇન & ઉના સેન્ટર" : "Online & Una Center"}</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
