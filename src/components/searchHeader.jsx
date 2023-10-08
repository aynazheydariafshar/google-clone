import Image from "next/image";
import Link from "next/link";
import SearchBox from "./searchBox";
import { RiSettings3Line } from "react-icons/ri";
import { TbGridDots } from "react-icons/tb";
import SearchHeaderOptions from "./searchHeaderOptions";

export default function SearchHeader() {
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center justify-between">
        <Link href="">
          <Image
            alt="Google Background"
            priority
            width="0"
            height="0"
            sizes="100vw"
            className="w-[150px] h-auto"
            src="/images/bgGoogle.png"
          />
        </Link>
        <div className="flex-1">
          <SearchBox />
        </div>
        <div className="items-center justify-between hidden md:inline-flex space-x-3">
          <RiSettings3Line className="header-icon" />
          <TbGridDots className="header-icon" />
        </div>
        <button className="bg-blue-500 text-white py-2 px-5 rounded-md text-base hover:brightness-105 hover:shadow-md transition-all mx-4">
          Sign in
        </button>
      </div>
      <SearchHeaderOptions />
    </header>
  );
}
