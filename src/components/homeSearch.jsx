"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { GoSearch } from "react-icons/go";
import { HiMicrophone } from "react-icons/hi";

export default function HomeSearch() {
  const [state, setState] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!state.trim()) return;
    router.push(`/search/web?searchTerm=${state}`);
  };
  const randomSearch = async () => {
    setLoading(true);
    const response = await fetch("https://api.api-ninjas.com/v1/randomword", {
      method: "GET",
      headers: {
        "X-Api-Key": process.env.NEXT_PUBLIC_RANDOM_API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        router.push(`/search/web?searchTerm=${data.word}`);
      });
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex mt-5 w-full justify-between items-center shadow-lg border space-x-3 rounded-full mx-auto px-5 py-3 max-w-xl"
      >
        <GoSearch
          onClick={handleSubmit}
          className="text-xl cursor-pointer hover:shadow-xl hover:text-blue-700 text-gray-500"
        />
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
        <button
          disabled={loading}
          onClick={randomSearch}
          className="btn disabled:opacity-50 flex items-center justify-center"
        >
          {loading ? (
            <div
              class="inline-block h-7 w-7 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status"
            ></div>
          ) : (
            "I'm Feeling Lucky"
          )}
        </button>
      </div>
    </>
  );
}
