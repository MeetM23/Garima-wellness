"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { testimonials } from "@/data/testimonials";
import { Quote, CheckCircle2 } from "lucide-react";

export const Testimonials: React.FC = () => {
  const { isGujarati } = useLanguage();

  return (
    <section id="testimonials" className="py-20 lg:py-24 bg-ivory">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
        
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
              className="p-7 sm:p-8 rounded-2xl bg-white border border-charcoal-border/70 shadow-xs flex flex-col justify-between"
            >
              <div>
                <Quote className="w-7 h-7 text-sage mb-4 stroke-1" />
                <p className="font-poppins text-charcoal text-sm sm:text-base leading-relaxed italic mb-6 font-normal">
                  “{isGujarati ? item.gujaratiQuote : item.quote}”
                </p>
              </div>

              <div className="pt-5 border-t border-charcoal-border/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h4 className="font-poppins font-semibold text-charcoal text-sm">
                    {isGujarati ? item.gujaratiClientName : item.clientName}
                  </h4>
                  <p className="text-xs font-poppins text-charcoal-subtle font-light">
                    {item.location} • {isGujarati ? item.gujaratiTransformationType : item.transformationType}
                  </p>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-ivory border border-charcoal-border text-xs font-poppins font-medium text-primary self-start sm:self-auto">
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                  <span>{item.verifiedResult}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
