"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import SearchInput from "./SearchInput";
import CoordinatorCard from "./CoordinatorCard";
import Pagination from "./PaginationBox";
import { Coordinator } from "@/types/Coordinator";

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

  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [pageSize, setPageSize] = useState(initialLimit);

  useEffect(() => {
    const calculatePageSize = () => {
      const width = window.innerWidth;
      return width < 640 ? 3 : width < 1024 ? 4 : 6;
    };

    const updatePageSize = () => setPageSize(calculatePageSize());

    updatePageSize();
    window.addEventListener("resize", updatePageSize);
    return () => window.removeEventListener("resize", updatePageSize);
  }, []);

  useEffect(() => {
    const pageParam = parseInt(searchParams.get("page") || "1", 10);
    if (pageParam > 0 && pageParam !== currentPage) {
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

  const filteredCoordinators = useMemo(() => {
    if (!search.trim()) return initialCoordinators;
    const lowered = search.toLowerCase();
    return initialCoordinators.filter(({ name = "", location = "" }) =>
      [name, location].some((field) => field.toLowerCase().includes(lowered))
    );
  }, [search, initialCoordinators]);

  const totalPages = Math.ceil(initialTotal / pageSize);

  return (
    <main className="p-6 bg-foreground min-h-screen dark:bg-gray-900 dark:text-white">
      <SearchInput value={search} onChange={setSearch} />
      {filteredCoordinators.length === 0 ? (
        <p className="text-center text-gray-400">No coordinators found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCoordinators.map((coordinator) => (
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
