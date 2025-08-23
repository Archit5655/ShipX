import Button from "@/components/Button";

export default function Home() {
  return (
    <>
      <div className="flex flex-col relative items-center justify-center h-screen bg-yellow-500 overflow-hidden">
        <div className="w-80 h-80 rounded-full absolute bottom-[-100px] bg-[radial-gradient(circle,rgba(38,139,221,0.8)_0%,rgba(38,139,221,0)_100%)]" />
        Hello
        {/* <Button /> */}
      </div>
    </>
  );
}
