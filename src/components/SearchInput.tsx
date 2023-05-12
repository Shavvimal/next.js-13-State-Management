"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";

import { RootState, AppDispatch } from "@/store";
import { setSearch } from "@/store/searchSlice";
import ContractTable from "@/components/ContractTable";
import { contractApi } from "@/store/contractsAPI";
import { Contract } from "@/types";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const SearchInput = () => {
  // Allows us to set values in the store
  const dispatch = useAppDispatch();
  // Allows us to get values from the store
  const search = useAppSelector((state) => state.search.search);
  const startupContract = useAppSelector(
    (state) => state.search.startupContract
  );

  const data = useAppSelector(
    (state) =>
      state.contractApi.queries[`search("${search}")`]?.data as Contract[]
  );

  useEffect(() => {
    dispatch(contractApi.endpoints.search.initiate(search));
  }, [dispatch, search]);

  return (
    <div className="search-input mx-auto my-4 w-full">
      <input
        type="text"
        className="p-4 text-black rounded-md mb-4"
        placeholder="Search"
        value={search}
        onChange={(e) => dispatch(setSearch(e.target.value))}
      />
      <ContractTable
        contracts={search.length ? data ?? startupContract : startupContract}
      />
    </div>
  );
};

export default SearchInput;
