"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { GoSearch } from "react-icons/go";
import { AiOutlineCamera } from "react-icons/ai";

export default function SearchHeaderOptions() {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const searchTerms = searchParams.get("searchTerm");
  const router = useRouter();
  const handleChangeTab = (tab) => {
    router.push(
      `/search/${tab === "Images" ? "image" : "web"}?searchTerm=${searchTerms}`
    );
  };

  return (
    <div className="flex items-center space-x-2 select-none border-b w-full justify-center lg:justify-start lg:pl-52 text-gray-700 text-sm">
      <div
        onClick={() => handleChangeTab("All")}
        className={`flex items-center space-x-2 border-b-4 border-transparent active:text-blue-500 cursor-pointer pb-3 px-2 ${
          pathName === "/search/web" && "!text-blue-600 !border-blue-600"
        }`}
      >
        <GoSearch className="text-md" />
        <p>All</p>
      </div>
      <div
        onClick={() => handleChangeTab("Images")}
        className={`flex items-center space-x-2 border-b-4 border-transparent active:text-blue-500 cursor-pointer pb-3 px-2 ${
          pathName === "/search/image" && "!text-blue-600 !border-blue-600"
        }`}
      >
        <AiOutlineCamera className="text-md" />
        <p>Images</p>
      </div>
    </div>
  );
}
