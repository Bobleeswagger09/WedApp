export async function fetchCoordinators() {
  const res = await fetch("https://wed-server.onrender.com/api/coordinators");

  if (!res.ok) {
    throw new Error("Failed to fetch coordinators");
  }

  return res.json();
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
