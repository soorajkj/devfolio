import React from "react";
import Container from "@components/core/container";

export default function Journey() {
  return (
    <section className="experience">
      <Container>
        <ul className="flex flex-col py-24">
          {Array.from({ length: 8 })
            .fill("")
            .map((_item, i) => (
              <li key={i} className="relative flex w-full flex-col sm:flex-row">
                <div className="flex w-full pb-4 sm:w-44 sm:pb-0">
                  <p className="text-sm leading-none">
                    <time className="sticky top-24 inline-block leading-none">
                      2018 — Present
                    </time>
                  </p>
                </div>
                <div className="relative hidden sm:flex sm:w-36">
                  <div
                    className="sticky top-24 z-10 flex h-9 w-9 -translate-x-5 -translate-y-3 items-center justify-center rounded-lg border border-neutral-700 bg-neutral-950"
                    style={{
                      background:
                        "linear-gradient(rgb(27, 27, 27), rgb(3, 3, 3)) border-box border-box",
                    }}
                  ></div>
                  <div className="absolute left-0 top-0 h-full w-0.5 bg-neutral-900"></div>
                </div>
                <div className="mb-24 w-full flex-1">
                  <a href="">
                    <div className="space-y-4">
                      <div className="flex flex-col">
                        <h2 className="mb-4 line-clamp-5 text-2xl leading-none tracking-tight">
                          Lead Engineer
                        </h2>
                        <p className="text-neutral-400">
                          Build, style, and ship high-quality websites, design
                          systems, mobile apps, and digital experiences for a
                          diverse array of projects for clients including
                          Harvard Business School, Everytown for Gun Safety,
                          Pratt Institute, Koala Health, Vanderbilt University,
                          The 19th News, and more. Provide leadership within
                          engineering department through close collaboration,
                          knowledge shares, and spearheading the development of
                          internal tools.
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </li>
            ))}
        </ul>
      </Container>
    </section>
  );
}
