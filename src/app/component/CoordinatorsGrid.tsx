"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const coordinators = [
  {
    id: "18",
    name: "Amara Events",
    location: "Lagos",
    price: "₦150,000+",
    image: "/wedplanner.jpg",
    tag: "Top Rated",
  },
  {
    id: "17",
    name: "Joy Weddings",
    location: "Abuja",
    price: "₦120,000+",
    image: "/joy.webp",
    tag: "Trusted",
  },
  {
    id: "19",
    name: "Eve & Co",
    location: "Port Harcourt",
    price: "₦180,000+",
    image: "/eve.webp",
    tag: "Popular",
  },
];

const tagColorMap: Record<string, string> = {
  "Top Rated": "bg-green-100 text-green-700",
  Trusted: "bg-blue-100 text-blue-700",
  Popular: "bg-purple-100 text-purple-700",
};

export default function CoordinatorsGrid() {
  return (
    <section className="py-16 px-6 bg-rose-50 dark:bg-gray-900">
      <h2 className="text-3xl sm:text-4xl font-bold text-rose-600 dark:text-white text-center mb-12">
        Top Wedding Planners, Handpicked for You
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {coordinators.map((c, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden"
          >
            <motion.div
              className="overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={c.image}
                width={500}
                height={200}
                alt={c.name}
                className="w-full h-52 sm:h-64 md:h-72 object-cover"
              />
            </motion.div>

            <div className="p-5">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-semibold dark:text-white">
                  {c.name}
                </h3>
                <span
                  className={`text-xs px-2 py-1 rounded-full whitespace-nowrap ${
                    tagColorMap[c.tag] || "bg-gray-100 text-gray-700"
                  }`}
                >
                  {c.tag}
                </span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {c.location}
              </p>
              <p className="text-base font-medium text-rose-600 dark:text-rose-400 mt-1">
                {c.price}
              </p>
              <Link href={`/coordinator/${c.id}`}>
                <button className="mt-4 flex items-center gap-2 text-sm text-white bg-rose-600 px-4 py-2 rounded-full hover:bg-rose-700 transition">
                  View Profile <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
