import React from "react";
import { ArrowBigDownDash, LayoutGrid } from "lucide-react";
import Container from "./core/container";
import Link from "next/link";
import Button from "./core/button";
import TimeComponent from "./TimeComponent";
import OpenToWork from "./OpenToWork";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-cover bg-center">
      <Container>
        <div className="bg-zinc-950 p-6">
          <div className="flex flex-col items-center gap-6 py-32">
            <h2 className="font-family-caryon mx-auto w-full max-w-3xl text-center text-4xl leading-none text-white md:text-5xl">
              Sooraj Janardhanan{" "}
              <Image
                src="/images/sooraj.jpg"
                className="inline-block size-10 rounded-full border border-zinc-900 object-cover grayscale lg:size-12"
                alt=""
                width={56}
                height={56}
              />{" "}
              — Frontend Developer building modern, responsive, and delightful
              web experiences.
            </h2>
            <p className="mx-auto w-full max-w-xl text-center text-base">
              Frontend Developer at Picominds, specializing in crafting
              high-quality, user-focused web applications. I build scalable,
              accessible, and performant interfaces that align with business
              goals while delivering exceptional user experiences.
            </p>
            <div className="flex flex-col items-center gap-4">
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button asChild={true}>
                  <Link href={"/"}>
                    <LayoutGrid className="fill-zinc-950" />
                    <p>Explore my works</p>
                  </Link>
                </Button>
                <Button variant="secondary" asChild={true}>
                  <Link href={"/"}>
                    <ArrowBigDownDash className="fill-white" />
                    <p>Download resume</p>
                  </Link>
                </Button>
              </div>
              <div className="mt-2 flex flex-wrap items-center justify-center gap-1 divide-x divide-zinc-800 text-xs *:px-2 *:whitespace-nowrap">
                <OpenToWork open={true} />
                <TimeComponent />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
