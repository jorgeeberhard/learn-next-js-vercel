import CustomersTable from "@/app/ui/customers/table";
import Search from "@/app/ui/search";
import { lusitana } from "@/app/ui/fonts";

export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";

  return (
    <div className="w-full">
      <h1 className={`${lusitana.className} mb-8 text-xl md:text-2xl`}>
        Customers
      </h1>
      <Search placeholder="Search customers..." />

      <CustomersTable query={query}></CustomersTable>
    </div>
  );
}
