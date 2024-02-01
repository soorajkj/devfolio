import React from "react";
import { _experience } from "@constants/_experience";
import Container from "@components/core/container";
import { Icon } from "@components/core/icon";

export default function Experience() {
  return (
    <section className="df-experience relative py-24">
      <Container>
        <div className="flex flex-col items-center">
          <div className="text-sm font-bold uppercase -tracking-wider">
            Better Stack for good
          </div>
          <h2 className="font-helveticaDisplay mt-4 text-center text-4xl font-bold text-white">
            Where I’ve Worked
          </h2>
          <p
            className="mx-auto mt-5 text-center text-[#C9D3EE]"
            style={{ maxWidth: "624px" }}
          >
            Open source plays a major part in how we build our products.
            We&apos;re proud to give back and support the makers behind these
            amazing projects.
          </p>
        </div>

        <div className="mt-24 grid gap-0 pl-4">
          {_experience.reverse().map((_i, idx) => (
            <div
              key={idx}
              className="df-experience__timeline grid border-l border-dashed pb-24 last:pb-0 lg:grid-cols-12 lg:gap-8"
            >
              <div className="col-span-12 self-start lg:sticky lg:top-20 lg:col-span-4">
                <div className="flex w-full gap-4">
                  <div className="df-experience__icon -ml-4 inline-flex aspect-square h-8 w-8 items-center justify-center overflow-hidden rounded-md border border-dashed">
                    <Icon icon={_i.icon} width={18} height={18} />
                  </div>
                  <div className="flex w-full flex-1 flex-col justify-center font-medium">
                    <p className="font-medium">
                      {`${_i.start.toString()} - ${_i.end.toString()}`}
                    </p>
                  </div>
                </div>
              </div>
              <div className="df-experience__card col-span-8 ml-8 lg:ml-0">
                <h4 className="df-experience__designation mb-2 text-xl font-semibold leading-tight">
                  {_i.role}
                </h4>
                <h3 className="df-experience__org mb-6 font-medium">
                  <span className="cursor-pointer no-underline underline-offset-4 hover:underline">
                    {_i.org}
                  </span>
                  <span className="df-experience__divider font-normal">
                    &nbsp;|&nbsp;
                  </span>
                  <span className="df-experience__location mb-6 text-base font-normal">
                    {_i.location}
                  </span>
                </h3>
                <ul className="flex list-outside list-disc flex-col gap-2 pl-4">
                  <li>
                    Deliver high-quality, robust production code for a diverse
                    array of projects for clients including Harvard Business
                    School, Everytown for Gun Safety, Pratt Institute, Koala
                    Health, Vanderbilt University, The 19th News, and more
                  </li>
                  <li>
                    Work alongside creative directors to lead the research,
                    development, and architecture of technical solutions to
                    fulfill business requirements
                  </li>
                  <li>
                    Collaborate with designers, project managers, and other
                    engineers to transform creative concepts into production
                    realities for clients and stakeholders
                  </li>
                  <li>
                    Provide leadership within engineering department through
                    close collaboration, knowledge shares, and mentorship
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
