// Shared utility helpers for Garima Wellness Center

/**
 * Joins class names, filtering out falsy values.
 * Lightweight alternative to clsx for simple use cases.
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * Formats a phone number for display.
 * e.g. "919913662102" → "+91 99136 62102"
 */
export function formatPhone(raw: string): string {
  if (raw.startsWith("91") && raw.length === 12) {
    const local = raw.slice(2);
    return `+91 ${local.slice(0, 5)} ${local.slice(5)}`;
  }
  return raw;
}

/**
 * Builds a WhatsApp deep-link URL with an optional prefilled message.
 */
export function buildWhatsAppUrl(phone: string, message?: string): string {
  const base = `https://wa.me/${phone}`;
  if (message) {
    return `${base}?text=${encodeURIComponent(message)}`;
  }
  return base;
}

/**
 * Smooth-scrolls to a section by ID, offset by the fixed navbar height.
 */
export function scrollToSection(id: string, offset = 80): void {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: "smooth" });
}

