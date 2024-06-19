import React, { useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import AnimateHeight from "react-animate-height";
import IconMenuDashboard from "@/components/icon/menu/icon-menu-dashboard";
import IconCaretDown from "@/components/icon/icon-caret-down";
import IconMinus from "@/components/icon/icon-minus";
import IconMenuChat from "@/components/icon/menu/icon-menu-chat";
import IconMenuMailbox from "@/components/icon/menu/icon-menu-mailbox";
import IconMenuTodo from "@/components/icon/menu/icon-menu-todo";
import IconMenuNotes from "@/components/icon/menu/icon-menu-notes";
import IconMenuScrumboard from "@/components/icon/menu/icon-menu-scrumboard";
import IconMenuContacts from "@/components/icon/menu/icon-menu-contacts";
import IconMenuInvoice from "@/components/icon/menu/icon-menu-invoice";
import IconMenuCalendar from "@/components/icon/menu/icon-menu-calendar";
import Link from "next/link";
import { getTranslation } from "@/locales/i18n";
import { useLayout } from "@/hooks/layout";
import { MENU_ITEMS } from "@/constants/menu_items";
import { ICONS_MENU } from "@/constants/IconsMenu";

export const MenuSidebar = () => {
  const { t } = getTranslation();
  const { minimizeSidebar } = useLayout();
  const [currentMenu, setCurrentMenu] = useState<string>("");
  const toggleMenu = (value: string) => {
    setCurrentMenu((oldValue) => {
      return oldValue === value ? "" : value;
    });
  };
  return (
    <div className="sidebar overflow-auto no-scrollbar">
      <PerfectScrollbar className="relative h-[calc(100vh-80px)] py-4">
        <ul className="relative space-y-0.5 p-3 py-0 font-semibold">
          {/* <h2 className="-mx-4 mb-1 flex items-center bg-white-light/30 px-7 py-3 font-extrabold uppercase dark:bg-dark dark:bg-opacity-[0.08]">
            {minimizeSidebar ? (
              <span>{t("apps")}</span>
            ) : (
              <IconMinus className="h-5 w-5 flex-none" />
            )}
          </h2> */}
          <li className="nav-item">
            <ul>
              {MENU_ITEMS.map((item, idx) => {
                if (item.link) {
                  return (
                    <li className="nav-item" key={idx}>
                      <Link href={item.link ?? ""} className="group">
                        <div className="flex items-center">
                          {ICONS_MENU[item.icon as keyof typeof ICONS_MENU]}
                          <span className="text-black pl-3 dark:text-[#506690] dark:group-hover:text-white-dark">
                            {t(item.name)}
                          </span>
                        </div>
                      </Link>
                    </li>
                  );
                }
                if (item.children) {
                  return (
                    <li className="menu nav-item" key={idx}>
                      <button
                        type="button"
                        className={`${
                          currentMenu === item.name ? "active" : ""
                        } nav-link group w-full`}
                        onClick={() => toggleMenu(item.name)}
                      >
                        <div className="flex items-center">
                          {ICONS_MENU[item.icon as keyof typeof ICONS_MENU]}
                          <span className="text-black pl-3 dark:text-[#506690] dark:group-hover:text-white-dark">
                            {t(item.name)}
                          </span>
                        </div>
                        <div
                          className={
                            currentMenu !== item.name
                              ? "-rotate-90 rtl:rotate-90"
                              : ""
                          }
                        >
                          <IconCaretDown />
                        </div>
                      </button>
                      <AnimateHeight
                        duration={300}
                        height={currentMenu === item.name ? "auto" : 0}
                      >
                        <ul className="sub-menu text-gray-500">
                          {item.children.map((child, i) => (
                            <li key={i}>
                              <Link href={child.link}>{t(child.name)}</Link>
                            </li>
                          ))}
                        </ul>
                      </AnimateHeight>
                    </li>
                  );
                }
              })}
            </ul>
          </li>
        </ul>
      </PerfectScrollbar>
    </div>
  );
};
