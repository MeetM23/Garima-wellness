"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { transformations, TransformationItem } from "@/data/transformations";
import { ArrowRight, Sparkles } from "lucide-react";
import { ShapeSunMedallion, ShapeConcaveStar } from "@/components/ui/ShapesGallery";

export const TransformationShowcase: React.FC = () => {
  const { isGujarati } = useLanguage();
  const [isTouchPaused, setIsTouchPaused] = useState(false);

  // Render a clean single card with ONLY the 4 requested elements
  const renderCard = (item: TransformationItem, keySuffix: string, priority: boolean = false) => (
    <article
      key={`${item.id}-${keySuffix}`}
      className="w-[305px] sm:w-[335px] md:w-[360px] shrink-0 rounded-2xl bg-white border border-charcoal-border/80 overflow-hidden flex flex-col justify-between shadow-xs cursor-default select-none"
    >
      <div>
        {/* 1. ORIGINAL TRANSFORMATION PHOTOGRAPH (Clean, No overlays/badges) */}
        <div className="relative aspect-[4/3] bg-stone-100 overflow-hidden border-b border-charcoal-border/60">
          <Image
            src={item.image}
            alt={isGujarati ? item.gujaratiTitle : item.title}
            fill
            sizes="(max-width: 640px) 305px, 360px"
            priority={priority}
            className="object-cover object-top"
          />
        </div>

        {/* 2. STARTING WEIGHT → ACHIEVED WEIGHT (If available, no extra chips/badges) */}
        {item.startingMeasurement && item.achievedMeasurement && (
          <div className="px-4 py-2.5 bg-[#F4F6F0] border-b border-charcoal-border/60 flex items-center gap-2 text-xs font-medium text-charcoal">
            <span className="text-charcoal-muted">
              {isGujarati ? item.startingMeasurement.valueGu : item.startingMeasurement.valueEn}
            </span>
            <ArrowRight className="w-3.5 h-3.5 text-primary shrink-0" />
            <span className="font-semibold text-primary">
              {isGujarati ? item.achievedMeasurement.valueGu : item.achievedMeasurement.valueEn}
            </span>
          </div>
        )}

        {/* 3. TRANSFORMATION HEADING & 4. SHORT DESCRIPTION */}
        <div className="p-4 sm:p-5">
          <h3 className="heading-card text-charcoal line-clamp-1">
            {isGujarati ? item.gujaratiTitle : item.title}
          </h3>
          <p className="mt-2 text-[14px] sm:text-[15px] text-charcoal-muted leading-relaxed line-clamp-2">
            {isGujarati ? item.gujaratiDescription : item.description}
          </p>
        </div>
      </div>
    </article>
  );

  return (
    <section id="archive" className="py-20 lg:py-24 bg-[#FAF9F5] border-b border-charcoal-border/40 relative overflow-hidden">
      {/* Subtle Shapes Gallery Background Art */}
      <div className="absolute top-8 right-6 text-primary pointer-events-none hidden md:block" aria-hidden="true">
        <ShapeSunMedallion className="w-56 h-56 text-primary" opacity={0.06} />
      </div>
      <div className="absolute bottom-10 left-6 text-[#C87A5B] pointer-events-none hidden sm:block" aria-hidden="true">
        <ShapeConcaveStar className="w-20 h-20 text-[#C87A5B]" opacity={0.1} />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-10 sm:mb-12">
        {/* Section Header */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wide uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{isGujarati ? "પ્રમાણિત ક્લાયન્ટ આર્કાઇવ" : "Verified Client Outcomes"}</span>
          </div>
          <h2 className="heading-section mt-1">
            {isGujarati ? "પ્રમાણિત પરિવર્તન પરિણામો" : "Documented Transformation Archive"}
          </h2>
          <p className="text-subtitle mt-3">
            {isGujarati
              ? "સ્પષ્ટ અને સુવાચ્ય પરિવર્તન કાર્ડ્સ. વજન ઘટાડો, સ્વસ્થ વજન વધારો અને ત્વચાની તાજગીની વાસ્તવિક સફર."
              : "Clear, uncluttered before-and-after results. Inspect individual client journeys across weight loss, healthy gain, and vitality."}
          </p>
        </div>
      </div>

      {/* Infinite Automatic Horizontal Marquee (Continuous, No scrollbars, Pauses on hover/touch) */}
      <div
        className="marquee-wrapper w-full overflow-hidden select-none py-2"
        onTouchStart={() => setIsTouchPaused(true)}
        onTouchEnd={() => setIsTouchPaused(false)}
        onTouchCancel={() => setIsTouchPaused(false)}
      >
        <div
          className="marquee-track flex w-max animate-marquee"
          style={{
            animationPlayState: isTouchPaused ? "paused" : undefined,
          }}
        >
          {/* Track Sequence 1 */}
          <div className="flex gap-6 pr-6">
            {transformations.map((item, idx) => renderCard(item, "set1", idx < 3))}
          </div>

          {/* Track Sequence 2 (Identical duplicate for seamless, zero-jump loop) */}
          <div className="flex gap-6 pr-6" aria-hidden="true">
            {transformations.map((item) => renderCard(item, "set2", false))}
          </div>
        </div>
      </div>
    </section>
  );
};
