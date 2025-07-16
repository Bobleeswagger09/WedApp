"use client";

import { PartyPopper } from "lucide-react";
import { useState } from "react";

export default function BookingForm({
  coordinatorId,
}: {
  coordinatorId: string;
}) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    guests: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      ...form,
      guests: Number(form.guests),
      coordinatorId,
    };

    try {
      const res = await fetch("https://wed-server.onrender.com/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.message || "Booking failed");
      }

      setSubmitted(true);
      setError("");
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    }
  };

  if (submitted) {
    return (
      <p className="mt-4  flex gap-2">
        <PartyPopper className="text-green-600" />
        <span className="text-yellow-400">
          Booking submitted! We&apos;ll contact you soon.
        </span>
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-4 space-y-4 bg-white dark:bg-gray-800 p-4 rounded shadow"
    >
      <input
        type="text"
        name="name"
        placeholder="Name"
        className="w-full p-2 border rounded dark:bg-neutral"
        value={form.name}
        required
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="w-full p-2 border rounded dark:bg-neutral"
        value={form.email}
        required
        onChange={handleChange}
      />
      <input
        type="date"
        name="date"
        className="w-full p-2 border rounded dark:bg-neutral"
        value={form.date}
        required
        onChange={handleChange}
      />
      <input
        type="number"
        name="guests"
        placeholder="Number of Guests"
        className="w-full p-2 border rounded dark:bg-neutral"
        value={form.guests}
        required
        onChange={handleChange}
      />
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded"
        type="submit"
      >
        Submit Booking
      </button>

      {error && <p className="text-red-600 mt-2">❌ {error}</p>}
    </form>
  );
}
