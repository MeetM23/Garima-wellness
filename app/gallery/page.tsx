import { TransformationShowcase } from "@/components/sections/TransformationShowcase";

export const metadata = {
  title: "Gallery | Garima Wellness Center",
  description: "Explore the categorized gallery of verified health and wellness journeys.",
};

export default function GalleryPage() {
  return (
    <div className="flex flex-col">
      <div className="pt-8 pb-4 bg-sage-soft/30 border-b border-charcoal-border/50 text-center">
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-charcoal">
          Media & Transformation Gallery
        </h1>
        <p className="text-charcoal-muted text-sm md:text-base mt-2 max-w-xl mx-auto px-4">
          Visual documentation of client transformations and wellness lifestyle milestones.
        </p>
      </div>
      <TransformationShowcase />
    </div>
  );
}

