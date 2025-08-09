import React from "react";
import Container from "./core/container";
import Readme from "./Readme";

export default function About() {
  return (
    <section className="relative overflow-hidden">
      <Container>
        <div className="relative bg-zinc-950 py-16">
          <Readme />
        </div>
      </Container>
    </section>
  );
}
