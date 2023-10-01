"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { GoSearch } from "react-icons/go";
import { HiMicrophone } from "react-icons/hi";

export default function HomeSearch() {
  const [state, setState] = useState("");
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!state.trim()) return;
    router.push(`/search/web?searchTerm=${state}`);
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex mt-5 w-full justify-between items-center shadow-lg border space-x-3 rounded-full mx-auto p-2 max-w-xl"
      >
        <GoSearch className="text-xl text-gray-500" />
        <input
          value={state}
          onChange={(e) => setState(e.target.value)}
          className="border-none outline-none flex-grow"
        />
        <HiMicrophone className="text-xl text-gray-500" />
      </form>
      <div className="flex flex-col space-y-2 sm:space-y-0 justify-center sm:flex-row items-center space-x-7 mt-4">
        <button className="btn">Google search</button>
        <button className="btn">I'm Feeling Lucky</button>
      </div>
    </>
  );
}
