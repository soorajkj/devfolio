import React from "react";
import Container from "@components/core/container";
import Button from "./core/button";

export default function Hero() {
  return (
    <section
      className="df-hero relative pb-24 pt-24"
      style={{
        background:
          "radial-gradient(ellipse at top,rgba(91,99,211,0.06),transparent 60%)",
      }}
    >
      <Container>
        <div className="flex min-h-96 flex-col items-center justify-center">
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
          <p className="bg-gray-500 text-white ring-offset-gray-950 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 dark:bg-gray-800/40 dark:text-gray-400 dark:hover:bg-gray-400 dark:focus:ring-gray-700 dark:focus:ring-offset-gray-950"></p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="secondary">Download Resume</Button>
            <Button variant="primary">Explore My Works</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
