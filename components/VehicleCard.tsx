import React from "react";
import Link from "next/link";
import { Vehicle } from "@/data/fleet";

interface VehicleCardProps {
  vehicle: Vehicle;
}

export default function VehicleCard({ vehicle }: VehicleCardProps) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-md hover:shadow-xl transition-all flex flex-col justify-between group">
      <div>
        <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={vehicle.image}
            alt={vehicle.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
            width={600}
            height={375}
          />
          <div className="absolute top-3 left-3 bg-brand-navy/90 text-brand-amber text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm">
            {vehicle.seats}
          </div>
          <div className="absolute bottom-3 right-3 bg-white/95 text-brand-navy font-heading font-extrabold text-sm px-3 py-1 rounded-xl shadow">
            ₹{vehicle.ratePerKm}/km
          </div>
        </div>

        <div className="p-6">
          <span className="text-xs font-bold text-brand-amber uppercase tracking-wider block mb-1">
            {vehicle.subtitle}
          </span>
          <h3 className="font-heading text-xl font-bold text-brand-navy mb-3">
            <Link
              href={`/fleet/${vehicle.slug}/`}
              className="hover:text-brand-amber transition-colors"
            >
              {vehicle.name}
            </Link>
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">
            {vehicle.description}
          </p>

          <ul className="space-y-2 mb-6">
            {vehicle.features.slice(0, 3).map((feat) => (
              <li
                key={feat}
                className="text-xs text-gray-600 flex items-center gap-2"
              >
                <span className="text-emerald-500 font-bold">✓</span>
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="p-6 pt-0 flex items-center gap-3">
        <Link
          href={`/fleet/${vehicle.slug}/`}
          className="flex-1 text-center py-2.5 rounded-xl border border-brand-navy text-brand-navy font-heading font-bold text-xs hover:bg-brand-navy hover:text-white transition-all"
        >
          View Specs
        </Link>
        <a
          href={`https://wa.me/919901333113?text=Hi%20Khushi%20Travels%2C%20I%20want%20to%20rent%20the%20${encodeURIComponent(
            vehicle.name
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center py-2.5 rounded-xl gradient-amber text-white font-heading font-bold text-xs shadow-md shadow-amber-500/20 hover:shadow-amber-500/35 transition-all"
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
}
