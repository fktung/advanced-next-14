import Link from "next/link";
import React from "react";

export default function SettingPage() {
  return (
    <div>
      <p>SettingPage</p>
      <Link href={"/dashboard"}>Dashboard</Link>
      <Link href={"/"}>Home</Link>
    </div>
  );
}
