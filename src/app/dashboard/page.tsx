import Link from "next/link";
import React from "react";

export default function DashBoardPage() {
  return (
    <div className="grid">
      <Link href={"/"}>Home</Link>
      <Link href={"/setting"}>setting</Link>
    </div>
  );
}
