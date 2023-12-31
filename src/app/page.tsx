import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-neutral-900 flex flex-col items-center p-10 text-white h-screen w-screen">
      <h1 className="text-2xl mb-10">Matchmaker</h1>

      <div className="flex">
        <div className="flex">
          <label className="me-2" htmlFor="">
            1
          </label>
          <Input />
        </div>
      </div>

      <button className="">New</button>
    </main>
  );
}
