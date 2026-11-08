import { TransformationShowcase } from "@/components/sections/TransformationShowcase";
import { Testimonials } from "@/components/sections/Testimonials";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata = {
  title: "Transformations | Garima Wellness Center",
  description: "Real client transformations in weight loss, healthy gain, visceral fat reduction, and vibrant wellness.",
};

export default function TransformationsPage() {
  return (
    <div className="flex flex-col">
      <div className="pt-8 pb-4 bg-sage-soft/30 border-b border-charcoal-border/50 text-center">
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-charcoal">
          Transformation Journeys
        </h1>
        <p className="text-charcoal-muted text-sm md:text-base mt-2 max-w-xl mx-auto px-4">
          Verified before-and-after cases and client results under Coach Aruna Modashia.
        </p>
      </div>
      <TransformationShowcase />
      <Testimonials />
      <ContactSection />
    </div>
  );
}

