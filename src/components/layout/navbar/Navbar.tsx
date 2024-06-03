"use client";
import { SIZE_ICON } from "@/constants/common";
import { useLayout } from "@/hooks/layout";
import React from "react";
import { HiMenu } from "react-icons/hi";
import { getTranslation } from "@/locales/i18n";
import { NavbarSearch } from "./NavbarSearch";
import { NavbarNotification } from "./NavbarNotification";
import { NavbarProfile } from "./NavbarProfile";

export const Navbar = () => {
  const { t, i18n } = getTranslation();
  const { sidebarOpen, setSidebarOpen } = useLayout();

  return (
    <div className="h-16 bg-white flex justify-between items-center px-2 relative">
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="lg:hidden"
      >
        <HiMenu size={SIZE_ICON} />
      </button>
      <div className="flex items-center justify-between w-full px-4">
        <NavbarSearch />
        <div className="flex items-center gap-4">
          <NavbarNotification />
          <NavbarProfile />
        </div>
      </div>
    </div>
  );
};
