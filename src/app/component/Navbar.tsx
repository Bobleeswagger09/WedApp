"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import ThemeToggle from "../themeProvider/ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Explicitly typing the ref as a div element or null
  const menuRef = useRef<HTMLDivElement | null>(null);

  // Close the menu if the user clicks outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false); // Close the menu
      }
    };

    // Add event listener for click outside
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-primary text-primary-content shadow-md p-4">
      <div className="max-w-8xl mx-auto flex items-center justify-between px-6">
        {/* Logo and Brand Name */}
        <Link href="/" className="flex items-center text-xl font-semibold">
          <span className="text-2xl font-bold dark:text-white">WedPro</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-2">
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)} // Toggle open state directly
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        ref={menuRef} // Attach the ref to the mobile menu
        className={`md:hidden fixed top-0 right-0 w-3/4 h-full bg-primary shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out p-6`}
      >
        {/* Close Button Inside Menu */}
        <button
          className="absolute top-4 right-4 text-white focus:outline-none"
          onClick={() => setIsOpen(false)} // Close the menu directly
        >
          <X size={28} />
        </button>

        {/* Mobile Menu Links */}
        <div className="flex flex-col space-y-6 mt-10">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
