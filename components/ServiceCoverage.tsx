import React from "react";
import Link from "next/link";
import { LOCALITIES_DATA } from "@/data/localities";
import { ROUTES_DATA } from "@/data/routes";
import { FLEET_DATA } from "@/data/fleet";

export default function ServiceCoverage() {
  return (
    <section className="bg-gray-50 py-12 border-t border-gray-100">
      <div className="container-custom" style={{ maxWidth: "90%" }}>
        <h3 className="text-xs text-gray-400 font-semibold uppercase tracking-widest text-center mb-6">
          Bangalore Service Coverage &amp; Routes
        </h3>
        <div className="mx-auto text-center space-y-4 text-sm leading-relaxed">
          {/* Localities */}
          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
            <span className="font-semibold text-brand-navy">Localities: </span>
            {LOCALITIES_DATA.map((loc, idx) => (
              <React.Fragment key={loc.slug}>
                {idx > 0 && " | "}
                <Link
                  href={`/localities/${loc.slug}/`}
                  className="text-brand-amber hover:underline"
                >
                  {loc.name}
                </Link>
              </React.Fragment>
            ))}
          </p>

          {/* Routes */}
          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
            <span className="font-semibold text-brand-navy">Outstation Routes: </span>
            {ROUTES_DATA.map((route, idx) => (
              <React.Fragment key={route.slug}>
                {idx > 0 && " | "}
                <Link
                  href={`/routes/${route.slug}/`}
                  className="text-brand-amber hover:underline"
                >
                  Bangalore to {route.destination}
                </Link>
              </React.Fragment>
            ))}
          </p>

          {/* Fleet */}
          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
            <span className="font-semibold text-brand-navy">Fleet Categories: </span>
            {FLEET_DATA.map((vehicle, idx) => (
              <React.Fragment key={vehicle.slug}>
                {idx > 0 && " | "}
                <Link
                  href={`/fleet/${vehicle.slug}/`}
                  className="text-brand-amber hover:underline"
                >
                  {vehicle.name}
                </Link>
              </React.Fragment>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
