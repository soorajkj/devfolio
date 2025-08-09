import React from "react";
import Container from "./core/container";
import LinkedIn from "../../public/icons/handles/linkedin.svg";
import Github from "../../public/icons/handles/github.svg";
import X from "../../public/icons/handles/x.svg";
import Instagram from "../../public/icons/handles/instagram.svg";
import Gmail from "../../public/icons/handles/gmail.svg";
import Link from "next/link";

const handles = [
  {
    handle: "Email",
    icon: <Gmail />,
    url: "mailto:soorajkj46@gmail.com",
  },
  {
    handle: "LinkedIn",
    icon: <LinkedIn />,
    url: "https://www.linkedin.com/in/soorajkj",
  },
  {
    handle: "GitHub",
    icon: <Github />,
    url: "https://github.com/soorajkj",
  },
  {
    handle: "X (Twitter)",
    icon: <X />,
    url: "https://x.com/soorajkj7",
  },
  {
    handle: "Instagram",
    icon: <Instagram />,
    url: "https://www.instagram.com/not.sooraj",
  },
];

export default function GetInTouch() {
  return (
    <section className="relative overflow-hidden">
      <Container>
        <div className="relative border-y border-zinc-900 py-16">
          <div className="grid grid-cols-3 gap-px">
            <div className="col-span-3 md:col-span-2">
              <div className="flex flex-col gap-4 p-6">
                <h2 className="font-family-bebas-neue text-4xl font-medium text-white md:text-5xl">
                  Get in touch
                </h2>
                <p className="text-sm">
                  Although I&apos;m not currently looking for any new
                  opportunities, my inbox is always open. Whether you have a
                  question or just want to say hi, I&apos;ll try my best to get
                  back to you!
                </p>
                <div className="flex flex-wrap items-center gap-2">
                  {handles.map((_, i) => (
                    <Link
                      key={i}
                      href={_.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex size-10 items-center justify-center gap-1 border border-neutral-900 px-2"
                    >
                      <span className="size-5 text-white">{_.icon}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
