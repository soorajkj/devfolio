import React from "react";
import Link from "@components/core/link";

export default function Footer() {
  return (
    <footer className="relative hidden">
      <div className="container">
        <div className="flex flex-col">
          <div className="flex flex-col items-center justify-between py-8 lg:flex-row lg:items-end">
            <div className="static">
              <p className="max-w-md text-center font-family-roboto-mono text-sm leading-normal lg:text-left">
                Designed in <Link href={""}>Figma</Link> and coded in{" "}
                <Link href={""}>Visual Studio Code</Link>. Built with{" "}
                <Link href={""}>Next.js</Link> and{" "}
                <Link href={""}>Tailwind CSS</Link>, deployed with{" "}
                <Link href={""}>Vercel</Link>.
              </p>
            </div>
            <div className="flex items-center gap-6 whitespace-nowrap font-family-roboto-mono text-sm">
              <Link className="-mx-1 hidden px-1 lg:block" href="">
                +91-9946953968
              </Link>
              <Link className="-mx-1 hidden px-1 lg:block" href="">
                soorajkj46@gmail.com
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between py-4 font-family-roboto-mono text-sm lg:flex-row">
          <p>© {new Date().getFullYear()} codefolio.inc</p>
        </div>
      </div>
    </footer>
  );
}
