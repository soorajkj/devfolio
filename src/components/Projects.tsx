import React from "react";
import Container from "./core/container";
import Tailwindcss from "../../public/icons/tailwindcss.svg";
import Reactjs from "../../public/icons/reactjs.svg";
import Nextjs from "../../public/icons/nextjs.svg";
import Typescript from "../../public/icons/typescript.svg";
import Nodejs from "../../public/icons/nodejs.svg";
import Javascript from "../../public/icons/javascript.svg";

export default function Projects() {
  return (
    <section className="relative hidden overflow-hidden py-16">
      <Container>
        <div className="flex flex-col items-center gap-4 pb-24 text-center">
          <h2 className="font-family-bebas-neue max-w-screen-sm text-5xl leading-none text-white">
            Here are some of the things that I've built during my journey
          </h2>
          <p className="w-full max-w-lg text-base">
            Each project I’ve worked on has been an opportunity to solve
            real-world problems and push my skills further. From dynamic web
            applications to scalable systems, these are just a few projects I’ve
            developed over time.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-px bg-zinc-900 p-px">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="grid grid-cols-1 bg-zinc-950">
              <div className="flex flex-col">
                <div className="p-6">
                  <p className="mb-4 text-base font-medium text-white">
                    Build a Spotify Connected App
                  </p>
                  <p className="text-sm leading-normal whitespace-pre-line">
                    Generating notes directly from the video editor I'm building
                    with Claude AI I've always wanted the video editor to do 90%
                    of the work for me: generate transitions, zooms, voices,
                    captions, scripts, remove bg noise, and gen images/videos. I
                    want to store everything online and I want to edit on any
                    device, including my phone. I want to chat with my video.
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-2 *:size-4">
                    <Tailwindcss />
                    <Nextjs />
                    <Typescript />
                    <Nodejs />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
