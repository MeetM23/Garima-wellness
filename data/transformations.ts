export interface TransformationItem {
  id: string;
  title: string;
  gujaratiTitle: string;
  category: "weight-loss" | "weight-management" | "lifestyle" | "vitality";
  categoryLabel: string;
  gujaratiCategoryLabel: string;
  image: string;
  beforeImage: string;
  afterImage: string;
  startingMeasurement?: {
    labelEn: string;
    labelGu: string;
    valueEn: string;
    valueGu: string;
  };
  achievedMeasurement?: {
    labelEn: string;
    labelGu: string;
    valueEn: string;
    valueGu: string;
  };
  highlightResult: {
    en: string;
    gu: string;
  };
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

export const transformations: TransformationItem[] = [
  {
    id: "journey-01-fatloss-9kg",
    title: "9 kg Fat Loss & 7 Inches Waist Reduction",
    gujaratiTitle: "૯ કિલો ખરાબ ફેટ લોસ અને ૭ ઇંચ કમર ઓછી",
    category: "weight-loss",
    categoryLabel: "Weight Loss & Energy",
    gujaratiCategoryLabel: "વજન ઘટાડો અને ઊર્જા",
    image: "/images/transformations/transformation-1-fatloss-9kg-clean.jpg",
    beforeImage: "/images/transformations/split/transformation-1-fatloss-9kg-clean-before.jpg",
    afterImage: "/images/transformations/split/transformation-1-fatloss-9kg-clean-after.jpg",
    startingMeasurement: {
      labelEn: "Starting Condition",
      labelGu: "શરૂઆતની સ્થિતિ",
      valueEn: "Excess Visceral Fat",
      valueGu: "વધારાની ચરબી"
    },
    achievedMeasurement: {
      labelEn: "Achieved Result",
      labelGu: "મેળવેલ પરિણામ",
      valueEn: "-9 kg & -7 Inches",
      valueGu: "-૯ કિલો અને -૭ ઇંચ"
    },
    highlightResult: {
      en: "-9 kg & 7\" Lost",
      gu: "-૯ કિલો અને ૭ ઇંચ"
    },
    featured: true,
    verifiedDuration: "Guided Personal Program",
    stats: [
      { label: "Bad Fat Lost", value: "9 kg" },
      { label: "Waist Reduction", value: "7 Inches" },
      { label: "Daily Energy", value: "All-Day Active" },
      { label: "Body Aches", value: "Completely Relieved" }
    ],
    verifiedQuoteGujarati: "9 kg ખરાબ ફેટ લોસ કર્યો અને 7 ઈંચ કમર ઓછી થઈ સાથે શરીરમાં નાના મોટા દુ:ખાવા દુર થયા અત્યારે શરીર માં આખો દિવસ જોરદાર એનર્જી રહે છે તમારે આવો રિઝલ્ટ જોઈએ છે? મારો સંપર્ક કરો",
    verifiedQuoteEnglish: "Lost 9 kg of bad fat and 7 inches off the waist. Minor and chronic aches were relieved, and now the body sustains vibrant energy throughout the whole day.",
    description: "A comprehensive lifestyle and fat-loss journey focused on losing visceral fat rather than just water weight. The client experienced enhanced vitality, reduced waist circumference, and relief from persistent joint fatigue.",
    gujaratiDescription: "શરીરના હાનિકારક ફેટને દૂર કરી ૭ ઈંચ કમર ઘટાડવામાં આવી. દિવસભર તાજગી અને સ્ફૂર્તિ સાથે શરીરના નાના-મોટા દુખાવા દૂર થયા.",
    approvedForPublicDisplay: true,
    disclaimer: "Results may vary from person to person based on consistency and individual physiology.",
    beforeLabel: "Before Program",
    afterLabel: "After Garima Guidance"
  },
  {
    id: "journey-03-weightloss-20kg",
    title: "20 kg Milestone: 78 kg to 58 kg Transformation",
    gujaratiTitle: "૭૮ કિલો થી ૫૮ કિલો – ૨૦ કિલો વજન ઘટાડાની સફર",
    category: "weight-loss",
    categoryLabel: "Weight Loss Journeys",
    gujaratiCategoryLabel: "વજન ઘટાડાની સફર",
    image: "/images/transformations/transformation-3-weightloss-20kg.jpg",
    beforeImage: "/images/transformations/split/transformation-3-weightloss-20kg-before.jpg",
    afterImage: "/images/transformations/split/transformation-3-weightloss-20kg-after.jpg",
    startingMeasurement: {
      labelEn: "Starting Weight",
      labelGu: "શરૂઆતનું વજન",
      valueEn: "78 kg",
      valueGu: "૭૮ કિલો"
    },
    achievedMeasurement: {
      labelEn: "Achieved Weight",
      labelGu: "મેળવેલ વજન",
      valueEn: "58 kg",
      valueGu: "૫૮ કિલો"
    },
    highlightResult: {
      en: "-20 kg Milestone",
      gu: "-૨૦ કિલો સફળતા"
    },
    featured: true,
    verifiedDuration: "Structured Nutrition Journey",
    stats: [
      { label: "Starting Weight", value: "78 kg" },
      { label: "Achieved Weight", value: "58 kg" },
      { label: "Total Reduction", value: "-20 kg" },
      { label: "Lifestyle Change", value: "Sustainable Routine" }
    ],
    verifiedQuoteEnglish: "Transforming 20 kg without restrictive starvation, building strength, lightness, and lasting daily confidence.",
    verifiedQuoteGujarati: "કોઈ કડક ભૂખમરા વગર યોગ્ય પોષણ સાથે ૨૦ કિલો વજન ઘટાડીને નવું આત્મવિશ્વાસભર્યું જીવન મેળવ્યું.",
    description: "An inspiring feminine transformation journey dropping from 78 kg down to a healthy 58 kg. Achieved with clean dietary rhythm, portion education, and coach accountability without skipping family meals.",
    gujaratiDescription: "૭૮ કિલોથી ૫૮ કિલો સુધીનું પરિવર્તન. યોગ્ય ખાનપાનની આદતો અને નિયમિત કોચિંગ દ્વારા ૨૦ કિલો વજન ઘટાડ્યું.",
    approvedForPublicDisplay: true,
    disclaimer: "It may vary from person to person.",
    beforeLabel: "Before: 78 kg",
    afterLabel: "After: 58 kg"
  },
  {
    id: "journey-04-weightloss-14kg",
    title: "14 kg Weight Loss: 94 kg to 80 kg",
    gujaratiTitle: "૯૪ કિલો થી ૮૦ કિલો – ૧૪ કિલો ફિટનેસ સુધારો",
    category: "weight-loss",
    categoryLabel: "Weight Loss Journeys",
    gujaratiCategoryLabel: "વજન ઘટાડાની સફર",
    image: "/images/transformations/transformation-4-weightloss-14kg.jpg",
    beforeImage: "/images/transformations/split/transformation-4-weightloss-14kg-before.jpg",
    afterImage: "/images/transformations/split/transformation-4-weightloss-14kg-after.jpg",
    startingMeasurement: {
      labelEn: "Starting Weight",
      labelGu: "શરૂઆતનું વજન",
      valueEn: "94 kg",
      valueGu: "૯૪ કિલો"
    },
    achievedMeasurement: {
      labelEn: "Achieved Weight",
      labelGu: "મેળવેલ વજન",
      valueEn: "80 kg",
      valueGu: "૮૦ કિલો"
    },
    highlightResult: {
      en: "-14 kg Dropped",
      gu: "-૧૪ કિલો ઘટાડો"
    },
    featured: true,
    verifiedDuration: "Personalized Coaching",
    stats: [
      { label: "Starting Weight", value: "94 kg" },
      { label: "Achieved Weight", value: "80 kg" },
      { label: "Weight Dropped", value: "-14 kg" },
      { label: "Posture & Fit", value: "Significantly Improved" }
    ],
    verifiedQuoteEnglish: "Reduced abdominal bulk, shifted posture, and regained youthful physical stamina through disciplined daily guidance.",
    verifiedQuoteGujarati: "પેટની વધારાની ચરબી દૂર થઈ, શારીરિક ઊર્જા વધી અને ૧૪ કિલો વજન ઘટીને શરીર હળવું અને ફિટ બન્યું.",
    description: "Targeted posture and abdominal contour improvement. By swapping unhealthy snacking habits with structured nutrient timing, the client dropped from 94 kg to a fit 80 kg.",
    gujaratiDescription: "૯૪ કિલો થી ૮૦ કિલોનું પ્રશંસનીય પરિવર્તન. શરીરના પોશ્ચર અને સ્ફૂર્તિમાં નોંધપાત્ર સુધારો થયો.",
    approvedForPublicDisplay: true,
    disclaimer: "Individual outcomes depend on adherence, hydration, and nutritional consistency.",
    beforeLabel: "Before: 94 kg",
    afterLabel: "After: 80 kg"
  },
  {
    id: "journey-02-recovery-gain",
    title: "Recovery to Health: 45 kg to 55 kg Weight Gain",
    gujaratiTitle: "હોસ્પિટલ રિકવરી થી ૫૫ કિલો – સ્વસ્થ વજન વધારો",
    category: "weight-management",
    categoryLabel: "Recovery & Healthy Gain",
    gujaratiCategoryLabel: "રિકવરી અને વજન વધારો",
    image: "/images/transformations/transformation-2-recovery-gain.jpg",
    beforeImage: "/images/transformations/split/transformation-2-recovery-gain-before.jpg",
    afterImage: "/images/transformations/split/transformation-2-recovery-gain-after.jpg",
    startingMeasurement: {
      labelEn: "Convalescent Weight",
      labelGu: "બીમારી બાદ વજન",
      valueEn: "45 kg",
      valueGu: "૪૫ કિલો"
    },
    achievedMeasurement: {
      labelEn: "Healthy Rebuilt Weight",
      labelGu: "સ્વસ્થ વજન",
      valueEn: "55 kg",
      valueGu: "૫૫ કિલો"
    },
    highlightResult: {
      en: "+10 kg Healthy Gain",
      gu: "+૧૦ કિલો સ્વસ્થ વધારો"
    },
    featured: true,
    verifiedDuration: "Recovery & Rebuilding",
    stats: [
      { label: "Starting (Recovery)", value: "45 kg" },
      { label: "Healthy Weight", value: "55 kg" },
      { label: "Healthy Gain", value: "+10 kg" },
      { label: "Vitality Stage", value: "Full Recovery" }
    ],
    verifiedQuoteGujarati: "વ્યક્તિદીઠ રિઝલ્ટ અલગ અલગ હોય છે. નબળાઈમાંથી બહાર આવીને ૪૫ કિલો થી ૫૫ કિલો તંદુરસ્ત વજન પ્રાપ્ત કર્યું.",
    verifiedQuoteEnglish: "Rebuilding strength and lean healthy weight after hospital convalescence, moving from 45 kg to a robust 55 kg.",
    description: "Wellness is not only about losing weight; it is equally about rebuilding undernourished bodies. This client progressed from post-illness hospital bed weakness (45 kg) to a strong, energized 55 kg.",
    gujaratiDescription: "સ્વાસ્થ્ય માત્ર વજન ઘટાડવા પૂરતું નથી. નબળાઈમાંથી સ્વસ્થ બનીને ૪૫ કિલોથી ૫૫ કિલો સુધી શરીરને પુનર્જીવિત કરવાની પ્રેરક સફર.",
    approvedForPublicDisplay: true,
    disclaimer: "It may vary from person to person. વ્યક્તિદીઠ રિઝલ્ટ અલગ અલગ હોય છે.",
    beforeLabel: "Before: 45 kg (Underweight)",
    afterLabel: "After: 55 kg (Healthy & Active)"
  },
  {
    id: "journey-05-skin-wellness",
    title: "Internal Nutrition for Clear & Radiant Skin",
    gujaratiTitle: "આંતરિક પોષણ અને ત્વચાનું સ્વસ્થ પરિવર્તન",
    category: "lifestyle",
    categoryLabel: "Skin & Cellular Wellness",
    gujaratiCategoryLabel: "ત્વચા અને લાઈફસ્ટાઈલ",
    image: "/images/transformations/transformation-5-skin-wellness-clean.jpg",
    beforeImage: "/images/transformations/split/transformation-5-skin-wellness-clean-before.jpg",
    afterImage: "/images/transformations/split/transformation-5-skin-wellness-clean-after.jpg",
    startingMeasurement: {
      labelEn: "Skin Barrier State",
      labelGu: "ત્વચાની સ્થિતિ",
      valueEn: "Acne & Inflammation",
      valueGu: "ખીલ અને સોજો"
    },
    achievedMeasurement: {
      labelEn: "Current Complexion",
      labelGu: "હાલનું તેજ",
      valueEn: "Clear & Refined",
      valueGu: "સ્વચ્છ અને ચમકદાર"
    },
    highlightResult: {
      en: "Acne Relieved & Clear",
      gu: "ખીલમાં સંપૂર્ણ રાહત"
    },
    featured: false,
    verifiedDuration: "Cellular Nutrition Plan",
    stats: [
      { label: "Skin Texture", value: "Calmed & Refined" },
      { label: "Acne Inflammation", value: "Noticeably Reduced" },
      { label: "Hydration Balance", value: "Restored" },
      { label: "Method", value: "Diet & Cellular Nutrients" }
    ],
    verifiedQuoteEnglish: "Real radiance comes from within. Clean nutrition, balanced hydration, and antioxidant support cleared long-term skin distress.",
    verifiedQuoteGujarati: "યોગ્ય આહાર, પોષક તત્વો અને પૂરતા પાણીની આદતોથી ચહેરાની ત્વચા સ્વચ્છ, તેજસ્વી અને ચમકદાર બની.",
    description: "Demonstrating how internal wellness directly influences skin health. Persistent breakout blemishes and skin texture improved dramatically after correcting nutrient deficiencies and daily hydration.",
    gujaratiDescription: "શરીરના આંતરિક પોષણ અને જીવનશૈલીમાં ફેરફાર કરીને ત્વચાની સમસ્યાઓ દૂર થઈ અને કુદરતી તેજ પ્રાપ્ત થયો.",
    approvedForPublicDisplay: true,
    disclaimer: "Dietary adjustments support overall bodily health and may reflect on skin clarity differently for each person.",
    beforeLabel: "Before Cleanse",
    afterLabel: "After Cellular Care"
  }
];

export const galleryCategories = [
  { id: "all", label: "All", gujaratiLabel: "બધા" },
  { id: "weight-loss", label: "Weight Loss", gujaratiLabel: "વજન ઘટાડો" },
  { id: "weight-management", label: "Healthy Gain", gujaratiLabel: "સ્વસ્થ વજન વધારો" },
  { id: "lifestyle", label: "Skin & Vitality", gujaratiLabel: "ત્વચા & સ્ફૂર્તિ" }
];
