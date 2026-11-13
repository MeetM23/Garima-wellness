"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Scale, HeartPulse, Sparkles, ShieldCheck } from "lucide-react";
import { ShapeTripleRings, ShapeSmoothWave } from "@/components/ui/ShapesGallery";

export const WellnessApproach: React.FC = () => {
  const { isGujarati } = useLanguage();

  const steps = [
    {
      num: "01",
      title: "Routine & Metabolic Assessment",
      gujaratiTitle: "દિનચર્યા અને સ્વાસ્થ્ય મૂલ્યાંકન",
      desc: "We analyze your existing daily schedule, sleep cycles, water habits, physical activity, and persistent fatigue points to understand your body's baseline.",
      gujaratiDesc: "તમારી રોજિંદી જીવનશૈલી, ઊંઘ, પાણી પીવાની આદતો અને શારીરિક થાકના કારણોનું ઊંડાણપૂર્વક વિશ્લેષણ કરવામાં આવે છે."
    },
    {
      num: "02",
      title: "Personalized Nutrition Architecture",
      gujaratiTitle: "વ્યક્તિગત સંતુલિત આહાર આયોજન",
      desc: "Developing a wholesome meal structure focused on balanced macros and cellular nourishment. No harsh starvation, no skipping regular family meals.",
      gujaratiDesc: "કુટુંબ સાથે નિયમિત ભોજન લેતા લેતા યોગ્ય પોષક તત્વો અને કેલરી સંતુલન શીખવાની સહજ અને વૈજ્ઞાનિક પદ્ધતિ."
    },
    {
      num: "03",
      title: "Daily Hydration & Wellness Habits",
      gujaratiTitle: "દૈનિક પાણી અને સકારાત્મક આદતો",
      desc: "Introducing essential daily rituals—optimal water intake timing, mindful chewing, and stress moderation that make healthy living feel effortless.",
      gujaratiDesc: "પાણી પીવાનો સાચો સમય, પૂરતી ઊંઘ, માનસિક શાંતિ અને નાની નાની દૈનિક ટેવો જે શરીરમાં કાયમી ઊર્જા જાળવી રાખે છે."
    },
    {
      num: "04",
      title: "1-on-1 Coach Mentorship & Tracking",
      gujaratiTitle: "અંગત કોચ ફોલો-અપ અને માર્ગદર્શન",
      desc: "Regular progress reviews with Coach Aruna Modashia. Transparent adjustments, positive motivation, and continuous accountability ensure lasting results.",
      gujaratiDesc: "કોચ અરૂણા મોડાશીયા સાથે નિયમિત પ્રોગ્રેસ રિવ્યુ, સાચી પ્રેરણા અને દરેક તબક્કે અંગત સાથ જેથી પરિણામો કાયમ માટે ટકે."
    }
  ];

  const benefits = [
    {
      icon: Scale,
      title: "Visceral Fat & Inch Loss",
      gujaratiTitle: "હાનિકારક ફેટ અને કમર ઘટાડો",
      desc: "Targeting stubborn abdominal fat while preserving lean muscle and vitality."
    },
    {
      icon: HeartPulse,
      title: "All-Day Active Vitality",
      gujaratiTitle: "દિવસભર જોરદાર સ્ફૂર્તિ",
      desc: "Relieving persistent joint aches, sluggishness, and midday energy crashes."
    },
    {
      icon: Sparkles,
      title: "Cellular Nutrition & Skin Clarity",
      gujaratiTitle: "આંતરિક પોષણ અને ત્વચા ગ્લો",
      desc: "Nourishing from within to calm chronic skin flares and dull complexions."
    },
    {
      icon: ShieldCheck,
      title: "Lifelong Sustainable Habits",
      gujaratiTitle: "જીવનપર્યંત ટકતી તંદુરસ્તી",
      desc: "Practical principles that protect you from rebounding weight long-term."
    }
  ];

  return (
    <section id="approach" className="py-20 lg:py-24 bg-ivory relative overflow-hidden">
      {/* Shapes Gallery Background Art — Shape 23 Triple Rings & Shape 34 */}
      <div className="absolute -top-10 -right-10 text-primary pointer-events-none hidden md:block" aria-hidden="true">
        <ShapeTripleRings className="w-56 h-56 text-primary" opacity={0.06} />
      </div>
      <div className="absolute bottom-6 left-6 text-primary pointer-events-none hidden lg:block" aria-hidden="true">
        <ShapeSmoothWave className="w-32 h-32 text-primary" opacity={0.05} />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Global Typography */}
        <div className="max-w-2xl mb-12 lg:mb-16">
          <span className="text-label text-terracotta">
            {isGujarati ? "અમારી કાર્યપદ્ધતિ" : "Process & Methodology"}
          </span>
          <h2 className="heading-section mt-2">
            {isGujarati ? (
              <>
                સ્વાસ્થ્ય સુધારણાની{" "}
                <span className="text-primary font-semibold">૪ તબક્કાની સફર</span>
              </>
            ) : (
              <>
                A Disciplined,{" "}
                <span className="text-primary font-semibold">Four-Step</span> Transformation.
              </>
            )}
          </h2>
          <p className="text-subtitle mt-3">
            {isGujarati
              ? "અમે કોઈ શોર્ટકટ કે હાનિકારક પદ્ધતિમાં માનતા નથી. સાચું પરિવર્તન યોગ્ય સમજ, સંતુલિત આહાર અને સાતત્યથી જ શક્ય બને છે."
              : "We reject short-lived diet fads. True physical vitality is systematically built through routine evaluation, clean dietary timing, habit architecture, and direct personal mentorship."}
          </p>
        </div>

        {/* 4 Step Numbered Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((s) => (
            <div
              key={s.num}
              className="p-6 sm:p-7 rounded-2xl bg-white border border-charcoal-border/80 flex flex-col justify-between transition-all duration-200 hover:border-primary/50 shadow-xs"
            >
              <div>
                <span className="font-sans font-semibold text-2xl text-primary/80 block mb-3">
                  {s.num}
                </span>
                <h3 className="heading-card mb-2.5">
                  {isGujarati ? s.gujaratiTitle : s.title}
                </h3>
                <p className="text-[15px] sm:text-[16px] text-charcoal-muted leading-relaxed font-normal">
                  {isGujarati ? s.gujaratiDesc : s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Key Features & Benefits Bar */}
        <div className="pt-10 border-t border-charcoal-border/60">
          <div className="mb-6">
            <h3 className="text-label text-charcoal-muted font-semibold">
              {isGujarati ? "મુખ્ય પાયાના ફાયદાઓ" : "Core Program Pillars"}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <div key={i} className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-charcoal-border/70 shadow-2xs">
                  <div className="w-9 h-9 rounded-lg bg-sage-soft text-primary flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h4 className="text-[14px] font-sans font-semibold text-charcoal">
                      {isGujarati ? b.gujaratiTitle : b.title}
                    </h4>
                    <p className="text-[13px] sm:text-[14px] font-sans text-charcoal-muted mt-1 leading-normal font-normal">
                      {b.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
