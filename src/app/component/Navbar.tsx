"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import ThemeToggle from "../themeProvider/ThemeToggle";
import { cn } from "@/utils/cn";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Coordinators", href: "/coordinator" },
    { name: "Join Us", href: "/join" },
    { name: "Contact Us", href: "/contact-us" },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 py-2">
      <div className="xl:max-w-[1600px] lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-rose-600 ">
            Wedly
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6 items-center text-lg">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "transition-colors transition-border duration-300 ease-in-out font-medium hover:border-b-2 hover:border-b-rose-600",
                  pathname === link.href
                    ? "text-rose-600"
                    : "text-gray-700 dark:text-gray-200"
                )}
              >
                {link.name}
              </Link>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-gray-700 dark:text-gray-200 hover:text-rose-600 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        ref={menuRef}
        className={`md:hidden fixed top-0 right-0 w-3/4 h-full bg-white dark:bg-gray-900 z-50 shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out p-6`}
      >
        <button
          className="absolute top-4 right-4 text-gray-700 dark:text-gray-200"
          onClick={() => setIsOpen(false)}
        >
          <X size={28} />
        </button>

        <div className="mt-12 flex flex-col space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "text-lg font-medium hover:text-rose-600 transition",
                pathname === link.href
                  ? "text-rose-600"
                  : "text-gray-700 dark:text-gray-200"
              )}
            >
              {link.name}
            </Link>
          ))}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
