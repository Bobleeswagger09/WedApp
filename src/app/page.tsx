"use client";

import { useEffect, useState } from "react";
import CoordinatorCard from "./component/CoordinatorCard";
import { fetchCoordinators } from "./lib/api";
import Pagination from "./component/PaginationBox";

export interface Coordinator {
  id: string;
  name: string;
  location: string;
  price: string;
  photo: string;
  bio: string;
  availability: string[];
}

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(6);

  const [coordinators, setCoordinators] = useState<Coordinator[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  // Function to update pageSize based on screen width
  const updatePageSize = () => {
    if (window.innerWidth < 640) {
      setPageSize(3);
    } else if (window.innerWidth < 1024) {
      setPageSize(4);
    } else {
      setPageSize(6);
    }
  };
  // Effect to track window resize
  useEffect(() => {
    updatePageSize(); // Set initial size
    window.addEventListener("resize", updatePageSize);
    return () => window.removeEventListener("resize", updatePageSize);
  }, []);

  useEffect(() => {
    async function loadCoordinators() {
      try {
        const data = await fetchCoordinators();
        setCoordinators(data);
      } catch (err) {
        console.error("Error fetching coordinators:", err);
      } finally {
        setLoading(false);
      }
    }

    loadCoordinators();
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  // Calculate pagination based on the filtered list
  const filtered = coordinators.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.location.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filtered.length / pageSize);
  const paginatedCoordinators = filtered.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <main className="p-6  bg-foreground min-h-screen dark:bg-gray-900 dark:text-white">
      <input
        type="text"
        placeholder="Search by name or location"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full mb-4 p-3 rounded border dark:border-gray-700 dark:bg-gray-800 dark:text-white"
      />

      {loading ? (
        <p className="text-center text-gray-500">Loading coordinators...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedCoordinators.map((c) => (
            <CoordinatorCard key={c.id} coordinator={c} />
          ))}
        </div>
      )}

      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </main>
  );
}
