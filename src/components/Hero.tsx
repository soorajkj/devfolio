"use client";

import React from "react";
import Container from "./core/container";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import Link from "next/link";
import Button from "./core/button";
import { ArrowBigDownDash, LayoutGrid } from "lucide-react";

dayjs.extend(utc);
dayjs.extend(timezone);

const tz = "Etc/GMT+12";
const time = dayjs().tz(tz).format("HH:mm [(UTC] Z[)]");

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-cover bg-center">
      <Container>
        <div className="bg-zinc-950">
          <div className="flex flex-col items-center gap-6 py-44">
            <h2 className="font-family-bebas-neue mx-auto w-full max-w-2xl text-center text-5xl leading-none text-white md:text-7xl">
              I build high quality solutions for the internet.
            </h2>
            <p className="mx-auto w-full max-w-xl text-center text-lg">
              Specializing in crafting high-quality, user-centric digital
              experiences. I collaborate with clients to build scalable and
              accessible products that meet business goals while delivering
              exceptional results.
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
              <div className="flex flex-wrap items-center justify-center gap-px divide-x divide-zinc-800 text-xs *:px-2 *:whitespace-nowrap">
                <span>Open to work</span>
                <span>{time}</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
