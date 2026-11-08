import { ContactSection } from "@/components/sections/ContactSection";

export const metadata = {
  title: "Contact Coach Aruna | Garima Wellness Center",
  description: "Contact Garima Wellness Center in Una, Gir Somnath or book an online wellness consultation.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      <div className="pt-8 pb-4 bg-sage-soft/30 border-b border-charcoal-border/50 text-center">
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-charcoal">
          Contact & Consultations
        </h1>
        <p className="text-charcoal-muted text-sm md:text-base mt-2 max-w-xl mx-auto px-4">
          Speak with Coach Aruna Modashia directly via phone, WhatsApp, or at our Una center.
        </p>
      </div>
      <ContactSection />
    </div>
  );
}

