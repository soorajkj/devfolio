"use client";

import React from "react";
import Tilt from "react-parallax-tilt";
import Container from "@components/core/container";

export default function Archives() {
  const _temp = null;

  return (
    <section className="py-4">
      <Container>
        <div className="grid grid-cols-12 gap-4">
          {Array.from({ length: 8 }).map((_i, idx) => (
            <Tilt
              key={idx}
              className="relative col-span-3 flex min-h-80 cursor-pointer flex-col overflow-hidden rounded-lg border border-neutral-900 bg-neutral-900/20"
              tiltEnable={false}
              glareEnable={true}
              glareMaxOpacity={0.1}
              glarePosition="all"
            >
              <div className="px-6 py-6">
                <h4 className="font-medium text-neutral-400">
                  Apple Music Embeddable Web Player Widget
                </h4>
                <p className="my-4">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Magni quidem id provident reprehenderit impedit quisquam!
                  Tempora quia maxime laborum laboriosam voluptatibus quos!
                </p>
                <ul className="flex items-center gap-4 text-sm">
                  <li>Next.js</li>
                  <li>Tailwind CSS</li>
                  <li>Firebase</li>
                </ul>
              </div>
            </Tilt>
          ))}
        </div>
      </Container>
    </section>
  );
}
