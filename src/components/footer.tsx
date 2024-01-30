import React from "react";
import Container from "@components/core/container";

export default function Footer() {
  return (
    <footer className="df-footer relative h-auto w-full border-t">
      <Container>
        <div className="flex flex-col">
          <div className="flex flex-col items-center justify-between py-8 lg:flex-row lg:items-end">
            <div>
              <p className="max-w-96 font-family-roboto-mono text-sm leading-normal">
                Designed in Figma and coded in Visual Studio Code. Built with
                Next.js and Tailwind CSS, deployed with Vercel.
              </p>
            </div>
            <div className="flex items-center gap-6 whitespace-nowrap font-family-roboto-mono text-sm">
              <a className="-mx-1 hidden px-1 lg:block" href="">
                +91-9946953968
              </a>
              <a className="-mx-1 hidden px-1 lg:block" href="">
                soorajkj46@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between border-neutral-300/10 py-4 font-family-roboto-mono text-sm lg:flex-row lg:border-t">
          <p>© {new Date().getFullYear()} codefolio.dev</p>
        </div>
      </Container>
    </footer>
  );
}
