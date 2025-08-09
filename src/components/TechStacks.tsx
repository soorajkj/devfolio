import React from "react";
import Container from "./core/container";
import Tailwindcss from "../../public/icons/tailwindcss.svg";
import Reactjs from "../../public/icons/reactjs.svg";
import Nextjs from "../../public/icons/nextjs.svg";
import Typescript from "../../public/icons/typescript.svg";
import Nodejs from "../../public/icons/nodejs.svg";
import Javascript from "../../public/icons/javascript.svg";
import Webpack from "../../public/icons/webpack.svg";
import Gulp from "../../public/icons/gulpjs.svg";
import Git from "../../public/icons/git.svg";
import Github from "../../public/icons/github.svg";
import Storybook from "../../public/icons/storybook.svg";
import Postgressql from "../../public/icons/postgressql.svg";
import Express from "../../public/icons/express.svg";
import Monogodb from "../../public/icons/mongodb.svg";
import Npm from "../../public/icons/npm.svg";
import CSS from "../../public/icons/css.svg";
import HTML from "../../public/icons/html.svg";
import Vite from "../../public/icons/vite.svg";
import VSCode from "../../public/icons/vscode.svg";
import Redux from "../../public/icons/redux.svg";
import Sass from "../../public/icons/sass.svg";

function generateWavePattern(totalItems: number): number[] {
  const pattern: number[] = [];
  let steps = [2, 3, 2, 3];
  let i = 0;
  let remaining = totalItems;

  while (remaining > 0) {
    const next = steps[i % steps.length];
    pattern.push(Math.min(next, remaining));
    remaining -= next;
    i++;
  }

  return pattern;
}

const tools = [
  {
    name: "Tailwindcss",
    svg: <Tailwindcss />,
  },
  {
    name: "React JS",
    svg: <Reactjs />,
  },
  {
    name: "Next JS",
    svg: <Nextjs />,
  },
  {
    name: "Typescript",
    svg: <Typescript />,
  },
  {
    name: "Node JS",
    svg: <Nodejs />,
  },
  {
    name: "JavaScript",
    svg: <Javascript />,
  },
  {
    name: "Webpack",
    svg: <Webpack />,
  },
  {
    name: "Gulp JS",
    svg: <Gulp />,
  },
  {
    name: "Git",
    svg: <Git />,
  },
  {
    name: "Github",
    svg: <Github />,
  },
  {
    name: "Storybook",
    svg: <Storybook />,
  },
  {
    name: "Postgressql",
    svg: <Postgressql />,
  },
  {
    name: "Express JS",
    svg: <Express />,
  },
  {
    name: "Monogodb",
    svg: <Monogodb />,
  },
  {
    name: "Npm",
    svg: <Npm />,
  },
  {
    name: "CSS",
    svg: <CSS />,
  },
  {
    name: "HTML",
    svg: <HTML />,
  },
  {
    name: "Vite",
    svg: <Vite />,
  },
  {
    name: "VS Code",
    svg: <VSCode />,
  },
  {
    name: "Redux",
    svg: <Redux />,
  },
  {
    name: "Sass",
    svg: <Sass />,
  },
];

export default function TechStacks() {
  const pattern = generateWavePattern(tools.length);
  let index = 0;

  return (
    <section className="relative overflow-hidden py-16">
      <Container>
        <div className="">
          <div className="flex flex-col items-center gap-4 pb-24 text-center">
            <h2 className="font-family-bebas-neue max-w-screen-sm text-5xl leading-none font-medium text-white">
              The tools and technologies that power my development journey
            </h2>
            <p className="w-full max-w-lg text-base">
              From writing code to deploying scalable applications, these are
              the technologies I rely on every day. Each tool here has played a
              key role in helping me build, optimize, and deliver efficient
              solutions.
            </p>
          </div>
          <div className="relative flex items-center justify-center gap-4 overflow-hidden after:pointer-events-none after:absolute after:inset-0 after:bg-gradient-to-b after:from-zinc-950 after:via-transparent after:via-50% after:to-zinc-950 after:opacity-0">
            {pattern.map((count, rowIdx) => (
              <div key={rowIdx} className="flex flex-col items-center gap-4">
                {Array.from({ length: count }).map((_, colIdx) => {
                  const tool = tools[index++];
                  return (
                    <div
                      key={colIdx}
                      className="flex size-20 flex-col items-center justify-center gap-1 rounded-lg border border-zinc-900/30 bg-zinc-900/30 text-white"
                    >
                      <span className="flex size-8 items-center justify-center">
                        {tool.svg}
                      </span>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
