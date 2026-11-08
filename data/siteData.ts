export interface NavLink {
  name: string;
  gujaratiName: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  gujaratiName: string;
  tagline: string;
  gujaratiTagline: string;
  founder: {
    name: string;
    gujaratiName: string;
    title: string;
    gujaratiTitle: string;
    experienceBadge: string;
    philosophy: string;
    gujaratiPhilosophy: string;
    mission: string;
    gujaratiMission: string;
    goal: string;
    gujaratiGoal: string;
  };
  contact: {
    phone: string;
    displayPhone: string;
    whatsappNumber: string;
    whatsappMessage: string;
    email: string;
    address: {
      line1: string;
      landmark: string;
      city: string;
      district: string;
      state: string;
      pincode: string;
      fullGujarati: string;
    };
    timing: string;
    googleMapsSearchUrl: string;
  };
  navLinks: NavLink[];
}

export const siteConfig: SiteConfig = {
  name: "Garima Wellness Center",
  gujaratiName: "ગરિમા વેલનેસ સેન્ટર",
  tagline: "Your Journey to a Healthier, Happier You.",
  gujaratiTagline: "તમારા સ્વસ્થ અને સુખી જીવનની નવી શરૂઆત.",
  founder: {
    name: "Aruna Modashia",
    gujaratiName: "અરૂણા મોડાશીયા",
    title: "Certified Wellness Coach & Lifestyle Mentor",
    gujaratiTitle: "વેલનેસ કોચ | આરોગ્ય અને જીવનશૈલી માર્ગદર્શક",
    experienceBadge: "Dedicated Wellness Guidance",
    philosophy: "Good health is the foundation of a happy life. Health is the true wealth.",
    gujaratiPhilosophy: "સારું સ્વાસ્થ્ય સુખી જીવનનો પાયો છે. સ્વાસ્થ્ય એ જ સાચી સંપત્તિ છે.",
    mission: "Healthy individual, happy family, and the creation of a vibrant life.",
    gujaratiMission: "સ્વસ્થ વ્યક્તિ, સુખી પરિવાર અને તંદુરસ્ત જીવનનું નિર્માણ.",
    goal: "To ensure genuine health awareness reaches every individual and guides every family toward a healthy life.",
    gujaratiGoal: "દરેક વ્યક્તિ સુધી સ્વાસ્થ્યની સાચી સમજ પહોંચે અને દરેક પરિવાર સ્વસ્થ જીવન તરફ આગળ વધે."
  },
  contact: {
    phone: "+919913662102",
    displayPhone: "+91 99136 62102",
    whatsappNumber: "919913662102",
    whatsappMessage: "Hello Coach Aruna, I would like to begin my personalized wellness and health transformation journey with Garima Wellness Center.",
    email: "contact@garimawellness.com",
    address: {
      line1: "Vidhyanagar, Delwada Road",
      landmark: "Opposite Rohan Pan",
      city: "Una",
      district: "Gir Somnath",
      state: "Gujarat",
      pincode: "362560",
      fullGujarati: "વિદ્યાનગર દેલવાડા રોડ, રોહન પાનની સામે, ઉના ડિસ્ટ્રીક ગીર સોમનાથ, પીનકોડ - 362560"
    },
    timing: "Monday – Saturday: 7:00 AM – 8:00 PM (Online & In-Center)",
    googleMapsSearchUrl: "https://www.google.com/maps/search/?api=1&query=Vidhyanagar+Delwada+Road+Una+Gir+Somnath+362560"
  },
  navLinks: [
    { name: "Home", gujaratiName: "મુખ્ય પૃષ્ઠ", href: "#hero" },
    { name: "Our Approach", gujaratiName: "અમારી પદ્ધતિ", href: "#approach" },
    { name: "Results", gujaratiName: "પરિણામો", href: "#archive" },
    { name: "Testimonials", gujaratiName: "પ્રતિસાદ", href: "#testimonials" },
    { name: "Contact", gujaratiName: "સંપર્ક", href: "#contact" }
  ]
};

