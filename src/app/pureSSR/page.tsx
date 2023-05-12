import SSRContractTable from "@/components/SSRContractTable";
import { store } from "@/store";
import { setStartupContract } from "@/store/searchSlice";

// server side only components, can use async functions
export default async function Home() {
  // Add the contracts to the SetStartupContract
  const req = await fetch("http://localhost:3000/api/search");
  const data = await req.json();
  store.dispatch(setStartupContract(data));

  return (
    <main className="p-12">
      <SSRContractTable />
    </main>
  );
}
