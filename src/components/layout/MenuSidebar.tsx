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
          <li className="menu nav-item">
            <button
              type="button"
              className={`${
                currentMenu === "dashboard" ? "active" : ""
              } nav-link group w-full`}
              onClick={() => toggleMenu("dashboard")}
            >
              <div className="flex items-center">
                <IconMenuDashboard className="shrink-0 group-hover:!text-primary" />
                <span className="text-black pl-3 dark:text-[#506690] dark:group-hover:text-white-dark">
                  {t("dashboard")}
                </span>
              </div>
              <div
                className={
                  currentMenu !== "dashboard" ? "-rotate-90 rtl:rotate-90" : ""
                }
              >
                <IconCaretDown />
              </div>
            </button>
            <AnimateHeight
              duration={300}
              height={currentMenu === "dashboard" ? "auto" : 0}
            >
              <ul className="sub-menu text-gray-500">
                <li>
                  <Link href="/">{t("sales")}</Link>
                </li>
                <li>
                  <Link href="/analytics">{t("analytics")}</Link>
                </li>
                <li>
                  <Link href="/finance">{t("finance")}</Link>
                </li>
                <li>
                  <Link href="/crypto">{t("crypto")}</Link>
                </li>
              </ul>
            </AnimateHeight>
          </li>
          <h2 className="-mx-4 mb-1 flex items-center bg-white-light/30 px-7 py-3 font-extrabold uppercase dark:bg-dark dark:bg-opacity-[0.08]">
            {minimizeSidebar ? (
              <span>{t("apps")}</span>
            ) : (
              <IconMinus className="h-5 w-5 flex-none" />
            )}
          </h2>
          <li className="nav-item">
            <ul>
              <li className="nav-item">
                <Link href="/apps/chat" className="group">
                  <div className="flex items-center">
                    <IconMenuChat className="shrink-0 group-hover:!text-primary" />
                    <span className="text-black pl-3 dark:text-[#506690] dark:group-hover:text-white-dark">
                      {t("chat")}
                    </span>
                  </div>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/apps/mailbox" className="group">
                  <div className="flex items-center">
                    <IconMenuMailbox className="shrink-0 group-hover:!text-primary" />
                    <span className="text-black pl-3 dark:text-[#506690] dark:group-hover:text-white-dark">
                      {t("mailbox")}
                    </span>
                  </div>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/apps/todolist" className="group">
                  <div className="flex items-center">
                    <IconMenuTodo className="shrink-0 group-hover:!text-primary" />
                    <span className="text-black pl-3 dark:text-[#506690] dark:group-hover:text-white-dark">
                      {t("todo_list")}
                    </span>
                  </div>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/apps/notes" className="group">
                  <div className="flex items-center">
                    <IconMenuNotes className="shrink-0 group-hover:!text-primary" />
                    <span className="text-black pl-3 dark:text-[#506690] dark:group-hover:text-white-dark">
                      {t("notes")}
                    </span>
                  </div>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/apps/scrumboard" className="group">
                  <div className="flex items-center">
                    <IconMenuScrumboard className="shrink-0 group-hover:!text-primary" />
                    <span className="text-black pl-3 dark:text-[#506690] dark:group-hover:text-white-dark">
                      {t("scrumboard")}
                    </span>
                  </div>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/apps/contacts" className="group">
                  <div className="flex items-center">
                    <IconMenuContacts className="shrink-0 group-hover:!text-primary" />
                    <span className="text-black pl-3 dark:text-[#506690] dark:group-hover:text-white-dark">
                      {t("contacts")}
                    </span>
                  </div>
                </Link>
              </li>
              <li className="menu nav-item">
                <button
                  type="button"
                  className={`${
                    currentMenu === "invoice" ? "active" : ""
                  } nav-link group w-full`}
                  onClick={() => toggleMenu("invoice")}
                >
                  <div className="flex items-center">
                    <IconMenuInvoice className="shrink-0 group-hover:!text-primary" />
                    <span className="text-black pl-3 dark:text-[#506690] dark:group-hover:text-white-dark">
                      {t("invoice")}
                    </span>
                  </div>
                  <div
                    className={
                      currentMenu !== "invoice"
                        ? "-rotate-90 rtl:rotate-90"
                        : ""
                    }
                  >
                    <IconCaretDown />
                  </div>
                </button>
                <AnimateHeight
                  duration={300}
                  height={currentMenu === "invoice" ? "auto" : 0}
                >
                  <ul className="sub-menu text-gray-500">
                    <li>
                      <Link href="/apps/invoice/list">{t("list")}</Link>
                    </li>
                    <li>
                      <Link href="/apps/invoice/preview">{t("preview")}</Link>
                    </li>
                    <li>
                      <Link href="/apps/invoice/add">{t("add")}</Link>
                    </li>
                    <li>
                      <Link href="/apps/invoice/edit">{t("edit")}</Link>
                    </li>
                  </ul>
                </AnimateHeight>
              </li>
              <li className="nav-item">
                <Link href="/apps/calendar" className="group">
                  <div className="flex items-center">
                    <IconMenuCalendar className="shrink-0 group-hover:!text-primary" />
                    <span className="text-black pl-3 dark:text-[#506690] dark:group-hover:text-white-dark">
                      {t("calendar")}
                    </span>
                  </div>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </PerfectScrollbar>
    </div>
  );
};
