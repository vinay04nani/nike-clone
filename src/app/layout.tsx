import type { Metadata } from "next";
import "./globals.css";
import { ClientBody } from "./ClientBody";

export const metadata: Metadata = {
  title: "Nike. Just Do It. Nike IN",
  description: "Nike delivers innovative products, experiences and services to inspire athletes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="https://www.nike.com/favicon.ico" />
      </head>
      <ClientBody>
        {children}
      </ClientBody>
    </html>
  );
}
