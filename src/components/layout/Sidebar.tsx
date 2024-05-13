"use client";
import { SIZE_ICON } from "@/constants/common";
import { useLayout } from "@/hooks/layout";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";

export const Sidebar = () => {
  const { sidebarOpen, setSidebarOpen } = useLayout();
  return (
    <div
      className={`max-w-72 w-full bg-yellow-400/50 absolute top-0 bottom-0 ${
        sidebarOpen ? "left-0" : "-left-[100%]"
      } transition-all duration-300`}
    >
      <div className="h-16 bg-purple-300 relative">
        logo
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="absolute right-4 top-0 bottom-0"
        >
          <AiOutlineClose size={SIZE_ICON} />
        </button>
      </div>
      <div>
        <p>Sidebar</p>
      </div>
    </div>
  );
};
