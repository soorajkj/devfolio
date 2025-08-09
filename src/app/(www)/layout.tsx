import React, { PropsWithChildren } from "react";
import Abstract from "@/components/Abstract";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="flex h-full min-h-screen flex-col">
      <Header />
      <Abstract />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
