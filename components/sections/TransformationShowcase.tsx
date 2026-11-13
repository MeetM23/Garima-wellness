"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { transformations, TransformationItem } from "@/data/transformations";
import { ArrowRight, Sparkles } from "lucide-react";
import { ShapeSunMedallion, ShapeConcaveStar } from "@/components/ui/ShapesGallery";

export const TransformationShowcase: React.FC = () => {
  const { isGujarati } = useLanguage();

  // Single internal duplication for seamless wrap
  const duplicatedItems = [...transformations, ...transformations];

  // Mobile manual swiping & auto-scroll refs
  const mobileScrollRef = useRef<HTMLDivElement>(null);
  const isInteractingRef = useRef<boolean>(false);
  const resumeTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const el = mobileScrollRef.current;
    if (!el) return;

    let rafId: number;

    const step = () => {
      if (!isInteractingRef.current) {
        el.scrollLeft += 0.75;
        const halfWidth = el.scrollWidth / 2;
        if (halfWidth > 0 && el.scrollLeft >= halfWidth) {
          el.scrollLeft -= halfWidth;
        } else if (el.scrollLeft <= 0) {
          el.scrollLeft += halfWidth;
        }
      }
      rafId = requestAnimationFrame(step);
    };

    rafId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(rafId);
      if (resumeTimerRef.current) {
        clearTimeout(resumeTimerRef.current);
      }
    };
  }, []);

  const handleTouchStart = () => {
    isInteractingRef.current = true;
    if (resumeTimerRef.current) {
      clearTimeout(resumeTimerRef.current);
    }
  };

  const handleTouchEnd = () => {
    if (resumeTimerRef.current) {
      clearTimeout(resumeTimerRef.current);
    }
    // Resume auto-scrolling with a 2-second delay after user releases touch
    resumeTimerRef.current = setTimeout(() => {
      isInteractingRef.current = false;
    }, 2000);
  };

  // Render a clean single card with ONLY the 4 requested elements
  const renderCard = (
    item: TransformationItem,
    keySuffix: string,
    isMobile: boolean = false
  ) => (
    <article
      key={`${item.id}-${keySuffix}`}
      className={`${
        isMobile
          ? "w-[290px] sm:w-[320px] mr-4 sm:mr-6"
          : "w-[360px] mr-6"
      } shrink-0 rounded-2xl bg-white border border-charcoal-border/80 overflow-hidden flex flex-col justify-between shadow-xs cursor-default select-none`}
    >
      <div>
        {/* 1. ORIGINAL TRANSFORMATION PHOTOGRAPH (Clean, No overlays/badges) */}
        <div className="relative aspect-[4/3] bg-stone-100 overflow-hidden border-b border-charcoal-border/60">
          <Image
            src={item.image}
            alt={isGujarati ? item.gujaratiTitle : item.title}
            fill
            sizes={isMobile ? "300px" : "360px"}
            className="object-cover object-top"
          />
        </div>

        {/* 2. STARTING WEIGHT → ACHIEVED WEIGHT (If available, no extra badges) */}
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

      {/* DESKTOP LAYER: Continuous CSS Marquee (Pause on hover, single unified track) */}
      <div className="hidden md:block marquee-wrapper w-full overflow-hidden select-none py-2">
        <div className="marquee-track flex w-max animate-marquee pl-4 sm:pl-6 lg:pl-8">
          {duplicatedItems.map((item, idx) =>
            renderCard(item, `desktop-${idx}`, false)
          )}
        </div>
      </div>

      {/* MOBILE LAYER: Swipeable Native Horizontal Scroll with Auto-Scroll & Touch Pause */}
      <div
        ref={mobileScrollRef}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={handleTouchEnd}
        className="md:hidden overflow-x-auto scrollbar-none w-full select-none py-2 pl-4"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        <div className="flex w-max">
          {duplicatedItems.map((item, idx) =>
            renderCard(item, `mobile-${idx}`, true)
          )}
        </div>
      </div>
    </section>
  );
};
