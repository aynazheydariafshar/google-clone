import { CgMenuGridO } from "react-icons/cg";

export default function HomeHeader() {
  return (
    <div className="flex justify-end items-center p-5 gap-4">
      <button>Gmail</button>
      <button>Images</button>
      <button className="text-2xl">
        <CgMenuGridO />
      </button>
      <button className="bg-blue-500 text-white py-1 px-4 rounded-md text-base">
        Sign in
      </button>
    </div>
  );
}
