import Button from "@/components/Button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* <div classNameName="flex flex-col relative items-center  justify-center h-screen  overflow-hidden bg-black ">
        {/* <div classNameName="w-80 h-80 rounded-full absolute bottom-[-100px] bg-[radial-gradient(circle,rgba(38,139,221,0.8)_0%,rgba(38,139,221,0)_100%)]" />
        Hello */}
        {/* <Button />
        <Image src={"Ellipse361.svg"} alt="image" width="400" height={400} className=" absolute bottom-0 right-0  blur-[170px]"  /> */}

      {/* </div> */}
  <div className="min-h-screen bg-[url('/grid3.png')]  bg-[length:100px_100px]">
  <div className="flex items-center justify-center min-h-screen">
    <h1 className="text-4xl font-bold text-gray-800 bg-white/80 p-6 rounded-xl shadow-lg">
      ShipX Home Page
    </h1>
  </div>
</div>

    </>
  );
}
