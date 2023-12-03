// import { Navbar } from "@/components/navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog App with Dynamic Routing",
  description: "Blog App | PIAIC Quarter 2 Assignment #03 created by hc-huxai",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* <Navbar /> */}
      {children}
    </>
  );
}
