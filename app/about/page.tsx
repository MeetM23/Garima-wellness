import { AboutFounder } from "@/components/sections/AboutFounder";
import { WellnessApproach } from "@/components/sections/WellnessApproach";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata = {
  title: "About Coach Aruna Modashia | Garima Wellness Center",
  description: "Learn about Coach Aruna Modashia, our philosophy, mission, and sustainable wellness approach in Una, Gir Somnath.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <div className="pt-8 pb-4 bg-sage-soft/30 border-b border-charcoal-border/50 text-center">
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-charcoal">
          About Garima Wellness Center
        </h1>
        <p className="text-charcoal-muted text-sm md:text-base mt-2 max-w-xl mx-auto px-4">
          Meet Coach Aruna Modashia and explore our authentic mission for family wellness.
        </p>
      </div>
      <AboutFounder />
      <WellnessApproach />
      <ContactSection />
    </div>
  );
}

