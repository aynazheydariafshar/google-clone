import HomeHeader from "@/components/homeHeader";
import HomeSearch from "@/components/homeSearch";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* header */}
      <HomeHeader />

      {/* body */}
      <div className="flex flex-col justify-center items-center h-[75vh] m-4">
        <Image
          alt="Google Background"
          priority
          width="0"
          height="0"
          sizes="100vw"
          className="w-[300px] h-auto"
          src="/images/bgGoogle.png"
        />
        <HomeSearch />
      </div>
    </>
  );
}
