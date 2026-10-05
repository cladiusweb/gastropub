"use client";

import React, { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";

interface PizzaChefLoadingScreenProps {
  onComplete?: () => void;
  forceShow?: boolean;
}

export default function PizzaChefLoadingScreen({ onComplete, forceShow = false }: PizzaChefLoadingScreenProps) {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);
  const [progress, setProgress] = useState(15);

  useEffect(() => {
    // If not forcing show, simulate natural page readiness
    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 98) {
          clearInterval(progressTimer);
          return 100;
        }
        return prev + Math.floor(Math.random() * 18) + 10;
      });
    }, 160);

    const timer = setTimeout(() => {
      setFading(true);
      setTimeout(() => {
        setVisible(false);
        if (onComplete) onComplete();
      }, 700);
    }, 2000);

    return () => {
      clearTimeout(timer);
      clearInterval(progressTimer);
    };
  }, [onComplete]);

  if (!visible && !forceShow) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#070504] transition-all duration-700 ease-in-out ${
        fading && !forceShow ? "opacity-0 pointer-events-none scale-105" : "opacity-100"
      }`}
    >
      {/* Background radial atmosphere */}
      <div className="absolute inset-0 bg-radial-at-c from-[#4a0c1a]/30 via-[#0a0706]/90 to-[#070504] pointer-events-none" />

      {/* Outer Luxury Frame */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-md">
        {/* Animated Pizza Chef Scene Container */}
        <div className="relative w-56 h-56 flex items-center justify-center mb-6">
          {/* Glowing pedestal circle */}
          <div className="absolute bottom-4 w-40 h-8 bg-[#d4af37]/15 rounded-full blur-md animate-pulse" />

          {/* SVG Canvas for Chef Hat and Spinning Pizza */}
          <svg
            viewBox="0 0 200 200"
            className="w-full h-full overflow-visible"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="pizzaCrust" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f7d08a" />
                <stop offset="50%" stopColor="#e2a33f" />
                <stop offset="100%" stopColor="#aa6c1b" />
              </linearGradient>
              <linearGradient id="pizzaSauce" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#b71c1c" />
                <stop offset="80%" stopColor="#7f0000" />
              </linearGradient>
              <linearGradient id="hatGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="70%" stopColor="#ece8e1" />
                <stop offset="100%" stopColor="#c8bfb0" />
              </linearGradient>
              <filter id="shadowFilter" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="4" stdDeviation="3" floodColor="#000000" floodOpacity="0.6" />
              </filter>
            </defs>

            {/* Chef Body Silhouette (Subtle and classy) */}
            <g className="chef-body">
              {/* Chef Coat Shoulders */}
              <path
                d="M55 170 C60 145 75 138 100 138 C125 138 140 145 145 170"
                fill="#16120f"
                stroke="#d4af37"
                strokeWidth="1.5"
                filter="url(#shadowFilter)"
              />
              {/* Chef Double Breasted Gold Buttons */}
              <circle cx="94" cy="150" r="2" fill="#d4af37" />
              <circle cx="106" cy="150" r="2" fill="#d4af37" />
              <circle cx="94" cy="162" r="2" fill="#d4af37" />
              <circle cx="106" cy="162" r="2" fill="#d4af37" />

              {/* Chef Apron / Necktie Accent */}
              <path d="M96 138 L100 146 L104 138 Z" fill="#661024" />

              {/* Chef Hands Tossing (Moving slightly in rhythm) */}
              <g className="animate-bounce" style={{ animationDuration: "1.2s" }}>
                {/* Left hand */}
                <path
                  d="M72 135 C68 128 72 122 78 123 C82 124 84 128 82 134 Z"
                  fill="#eac59b"
                  stroke="#8e623b"
                  strokeWidth="0.8"
                />
                {/* Right hand pointing upward to toss */}
                <path
                  d="M128 135 C132 128 128 122 122 123 C118 124 116 128 118 134 Z"
                  fill="#eac59b"
                  stroke="#8e623b"
                  strokeWidth="0.8"
                />
              </g>

              {/* Chef Head / Face Silhouette */}
              <ellipse cx="100" cy="116" rx="16" ry="17" fill="#eac59b" stroke="#8e623b" strokeWidth="0.8" />
              
              {/* Friendly Chef Mustache & Eyes */}
              <path
                d="M93 118 C90 120 86 120 85 117 C87 116 93 115 97 118 C101 115 107 116 109 117 C108 120 104 120 101 118 C99 120 95 120 93 118"
                fill="#2c221a"
              />
              <circle cx="94" cy="112" r="1.5" fill="#2c221a" />
              <circle cx="106" cy="112" r="1.5" fill="#2c221a" />

              {/* Minik Usta Şapkası (Chef's Hat - Toque Blanche with Bobbing Animation) */}
              <g className="animate-pulse" style={{ animationDuration: "2s" }}>
                {/* Hat Brim Band */}
                <rect x="82" y="96" width="36" height="7" rx="2" fill="url(#hatGrad)" stroke="#c5a059" strokeWidth="1" />
                {/* Gold rim on hat */}
                <line x1="84" y1="101" x2="116" y2="101" stroke="#d4af37" strokeWidth="1" />

                {/* Hat Puffy Crown (Toque Folds) */}
                <path
                  d="M84 96 C76 90 75 75 84 68 C88 62 96 61 100 64 C104 60 114 61 118 67 C126 73 125 90 116 96 Z"
                  fill="url(#hatGrad)"
                  stroke="#c5a059"
                  strokeWidth="1.2"
                  filter="url(#shadowFilter)"
                />
                {/* Hat Pleat Lines */}
                <path d="M92 95 C90 85 91 76 96 70" stroke="#bdae9c" strokeWidth="0.8" strokeLinecap="round" />
                <path d="M100 95 C100 83 100 74 100 66" stroke="#bdae9c" strokeWidth="0.8" strokeLinecap="round" />
                <path d="M108 95 C110 85 109 76 104 70" stroke="#bdae9c" strokeWidth="0.8" strokeLinecap="round" />
              </g>
            </g>

            {/* Flying & Spinning Artisanal Pizza (Spinning & Bouncing Physics) */}
            <g className="pizza-toss-wrapper">
              <g className="pizza-spin">
                {/* Pizza Crust Outer */}
                <ellipse cx="100" cy="50" rx="34" ry="11" fill="url(#pizzaCrust)" stroke="#7d4e13" strokeWidth="1.5" />
                {/* Tomato Sauce Inner */}
                <ellipse cx="100" cy="50" rx="28" ry="8.5" fill="#991b1b" />
                {/* Mozzarella Melt Patches */}
                <ellipse cx="94" cy="49" rx="8" ry="3" fill="#fff8e7" opacity="0.9" />
                <ellipse cx="106" cy="51" rx="7" ry="2.5" fill="#fff8e7" opacity="0.9" />
                <ellipse cx="100" cy="47" rx="6" ry="2" fill="#fff8e7" opacity="0.85" />
                {/* Basil Leaves */}
                <path d="M90 50 Q93 47 96 50 Q93 53 90 50 Z" fill="#2e7d32" />
                <path d="M104 48 Q107 45 110 48 Q107 51 104 48 Z" fill="#2e7d32" />
                {/* Charred wood-fired leopard spots */}
                <circle cx="78" cy="50" r="1.5" fill="#3e2723" />
                <circle cx="122" cy="51" r="1.3" fill="#3e2723" />
                <circle cx="99" cy="54" r="1.2" fill="#3e2723" />
              </g>
            </g>

            {/* Floating Flour Dust & Golden Stars Particles */}
            <g className="particles">
              <circle cx="70" cy="42" r="1.5" fill="#fdf0cd" className="animate-ping" style={{ animationDuration: "1.4s" }} />
              <circle cx="130" cy="45" r="1.2" fill="#fdf0cd" className="animate-ping" style={{ animationDuration: "1.8s", animationDelay: "0.4s" }} />
              <circle cx="100" cy="28" r="1.8" fill="#d4af37" className="animate-pulse" />
              <polygon points="126,30 128,34 132,34 129,36 130,40 126,38 122,40 124,36 121,34 125,34" fill="#dfb76c" className="animate-spin" style={{ animationDuration: "4s", transformOrigin: "126px 35px" }} />
              <polygon points="74,32 75,35 78,35 76,37 77,40 74,38 71,40 72,37 70,35 73,35" fill="#dfb76c" className="animate-spin" style={{ animationDuration: "5s", transformOrigin: "74px 36px" }} />
            </g>
          </svg>
        </div>

        {/* Brand Slogan & Status */}
        <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.35em] uppercase text-[#dfb76c] mb-2">
          <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
          <span>MUTFAK HAZIRLANIYOR</span>
          <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
        </div>

        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf8f2] tracking-wide mb-1">
          GASTROPUB
        </h2>
        <p className="text-xs text-[#a99c85] font-light tracking-widest uppercase mb-6">
          1998&apos;den Beri Gastronomi Sanatı
        </p>

        {/* Elegant Gold Progress Bar */}
        <div className="w-64 h-1.5 bg-[#1a1410] rounded-full overflow-hidden border border-[#d4af37]/30 p-[1px] mb-3">
          <div
            className="h-full bg-gradient-to-r from-[#661024] via-[#dfb76c] to-[#fbf0c0] rounded-full transition-all duration-300"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>

        <span className="text-[11px] font-mono text-[#c5a059] tracking-wider">
          Odun Ateşi ve Mahzen Isıtılıyor... {Math.min(progress, 100)}%
        </span>
      </div>

      {/* Embedded CSS for Realistic Pizza Spinning & Tossing Physics */}
      <style jsx>{`
        @keyframes pizzaToss {
          0% {
            transform: translateY(35px) scale(0.85);
          }
          45% {
            transform: translateY(-24px) scale(1.08);
          }
          55% {
            transform: translateY(-24px) scale(1.08);
          }
          100% {
            transform: translateY(35px) scale(0.85);
          }
        }

        @keyframes pizzaSpin {
          0% {
            transform: rotate(0deg) rotateX(40deg);
          }
          100% {
            transform: rotate(360deg) rotateX(40deg);
          }
        }

        .pizza-toss-wrapper {
          transform-origin: 100px 50px;
          animation: pizzaToss 1.6s cubic-bezier(0.42, 0, 0.58, 1) infinite;
        }

        .pizza-spin {
          transform-origin: 100px 50px;
          animation: pizzaSpin 0.8s linear infinite;
        }
      `}</style>
    </div>
  );
}
