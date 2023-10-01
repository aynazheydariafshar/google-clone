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
  const randomSearch = async () => {
    const response = await fetch("https://api.api-ninjas.com/v1/randomword", {
      method: "GET",
      headers: {
        "X-Api-Key": "Or+UpiCtAlvYmFv0thdwWA==ffKr00HLk2U2jC4R",
      },
    })
      .then((response) => response.json())
      .then((data) => router.push(`/search/web?searchTerm=${data.word}`));
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
        <button onClick={handleSubmit} className="btn">
          Google search
        </button>
        <button onClick={randomSearch} className="btn">
          I'm Feeling Lucky
        </button>
      </div>
    </>
  );
}
