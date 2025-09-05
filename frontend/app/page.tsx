import Button from "@/components/Button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-col relative items-center  justify-center h-screen  overflow-hidden bg-black ">
        {/* <div className="w-80 h-80 rounded-full absolute bottom-[-100px] bg-[radial-gradient(circle,rgba(38,139,221,0.8)_0%,rgba(38,139,221,0)_100%)]" />
        Hello */}
        {/* <Button /> */}
        <Image src={"Ellipse361.svg"} alt="image" width="400" height={400} className=" absolute bottom-0 right-0  blur-[170px]"  />

      </div>
    </>
  );
}
