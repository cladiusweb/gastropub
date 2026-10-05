import React from "react";

interface LogoProps {
  className?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  showText?: boolean;
  textClassName?: string;
}

export default function Logo({
  className = "",
  size = "md",
  showText = true,
  textClassName = "",
}: LogoProps) {
  const pixelSizes = {
    xs: { icon: 28, text: "text-sm", sub: "text-[7px]" },
    sm: { icon: 34, text: "text-base", sub: "text-[8px]" },
    md: { icon: 42, text: "text-lg sm:text-xl", sub: "text-[9px]" },
    lg: { icon: 58, text: "text-xl sm:text-2xl", sub: "text-[11px]" },
    xl: { icon: 80, text: "text-2xl sm:text-3xl", sub: "text-xs" },
  };

  const { icon, text, sub } = pixelSizes[size] || pixelSizes.md;

  return (
    <div className={`inline-flex items-center gap-2.5 sm:gap-3.5 group select-none max-w-full ${className}`}>
      {/* Heraldic Heritage Crest SVG Icon */}
      <div
        className="relative shrink-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
        style={{ width: icon, height: icon }}
      >
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_0_12px_rgba(212,175,55,0.4)]"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fff3cf" />
              <stop offset="35%" stopColor="#dfb76c" />
              <stop offset="70%" stopColor="#c5a059" />
              <stop offset="100%" stopColor="#87651a" />
            </linearGradient>
            <radialGradient id="oakBack" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#250811" />
              <stop offset="70%" stopColor="#140f0c" />
              <stop offset="100%" stopColor="#080605" />
            </radialGradient>
            <linearGradient id="rimGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f5e1a4" />
              <stop offset="50%" stopColor="#b8933b" />
              <stop offset="100%" stopColor="#f9ebbe" />
            </linearGradient>
          </defs>

          {/* Outer Shield / Medallion Rim */}
          <circle cx="50" cy="50" r="47" fill="url(#oakBack)" stroke="url(#rimGrad)" strokeWidth="2.5" />
          <circle cx="50" cy="50" r="43" stroke="url(#goldGrad)" strokeWidth="0.8" strokeDasharray="2 1.5" />

          {/* Laurel Wreath Left */}
          <path
            d="M24 64C20 54 22 40 28 32C29 36 30 42 27 48C31 42 34 36 31 30C36 36 37 44 34 50C37 44 41 38 38 32C43 40 43 48 39 56"
            stroke="url(#goldGrad)"
            strokeWidth="1.2"
            strokeLinecap="round"
            fill="none"
          />

          {/* Laurel Wreath Right */}
          <path
            d="M76 64C80 54 78 40 72 32C71 36 70 42 73 48C69 42 66 36 69 30C64 36 63 44 66 50C63 44 59 38 62 32C57 40 57 48 61 56"
            stroke="url(#goldGrad)"
            strokeWidth="1.2"
            strokeLinecap="round"
            fill="none"
          />

          {/* Chef Hat Crest Atop */}
          <path
            d="M42 27C40 22 44 19 47 20C49 17 53 17 55 20C58 19 62 22 60 27L42 27Z"
            fill="url(#goldGrad)"
          />
          <rect x="42" y="27" width="18" height="2" rx="0.5" fill="url(#rimGrad)" />

          {/* Interlocking Monogram GP */}
          {/* Letter G */}
          <path
            d="M48 44C46 39 40 39 36 43C32 47 32 55 36 59C40 63 46 62 48 57L48 51L42 51"
            stroke="url(#goldGrad)"
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />

          {/* Letter P */}
          <path
            d="M51 61L51 39L60 39C64 39 67 42 67 46C67 50 64 53 60 53L51 53"
            stroke="url(#goldGrad)"
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />

          {/* Est 1998 Ribbon */}
          <path d="M32 76C42 74 58 74 68 76L65 80C55 78 45 78 35 80L32 76Z" fill="#380914" stroke="url(#goldGrad)" strokeWidth="0.8" />
          <text x="50" y="78.5" textAnchor="middle" fill="#fdf0cd" fontSize="4.2" fontFamily="serif" fontWeight="bold" letterSpacing="0.8">
            EST. 1998
          </text>
        </svg>
      </div>

      {/* Brand Title: GastroPub | Restaurant */}
      {showText && (
        <div className={`flex flex-col min-w-0 ${textClassName}`}>
          <div className="flex items-center gap-1.5 sm:gap-2 leading-none flex-wrap">
            <span
              className={`font-serif ${text} font-bold tracking-[0.12em] text-[#fbf8f2] group-hover:text-[#dfb76c] transition-colors`}
            >
              GastroPub
            </span>
            <span className="text-[#dfb76c] opacity-80 text-sm font-light">|</span>
            <span className="font-serif italic font-normal tracking-[0.18em] text-xs sm:text-sm text-[#e5c378]">
              Restaurant
            </span>
          </div>

          <span
            className={`${sub} tracking-[0.3em] text-[#c5a059] uppercase font-medium mt-1 leading-none truncate hidden sm:block`}
          >
            Est. 1998 • Heritage Fine Dining
          </span>
        </div>
      )}
    </div>
  );
}
