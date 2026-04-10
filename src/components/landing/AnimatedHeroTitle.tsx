import React from "react";
import { cn } from "@/lib/utils";

export function AnimatedHeroTitle() {
  return (
    <div className="relative inline-block group w-full max-w-fit mb-7">
      {/* 
        Custom inline styles for the keyframe animations 
        to avoid touching global css or tailwind config 
      */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes heroCursorFly {
          0% {
            opacity: 0;
            transform: translate3d(200px, 150px, 0) scale(1);
          }
          20% {
            opacity: 1;
            transform: translate3d(100px, 80px, 0) scale(1.1);
          }
          50% {
            opacity: 1;
            transform: translate3d(40px, 30px, 0) scale(1);
          }
          60% {
            opacity: 1;
            transform: translate3d(40px, 30px, 0) scale(0.9);
          }
          65% {
            opacity: 1;
            transform: translate3d(40px, 30px, 0) scale(1);
          }
          85% {
            opacity: 1;
            transform: translate3d(150px, 100px, 0) scale(1);
          }
          100% {
            opacity: 0;
            transform: translate3d(150px, 100px, 0) scale(1);
          }
        }

        @keyframes heroBoxFigma {
          0%, 60% {
            opacity: 0;
            transform: scale(0.98);
          }
          62%, 95% {
            opacity: 1;
            transform: scale(1);
          }
          100% {
            opacity: 0;
            transform: scale(1);
          }
        }

        .animate-hero-cursor {
          animation: heroCursorFly 6s cubic-bezier(0.2, 0.8, 0.2, 1) infinite;
          pointer-events: none;
        }

        .animate-hero-box {
          animation: heroBoxFigma 6s cubic-bezier(0.2, 0.8, 0.2, 1) infinite;
          pointer-events: none;
        }
      `}} />

      {/* The main text */}
      <h1 className="relative z-10 text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.05]">
        <span className="block">Mais velocidade.</span>
        <span className="block text-brand-cyan">Menos caos.</span>
        <span className="block">Operação organizada.</span>
      </h1>

      {/* Figma-style Selection Box Overlay */}
      <div className="animate-hero-box absolute -inset-4 sm:-inset-6 z-0 border-2 border-brand-cyan bg-brand-cyan/[0.03]">
        {/* Corner squares */}
        <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-white border-2 border-brand-cyan" />
        <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-white border-2 border-brand-cyan" />
        <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-white border-2 border-brand-cyan" />
        <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-white border-2 border-brand-cyan" />
        
        {/* Top Label */}
        <div className="absolute -top-6 left-0 bg-brand-cyan text-[#060b19] text-[10px] font-bold px-2 py-0.5 tracking-wider uppercase">
          FastAtende
        </div>
      </div>

      {/* Multiplayer Cursor */}
      <div className="animate-hero-cursor absolute bottom-0 right-[20%] select-none z-20 flex flex-col items-start gap-1">
        {/* The mouse pointer shape */}
        <svg
          width="26"
          height="37"
          viewBox="0 0 26 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-lg"
        >
          <path
            d="M6.35338 33.6401L0.865612 0.707106L25.321 17.519L14.9351 19.3499L6.35338 33.6401Z"
            fill="#00D2FF" /* brand-cyan */
            stroke="white"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>

        {/* The cursor tag */}
        <div className="ml-5 px-2 py-1 bg-brand-cyan text-[#060b19] text-xs font-bold rounded-r-md rounded-bl-md shadow-lg select-none">
          Especialista
        </div>
      </div>
    </div>
  );
}
