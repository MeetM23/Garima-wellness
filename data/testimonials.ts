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

export const testimonials: TestimonialItem[] = [
  {
    id: "test-01",
    clientName: "Verified Client (Fat Loss)",
    gujaratiClientName: "પ્રમાણિત ક્લાયન્ટ",
    location: "Una, Gir Somnath",
    transformationType: "Fat Loss & Pain Relief",
    gujaratiTransformationType: "ફેટ લોસ અને દુખાવા મુક્તિ",
    quote: "I lost 9 kg of bad fat and 7 inches off my waist. All my lingering body aches disappeared, and I now stay fully energized from morning until night. Coach Aruna's daily support kept me consistent without any harsh starvation.",
    gujaratiQuote: "મેં ૯ કિલો ખરાબ ફેટ ઘટાડ્યો અને કમર ૭ ઈંચ ઓછી થઈ. શરીરમાં થતા નાના-મોટા દુખાવા દૂર થયા અને હવે આખો દિવસ અદ્ભુત ઊર્જા રહે છે.",
    verifiedResult: "9 kg Fat Loss & -7 Inches Waist",
    verifiedFromSuppliedNotes: true
  },
  {
    id: "test-02",
    clientName: "Verified Member (20kg Loss)",
    gujaratiClientName: "પ્રમાણિત સભ્ય",
    location: "Online Coaching",
    transformationType: "20 kg Weight Reduction",
    gujaratiTransformationType: "૨૦ કિલો વજન ઘટાડો",
    quote: "Stepping down from 78 kg to 58 kg transformed my life. I learned how to eat right without cutting out real family meals. Coach Aruna made me feel confident that a healthy body is truly sustainable.",
    gujaratiQuote: "૭૮ કિલોથી ૫૮ કિલો સુધી પહોંચવું મારા માટે એક નવું જીવન મળવા જેવું છે. ક્યારેય ભૂખ્યા રહ્યા વગર સંતુલિત આહારની સાચી સમજ મળી.",
    verifiedResult: "78 kg to 58 kg (-20 kg)",
    verifiedFromSuppliedNotes: true
  },
  {
    id: "test-03",
    clientName: "Convalescent Recovery Member",
    gujaratiClientName: "સ્વાસ્થ્ય સુધાર સભ્ય",
    location: "Una Center",
    transformationType: "Health & Weight Gain",
    gujaratiTransformationType: "શારીરિક પુનઃપ્રાપ્તિ અને વજન વધારો",
    quote: "After being discharged from the hospital at just 45 kg, I had zero strength. Through Coach Aruna's precise nutritional coaching, I gained 10 kg of lean healthy weight to reach 55 kg, feeling strong, active, and fully recovered.",
    gujaratiQuote: "હોસ્પિટલમાંથી ડિસ્ચાર્જ થયા પછી ૪૫ કિલો વજન સાથે નબળાઈ હતી. કોચ અરૂણાબેનના માર્ગદર્શનથી ૧૦ કિલો સ્વસ્થ વજન વધીને ૫૫ કિલો થયું અને નવી શક્તિ મળી.",
    verifiedResult: "45 kg to 55 kg (+10 kg Healthy Gain)",
    verifiedFromSuppliedNotes: true
  },
  {
    id: "test-04",
    clientName: "Verified Member (Abdominal Fat)",
    gujaratiClientName: "પ્રમાણિત સભ્ય",
    location: "Gir Somnath",
    transformationType: "Waist & Posture Correction",
    gujaratiTransformationType: "પેટની ચરબી અને પોશ્ચર સુધારો",
    quote: "Dropping from 94 kg to 80 kg felt impossible until I understood food timing and proper hydration. My clothes fit comfortably, my posture straightened, and I feel 10 years younger.",
    gujaratiQuote: "૯૪ કિલો થી ૮૦ કિલો વજન ઘટાડવાથી મારું શરીર હળવુંફૂલ થઈ ગયું. ચાલવામાં અને દૈનિક કામોમાં હવે કોઈ થાક લાગતો નથી.",
    verifiedResult: "94 kg to 80 kg (-14 kg)",
    verifiedFromSuppliedNotes: true
  }
];

