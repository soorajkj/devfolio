import { experience } from "@constants/experience";

export default function Experience() {
  return (
    <section className="relative py-24">
      <div className="container">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-12 lg:gap-0">
            {experience.map((_, i) => (
              <div
                key={i}
                className="relative col-span-12 border-b pb-12 pt-12 first:pt-0 last:border-b-0 last:pb-0 dark:border-b-zinc-800"
              >
                <div className="grid grid-cols-12 lg:gap-8">
                  <div className="top-24 col-span-12 leading-none lg:sticky lg:col-span-4 lg:self-start">
                    <p className="mb-4 inline-flex flex-1 text-sm leading-none text-zinc-500 lg:mb-0 lg:justify-end lg:text-right dark:text-zinc-400">
                      {_.period}
                    </p>
                  </div>
                  <div className="col-span-12 lg:col-span-8">
                    <div className="flex flex-col">
                      <h3 className="mb-2 text-lg font-semibold leading-none text-zinc-900 dark:text-zinc-200">
                        {_.role}
                      </h3>
                      <div className="space-x-2">
                        <span className="cursor-pointer font-medium text-zinc-300">
                          {_.organisation}
                        </span>
                        <span className="dark:text-zinc-400">
                          , {_.location}
                        </span>
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
      </div>
    </section>
  );
}
