import React from "react";

import Container from "@/components/Container";
import UserLayout from "@/layouts/UserLayout";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <UserLayout>
      <Container className="w-full h-full">
        <div className="w-full h-full grid lg:grid-cols-12 gap-[3rem]">
          <div className="col-start-6 col-span-2 flex flex-col justify-center">{children}</div>
        </div>
      </Container>
    </UserLayout>
  );
}
