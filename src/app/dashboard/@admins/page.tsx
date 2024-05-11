import { wait } from "@/lib";
import React from "react";

export default async function AdminPage() {
  await wait(3000);
  return (
    <div>
      <p>AdminPage</p>
    </div>
  );
}
