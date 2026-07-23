import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-poppins dark:bg-slate-900">
      <main className="flex flex-col flex-1 w-full">
        <Navbar />
      </main>
    </div>
  );
}
