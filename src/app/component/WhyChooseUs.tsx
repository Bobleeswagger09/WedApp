import { HeartHandshake } from "lucide-react";

export default function WhyChooseUs() {
  const points = [
    "Curated & Vetted Coordinators",
    "Transparent Pricing",
    "Availability Calendar at a Glance",
    "100% Free to Use",
  ];

  return (
    <section className="py-16 px-6 bg-white dark:bg-[#491c6e] text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-rose-600 mb-4 leading-tight">
          Why Couples Love{" "}
          <span className="text-gray-800 dark:text-white">WEDLY</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg mb-10">
          We&apos;re making wedding planning simpler, faster, and stress-free.
        </p>

        <ul className="grid gap-6 sm:grid-cols-2 md:text-center">
          {points.map((point, i) => (
            <li
              key={i}
              className="flex md:justify-center items-start md:items-center gap-3"
            >
              <HeartHandshake className="w-6 h-6 text-rose-500 mt-1" />
              <span className="text-base text-gray-800 dark:text-white font-medium">
                {point}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
