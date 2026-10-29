import React from "react";
import Link from "next/link";

interface PackageCategoryHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
  activeCategory: "normal" | "special" | "weekend" | "all";
  count?: number;
}

export default function PackageCategoryHeader({
  eyebrow,
  title,
  description,
  activeCategory,
  count,
}: PackageCategoryHeaderProps) {
  const tabs = [
    { label: "All Packages", href: "/packages/", id: "all" },
    { label: "Normal Packages", href: "/packages/normal/", id: "normal" },
    { label: "Special & Pilgrimage", href: "/packages/special/", id: "special" },
    { label: "Weekend Packages", href: "/packages/weekend/", id: "weekend" },
  ];

  return (
    <div className="bg-gradient-to-b from-[#0a192f] via-[#071322] to-[#0c1f38] text-white pt-32 pb-16 px-4">
      <div className="container-custom max-w-5xl mx-auto text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-1.5 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
          {eyebrow}
        </div>

        {/* Title */}
        <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
          {title}
        </h1>

        {/* Description */}
        <p className="text-gray-300 text-base md:text-lg max-w-3xl mx-auto leading-relaxed mb-8">
          {description}
        </p>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8">
          {tabs.map((tab) => {
            const isActive = activeCategory === tab.id;
            return (
              <Link
                key={tab.id}
                href={tab.href}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 ${
                  isActive
                    ? "bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20 scale-105"
                    : "bg-white/10 text-white/90 hover:bg-white/20 border border-white/10"
                }`}
              >
                {tab.label}
              </Link>
            );
          })}
        </div>

        {/* Trust Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-white/10 text-center">
          <div>
            <div className="text-xl sm:text-2xl font-extrabold text-amber-400">
              {count !== undefined ? count : "30+"}
            </div>
            <div className="text-[11px] sm:text-xs text-gray-400 uppercase font-medium">Curated Tours</div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-extrabold text-amber-400">Doorstep</div>
            <div className="text-[11px] sm:text-xs text-gray-400 uppercase font-medium">Bangalore Pickup</div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-extrabold text-amber-400">100% Owned</div>
            <div className="text-[11px] sm:text-xs text-gray-400 uppercase font-medium">Sanitized Fleet</div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-extrabold text-amber-400">4.9 ★</div>
            <div className="text-[11px] sm:text-xs text-gray-400 uppercase font-medium">Verified Reviews</div>
          </div>
        </div>
      </div>
    </div>
  );
}

