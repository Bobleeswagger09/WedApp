"use client";

import { useRouter, useParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import BookingForm from "@/app/component/BookingForm";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

export default function CoordinatorDetail() {
  const router = useRouter();
  const { id } = useParams();
  const [coordinator, setCoordinator] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();

  const page = searchParams.get("page");

  const goBack = () => {
    if (page) {
      router.push(`/?page=${page}`);
    } else {
      router.back();
    }
  };
  useEffect(() => {
    async function loadCoordinator() {
      try {
        const res = await fetch(
          `https://wed-server.onrender.com/api/coordinators/${id}`
        );
        const data = await res.json();
        setCoordinator(data);
      } catch (error) {
        setCoordinator(null);
      } finally {
        setLoading(false);
      }
    }

    if (id) loadCoordinator();
  }, [id]);

  if (loading) return <p className="p-6 text-center">Loading...</p>;
  if (!coordinator)
    return <p className="p-6 text-center">Coordinator not found</p>;

  return (
    <div className="min-h-screen p-6 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white">
      <button onClick={goBack} className="text-blue-500 mb-4 flex gap-2">
        <ArrowLeft /> <span>Back</span>
      </button>

      <Image
        src={coordinator.photo}
        width={1000}
        height={120}
        alt={coordinator.name}
        className="w-full h-64 object-cover rounded mb-4"
      />
      <h2 className="text-2xl font-bold">{coordinator.name}</h2>
      <p className="text-gray-600 dark:text-gray-300">{coordinator.location}</p>
      <p className="text-green-600 font-semibold">{coordinator.price}</p>
      <p className="mt-4">{coordinator.bio}</p>
      <p className="mt-2 font-semibold">Available Dates:</p>
      <ul className="list-disc ml-6">
        {coordinator.availability.map((date: string) => (
          <li key={date}>{date}</li>
        ))}
      </ul>

      <div className="mt-8">
        <BookingForm coordinatorId={coordinator.id} />
      </div>
    </div>
  );
}
