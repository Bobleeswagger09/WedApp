"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { generateAvatar } from "@/utils/generateAvater";

const testimonials = [
  {
    text: "WEDLY made our wedding stress-free and beautiful. We found our coordinator in minutes!",
    couple: "Jane & Michael",
    location: "Lagos",
  },
  {
    text: "Such a seamless experience. Our coordinator was top-notch.",
    couple: "Fatima & Tunde",
    location: "Abuja",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 px-6 bg-white dark:bg-[#491c6e] text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-semibold text-rose-600 mb-12"
      >
        What Happy Couples Say
      </motion.h2>

      <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2">
        {testimonials.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="relative bg-rose-50 dark:bg-gray-800 border border-rose-100 dark:border-gray-700 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all text-left"
          >
            <div className="relative z-10">
              <p className="text-gray-800 dark:text-gray-100 text-lg leading-relaxed">
                “{item.text}”
              </p>
              <footer className="mt-6 flex items-center gap-4">
                <Image
                  src={generateAvatar(item.couple)}
                  alt={item.couple}
                  width={48}
                  height={48}
                  className="rounded-full object-cover w-12 h-12 border border-white dark:border-gray-700 shadow"
                />
                <div>
                  <p className="font-semibold text-gray-700 dark:text-white">
                    {item.couple}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {item.location}
                  </p>
                </div>
              </footer>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
