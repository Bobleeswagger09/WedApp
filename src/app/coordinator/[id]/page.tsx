import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import BookingForm from "@/app/component/BookingForm";
import { notFound } from "next/navigation";

export default async function CoordinatorDetail({ params, searchParams }: any) {
  const { id } = params;
  const page = searchParams?.page;

  const res = await fetch(
    `https://wed-server-1.onrender.com/api/coordinators/${id}`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) return notFound();

  const coordinator = await res.json();

  return (
    <div className="min-h-screen p-6 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white">
      <Link
        href={page ? `/?page=${page}` : "/"}
        className="text-blue-500 mb-4 flex gap-2"
      >
        <ArrowLeft /> <span>Back</span>
      </Link>

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
