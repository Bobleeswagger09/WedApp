"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Mail, Phone, MapPin, UserPlus } from "lucide-react";
import { useState } from "react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  location: string;
};

export default function BecomeCoordinator() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    location: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    // Here you would usually send this to a backend API
    console.log("Coordinator submitted:", formData);
    setSubmitted(true);
  };

  return (
    <section className="h-full min-h-[100vh] py-40  px-6 bg-red-100 dark:bg-gray-950 text-gray-900 dark:text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto text-center"
      >
        <div className="flex items-center justify-center gap-3 mb-4 text-rose-600 dark:text-rose-400">
          <UserPlus className="w-6 h-6 hidden sm:block" />
          <h2 className="text-3xl sm:text-4xl font-bold">
            Become a Coordinator
          </h2>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
          Join our community of elite Nigerian wedding planners. Showcase your
          expertise and connect with thousands of couples today.
        </p>
      </motion.div>

      <motion.form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto grid gap-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <div className="grid md:grid-cols-2 gap-6">
          <InputField
            name="name"
            type="text"
            label="Full Name"
            icon={<BadgeCheck />}
            value={formData.name}
            onChange={handleChange}
            required
          />
          <InputField
            name="email"
            type="email"
            label="Email Address"
            icon={<Mail />}
            value={formData.email}
            onChange={handleChange}
            required
          />
          <InputField
            name="phone"
            type="tel"
            label="Phone Number"
            icon={<Phone />}
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <InputField
            name="location"
            type="text"
            label="Location"
            icon={<MapPin />}
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-rose-600 hover:bg-rose-700 text-white font-semibold rounded-lg transition"
        >
          Submit Application
        </button>

        {submitted && (
          <p className="text-green-600 dark:text-green-400 text-center font-medium">
            Your application has been received!
          </p>
        )}
      </motion.form>
    </section>
  );
}

type InputFieldProps = {
  name: keyof FormData;
  type: string;
  label: string;
  icon: React.ReactNode;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
};

function InputField({
  name,
  type,
  label,
  icon,
  value,
  onChange,
  required,
}: InputFieldProps) {
  return (
    <div className="flex flex-col">
      <label
        htmlFor={name}
        className="mb-1 text-sm font-medium text-gray-700 dark:text-gray-200"
      >
        {label}
      </label>
      <div className="relative">
        <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
          {icon}
        </span>
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          required={required}
          className="pl-10 pr-4 py-2 w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500 transition"
        />
      </div>
    </div>
  );
}
