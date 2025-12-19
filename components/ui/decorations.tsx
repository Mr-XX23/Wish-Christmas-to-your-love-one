"use client"

import React from 'react';
import { cn } from '@/lib/utils';

export function ChristmasLights() {
  return (
    <div className="light-rope" aria-hidden="true">
      {Array.from({ length: 30 }).map((_, i) => (
        <div
          key={i}
          className={cn(
            "light",
            i % 2 === 0 ? "bg-brand-red shadow-[0_0_10px_#D42426]" : 
            i % 3 === 0 ? "bg-brand-gold shadow-[0_0_10px_#F4D35E]" : 
            "bg-blue-500 shadow-[0_0_10px_#3b82f6]"
          )}
        />
      ))}
    </div>
  );
}

export function ChristmasTree({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 300"
      className={cn("w-64 h-auto drop-shadow-xl", className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Tree Body - Deep Forest Green */}
      <path d="M100 20 L40 120 L80 120 L30 200 L70 200 L20 280 L180 280 L130 200 L170 200 L120 120 L160 120 Z" fill="#145c2c" />
      
      {/* Snow details */}
      <path d="M100 20 L40 120 L160 120 Z" fill="none" stroke="white" strokeWidth="2" strokeOpacity="0.5" strokeDasharray="5,5" />
      
      {/* Ornaments */}
      <circle cx="70" cy="160" r="8" fill="#D42426" filter="url(#glow)" />
      <circle cx="130" cy="160" r="8" fill="#F4D35E" filter="url(#glow)" />
      <circle cx="100" cy="240" r="8" fill="#3b82f6" filter="url(#glow)" />
      <circle cx="50" cy="240" r="6" fill="#F4D35E" filter="url(#glow)" />
      <circle cx="150" cy="240" r="6" fill="#D42426" filter="url(#glow)" />
      
      {/* Star */}
      <path d="M100 0 L105 15 L120 15 L108 25 L112 40 L100 30 L88 40 L92 25 L80 15 L95 15 Z" fill="#F4D35E" filter="url(#glow)" />
      
      {/* Trunk */}
      <rect x="85" y="280" width="30" height="20" fill="#3f2e18" />
    </svg>
  );
}

export function SnowBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.2)_100%)]" />
       {/* Generate random snowflakes via CSS is hard, we used global CSS animation on a specific class but let's assume global.css handles a basic snow overlay or we use this component for a CSS based approach if needed. 
           For now, returning null as we have confetti, but simpler decorative elements can go here. 
       */}
    </div>
  )
}
