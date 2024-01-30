import React from "react";
import { LayoutProps } from "@types";
import Footer from "@components/footer";
import Header from "@components/header";

export default function Layout(props: LayoutProps) {
  const { children } = props;

  return (
    <div className="flex h-full min-h-screen flex-col">
      <Header></Header>
      <main className="flex-1">{children}</main>
      <Footer></Footer>
    </div>
  );
}