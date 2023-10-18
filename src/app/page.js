import HomeHeader from "@/components/homeHeader";
import HomeSearch from "@/components/homeSearch";

export default function Home() {
  return (
    <>
      {/* header */}
      <HomeHeader />

      {/* body */}
      <div className="flex flex-col justify-center items-center h-[75vh] m-4">
        <img
          alt="Google Background"
          width="300px"
          height="auto"
          src="/images/bgGoogle.png"
        />
        <HomeSearch />
      </div>
    </>
  );
}
