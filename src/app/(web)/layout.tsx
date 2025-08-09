import React, { PropsWithChildren } from "react";
import Header from "@/components/Header";
import Abstract from "@/components/Abstract";
import Footer from "@/components/Footer";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="flex h-full flex-col">
      <Header />
      <Abstract />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
