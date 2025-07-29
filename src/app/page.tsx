"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import CoordinatorCard from "./component/CoordinatorCard";
import { fetchCoordinators } from "./lib/api";
import Pagination from "./component/PaginationBox";
import SearchInput from "./component/SearchInput";

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
  const router = useRouter();
  const searchParams = useSearchParams();

  const [coordinators, setCoordinators] = useState<Coordinator[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(6);

  // Update page size on screen width
  const updatePageSize = () => {
    const width = window.innerWidth;
    const size = width < 640 ? 3 : width < 1024 ? 4 : 6;
    setPageSize(size);
  };

  useEffect(() => {
    updatePageSize();
    window.addEventListener("resize", updatePageSize);
    return () => window.removeEventListener("resize", updatePageSize);
  }, []);

  // Sync currentPage from URL param
  useEffect(() => {
    const pageParam = parseInt(searchParams.get("page") || "1", 10);
    if (!isNaN(pageParam) && pageParam > 0) {
      setCurrentPage(pageParam);
    }
  }, [searchParams]);

  // Push page to URL when currentPage changes
  useEffect(() => {
    const pageInUrl = parseInt(searchParams.get("page") || "1", 10);
    if (pageInUrl !== currentPage) {
      const params = new URLSearchParams(searchParams.toString());
      params.set("page", currentPage.toString());
      router.push(`/?${params.toString()}`);
    }
  }, [currentPage]);

  // Reset page to 1 on new search and update URL
  useEffect(() => {
    setCurrentPage(1);
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", "1");
    router.push(`/?${params.toString()}`);
  }, [search]);

  // Fetch data when currentPage or pageSize changes
  useEffect(() => {
    const loadCoordinators = async () => {
      setLoading(true);
      try {
        const response = await fetchCoordinators(currentPage, pageSize);
        const data = Array.isArray(response.data) ? response.data : [];
        setCoordinators(data);
      } catch (error) {
        console.error("Error fetching coordinators:", error);
        setCoordinators([]);
      } finally {
        setLoading(false);
      }
    };

    loadCoordinators();
  }, [currentPage, pageSize]);

  const filtered = useMemo(() => {
    if (!search.trim()) return coordinators ?? [];
    return (coordinators ?? []).filter(({ name, location }) =>
      [name, location].some((field) =>
        field.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [coordinators, search]);

  const totalPages = Math.ceil(filtered.length / pageSize);

  const paginatedCoordinators = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, currentPage, pageSize]);

  return (
    <main className="p-6 bg-foreground min-h-screen dark:bg-gray-900 dark:text-white">
      <SearchInput value={search} onChange={setSearch} />
      {loading ? (
        <p className="text-center text-gray-500">Loading coordinators...</p>
      ) : filtered.length === 0 ? (
        <p className="text-center text-gray-400">No coordinators found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedCoordinators.map((coordinator) => (
            <CoordinatorCard
              key={coordinator.id}
              coordinator={coordinator}
              page={currentPage}
            />
          ))}
        </div>
      )}
      {totalPages > 1 && (
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      )}
    </main>
  );
}
