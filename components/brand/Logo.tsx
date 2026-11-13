"use client";

import React from "react";
import Image from "next/image";

interface LogoProps {
  variant?: "light" | "dark" | "default";
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = "default",
  size = "md",
  showText = true,
}) => {
  const isDark = variant === "dark";
  const primaryTextColor = isDark ? "text-ivory" : "text-primary";
  const subtextColor = isDark ? "text-sage-light" : "text-charcoal-muted";

  const iconSizes = {
    sm: { width: 36, height: 38 },
    md: { width: 42, height: 44 },
    lg: { width: 50, height: 52 },
  };

  const textSizes = {
    sm: "text-lg tracking-[0.14em]",
    md: "text-xl sm:text-2xl tracking-[0.16em]",
    lg: "text-2xl sm:text-3xl tracking-[0.18em]",
  };

  return (
    <div className="inline-flex items-center gap-2.5 sm:gap-3 select-none group focus:outline-none">
      {/* Official Supplied Brand Logo */}
      <div className="relative shrink-0 transition-transform duration-200 group-hover:scale-105">
        <Image
          src="/images/brand/garima-logo-transparent.png"
          alt="Garima Wellness Center Official Logo"
          width={iconSizes[size].width}
          height={iconSizes[size].height}
          className="object-contain"
          priority
        />
      </div>

      {/* Typography Wordmark in Inter */}
      {showText && (
        <div className="flex flex-col">
          <span
            className={`font-sans font-bold uppercase leading-none ${textSizes[size]} ${primaryTextColor} transition-colors`}
          >
            GARIMA
          </span>
          <span
            className={`text-[8.5px] sm:text-[9.5px] tracking-[0.22em] uppercase font-sans font-semibold mt-1 ${subtextColor}`}
          >
            WELLNESS CENTER
          </span>
        </div>
      )}
    </div>
  );
};
