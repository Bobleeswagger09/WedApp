"use client";

import { useEffect, useRef } from "react";
import { useFormState } from "react-dom";
import { bookCoordinator } from "../lib/actions";

export default function BookingForm({
  coordinatorId,
}: {
  coordinatorId: string;
}) {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction] = useFormState(bookCoordinator, { message: "" });

  useEffect(() => {
    if (state.message === "Successfully booked!" && formRef.current) {
      formRef.current.reset();
    }
  }, [state.message]);

  return (
    <form ref={formRef} action={formAction} className="space-y-4">
      <input type="hidden" name="coordinatorId" value={coordinatorId} />

      <input
        type="text"
        name="name"
        placeholder="Your name"
        required
        className="block w-full p-2 border"
      />

      <input
        type="email"
        name="email"
        placeholder="Your email"
        required
        className="block w-full p-2 border"
      />

      <input
        type="number"
        name="guests"
        placeholder="Number of guests"
        required
        min={1}
        className="block w-full p-2 border"
      />

      <input
        type="date"
        name="date"
        required
        className="block w-full p-2 border"
      />

      <button
        type="submit"
        className="bg-blue-600 active:bg-yellow-500 hover:bg-green-600 text-white px-4 py-2 rounded transition-colors duration-300 ease-in-out"
      >
        Book
      </button>

      {state?.message && (
        <p
          className={
            state.message === "Successfully booked!"
              ? "text-green-600"
              : "text-red-600"
          }
        >
          {state.message}
        </p>
      )}
    </form>
  );
}
