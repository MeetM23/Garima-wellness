"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/data/siteData";
import { founderNotes } from "@/data/founderNotes";
import { FileText, Eye, X, Check } from "lucide-react";

export const AboutFounder: React.FC = () => {
  const { isGujarati } = useLanguage();
  const [modalOpen, setModalOpen] = useState(false);
  const primaryNote = founderNotes[0];

  return (
    <section id="about" className="py-20 lg:py-24 bg-white border-y border-charcoal-border/40 relative">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 lg:mb-16">
          <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-terracotta">
            {isGujarati ? "સ્થાપક અને ફિલસૂફી" : "Founder & Philosophy"}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-charcoal mt-2 leading-tight">
            {isGujarati ? (
              <>
                સ્વાસ્થ્ય એ જ સાચી સંપત્તિ છે –{" "}
                <span className="italic font-normal text-primary">અરૂણા મોડાશીયા</span>
              </>
            ) : (
              <>
                Health is True Wealth —{" "}
                <span className="italic font-normal text-primary">Meet Coach Aruna Modashia</span>
              </>
            )}
          </h2>
        </div>

        {/* 2-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Authentic Statement & Core Commitments */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Gujarati Authentic Quote Box */}
            <div className="p-6 rounded-2xl bg-ivory border-l-2 border-primary space-y-3">
              <span className="text-[10px] uppercase tracking-wider font-semibold text-primary">
                {isGujarati ? "મૂળ વિચાર અને સંદેશ" : "Direct Statement from Coach Aruna (Gujarati)"}
              </span>
              <p className="font-serif text-base sm:text-lg text-charcoal leading-relaxed italic">
                “નમસ્તે! હું અરૂણા મોડાશીયા, હું Wellness Coach તરીકે કાર્યરત છું. મારો ઉદ્દેશ્ય લોકોને યોગ્ય પોષણ, સ્વસ્થ જીવનશૈલી અને સકારાત્મક માર્ગદર્શન દ્વારા સ્વસ્થ, સુંદર અને ખુશહાલ જીવન જીવવા માટે પ્રેરિત કરવાનો છે. હું માનું છું કે સ્વાસ્થ્ય એ જ સાચી સંપત્તિ છે.”
              </p>
            </div>

            {/* Narrative */}
            <p className="text-charcoal-muted text-sm sm:text-base leading-relaxed font-light">
              {isGujarati
                ? "ગરિમા વેલનેસ સેન્ટરની સ્થાપના દરેક પરિવારમાં સાચી સ્વાસ્થ્ય જાગૃતિ પહોંચાડવાના ઉદ્દેશ્ય સાથે કરવામાં આવી છે. અમારો અભિગમ અકુદરતી શોર્ટકટ કે દવાઓ પર નહીં, પરંતુ યોગ્ય ઘરેલું આહાર, પાણીનું સંતુલન અને દૈનિક આદતોના સકારાત્મક સુધારા પર આધારિત છે."
                : "At Garima Wellness Center, health is not approached as an intimidating regimen or temporary diet. Coach Aruna Modashia mentors each individual with compassionate accountability—identifying metabolic habits, educating on wholesome nutrition, and instilling daily wellness practices that endure for life."}
            </p>

            {/* Three Value Blocks */}
            <div className="pt-2 space-y-3">
              <div className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-sage-soft text-primary flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-charcoal">
                    {isGujarati ? "સુખી જીવનનો પાયો" : "Foundation of Happiness"}
                  </h3>
                  <p className="text-xs text-charcoal-muted mt-0.5 font-light">
                    {isGujarati ? "સારું સ્વાસ્થ્ય સુખી જીવનનો મૂળ આધાર છે." : "Good health is the bedrock upon which vitality, mental peace, and family happiness rest."}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-sage-soft text-primary flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-charcoal">
                    {isGujarati ? "સમગ્ર પરિવારનું કલ્યાણ" : "Family-Wide Nutrition Literacy"}
                  </h3>
                  <p className="text-xs text-charcoal-muted mt-0.5 font-light">
                    {isGujarati ? "દરેક વ્યક્તિ સુધી સાચી સમજ પહોંચે અને દરેક પરિવાર સ્વસ્થ બને." : "Creating long-term nutritional knowledge so every member of your household thrives together."}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-sage-soft text-primary flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-charcoal">
                    {isGujarati ? "સ્થાનિક અને ઓનલાઇન સુવિધા" : "Una Center & Remote Coaching"}
                  </h3>
                  <p className="text-xs text-charcoal-muted mt-0.5 font-light">
                    {isGujarati ? "ઉનામાં રૂબરૂ કન્સલ્ટેશન અથવા ઘેરબેઠા ઓનલાઇન કોચિંગ." : "Accessible 1-on-1 consultations in Una (Gir Somnath) or structured online coaching anywhere."}
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Curated Document Archive Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-ivory p-6 border border-charcoal-border/70 space-y-4">
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-primary" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-charcoal">
                    Verified Diary Notes
                  </span>
                </div>
                <span className="text-[10px] text-charcoal-subtle uppercase tracking-wider">
                  Original Source
                </span>
              </div>

              <div
                onClick={() => setModalOpen(true)}
                className="relative aspect-[4/3] rounded-xl overflow-hidden bg-white border border-charcoal-border/60 cursor-pointer group"
              >
                <Image
                  src={primaryNote.imagePath}
                  alt="Coach Aruna Modashia Original Handwritten Philosophy"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover object-top filter grayscale contrast-125 group-hover:scale-102 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-charcoal/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 text-charcoal text-xs font-semibold shadow-md">
                    <Eye className="w-3.5 h-3.5 text-primary" />
                    <span>Inspect Original Document</span>
                  </span>
                </div>
              </div>

              <div className="text-xs text-charcoal-muted space-y-1 font-light">
                <p>
                  <strong>Coach:</strong> Aruna Modashia ({siteConfig.founder.gujaratiTitle})
                </p>
                <p>
                  <strong>Center:</strong> Vidhyanagar Delwada Road, Opp. Rohan Pan, Una (362560)
                </p>
                <p>
                  <strong>Direct Line:</strong> +91 99136 62102
                </p>
              </div>

              <button
                onClick={() => setModalOpen(true)}
                className="w-full py-2.5 rounded-xl border border-charcoal-border hover:border-primary text-charcoal hover:text-primary text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 bg-white"
              >
                <Eye className="w-3.5 h-3.5 text-primary" />
                <span>{isGujarati ? "હસ્તલિખિત નોંધ વાંચો" : "View Verified Gujarati Manuscript"}</span>
              </button>

            </div>
          </div>

        </div>

      </div>

      {/* High-Resolution Document Inspection Modal */}
      {modalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/70 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 md:p-8 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-black/5 text-charcoal transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="font-serif text-xl font-semibold text-charcoal mb-4">
              Verified Handwritten Record — Coach Aruna Modashia
            </h3>

            <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-ivory border border-charcoal-border mb-4">
              <Image
                src={primaryNote.imagePath}
                alt="Handwritten Note"
                fill
                className="object-contain"
              />
            </div>

            <div className="p-4 rounded-xl bg-ivory text-xs sm:text-sm text-charcoal space-y-2 font-mono whitespace-pre-wrap">
              {primaryNote.originalGujarati}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
