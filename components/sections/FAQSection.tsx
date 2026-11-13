"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { faqs } from "@/data/faq";
import { ChevronDown } from "lucide-react";
import { ShapeZenDonut } from "@/components/ui/ShapesGallery";

export const FAQSection: React.FC = () => {
  const { isGujarati } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 lg:py-24 bg-white border-y border-charcoal-border/40 relative overflow-hidden">
      {/* Shapes Gallery Background Art — Shape 22 Zen Donut */}
      <div className="absolute top-1/2 -right-16 -translate-y-1/2 text-primary pointer-events-none hidden lg:block" aria-hidden="true">
        <ShapeZenDonut className="w-56 h-56 text-primary" opacity={0.05} />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Global Typography System */}
        <div className="max-w-2xl mb-12 lg:mb-16">
          <span className="text-label text-terracotta">
            {isGujarati ? "સામાન્ય પ્રશ્નો" : "Frequently Asked Questions"}
          </span>
          <h2 className="heading-section mt-2">
            {isGujarati ? (
              <>
                સ્વાસ્થ્ય યાત્રા અંગેના{" "}
                <span className="text-primary font-semibold">મહત્વના પ્રશ્નો</span>
              </>
            ) : (
              <>
                Clear Answers for Your{" "}
                <span className="text-primary font-semibold">Wellness Journey.</span>
              </>
            )}
          </h2>
          <p className="text-subtitle mt-3">
            {isGujarati
              ? "અમારા આહાર, ઓનલાઇન કન્સલ્ટેશન અને પર્સનલ કોચિંગ અંગે સામાન્ય રીતે પૂછાતા પ્રશ્નોના જવાબો."
              : "Everything you need to know about starting your personalized nutrition and lifestyle routine with Coach Aruna."}
          </p>
        </div>

        {/* Minimal Accessible Accordion */}
        <div className="max-w-3xl space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.id}
                className="rounded-2xl border border-charcoal-border/80 bg-ivory-warm overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="w-full py-5 px-6 min-h-[56px] flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-sans font-medium text-charcoal text-[17px] sm:text-[18px] pr-4">
                    {isGujarati ? faq.gujaratiQuestion : faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-primary shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-primary" : "text-charcoal-muted"
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-1 border-t border-charcoal-border/40">
                    <p className="font-sans text-[15px] sm:text-[16px] text-charcoal-muted leading-relaxed font-normal">
                      {isGujarati ? faq.gujaratiAnswer : faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
