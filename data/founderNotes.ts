export interface FounderNoteItem {
  id: string;
  sourceType: "handwritten_diary" | "typed_statement";
  title: string;
  gujaratiTitle: string;
  originalGujarati: string;
  englishTranslation: string;
  imagePath: string;
  verifiedFields: {
    coachName: string;
    designation: string;
    services: string[];
    coreValues: string[];
    contactPhone: string;
    centerAddress: string;
  };
}

export const founderNotes: FounderNoteItem[] = [
  {
    id: "diary-page-1-mission",
    sourceType: "handwritten_diary",
    title: "Founder Mission & Coaching Philosophy",
    gujaratiTitle: "ઓનલાઇન હેલ્થ કોચિંગ અને જીવનશૈલી માર્ગદર્શન",
    originalGujarati: `ઓનલાઇન હેલ્થ કોચિંગ
ગરિમા વેલનેસ સેન્ટર
મારા વિશે - અરૂણા મોડાશીયા
વેલનેસ કોચ | આરોગ્ય અને જીવનશૈલી માર્ગદર્શક

હું અરૂણા મોડાશીયા એક વેલનેસ કોચ તરીકે લોકોને સ્વસ્થ અને તંદુરસ્ત જીવનશૈલી અપનાવવા માટે માર્ગદર્શન અને પ્રેરણા આપવાનું કાર્ય કરું છું.

- મારો મુખ્ય હેતુ લોકોને યોગ્ય પોષણ અને સ્વસ્થ આહારની આદતો અને જીવનશૈલીમાં સકારાત્મક પરિવર્તન દ્વારા તેમના ફિટનેસના લક્ષ્યો પ્રાપ્ત કરવામાં મદદ કરવાનો છે.
- સારું સ્વાસ્થ્ય સુખી જીવનનો પાયો છે.
- મારું મિશન - સ્વસ્થ વ્યક્તિ સુખી પરિવાર અને તંદુરસ્ત જીવનનું નિર્માણ.`,
    englishTranslation: `Online Health Coaching
Garima Wellness Center
About Me - Aruna Modashia
Wellness Coach | Health & Lifestyle Guide

I, Aruna Modashia, work as a wellness coach guiding and inspiring individuals to embrace a healthy and vibrant lifestyle.

- My primary objective is to help people achieve their personal fitness and wellness goals through proper balanced nutrition, wholesome dietary habits, and positive sustainable lifestyle transformations.
- Good health is the cornerstone and foundation of a happy life.
- My Mission: To foster healthy individuals, joyful families, and the creation of vibrant lives.`,
    imagePath: "/images/notes/founder-handwritten-mission.jpg",
    verifiedFields: {
      coachName: "Aruna Modashia (અરૂણા મોડાશીયા)",
      designation: "Wellness Coach & Lifestyle Guide",
      services: [
        "Online Health Coaching (ઓનલાઇન હેલ્થ કોચિંગ)",
        "Nutritional Guidance & Habit Building",
        "Personalized Weight & Fitness Guidance",
        "Sustainable Family Health Literacy"
      ],
      coreValues: [
        "Health is true wealth (સ્વાસ્થ્ય એ જ સાચી સંપત્તિ છે)",
        "Good health is the foundation of a happy life (સારું સ્વાસ્થ્ય સુખી જીવનનો પાયો છે)",
        "Sustainable habits over crash diets"
      ],
      contactPhone: "+91 99136 62102",
      centerAddress: "Vidhyanagar Delwada Road, Opposite Rohan Pan, Una, Dist. Gir Somnath, 362560"
    }
  },
  {
    id: "diary-page-2-center-details",
    sourceType: "handwritten_diary",
    title: "Center Registration & Verification Record",
    gujaratiTitle: "કેન્દ્ર નોંધણી અને સંપર્ક વિગત",
    originalGujarati: `ગરિમા વેલનેસ સેન્ટર
9913662102
વેલનેસ કોચ

- એડ્રેસ - નામ - મોડાશીયા અરૂણા
વિદ્યાનગર દેલવાડા રોડ
- રોહન પાનની સામે
શાંતિસૂત્ર - 
ઉના ડિસ્ટ્રીક ગીર સોમનાથ
પીનકોડ - 362560`,
    englishTranslation: `Garima Wellness Center
Contact: +91 99136 62102
Wellness Coach

- Address & Name: Aruna Modashia
Vidhyanagar, Delwada Road
- Opposite Rohan Pan
Una, District Gir Somnath
Pincode - 362560`,
    imagePath: "/images/notes/founder-handwritten-contact.jpg",
    verifiedFields: {
      coachName: "Aruna Modashia (મોડાશીયા અરૂણા)",
      designation: "Wellness Coach",
      services: ["In-person Consultations", "Direct Phone / WhatsApp Mentorship"],
      coreValues: ["Transparency", "Direct Accountability", "Local Community Wellness"],
      contactPhone: "+91 99136 62102",
      centerAddress: "Vidhyanagar, Delwada Road, Opp. Rohan Pan, Una, Gir Somnath - 362560"
    }
  }
];

