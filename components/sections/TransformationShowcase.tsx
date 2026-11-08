"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { transformations, galleryCategories, TransformationItem } from "@/data/transformations";
import { ZoomIn, X, ShieldCheck, ArrowRight } from "lucide-react";

export const TransformationShowcase: React.FC = () => {
  const { isGujarati } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeLightbox, setActiveLightbox] = useState<TransformationItem | null>(null);

  const filteredItems =
    selectedCategory === "all"
      ? transformations
      : transformations.filter((item) => item.category === selectedCategory);

  return (
    <section id="archive" className="py-20 lg:py-24 bg-white border-b border-charcoal-border/40 relative">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
        
        {/* Section Header with Global Typography System */}
        <div className="max-w-2xl mb-10 lg:mb-14">
          <span className="text-label text-terracotta">
            {isGujarati ? "પ્રમાણિત ક્લાયન્ટ આર્કાઇવ" : "Verified Client Outcomes"}
          </span>
          <h2 className="heading-section mt-2">
            {isGujarati ? "પરિવર્તન પરિણામોનો સંગ્રહ" : "Documented Transformation Archive"}
          </h2>
          <p className="text-subtitle mt-3">
            {isGujarati
              ? "વજન ઘટાડો, સ્વસ્થ વજન વધારો અને ઊર્જા સુધારણાની વ્યક્તિગત વાસ્તવિક સફરનું નિરીક્ષણ કરો."
              : "Inspect individual client journeys across weight loss, healthy gain, and vitality."}
          </p>
        </div>

        {/* Functional Category Filter */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-10 scrollbar-none">
          {galleryCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-poppins font-medium whitespace-nowrap transition-all border ${
                selectedCategory === cat.id
                  ? "bg-primary text-ivory border-primary shadow-xs"
                  : "bg-ivory hover:bg-black/5 text-charcoal border-charcoal-border/70"
              }`}
            >
              {isGujarati ? cat.gujaratiLabel : cat.label}
            </button>
          ))}
        </div>

        {/* Symmetrical 3-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group rounded-2xl bg-white border border-charcoal-border/80 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-primary/50 shadow-xs hover:shadow-soft"
            >
              {/* Image Frame with Clean Controlled Ratio */}
              <div
                className="relative aspect-[4/5] bg-ivory-warm overflow-hidden cursor-pointer"
                onClick={() => setActiveLightbox(item)}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 380px"
                  className="object-cover object-top transition-transform duration-300 group-hover:scale-102"
                />

                {/* Category Pill Tag */}
                <div className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-md bg-white/95 text-label !text-[10px] text-primary shadow-xs border border-charcoal-border/50">
                  {isGujarati ? item.gujaratiCategoryLabel : item.categoryLabel}
                </div>

                {/* Subtle Zoom Action Pill */}
                <div className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-charcoal opacity-0 group-hover:opacity-100 transition-opacity shadow-xs">
                  <ZoomIn className="w-3.5 h-3.5 text-primary" />
                </div>
              </div>

              {/* Card Information */}
              <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 bg-white">
                <div>
                  {/* Verified Metric Chips */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {item.stats.slice(0, 2).map((s, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md bg-ivory border border-charcoal-border/60 text-xs font-poppins font-medium text-charcoal flex items-center gap-1"
                      >
                        <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                        <span>
                          <strong>{s.value}</strong> ({s.label})
                        </span>
                      </span>
                    ))}
                  </div>

                  {/* Card Title */}
                  <h3 className="heading-card mb-2">
                    {isGujarati ? item.gujaratiTitle : item.title}
                  </h3>

                  {/* Short Verified Narrative */}
                  <p className="text-body !text-xs line-clamp-3">
                    {isGujarati ? item.gujaratiDescription : item.description}
                  </p>
                </div>

                {/* Card Action Link */}
                <div className="pt-4 mt-4 border-t border-charcoal-border/40 flex items-center justify-between">
                  <button
                    onClick={() => setActiveLightbox(item)}
                    className="text-xs font-poppins font-medium text-primary hover:text-primary-light flex items-center gap-1 transition-colors"
                  >
                    <span>{isGujarati ? "સંપૂર્ણ વિગત જુઓ" : "Inspect Case File"}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <span className="text-label !text-[10px] text-charcoal-subtle">
                    Verified
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Transparent Medical & Lifestyle Notice */}
        <div className="mt-12 text-center max-w-xl mx-auto p-4 rounded-xl bg-ivory border border-charcoal-border/60 text-xs text-charcoal-muted leading-relaxed font-light">
          <strong>{isGujarati ? "નોંધ:" : "Transparency Notice:"}</strong>{" "}
          {isGujarati
            ? "આ તમામ પરિણામો વ્યક્તિદીઠ અલગ હોઈ શકે છે. ગરિમા વેલનેસ સેન્ટર ટકાઉ જીવનશૈલી સુધારણા અને સંતુલિત પોષણ દ્વારા પરિણામો મેળવવામાં મદદ કરે છે."
            : "Results may vary from person to person based on consistency, metabolic rate, and individual dedication. Garima Wellness Center emphasizes sustainable lifestyle modifications and balanced nutrition."}
        </div>

      </div>

      {/* Accessible Detail Lightbox Modal */}
      {activeLightbox && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setActiveLightbox(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveLightbox(null)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-black/5 text-charcoal transition-colors z-10"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              {/* Full Image */}
              <div className="relative aspect-[3/4] sm:aspect-[4/5] rounded-xl overflow-hidden bg-ivory border border-charcoal-border">
                <Image
                  src={activeLightbox.image}
                  alt={activeLightbox.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-contain"
                />
              </div>

              {/* Details & Quote */}
              <div className="space-y-4">
                <div>
                  <span className="px-2.5 py-1 rounded-md bg-sage-soft text-primary text-label !text-[10px]">
                    {isGujarati ? activeLightbox.gujaratiCategoryLabel : activeLightbox.categoryLabel}
                  </span>
                  <h3 className="heading-subsection mt-2">
                    {isGujarati ? activeLightbox.gujaratiTitle : activeLightbox.title}
                  </h3>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-2">
                  {activeLightbox.stats.map((s, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-lg bg-ivory border border-charcoal-border/60"
                    >
                      <span className="text-label !text-[9.5px] text-charcoal-muted block">
                        {s.label}
                      </span>
                      <span className="text-sm font-poppins font-semibold text-primary block mt-0.5">
                        {s.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Gujarati Quote if available */}
                {activeLightbox.verifiedQuoteGujarati && (
                  <div className="p-3.5 rounded-lg bg-ivory-warm border-l-2 border-primary">
                    <span className="text-label !text-[10px] text-primary block mb-0.5">
                      Client Statement (Gujarati)
                    </span>
                    <p className="font-poppins text-xs text-charcoal italic leading-relaxed">
                      “{activeLightbox.verifiedQuoteGujarati}”
                    </p>
                  </div>
                )}

                <p className="text-body !text-xs leading-relaxed font-light">
                  {isGujarati ? activeLightbox.gujaratiDescription : activeLightbox.description}
                </p>

                <div className="pt-2">
                  <a
                    href={`https://wa.me/919913662102?text=${encodeURIComponent(
                      `Hello, I would like to know more about your wellness programs: ${activeLightbox.title}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full btn-primary !py-3 text-xs uppercase tracking-wider justify-center"
                  >
                    {isGujarati ? "આ પરિણામ માટે વોટ્સએપ પર પૂછપરછ કરો" : "Inquire for Similar Outcome"}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
