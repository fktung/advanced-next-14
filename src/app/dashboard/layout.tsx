import React from "react";

const useRole = () => {
  return "admin";
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
      <h1>Dashboard Layout</h1>
      <div>{children}</div>
      {users}
      {admins}
    </div>
  );
}
