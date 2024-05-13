import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-red-400">
      <p>home</p>
      <Link href={"/dashboard"}>Dashboard</Link>
    </div>
  );
}
