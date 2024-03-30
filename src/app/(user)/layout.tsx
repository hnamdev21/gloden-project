import React from "react";

import UserLayout from "@/layouts/UserLayout";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <UserLayout>{children}</UserLayout>;
}
