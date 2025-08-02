"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="relative py-20 px-6 bg-rose-600 text-white text-center overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 via-rose-500/10 to-transparent pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-3xl mx-auto"
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
          Let’s Make Your Dream Wedding a Reality
        </h2>
        <p className="text-lg sm:text-xl mb-10 text-rose-50">
          Discover Nigeria’s finest wedding coordinators and start your journey
          today.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href={`/coordinator`}
            className="px-8 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 hover:from-rose-600 hover:to-pink-600 transition-all shadow-md hover:shadow-lg"
          >
            Browse Coordinators
          </Link>

          <Link
            href={`/join`}
            className="px-8 py-3 rounded-full font-semibold text-rose-600 bg-white border-2 border-white hover:bg-rose-50 hover:text-rose-700 transition-all shadow-md hover:shadow-lg"
          >
            Become a Coordinator
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
