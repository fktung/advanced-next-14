"use client";
import { SIZE_ICON } from "@/constants/common";
import { useLayout } from "@/hooks/layout";
import React from "react";
import { HiMenu } from "react-icons/hi";

export const Navbar = () => {
  const { sidebarOpen, setSidebarOpen } = useLayout();
  return (
    <div className="h-16 bg-blue-500 flex justify-between items-center px-2">
      <button onClick={() => setSidebarOpen(!sidebarOpen)}>
        <HiMenu size={SIZE_ICON} />
      </button>
      <p>Navbar</p>
    </div>
  );
};
