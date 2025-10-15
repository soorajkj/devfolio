import React from "react";
import Container from "./core/container";
import Project from "./Project";

export default function Projects() {
  return (
    <section className="relative overflow-hidden">
      <Container>
        <div>
          <div className="flex flex-col items-center gap-4 p-6 pb-24 text-center">
            <h2 className="font-family-caryon max-w-xl text-4xl leading-none font-medium text-white md:text-5xl">
              Here are some of the things that I&apos;ve built during my journey
            </h2>
            <p className="w-full max-w-lg text-base">
              From my Diploma in Computer Engineering, where I first developed a
              passion for building and problem-solving, to stepping into the
              professional world. This timeline highlights the key moments that
              have shaped my career in tech.
            </p>
          </div>
          <div className="grid gap-8 p-6 pb-12 sm:grid-cols-2 lg:grid-cols-3">
            <Project className="-translate-y-2 rotate-2" />
            <Project className="-rotate-2" />
            <Project className="translate-y-2 rotate-3" />
          </div>
        </div>
      </Container>
    </section>
  );
}
