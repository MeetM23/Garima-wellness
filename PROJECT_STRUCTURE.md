# GARIMA Wellness Center – Architecture & Structural Documentation

A complete, production-quality, responsive web application designed and engineered for **Garima Wellness Center** by Coach Aruna Modashia.

---

## 1. Brand Identity System
- **Brand Name**: GARIMA Wellness Center (ગરિમા વેલનેસ સેન્ટર)
- **Wordmark**: Custom editorial serif typography with proportional letter-spacing (`Playfair Display`).
- **Growth & Balance Emblem**: Minimal concentric balance circle with an upward vitality droplet and botanical curve.
- **Palette**:
  - `Primary`: Deep Forest Green (`#234B3A`) — evokes natural health, renewal, and calm authority.
  - `Secondary / Foliage`: Sage Green (`#A7B9A1`) — balances structure with soft natural tone.
  - `Background`: Warm Ivory (`#F8F7F1`) — soothing editorial canvas avoiding harsh digital whites.
  - `Accent`: Muted Terracotta (`#C68C72`) — warm human touch for energy points & call-to-actions.
  - `Text`: Deep Charcoal (`#252A26`) — high-contrast readability without black fatigue.

---

## 2. Directory Structure & Organization

```
Website/
├── app/                              # Next.js 14 App Router
│   ├── layout.tsx                    # Root layout, fonts, metadata, language provider
│   ├── page.tsx                      # Primary home landing experience
│   ├── globals.css                   # Custom styles, theme tokens, slider UI
│   ├── about/
│   │   └── page.tsx                  # Dedicated Founder & Philosophy route
│   ├── transformations/
│   │   └── page.tsx                  # Dedicated Transformation Showcase route
│   ├── gallery/
│   │   └── page.tsx                  # Filterable Media Gallery route
│   └── contact/
│       └── page.tsx                  # Contact & In-person / Online Consultation route
├── components/
│   ├── brand/
│   │   └── Logo.tsx                  # Responsive SVG wordmark + emblem (light & dark modes)
│   ├── layout/
│   │   ├── Navbar.tsx                # Sticky header, bilingual switcher, mobile drawer
│   │   └── Footer.tsx                # Brand signature, hours, address, disclaimer, links
│   └── sections/
│       ├── Hero.tsx                  # Editorial hero with trust badges & CTAs
│       ├── AboutFounder.tsx          # Coach Aruna Modashia profile & handwritten note OCR modal
│       ├── WellnessApproach.tsx      # 6 core pillars of sustainable health
│       ├── BeforeAfterSlider.tsx     # Interactive drag-to-compare transformation studio
│       ├── TransformationShowcase.tsx# Categorized journeys + lightbox + medical disclaimer
│       ├── Testimonials.tsx          # Grounded, genuine client feedback
│       └── ContactSection.tsx        # Phone (+91 99136 62102), WhatsApp integration, Una address
├── context/
│   └── LanguageContext.tsx           # Bilingual state provider (English ↔ ગુજરાતી)
├── data/
│   ├── siteData.ts                   # Centralized configuration & contact records
│   ├── transformations.ts            # 5 verified client journeys, stats, quotes & categories
│   ├── founderNotes.ts               # Original handwritten diary notes, OCR & translations
│   └── testimonials.ts               # Verified client feedback
├── public/
│   ├── favicon.svg                   # Brand favicon
│   └── images/
│       ├── transformations/          # 5 verified client transformation photographs
│       ├── notes/                    # 2 original handwritten Gujarati diary pages
│       └── brand/                    # Brand assets
├── copy-assets.bat                   # Image asset synchronization script
├── start-dev.bat                     # 1-click double-clickable Dev server launcher
├── start-prod.bat                    # 1-click double-clickable Production server launcher
├── preview.html                      # Zero-dependency, standalone instant browser preview
├── package.json                      # Next.js 14, React 18, Tailwind, Lucide React
├── tailwind.config.ts                # Brand tokens & theme extensions
├── tsconfig.json                     # TypeScript compiler configuration
└── next.config.js                    # Next.js configuration
```

---

## 3. Verified Founder Information & Gujarati OCR Truth

Extracted directly from Coach Aruna Modashia's handwritten diary pages:

1. **Founder Name**: Aruna Modashia (અરૂણા મોડાશીયા)
2. **Title / Role**: Wellness Coach | Health & Lifestyle Guide (વેલનેસ કોચ | આરોગ્ય અને જીવનશૈલી માર્ગદર્શક)
3. **Primary Contact**: `+91 99136 62102`
4. **Physical Location**: Vidhyanagar, Delwada Road, Opposite Rohan Pan, Una - 362560, Dist. Gir Somnath, Gujarat.
5. **Services Provided**:
   - Online Health Coaching (ઓનલાઇન હેલ્થ કોચિંગ)
   - In-Center 1-on-1 Consultations in Una
   - Personalized Nutrition & Habit Architecture
6. **Core Statements**:
   - *"સારું સ્વાસ્થ્ય સુખી જીવનનો પાયો છે."* (Good health is the foundation of a happy life.)
   - *"સ્વાસ્થ્ય એ જ સાચી સંપત્તિ છે."* (Health is true wealth.)
   - *"સ્વસ્થ વ્યક્તિ, સુખી પરિવાર અને તંદુરસ્ત જીવનનું નિર્માણ."* (Building healthy individuals, happy families, and vibrant lives.)

---

## 4. Verified Client Transformation Case Files

1. **Journey 1: 9 kg Bad Fat Loss & 7 Inches Waist Reduction**
   - *Client Voice*: "9 kg ખરાબ ફેટ લોસ કર્યો અને 7 ઈંચ કમર ઓછી થઈ સાથે શરીરમાં નાના મોટા દુ:ખાવા દુર થયા અત્યારે શરીર માં આખો દિવસ જોરદાર એનર્જી રહે છે"
   - *Outcome*: Visceral fat reduced, chronic joint/body aches relieved, steady all-day vitality.
2. **Journey 2: Hospital Recovery to 55 kg Healthy Weight Gain**
   - *Outcome*: Underweight convalescent state (45 kg) rebuilt to a robust, energized 55 kg (+10 kg healthy gain).
   - *Verified Disclaimer*: "વ્યક્તિદીઠ રિઝલ્ટ અલગ અલગ હોય છે" (Results may vary from person to person).
3. **Journey 3: 20 kg Weight Loss Milestone (78 kg → 58 kg)**
   - *Outcome*: 20 kg reduction achieved without starvation diets, retaining lean energy and tone.
4. **Journey 4: 14 kg Weight Reduction (94 kg → 80 kg)**
   - *Outcome*: Abdominal contour improvement, corrected posture, renewed stamina.
5. **Journey 5: Cellular Nutrition & Skin Clarity**
   - *Outcome*: Severe acne and hyperpigmentation calmed through internal hydration and micro-nutrient balance.

---

## 5. How to Run

### Option A: Next.js Live Development Server
Double-click `start-dev.bat` or run:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Option B: Instant Standalone Preview
Double-click `preview.html` to inspect the full design, interactive slider, filterable gallery, and bilingual toggle directly in Chrome, Edge, or Safari without installing anything.

