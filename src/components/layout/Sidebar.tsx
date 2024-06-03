"use client";
import { SIZE_ICON } from "@/constants/common";
import { useLayout } from "@/hooks/layout";
import { URL_CDN } from "@/lib/config";
import Image from "next/image";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaChevronLeft } from "react-icons/fa";

export const Sidebar = () => {
  const { sidebarOpen, minimizeSidebar, setSidebarOpen, setMinimizeSidebar } =
    useLayout();
  return (
    <div
      className={`w-full max-h-fit h-screen absolute top-0 bottom-0 flex flex-col ${
        sidebarOpen ? "left-0" : "-left-[100%]"
      } ${
        minimizeSidebar ? "max-w-72" : "max-w-16"
      } transition-all duration-300`}
    >
      <div className="h-16 bg-purple-300 relative flex items-center px-4">
        <div className="relative h-12 aspect-[3/1] overflow-hidden">
          <Image
            src={URL_CDN + "/asset/b-logo.png"}
            alt="logo"
            fill
            objectFit={`cover`}
            objectPosition="left"
          />
        </div>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className={`absolute right-4 top-0 bottom-0 ${
            minimizeSidebar ? "right-4" : "-right-10"
          } transition-all duration-300`}
        >
          <AiOutlineClose size={SIZE_ICON} />
        </button>
      </div>
      <div className="bg-red-200 h-full relative">
        <p>Sidebar</p>
        <button
          className="absolute bottom-4 right-4"
          onClick={() => setMinimizeSidebar(!minimizeSidebar)}
        >
          <FaChevronLeft
            size={SIZE_ICON}
            className={`transition-all duration-300 ${
              !minimizeSidebar ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>
    </div>
  );
};
