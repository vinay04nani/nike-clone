"use client";

import type { ReactNode } from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export function ClientBody({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <body className="min-h-screen bg-background antialiased">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </body>
  );
}
