import HomeHeader from "@/components/homeHeader";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* header */}
      <HomeHeader />

      {/* body */}
      <div className="flex flex-col justify-center items-center mt-24">
        <Image
          // alt="Google Background"
          priority
          width="300"
          height="100"
          src="/images/bgGoogle.png"
        />
        
      </div>
    </>
  );
}
