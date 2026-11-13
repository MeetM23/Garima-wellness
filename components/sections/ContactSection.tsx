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
import { ShapeCloverArcs } from "@/components/ui/ShapesGallery";

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
    <section id="contact" className="py-20 lg:py-24 bg-ivory relative overflow-hidden">
      {/* Shapes Gallery Background Art — Shape 51 Clover Arcs */}
      <div className="absolute top-8 right-6 text-primary pointer-events-none hidden md:block" aria-hidden="true">
        <ShapeCloverArcs className="w-56 h-56 text-primary" opacity={0.06} />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
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

            <p className="text-subtitle max-w-lg">
              {isGujarati
                ? "સીધો WhatsApp સંદેશ મોકલો અથવા ફોર્મ ભરો. કોચ અરૂણા મોડાશીયા તમારી સ્થિતિ સમજીને યોગ્ય માર્ગદર્શન આપશે."
                : "Send a direct message on WhatsApp or request an assessment below. Coach Aruna will review your metabolic baseline and suggest a sustainable routine."}
            </p>

            {/* Direct Instant WhatsApp Action Button */}
            <div className="pt-2">
              <a
                href={whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-primary hover:bg-primary-dark text-white font-sans font-medium text-[15px] sm:text-[16px] transition-all duration-200 shadow-sm hover:shadow"
              >
                <MessageCircle className="w-5 h-5 text-white" />
                <span>
                  {isGujarati ? "WhatsApp પર સીધી વાતચીત શરૂ કરો" : "Message on WhatsApp Directly"}
                </span>
                <ArrowRight className="w-4 h-4 text-white/80" />
              </a>
              <p className="text-xs text-charcoal-muted mt-2">
                {isGujarati
                  ? "સામાન્ય રીતે ૧-૨ કલાકમાં જવાબ આપવામાં આવે છે."
                  : "Direct line to Coach Aruna Modashia. Replies usually within a few hours."}
              </p>
            </div>

            {/* Structured Contact Data Card */}
            <div className="pt-6 border-t border-charcoal-border/70 space-y-4 max-w-md">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-sage-soft text-primary flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="text-[13px] font-sans font-semibold text-charcoal uppercase tracking-wider">
                    {isGujarati ? "ફોન અને વોટ્સએપ" : "Call & WhatsApp"}
                  </h4>
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="text-[15px] font-sans font-medium text-primary hover:underline block mt-0.5"
                  >
                    {siteConfig.contact.displayPhone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-sage-soft text-primary flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="text-[13px] font-sans font-semibold text-charcoal uppercase tracking-wider">
                    {isGujarati ? "સેન્ટરનું સરનામું" : "Wellness Center Location"}
                  </h4>
                  <p className="text-[14px] font-sans text-charcoal-muted mt-0.5 leading-relaxed">
                    {isGujarati
                      ? siteConfig.contact.address.fullGujarati
                      : `${siteConfig.contact.address.line1}, ${siteConfig.contact.address.landmark}, ${siteConfig.contact.address.city}, ${siteConfig.contact.address.state} - ${siteConfig.contact.address.pincode}`}
                  </p>
                  <a
                    href={siteConfig.contact.googleMapsSearchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[13px] font-sans text-terracotta hover:underline font-medium mt-1"
                  >
                    <span>{isGujarati ? "ગૂગલ મેપ્સ પર જુઓ" : "Open in Google Maps"}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-sage-soft text-primary flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="text-[13px] font-sans font-semibold text-charcoal uppercase tracking-wider">
                    {isGujarati ? "સેન્ટર સમય" : "Consultation Hours"}
                  </h4>
                  <p className="text-[14px] font-sans text-charcoal-muted mt-0.5">
                    {siteConfig.contact.timing}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Assessment Request Form */}
          <div className="lg:col-span-6 bg-white p-7 sm:p-9 rounded-2xl border border-charcoal-border/80 shadow-soft">
            <h3 className="heading-card mb-2">
              {isGujarati ? "ઓનલાઇન કન્સલ્ટેશન ફોર્મ" : "Request Free Health Assessment"}
            </h3>
            <p className="text-[14px] sm:text-[15px] text-charcoal-muted mb-6">
              {isGujarati
                ? "તમારી પ્રાથમિક વિગત મોકલો, જેથી કોચ તમારી જરૂરિયાત અનુસાર વાતચીત કરી શકે."
                : "Fill this quick note and our team will connect with your personalized roadmap via WhatsApp."}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[13px] sm:text-[14px] font-sans font-medium text-charcoal mb-1.5">
                  {isGujarati ? "તમારું પૂરું નામ" : "Full Name"}
                </label>
                <input
                  type="text"
                  required
                  placeholder={isGujarati ? "દા.ત. રમેશભાઈ પટેલ" : "e.g. Ramesh Patel"}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl border border-charcoal-border/80 bg-ivory text-charcoal text-[16px] focus:outline-none focus:border-primary transition-colors font-sans"
                />
              </div>

              <div>
                <label className="block text-[13px] sm:text-[14px] font-sans font-medium text-charcoal mb-1.5">
                  {isGujarati ? "વોટ્સએપ મોબાઈલ નંબર" : "WhatsApp Mobile Number"}
                </label>
                <input
                  type="tel"
                  required
                  placeholder={isGujarati ? "૧૦ અંકનો મોબાઈલ નંબર" : "10-digit mobile number"}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl border border-charcoal-border/80 bg-ivory text-charcoal text-[16px] focus:outline-none focus:border-primary transition-colors font-sans"
                />
              </div>

              <div>
                <label className="block text-[13px] sm:text-[14px] font-sans font-medium text-charcoal mb-1.5">
                  {isGujarati ? "મુખ્ય સ્વાસ્થ્ય લક્ષ્ય" : "Primary Health Goal"}
                </label>
                <select
                  value={formData.goal}
                  onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl border border-charcoal-border/80 bg-ivory text-charcoal text-[16px] focus:outline-none focus:border-primary transition-colors font-sans"
                >
                  <option value="Weight & Visceral Fat Loss">
                    {isGujarati ? "વજન અને પેટની ચરબી ઘટાડવી" : "Weight & Visceral Fat Loss"}
                  </option>
                  <option value="Healthy Muscle & Weight Gain">
                    {isGujarati ? "સ્વસ્થ વજન અને મસલ વધારવું" : "Healthy Weight Gain"}
                  </option>
                  <option value="Skin Wellness & Cellular Health">
                    {isGujarati ? "ત્વચા નિખાર અને એલર્જી રાહત" : "Skin Wellness & Cellular Health"}
                  </option>
                  <option value="Daily Stamina & Energy Balance">
                    {isGujarati ? "દૈનિક ઊર્જા અને સ્ફૂર્તિ વધારવી" : "Daily Stamina & Vitality"}
                  </option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-xl bg-primary hover:bg-primary-dark text-white font-sans font-medium text-[15px] sm:text-[16px] transition-colors shadow-sm flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>{isGujarati ? "કન્સલ્ટેશન વિગત મોકલો" : "Submit Consultation Note"}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>

              <p className="text-xs text-charcoal-muted text-center mt-3">
                {isGujarati
                  ? "તમારી માહિતી સંપૂર્ણપણે સુરક્ષિત રહેશે."
                  : "Your contact details are strictly confidential and used solely for consultation."}
              </p>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
