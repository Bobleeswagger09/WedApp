"use client";

import { useFormState } from "react-dom";
import { bookCoordinator } from "../lib/actions";

export default function BookingForm({
  coordinatorId,
}: {
  coordinatorId: string;
}) {
  const [state, formAction] = useFormState(bookCoordinator, { message: "" });

  return (
    <form action={formAction} className="space-y-4">
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
        type="date"
        name="date"
        required
        className="block w-full p-2 border"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Book
      </button>
      {state?.message && <p className="text-green-600">{state.message}</p>}
    </form>
  );
}
