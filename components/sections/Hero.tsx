"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ShapeOrganicBlossom, ShapeConcaveStar } from "@/components/ui/ShapesGallery";

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
    <section id="hero" className="relative pt-28 pb-20 md:pt-36 md:pb-24 lg:pt-40 lg:pb-28 bg-ivory overflow-hidden">
      {/* Shapes Gallery Background Art — Intentional, Balanced & Subtle */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        {/* Shape 47: Organic Blossom - Top Right behind hero content */}
        <div className="absolute -top-10 -right-10 lg:top-8 lg:right-12 text-primary">
          <ShapeOrganicBlossom className="w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96 text-primary" opacity={0.06} />
        </div>
        {/* Shape 40: Concave Star - Earthy Terracotta left accent */}
        <div className="absolute bottom-16 left-6 text-[#C87A5B] hidden sm:block">
          <ShapeConcaveStar className="w-16 h-16 text-[#C87A5B]" opacity={0.12} />
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">

          {/* Pill Eyebrow with Small Shapes Gallery Star */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-charcoal-border/80 shadow-xs mb-6">
            <ShapeConcaveStar className="w-3.5 h-3.5 text-[#C87A5B] shrink-0" opacity={0.8} />
            <span className="text-label text-charcoal">
              {isGujarati ? "ગરિમા વેલનેસ સેન્ટર • ઉના, ગીર સોમનાથ" : "Garima Wellness Center • Una, Gujarat"}
            </span>
          </div>

          {/* Hero Heading — full-width, typographically strong (36-46px) */}
          <h1 className="heading-hero mb-6">
            {isGujarati ? (
              <>
                યોગ્ય પોષણ અને સાચી જીવનશૈલીથી{" "}
                <span className="text-primary font-semibold">તંદુરસ્ત જીવનની</span> નવી શરૂઆત.
              </>
            ) : (
              <>
                Sustainable Health,{" "}
                <span className="text-primary font-semibold">Measurable</span>{" "}
                Transformations.
              </>
            )}
          </h1>

          {/* Supporting paragraph (16-18px, generous line height) */}
          <p className="text-subtitle max-w-2xl mb-8">
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

          {/* Trust Indicators (Readable 14-15px font, weight 500) */}
          <div className="pt-8 border-t border-charcoal-border/60 flex flex-wrap gap-x-8 gap-y-3">
            <div className="flex items-center gap-2 text-sm text-charcoal font-medium">
              <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
              <span>{isGujarati ? "૧૦૦+ સફળ ક્લાયન્ટ્સ" : "100+ Documented Outcomes"}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-charcoal font-medium">
              <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
              <span>{isGujarati ? "૧-ઓન-૧ પ્રમાણિત માર્ગદર્શન" : "1-on-1 Certified Mentorship"}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-charcoal font-medium">
              <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
              <span>{isGujarati ? "કોઈ ભૂખમરો કે કડક દવાઓ નહિ" : "No Starvation or Pills"}</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
