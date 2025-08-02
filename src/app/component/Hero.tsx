"use client";

import { CalendarDays, HeartHandshake } from "lucide-react";
import Link from "next/link";

export default function HeroLanding() {
  return (
    <section className="relative bg-[#f5e82a] text-center overflow-hidden min-h-[100vh] sm:min-h-[76vh] lg:min-h-[80vh] xl:min-h-[95vh] flex items-center justify-center">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/wedly.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/fallback.jpg"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-3xl px-6 py-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight mb-4">
          Find Trusted Wedding Coordinators in Nigeria
        </h1>
        <p className="text-lg md:text-xl text-gray-900  font-bold mb-8 bg-red-400">
          Plan your dream wedding with professionals you trust.
        </p>

        <div className="flex justify-center flex-wrap gap-4">
          <Link
            href="/coordinator"
            className="flex items-center gap-2 bg-rose-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-rose-700 transition"
          >
            <HeartHandshake className="w-5 h-5" />
            Browse Coordinators
          </Link>
          <Link
            href="/coordinator"
            className="flex items-center gap-2 border border-rose-600 text-rose-600 px-6 py-3 rounded-full hover:bg-rose-50 transition"
          >
            <CalendarDays className="w-5 h-5" />
            Request a Booking
          </Link>
        </div>
      </div>
    </section>
  );
}
