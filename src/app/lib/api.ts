"use server";

export async function fetchCoordinators(page: number = 1, limit: number = 10) {
  const res = await fetch(
    `https://wed-server.onrender.com/api/coordinators?page=${page}&limit=${limit}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch coordinators");
  }

  return res.json(); // returns { page, limit, totalItems, totalPages, data }
}

export async function fetchCoordinator(id: string) {
  const res = await fetch(
    `https://wed-server.onrender.com/api/coordinators/${id}`
  );

  if (!res.ok) {
    throw new Error("Coordinator not found");
  }

  return res.json();
}
