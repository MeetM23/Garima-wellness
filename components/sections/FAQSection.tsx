"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { faqs } from "@/data/faq";
import { ChevronDown } from "lucide-react";

export const FAQSection: React.FC = () => {
  const { isGujarati } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 lg:py-24 bg-white border-y border-charcoal-border/40">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
        
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
                className="rounded-xl border border-charcoal-border/70 overflow-hidden bg-ivory/50 transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  aria-expanded={isOpen}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-poppins text-sm sm:text-base font-medium text-charcoal hover:text-primary transition-colors focus:outline-none focus:ring-1 focus:ring-primary"
                >
                  <span>{isGujarati ? faq.gujaratiQuestion : faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-charcoal-subtle transition-transform duration-200 shrink-0 ${
                      isOpen ? "rotate-180 text-primary" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-charcoal-muted leading-relaxed font-light border-t border-charcoal-border/30 animate-in fade-in duration-150">
                    {isGujarati ? faq.gujaratiAnswer : faq.answer}
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
