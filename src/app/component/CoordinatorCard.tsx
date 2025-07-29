import Image from "next/image";
import Link from "next/link";

export default function CoordinatorCard({
  coordinator,
  page,
}: {
  coordinator: any;
  page: number;
}) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
      <Image
        src={coordinator.photo}
        width={400}
        height={120}
        alt={coordinator.name}
        className="w-full h-48 object-cover rounded"
      />
      <h3 className="text-xl font-semibold mt-3 dark:text-white">
        {coordinator.name}
      </h3>
      <p className="text-gray-600 dark:text-gray-300">{coordinator.location}</p>
      <p className="text-green-600 font-bold">{coordinator.price}</p>
      <Link
        href={{
          pathname: `/coordinator/${coordinator.id}`,
          query: { page },
        }}
      >
        <button className="mt-3 bg-blue-600 hover:bg-blue-800 text-white px-4 py-2 rounded text-base font-normal cursor-pointer dark:hover:bg-transparent dark:border-neutral border transition-all duration-300">
          View Profile
        </button>
      </Link>
    </div>
  );
}
