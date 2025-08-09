import { Fragment } from "react";
import About from "@/components/About";
import Experience from "@/components/Experience";
import GetInTouch from "@/components/GetInTouch";
import Hero from "@/components/Hero";

export default function Page() {
  return (
    <Fragment>
      <Hero />
      <About />
      <Experience />
      <GetInTouch />
    </Fragment>
  );
}
