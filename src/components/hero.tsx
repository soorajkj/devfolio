import React from "react";
import Container from "@components/core/container";
import Button from "./core/button";

export default function Hero() {
  return (
    <section className="df-hero relative">
      <Container>
        <div className="flex min-h-96 flex-col items-center justify-center py-12">
          <div className="mb-4 text-center font-family-bebas-neue text-7xl text-white">
            I build things for the Web
          </div>
          <p
            className="df-hero__desc mb-12 text-center text-lg font-medium"
            style={{ maxWidth: "624px" }}
          >
            I&apos;m a software engineer specializing in building (and
            occasionally designing) exceptional digital experiences. Currently,
            I&apos;m focused on building accessible, human-centered products at
            Stratagile.
          </p>
          <Button variant="primary">Explore my works</Button>
        </div>
      </Container>
    </section>
  );
}
