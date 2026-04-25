import React from "react";

export const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={`bg-white p-2 rounded-xl border border-slate-100 shadow-xl shadow-indigo-500/5 flex flex-col items-center justify-center ${className}`}>
      <div className="flex items-center leading-none">
        <span className="text-3xl md:text-4xl font-black tracking-tighter bg-gradient-to-br from-blue-600 to-purple-600 bg-clip-text text-transparent">F</span>
        
        {/* Custom Apple-style SVG Icon */}
        <div className="mx-0.5 w-7 h-7 md:w-9 md:h-9">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <defs>
              <linearGradient id="apple-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2563eb" />
                <stop offset="100%" stopColor="#9333ea" />
              </linearGradient>
            </defs>
            <path 
              d="M17.05 20.28c-.98.95-2.05 1.72-3.35 1.72-1.25 0-1.65-.75-3.15-.75-1.5 0-1.95.75-3.15.75-1.3 0-2.45-.85-3.45-1.85-2.05-2.05-3.15-5.85-3.15-8.85 0-3.05 1.6-4.65 3.1-4.65.75 0 1.45.35 2.1.35.65 0 1.45-.4 2.35-.4 1.15 0 2.1.55 2.75 1.35-2.35 1.4-1.95 4.35.45 5.35-.45 1.15-1.05 2.3-2.1 2.98zM12.1 4.63c-.05-1.35.85-2.65 2.1-3.63 1.25-.98 2.55-.85 2.65.5.05 1.35-.85 2.65-2.1 3.63-1.25.98-2.55.85-2.65-.5z" 
              fill="url(#apple-grad)" 
            />
          </svg>
        </div>

        <span className="text-3xl md:text-4xl font-black tracking-tighter text-zinc-800">CUS</span>
      </div>
      <div className="text-[6px] md:text-[8px] font-black tracking-[0.2em] text-zinc-900 uppercase mt-0.5 whitespace-nowrap">
        Fastest Mobile Repair
      </div>
    </div>
  );
};
