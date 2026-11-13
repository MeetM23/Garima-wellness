"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { testimonials } from "@/data/testimonials";
import { Quote } from "lucide-react";
import { ShapeQuadrantPetals } from "@/components/ui/ShapesGallery";

export const Testimonials: React.FC = () => {
  const { isGujarati } = useLanguage();

  return (
    <section id="testimonials" className="py-20 lg:py-24 bg-ivory relative overflow-hidden">
      {/* Shapes Gallery Background Art — Shape 63 Quadrant Petals */}
      <div className="absolute top-10 right-6 text-primary pointer-events-none hidden md:block" aria-hidden="true">
        <ShapeQuadrantPetals className="w-48 h-48 text-primary" opacity={0.06} />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Global Typography System */}
        <div className="max-w-2xl mb-12 lg:mb-16">
          <span className="text-label text-terracotta">
            {isGujarati ? "વાસ્તવિક પ્રતિસાદ" : "Client Voices"}
          </span>
          <h2 className="heading-section mt-2">
            {isGujarati ? (
              <>
                વિશ્વાસ અને સાતત્યથી{" "}
                <span className="text-primary font-semibold">સફળ થયેલા અનુભવો</span>
              </>
            ) : (
              <>
                Transformations Grounded in{" "}
                <span className="text-primary font-semibold">Trust & Consistency.</span>
              </>
            )}
          </h2>
          <p className="text-subtitle mt-3">
            {isGujarati
              ? "અમારા ક્લાયન્ટ્સના શબ્દો જે દર્શાવે છે કે યોગ્ય પોષણ અને કોચિંગથી જીવનમાં કેવું સકારાત્મક પરિવર્તન આવી શકે છે."
              : "Read real stories of individuals who reclaimed their physical stamina, reduced visceral waist fat, and embraced healthy habits under Coach Aruna's mentorship."}
          </p>
        </div>

        {/* Testimonials 2x2 Clean Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="p-7 sm:p-8 rounded-2xl bg-white border border-charcoal-border/80 shadow-xs flex flex-col justify-between transition-all duration-200 hover:border-primary/40 hover:shadow-soft"
            >
              <div>
                <Quote className="w-8 h-8 text-sage-dark mb-4 stroke-[1.5]" />
                <p className="font-sans text-charcoal text-[16px] sm:text-[17px] leading-relaxed italic mb-6 font-normal">
                  “{isGujarati ? item.gujaratiQuote : item.quote}”
                </p>
              </div>

              <div className="pt-5 border-t border-charcoal-border/50">
                <h4 className="font-sans font-semibold text-charcoal text-[15px] sm:text-[16px]">
                  {isGujarati ? item.gujaratiClientName : item.clientName}
                </h4>
                <p className="text-[13px] sm:text-[14px] font-sans text-charcoal-muted font-normal mt-0.5">
                  {item.location} • {isGujarati ? item.gujaratiTransformationType : item.transformationType}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Full-width Responsive Bottom Landscape Illustration (ils_02.svg) */}
      <div
        className="testimonial-illustration absolute bottom-0 left-0 right-0 w-full pointer-events-none select-none z-0 overflow-hidden leading-none"
        aria-hidden="true"
      >
        <img
          src="/images/illustrations/ils_02.svg"
          alt=""
          className="w-full h-auto min-w-full block"
        />
      </div>
    </section>
  );
};
