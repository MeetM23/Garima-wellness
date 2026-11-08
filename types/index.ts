export interface TransformationItem {
  id: string;
  title: string;
  gujaratiTitle: string;
  category: "weight-loss" | "weight-management" | "lifestyle" | "vitality";
  categoryLabel: string;
  gujaratiCategoryLabel: string;
  image: string;
  featured: boolean;
  verifiedDuration?: string;
  stats: {
    label: string;
    value: string;
  }[];
  verifiedQuoteGujarati?: string;
  verifiedQuoteEnglish?: string;
  description: string;
  gujaratiDescription: string;
  approvedForPublicDisplay: boolean;
  disclaimer: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  gujaratiClientName: string;
  location: string;
  transformationType: string;
  gujaratiTransformationType: string;
  quote: string;
  gujaratiQuote: string;
  verifiedResult: string;
  verifiedFromSuppliedNotes: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  gujaratiQuestion: string;
  answer: string;
  gujaratiAnswer: string;
}

export interface NavLink {
  name: string;
  gujaratiName: string;
  href: string;
}

