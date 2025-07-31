// components/ClientCoordinators.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import SearchInput from "./SearchInput";
import CoordinatorCard from "./CoordinatorCard";
import Pagination from "./PaginationBox";
import { Coordinator } from "@/types/Coordinator";
import { fetchCoordinators } from "../lib/api";

export default function ClientCoordinators({
  coordinators: initialCoordinators,
  totalCount: initialTotal,
  initialPage,
  initialLimit,
}: {
  coordinators: Coordinator[];
  totalCount: number;
  initialPage: number;
  initialLimit: number;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [coordinators, setCoordinators] = useState(initialCoordinators);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [pageSize, setPageSize] = useState(initialLimit);
  const [totalCount, setTotalCount] = useState(initialTotal);

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

  useEffect(() => {
    const pageParam = parseInt(searchParams.get("page") || "1", 10);
    if (!isNaN(pageParam) && pageParam > 0) {
      setCurrentPage(pageParam);
    }
  }, [searchParams]);

  useEffect(() => {
    const pageInUrl = parseInt(searchParams.get("page") || "1", 10);
    if (pageInUrl !== currentPage) {
      const params = new URLSearchParams(searchParams.toString());
      params.set("page", currentPage.toString());
      router.push(`/?${params.toString()}`);
    }
  }, [currentPage]);

  useEffect(() => {
    const loadCoordinators = async () => {
      setLoading(true);
      try {
        const response = await fetchCoordinators(currentPage, pageSize);
        const data = Array.isArray(response.data) ? response.data : [];
        setCoordinators(data);
        setTotalCount(response.totalItems);
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
    return (coordinators ?? []).filter(({ name = "", location = "" }) =>
      [name, location].some((field) =>
        field.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, coordinators]);

  const totalPages = Math.ceil(totalCount / pageSize);

  return (
    <main className="p-6 bg-foreground min-h-screen dark:bg-gray-900 dark:text-white">
      <SearchInput value={search} onChange={setSearch} />
      {loading ? (
        <p className="text-center text-gray-500">Loading coordinators...</p>
      ) : filtered.length === 0 ? (
        <p className="text-center text-gray-400">No coordinators found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((coordinator) => (
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
