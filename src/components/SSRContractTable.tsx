/* 
// If You want to get all infmation about the product and reder on server and THEY ARE NOT DYNAMIC this is the way we can do it.

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
*/

import ContractTable from "@/components/ContractTable";
// Connect it to the store
import { store } from "@/store";
// Directly call the getstate because we cant use Hooks in the server side context
const SSRContractTable = () => {
  return (
    <div>
      <ContractTable contracts={store.getState().search.startupContract} />
    </div>
  );
};

export default SSRContractTable;
