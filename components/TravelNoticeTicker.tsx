import React from "react";

export default function TravelNoticeTicker() {
  const noticeText =
    "The itinerary listed above is subject to change based on weather, road conditions, and local operational factors. In all matters regarding the execution, route changes, or safety of this trip, the tour operator's decision will be the final decision.";

  return (
    <aside
      className="relative z-30 bg-[#111318] border-y border-[#D8B43B]/30 text-[#F7F5F0] overflow-hidden select-none"
      aria-label="Important Travel Notice"
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes travelNoticeMarquee {
            0% { transform: translate3d(0, 0, 0); }
            100% { transform: translate3d(-100%, 0, 0); }
          }
          .animate-notice-ticker {
            animation: travelNoticeMarquee 40s linear infinite;
            will-change: transform;
          }
          .group:hover .animate-notice-ticker,
          .group:active .animate-notice-ticker,
          .group:focus-within .animate-notice-ticker {
            animation-play-state: paused;
          }
          @media (prefers-reduced-motion: reduce) {
            .animate-notice-ticker {
              animation: none !important;
              transform: none !important;
            }
          }
        `,
        }}
      />

      <div className="flex items-center w-full h-10 sm:h-11 group">
        {/* Fixed Left Badge: Info Icon + Heading */}
        <div className="shrink-0 z-20 flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 h-full bg-[#111318] border-r border-[#D8B43B]/30 shadow-[4px_0_12px_rgba(0,0,0,0.5)]">
          <svg
            className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D8B43B] shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2.2"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="font-heading font-semibold text-[10px] sm:text-xs text-[#D8B43B] uppercase tracking-wider whitespace-nowrap">
            IMPORTANT TRAVEL NOTICE
          </span>
        </div>

        {/* Scrolling Viewport Area with Left & Right Soft Edge Fades */}
        <div className="relative flex-1 overflow-hidden h-full flex items-center">
          {/* Subtle Left Fade Gradient */}
          <div className="absolute left-0 top-0 bottom-0 w-6 sm:w-10 bg-gradient-to-r from-[#111318] to-transparent z-10 pointer-events-none" />

          {/* Seamless Infinite Marquee Track (Repeated Twice for Continuous 0% -> -100% Loop) */}
          <div className="flex shrink-0 animate-notice-ticker items-center whitespace-nowrap">
            <span className="text-[11.5px] sm:text-xs md:text-sm text-[#F7F5F0] font-normal tracking-wide pl-4 sm:pl-6">
              {noticeText}
            </span>
            <span className="mx-6 sm:mx-8 text-[#D8B43B] text-xs" aria-hidden="true">
              ✦
            </span>
          </div>

          <div
            className="flex shrink-0 animate-notice-ticker items-center whitespace-nowrap"
            aria-hidden="true"
          >
            <span className="text-[11.5px] sm:text-xs md:text-sm text-[#F7F5F0] font-normal tracking-wide pl-4 sm:pl-6">
              {noticeText}
            </span>
            <span className="mx-6 sm:mx-8 text-[#D8B43B] text-xs" aria-hidden="true">
              ✦
            </span>
          </div>

          {/* Subtle Right Fade Gradient */}
          <div className="absolute right-0 top-0 bottom-0 w-6 sm:w-10 bg-gradient-to-l from-[#111318] to-transparent z-10 pointer-events-none" />
        </div>
      </div>
    </aside>
  );
}

