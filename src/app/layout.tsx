import "@styles/app.scss";

import type { Metadata } from "next";
import React from "react";

import GridDebugger from "@/components/GridDebugger";
import { font } from "@/utils/font";

export const metadata: Metadata = {
  title: "Project 04",
  description: "Project 04",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.ntr.className}>
        {children}
        <GridDebugger />
      </body>
    </html>
  );
}
