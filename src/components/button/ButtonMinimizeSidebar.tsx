import { SIZE_ICON, SIZE_ICON_SM } from "@/constants/common";
import { useLayout } from "@/hooks/layout";
import React from "react";
import { FaChevronLeft } from "react-icons/fa";

export const ButtonMinimizeSidebar = (
  props: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
) => {
  const { minimizeSidebar, setMinimizeSidebar } = useLayout();
  return (
    <button onClick={() => setMinimizeSidebar(!minimizeSidebar)} {...props}>
      <FaChevronLeft
        size={SIZE_ICON_SM}
        className={`transition-all duration-300 ${
          minimizeSidebar ? "rotate-180" : ""
        }`}
      />
    </button>
  );
};
