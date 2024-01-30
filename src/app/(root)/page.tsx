import React, { Fragment } from "react";
import Experience from "@components/experience";
import Hero from "@components/hero";
import Technologies from "@components/technologies";

export default function Page() {
  return (
    <Fragment>
      <Hero />
      <Experience />
      <Technologies />
    </Fragment>
  );
}
