import ClientCoordinators from "./component/ClientCoordinators";
import { fetchCoordinators } from "./lib/api";

export default async function Home({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const page = parseInt(searchParams.page || "1", 10);
  const limit = 6;

  const response = await fetchCoordinators(page, limit);

  return (
    <ClientCoordinators
      coordinators={response.data}
      totalCount={response.totalItems}
      initialPage={page}
      initialLimit={limit}
    />
  );
}
