"use server";

export async function bookCoordinator(prevState: any, formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const date = formData.get("date") as string;
  const coordinatorId = formData.get("coordinatorId") as string;

  try {
    const res = await fetch(`https://wed-server-1.onrender.com/api/bookings`, {
      method: "POST",
      body: JSON.stringify({ name, email, date, coordinatorId }),
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) throw new Error("Failed to book coordinator");

    return { message: "Successfully booked!" };
  } catch (err) {
    return { message: "Something went wrong. Try again." };
  }
}
