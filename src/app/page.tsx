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
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(6);

  //  Responsive page size
  const updatePageSize = () => {
    const width = window.innerWidth;
    if (width < 640) setPageSize(3);
    else if (width < 1024) setPageSize(4);
    else setPageSize(6);
  };

  useEffect(() => {
    updatePageSize();
    window.addEventListener("resize", updatePageSize);
    return () => window.removeEventListener("resize", updatePageSize);
  }, []);

  //  Fetch coordinators
  useEffect(() => {
    async function loadCoordinators() {
      try {
        const response = await fetchCoordinators();
        setCoordinators(response.data);
      } catch (error) {
        console.error("Error fetching coordinators:", error);
      } finally {
        setLoading(false);
      }
    }

    loadCoordinators();
  }, []);

  //  Update page on search reset
  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  //  Push page query only when needed
  useEffect(() => {
    const current = searchParams.get("page");
    if (parseInt(current || "1") !== currentPage) {
      router.push(`/?page=${currentPage}`);
    }
  }, [currentPage]);

  //  Memoized filtered list
  const filtered = useMemo(() => {
    return coordinators?.filter((c) =>
      [c.name, c.location].some((field) =>
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
          {paginatedCoordinators.map((c) => (
            <CoordinatorCard key={c.id} coordinator={c} page={currentPage} />
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
