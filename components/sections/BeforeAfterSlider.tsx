"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { transformations, TransformationItem } from "@/data/transformations";
import { Sliders, AlertCircle, ArrowRight } from "lucide-react";

export const BeforeAfterSlider: React.FC = () => {
  const { isGujarati } = useLanguage();
  const [activeJourneyId, setActiveJourneyId] = useState<string>(transformations[0].id);
  const [sliderPos, setSliderPos] = useState<number>(50);

  const currentJourney =
    transformations.find((t) => t.id === activeJourneyId) || transformations[0];

  return (
    <div className="w-full bg-white rounded-2xl p-6 sm:p-8 lg:p-10 border border-charcoal-border/70 shadow-sm">
      
      {/* Case Selector Pills */}
      <div className="flex items-center justify-between flex-wrap gap-4 mb-6 pb-5 border-b border-charcoal-border/50">
        <div>
          <span className="text-[11px] uppercase tracking-widest font-semibold text-terracotta">
            {isGujarati ? "પ્રમાણિત સફર તુલના" : "Verified Transformation Studio"}
          </span>
          <h3 className="font-serif text-2xl font-semibold text-charcoal mt-1">
            {isGujarati ? currentJourney.gujaratiTitle : currentJourney.title}
          </h3>
        </div>

        {/* Tab Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 max-w-full">
          {transformations.slice(0, 4).map((t) => (
            <button
              key={t.id}
              onClick={() => {
                setActiveJourneyId(t.id);
                setSliderPos(50);
              }}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors border ${
                activeJourneyId === t.id
                  ? "bg-primary text-ivory border-primary"
                  : "bg-ivory hover:bg-black/5 text-charcoal-muted border-charcoal-border/60"
              }`}
            >
              {isGujarati ? t.gujaratiCategoryLabel : t.categoryLabel}
            </button>
          ))}
        </div>
      </div>

      {/* Main Interactive Comparison Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        
        {/* Left Column: Interactive Split-Slider View */}
        <div className="lg:col-span-7">
          <div className="relative aspect-[4/5] sm:aspect-square w-full max-w-lg mx-auto rounded-xl overflow-hidden bg-ivory-warm shadow-xs border border-charcoal-border/60 select-none">
            
            {/* Base Image */}
            <Image
              src={currentJourney.image}
              alt={currentJourney.title}
              fill
              sizes="(max-width: 768px) 100vw, 550px"
              className="object-cover object-center pointer-events-none"
              priority
            />

            {/* Slider Divider Line */}
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg z-20 pointer-events-none"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-primary text-ivory border-2 border-white shadow-md flex items-center justify-center pointer-events-none">
                <Sliders className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Range Input for Dragging */}
            <input
              type="range"
              min="5"
              max="95"
              value={sliderPos}
              onChange={(e) => setSliderPos(Number(e.target.value))}
              aria-label="Drag before and after transformation slider"
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
            />

            {/* Floating Tags */}
            <div className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-md bg-charcoal/80 text-ivory text-[10px] font-semibold tracking-wider backdrop-blur-sm uppercase">
              {currentJourney.beforeLabel || "Before"}
            </div>
            <div className="absolute top-3 right-3 z-10 px-2.5 py-1 rounded-md bg-primary/90 text-ivory text-[10px] font-semibold tracking-wider backdrop-blur-sm uppercase">
              {currentJourney.afterLabel || "After"}
            </div>

            {/* Bottom Hint */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 bg-white/90 backdrop-blur-md px-3.5 py-1 rounded-full text-[10px] font-medium text-charcoal shadow-xs pointer-events-none">
              {isGujarati ? "સ્લાઇડર ડ્રેગ કરો ↔" : "Drag slider left / right ↔"}
            </div>
          </div>
        </div>

        {/* Right Column: Verified Journey Metrics & Story */}
        <div className="lg:col-span-5 flex flex-col space-y-4">
          
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-wider text-primary">
              {isGujarati ? "પ્રમાણિત કેસ" : "Documented Case File"}
            </span>
            <h4 className="font-serif text-xl sm:text-2xl font-semibold text-charcoal mt-0.5">
              {isGujarati ? currentJourney.gujaratiTitle : currentJourney.title}
            </h4>
          </div>

          {/* Metric Stats Cards */}
          <div className="grid grid-cols-2 gap-2.5">
            {currentJourney.stats.map((s, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-ivory border border-charcoal-border/70 flex flex-col"
              >
                <span className="text-[10px] text-charcoal-muted uppercase font-medium tracking-wider">
                  {s.label}
                </span>
                <span className="text-base font-serif font-bold text-primary mt-0.5">
                  {s.value}
                </span>
              </div>
            ))}
          </div>

          {/* Authentic Gujarati Quote Box if available */}
          {currentJourney.verifiedQuoteGujarati && (
            <div className="p-3.5 rounded-xl bg-sage-soft/30 border-l-2 border-primary">
              <span className="text-[10px] text-charcoal-subtle font-medium uppercase tracking-wider block mb-0.5">
                Client's Own Words (Gujarati)
              </span>
              <p className="font-sans text-xs text-charcoal italic leading-relaxed">
                “{currentJourney.verifiedQuoteGujarati}”
              </p>
            </div>
          )}

          {/* Narrative Summary */}
          <p className="text-charcoal-muted text-xs sm:text-sm leading-relaxed font-light">
            {isGujarati
              ? currentJourney.gujaratiDescription
              : currentJourney.description}
          </p>

          {/* Disclaimer Pill */}
          <div className="flex items-start gap-2 p-2.5 rounded-lg bg-ivory-warm border border-charcoal-border/50 text-charcoal-subtle text-[10px] leading-normal">
            <AlertCircle className="w-3.5 h-3.5 text-terracotta shrink-0 mt-0.5" />
            <span>{currentJourney.disclaimer}</span>
          </div>

          {/* Direct Consultation Link */}
          <a
            href={`https://wa.me/919913662102?text=${encodeURIComponent(
              `Hello Coach Aruna, I am interested in achieving results similar to: ${currentJourney.title}`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 px-5 py-3 rounded-full bg-primary hover:bg-primary-light text-ivory text-xs font-semibold tracking-wider uppercase transition-all shadow-xs active:scale-95"
          >
            <span>{isGujarati ? "આ પરિણામ માટે સંપર્ક કરો" : "Inquire For Similar Outcome"}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

        </div>

      </div>

    </div>
  );
};
