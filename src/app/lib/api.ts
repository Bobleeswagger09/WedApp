export async function fetchCoordinators() {
  const res = await fetch("http://localhost:5000/api/coordinators");

  if (!res.ok) {
    throw new Error("Failed to fetch coordinators");
  }

  return res.json();
}

export async function fetchCoordinator(id: string) {
  const res = await fetch(`http://localhost:5000/api/coordinators/${id}`);

  if (!res.ok) {
    throw new Error("Coordinator not found");
  }

  return res.json();
}
