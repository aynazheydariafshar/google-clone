"use client";

import { RxCross2 } from "react-icons/rx";
import { GoSearch } from "react-icons/go";
import { HiMicrophone } from "react-icons/hi";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function SearchBox() {
  const searchParams = useSearchParams();
  const searchTerms = searchParams.get("searchTerm") || "";
  const [term, setTerm] = useState(searchTerms || "");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!term.trim()) return;
    router.push(`/search/web?searchTerm=${term}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex space-x-3 border border-gray-200 rounded-full shadow-lg px-6 py-3 ml-10 mr-5 max-w-3xl items-center flex-grow"
    >
      <input
        onChange={(e) => setTerm(e.target.value)}
        value={term}
        type="text"
        className="w-full focus:outline-none "
      />
      <RxCross2
        onClick={() => setTerm("")}
        className="text-2xl text-gray-500 cursor-pointer sm:mr-2"
      />
      <HiMicrophone className="hidden sm:inline-flex text-4xl text-blue-500 pl-4 border-l-2 border-gray-300" />
      <GoSearch
        onClick={handleSubmit}
        className="text-2xl hidden sm:inline-flex text-blue-500 cursor-pointer"
      />
    </form>
  );
}
