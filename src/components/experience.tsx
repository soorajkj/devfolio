import React from "react";
import { Icon } from "@/components/core/icon";
import { _experience } from "@constants/_experience";

export default function Experience() {
  return (
    <section className="relative py-24">
      <div className="container">
        <div className="mb-16 flex flex-col items-center">
          <p className="text-sm font-bold uppercase">Better Stack for good</p>
          <h2 className="mt-4 text-center text-4xl font-bold text-white">
            Relavent Expericence
          </h2>
          <p className="mx-auto mt-5 text-center" style={{ maxWidth: "624px" }}>
            Open source plays a major part in how we build our products.
            We&apos;re proud to give back and support the makers behind these
            amazing projects.
          </p>
        </div>
        <div className="grid grid-cols-12 pl-4 lg:gap-0 lg:pl-0">
          {_experience.map((_, i) => (
            <div
              key={i}
              className="relative col-span-12 pb-12 after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-px after:bg-gray-800/50 last:pb-0 lg:after:left-[calc(25%+4px)]"
            >
              <div className="grid grid-cols-12 lg:gap-8">
                <div className="col-span-12 flex items-start gap-2 lg:sticky lg:bottom-24 lg:top-24 lg:col-span-3 lg:flex-1 lg:flex-row-reverse lg:items-center lg:gap-0 lg:self-start">
                  <div className="flex -translate-x-3 items-center justify-center lg:translate-x-10">
                    <span className="inline-flex h-8 w-6 items-center justify-center rounded-none dark:bg-gray-950 dark:text-gray-600">
                      <Icon
                        icon={_.icon}
                        strokeWidth={1.5}
                        width={20}
                        height={20}
                      ></Icon>
                    </span>
                  </div>
                  <p className="mb-4 inline-flex flex-1 text-sm leading-none text-gray-500 lg:mb-0 lg:justify-end lg:text-right dark:text-gray-400">
                    {_.start.toString()} - {_.end.toString()}
                  </p>
                </div>
                <div className="col-span-12 pl-12 lg:col-span-9 dark:border-gray-800">
                  <div className="flex flex-col">
                    <h3 className="mb-2 text-lg font-semibold leading-none text-gray-950 dark:text-gray-200">
                      {_.role}
                    </h3>
                    <div className="space-x-2">
                      <span className="cursor-pointer font-medium text-gray-300">
                        {_.org}
                      </span>
                      <span className="dark:text-gray-400">, {_.location}</span>
                    </div>
                    <ul className="flex list-disc flex-col space-y-2 pl-4 pt-6">
                      <li>
                        Today’s the day — we just published the first
                        development preview of Catalyst, our first
                        fully-componentized, batteries-included application UI
                        kit for React, just in time for your holiday hacking
                        sessions.
                      </li>
                      <li>
                        which includes a brand new micro style — a full set of
                        almost three hundred 16×16 icons designed for tighter,
                        higher density UIs.
                      </li>
                      <li>
                        Today’s the day — we just published the first
                        development preview of Catalyst, our first
                        fully-componentized, batteries-included application UI
                        kit for React, just in time for your holiday hacking
                        sessions.
                      </li>
                      <li>
                        which includes a brand new micro style — a full set of
                        almost three hundred 16×16 icons designed for tighter,
                        higher density UIs.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
