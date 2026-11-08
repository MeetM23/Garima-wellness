"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/data/siteData";
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

export const ContactSection: React.FC = () => {
  const { isGujarati } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    goal: "Weight & Visceral Fat Loss",
  });

  const whatsappDirectUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    "Hello, I would like to know more about your wellness programs."
  )}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const customMessage = `Hello Coach Aruna,%0A%0AMy Name: ${formData.name}%0APhone: ${formData.phone}%0AGoal: ${formData.goal}%0A%0AHello, I would like to know more about your wellness programs.`;
    window.open(`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${customMessage}`, "_blank");
  };

  return (
    <section id="contact" className="py-20 lg:py-24 bg-ivory relative">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
        
        {/* Balanced 2-Column Desktop Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Introduction & Primary WhatsApp CTA */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-label text-terracotta">
              {isGujarati ? "સંપર્ક કરો" : "Get In Touch"}
            </span>
            
            <h2 className="heading-section">
              {isGujarati ? (
                <>
                  તમારી વ્યક્તિગત સ્વાસ્થ્ય સફર{" "}
                  <span className="text-primary font-semibold">આજથી શરૂ કરો.</span>
                </>
              ) : (
                <>
                  Begin Your Personalized{" "}
                  <span className="text-primary font-semibold">Wellness Journey.</span>
                </>
              )}
            </h2>

            <p className="text-subtitle font-light max-w-lg">
              {isGujarati
                ? "ગરિમા વેલનેસ સેન્ટરમાં અમે દરેક વ્યક્તિને સાંભળીને અંગત માર્ગદર્શન આપીએ છીએ. ઉના સેન્ટર પર રૂબરૂ મુલાકાત અથવા ઘેરબેઠા ઓનલાઇન કન્સલ્ટેશન માટે આજે જ જોડાઓ."
                : "At Garima Wellness Center, every transformation begins with an open conversation. Connect with Coach Aruna Modashia to understand how personalized nutrition and sustainable daily habits can transform your health."}
            </p>

            {/* Direct WhatsApp Call to Action Button */}
            <div className="pt-2">
              <a
                href={whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary !py-3.5 !px-7 text-xs font-semibold uppercase tracking-wider group"
              >
                <MessageCircle className="w-4 h-4 mr-2 text-[#25D366]" />
                <span>{isGujarati ? "વોટ્સએપ પર વાતચીત શરૂ કરો" : "Chat Directly on WhatsApp"}</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Trust Quote */}
            <div className="p-4 rounded-xl bg-white border border-charcoal-border/70 max-w-lg text-xs font-poppins text-charcoal-muted leading-relaxed font-light">
              <strong className="font-semibold text-charcoal">
                {isGujarati ? "કોચ અરૂણા મોડાશીયા:" : "Coach Aruna Modashia:"}
              </strong>{" "}
              {isGujarati
                ? "“સ્વાસ્થ્ય એ જ સાચી સંપત્તિ છે. સકારાત્મક માર્ગદર્શન દ્વારા તંદુરસ્ત પરિવારનું નિર્માણ એ જ અમારું મિશન છે.”"
                : "“Health is true wealth. Our mission is to ensure genuine nutritional understanding reaches every individual and family.”"}
            </div>
          </div>

          {/* Right Column: Clean Organized Contact Card & Quick Inquiry */}
          <div className="lg:col-span-6">
            <div className="p-7 sm:p-8 rounded-2xl bg-white border border-charcoal-border/80 shadow-xs space-y-6">
              
              <h3 className="heading-card">
                {isGujarati ? "સંપર્ક માહિતી અને કેન્દ્રનું સરનામું" : "Contact & Center Information"}
              </h3>

              {/* Contact Information List */}
              <div className="space-y-4 text-xs font-poppins text-charcoal-muted">
                
                {/* Phone & WhatsApp */}
                <div className="flex items-start gap-3.5 pb-4 border-b border-charcoal-border/40">
                  <div className="w-9 h-9 rounded-xl bg-sage-soft text-primary flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-label !text-[10px] text-charcoal-subtle block">
                      {isGujarati ? "ફોન અને વોટ્સએપ" : "Direct Phone & WhatsApp"}
                    </span>
                    <a
                      href={`tel:${siteConfig.contact.phone}`}
                      className="text-base font-poppins font-semibold text-charcoal hover:text-primary transition-colors block mt-0.5"
                    >
                      {siteConfig.contact.displayPhone}
                    </a>
                    <span className="text-[11px] text-charcoal-subtle font-light">
                      Mon–Sat: 7:00 AM – 8:00 PM
                    </span>
                  </div>
                </div>

                {/* Center Location */}
                <div className="flex items-start gap-3.5 pb-4 border-b border-charcoal-border/40">
                  <div className="w-9 h-9 rounded-xl bg-sage-soft text-primary flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-label !text-[10px] text-charcoal-subtle block">
                      {isGujarati ? "સેન્ટર સરનામું" : "Center Address (Una)"}
                    </span>
                    <p className="font-semibold text-charcoal text-xs sm:text-sm">
                      Garima Wellness Center
                    </p>
                    <p className="font-light">
                      {siteConfig.contact.address.line1}, {siteConfig.contact.address.landmark}
                    </p>
                    <p className="font-light">
                      {siteConfig.contact.address.city}, Dist. {siteConfig.contact.address.district}, {siteConfig.contact.address.state} - {siteConfig.contact.address.pincode}
                    </p>
                    <a
                      href={siteConfig.contact.googleMapsSearchUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-medium text-primary hover:underline pt-1"
                    >
                      <span>{isGujarati ? "ગૂગલ મેપ્સ પર લોકેશન જુઓ" : "Open in Google Maps"}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

              </div>

              {/* Quick Inquiry Form */}
              <div className="pt-2">
                <span className="text-label !text-[10px] text-charcoal-subtle block mb-3">
                  {isGujarati ? "ઝડપી પૂછપરછ" : "Quick Consultation Request"}
                </span>

                <form onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name *"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-charcoal-border focus:border-primary focus:ring-1 focus:ring-primary outline-none text-xs font-poppins bg-ivory/50 transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <input
                        type="tel"
                        required
                        placeholder="Mobile / WhatsApp *"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-charcoal-border focus:border-primary focus:ring-1 focus:ring-primary outline-none text-xs font-poppins bg-ivory/50 transition-colors"
                      />
                    </div>

                    <div>
                      <select
                        value={formData.goal}
                        onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-charcoal-border focus:border-primary focus:ring-1 focus:ring-primary outline-none text-xs font-poppins bg-ivory/50 transition-colors"
                      >
                        <option value="Weight & Visceral Fat Loss">Weight & Fat Loss</option>
                        <option value="Healthy Weight Gain & Recovery">Healthy Weight Gain</option>
                        <option value="Daily Stamina & Energy">Daily Stamina & Energy</option>
                        <option value="Cellular Nutrition & Skin Clarity">Skin & Cellular Health</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary !py-3 text-xs uppercase tracking-wider justify-center"
                  >
                    <span>Send via WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </button>
                </form>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
