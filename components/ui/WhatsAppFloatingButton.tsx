"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/siteData";

export const WhatsAppFloatingButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    "Hello, I would like to know more about your wellness programs."
  )}`;

  return (
    <aside
      aria-label="Floating WhatsApp support contact"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center gap-2 pointer-events-auto"
    >
      {/* Subtle Tooltip on Hover */}
      <div
        className={`hidden sm:flex items-center px-3 py-1.5 rounded-full bg-charcoal text-ivory text-xs font-poppins font-medium tracking-wide shadow-md transition-all duration-200 pointer-events-none select-none ${
          showTooltip
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-2"
        }`}
      >
        <span>Chat with us</span>
        <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] ml-2 animate-ping" />
      </div>

      {/* Circular WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onFocus={() => setShowTooltip(true)}
        onBlur={() => setShowTooltip(false)}
        className="relative group w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-ivory"
      >
        <svg
          viewBox="0 0 32 32"
          className="w-7 h-7 fill-current drop-shadow-xs"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16 2C8.268 2 2 8.268 2 16c0 2.668.748 5.163 2.051 7.29L2 30l6.903-2.007A13.916 13.916 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.56a11.51 11.51 0 0 1-5.875-1.602l-.422-.25-4.364 1.27 1.272-4.254-.275-.438A11.536 11.536 0 0 1 4.44 16c0-6.374 5.186-11.56 11.56-11.56 6.374 0 11.56 5.186 11.56 11.56 0 6.374-5.186 11.56-11.56 11.56zm6.336-8.663c-.347-.174-2.053-1.013-2.372-1.129-.319-.116-.551-.174-.783.174-.232.348-.899 1.129-1.101 1.361-.203.232-.406.261-.754.087-.348-.174-1.469-.541-2.798-1.727-1.034-.922-1.732-2.062-1.935-2.41-.203-.348-.022-.536.152-.709.157-.156.348-.406.522-.609.174-.203.232-.348.348-.58.116-.232.058-.435-.029-.609-.087-.174-.783-1.884-1.072-2.58-.282-.676-.569-.584-.783-.595l-.667-.012c-.232 0-.609.087-.928.435-.319.348-1.218 1.189-1.218 2.899 0 1.71 1.246 3.363 1.42 3.595.174.232 2.453 3.746 5.942 5.253.83.359 1.478.573 1.984.734.834.265 1.593.227 2.193.138.669-.1 2.053-.839 2.343-1.649.29-.812.29-1.508.203-1.65-.087-.142-.319-.232-.667-.406z" />
        </svg>
      </a>
    </aside>
  );
};
