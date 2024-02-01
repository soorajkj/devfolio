import React, { Fragment } from "react";
import Experience from "@components/experience";
import Hero from "@components/hero";
import Temp from "@components/temp";

export default function Page() {
  return (
    <Fragment>
      <Hero />
      <Experience />
      <Temp />
    </Fragment>
  );
}
