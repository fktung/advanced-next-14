import React from "react";

const useRole = () => {
  return "user";
};

export default function DashboardLayout({
  children,
  admins,
  users,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  admins: React.ReactNode;
}) {
  const role = useRole();
  return (
    <div>
      <div>{children}</div>
      {role === "admin" ? admins : users}
    </div>
  );
}
