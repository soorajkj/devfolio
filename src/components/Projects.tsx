import React from "react";
import Container from "./core/container";
import Project from "./Project";

export default function Projects() {
  return (
    <section className="relative overflow-hidden">
      <Container>
        <div>
          <div className="flex flex-col items-center gap-4 p-6 pb-24 text-center">
            <h2 className="font-family-bebas-neue max-w-xl text-4xl leading-none font-medium text-white md:text-5xl">
              Here are some of the things that I&apos;ve built during my journey
            </h2>
            <p className="w-full max-w-lg text-base">
              Each project I’ve worked on has been an opportunity to solve
              real-world problems and push my skills further. From dynamic web
              applications to scalable systems, these are just a few projects
              I’ve developed over time.
            </p>
          </div>
          <div className="grid gap-4 p-2 sm:grid-cols-2 lg:grid-cols-3">
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
          </div>
        </div>
      </Container>
    </section>
  );
}
