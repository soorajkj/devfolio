import React, { Fragment } from "react";
import About from "@components/about";
import Experience from "@components/experience";
import Hero from "@components/hero";
import Technologies from "@components/technologies";

export default function Page() {
  return (
    <Fragment>
      <Hero />
      <About />
      <Technologies />
      <Experience />
    </Fragment>
  );
}
