import React from "react";
import { Highlighter } from "./Highlighter";

export default function PaperProjects() {
  return (
    <section className="size-full">
      <div className="prose prose-neutral">
        <h2 className="relative">
          <Highlighter>Projects</Highlighter>
        </h2>
        <ul className="list-disc pl-0">
          <li>
            <h3>Chromic UI</h3>
            <p>
              A reusable <strong>component library</strong> and a{" "}
              <strong>CLI</strong> for <strong>React</strong>, designed to
              streamline <strong>UI development</strong>. Built with{" "}
              <strong>Tailwind CSS</strong>, the library provides a wide range
              of <strong>accessible</strong> and{" "}
              <strong>composable components</strong> including{" "}
              <strong>buttons, forms, cards, modals</strong>, and more. Tech
              used{" "}
              <strong>
                {[
                  "Next.js",
                  "React.js",
                  "TypeScript",
                  "Tailwind CSS",
                  "TSDown",
                  "Monorepo",
                  "Turborep",
                  "Pnpm",
                ].join(", ")}
              </strong>
            </p>
          </li>
          <li>
            <h3>Taptree</h3>
            <p>
              A <strong>link-in-bio management platform</strong>, similar to
              Linktree, enabling users to{" "}
              <strong>
                centralize and customize all social and content links
              </strong>
              . Implemented{" "}
              <strong>responsive, themeable pages with analytics</strong> to
              track engagement, improving digital presence management for
              creators and businesses. Technoglogies used{" "}
              <strong className="text-sm">
                {[
                  "Next.js",
                  "React.js",
                  "TypeScript",
                  "Tailwind CSS",
                  "Hono.js",
                  "PrismaORM",
                  "Postgres",
                ].join(", ")}
              </strong>
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
