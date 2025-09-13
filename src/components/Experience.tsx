import React from "react";
import Container from "./core/container";
import Image from "next/image";
import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section className="relative overflow-hidden py-16">
      <Container>
        <div>
          <div className="flex flex-col items-center gap-4 p-6 pb-24 text-center">
            <h2 className="font-family-bebas-neue max-w-xl text-4xl leading-none font-medium text-white md:text-5xl">
              From learning to code to building solutions for the web
            </h2>
            <p className="w-full max-w-lg text-base">
              Each project I’ve worked on has been an opportunity to solve
              real-world problems and push my skills further. From dynamic web
              applications to scalable systems, these are just a few projects
              I’ve developed over time.
            </p>
          </div>
          {experience.map((_, i) => (
            <div key={i} className="grid w-full grid-cols-3">
              <div className="col-span-3 md:col-span-1">
                <div className="flex flex-col items-start justify-center p-6">
                  <time className="font-family-mono text-xs text-white uppercase">
                    {_.start_date} - {_.end_date}
                  </time>
                </div>
              </div>
              <div className="col-span-3 md:col-span-2">
                <div className="flex flex-col divide-y divide-dashed divide-zinc-900">
                  <div className="flex w-full">
                    <div className="flex flex-1 flex-col gap-6 p-6">
                      <div className="flex items-start gap-2">
                        <div className="flex items-center justify-center overflow-hidden">
                          <Image src={_.icon} alt="" width={52} height={52} />
                        </div>
                        <div className="flex flex-1 flex-col gap-1 **:leading-none">
                          <h3 className="text-base font-medium text-white">
                            {_.designation}
                          </h3>
                          <div className="flex items-center gap-2">
                            <p className="text-sm">{_.organization}</p>
                            <span>·</span>
                            <p className="text-sm">{_.type}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <p className="text-sm">{_.location}</p>
                            <span>·</span>
                            <p className="text-sm">{_.location_type}</p>
                          </div>
                        </div>
                      </div>
                      <div className="prose dark:prose-invert prose-p:mb-2 prose-p:mt-1 prose-p:text-sm prose-zinc dark:prose-p:text-zinc-400">
                        {_.description.map((p, i) => (
                          <p key={i}>{p}</p>
                        ))}
                      </div>
                    </div>
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
