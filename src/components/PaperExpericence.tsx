import React from "react";
import { Highlighter } from "./Highlighter";

export default function PaperExpericence() {
  return (
    <section>
      <div className="prose prose-neutral prose-h3:mt-0 prose-h3:text-base prose-ul:my-0 prose-li:my-0 prose-ul:mt-7 prose-h3:mb-1 prose-li:marker:text-neutral-600 prose-li:prose-p:my-0 prose-li:not-last:mb-7 relative max-w-full text-sm leading-7">
        <h2>
          <Highlighter action="underline">Experience</Highlighter>
        </h2>
        <ul className="list-disc pl-0">
          <li>
            <h3>Senior Frontend Developer</h3>
            <p>
              Developed modular, reusable UI components with React.js and
              TypeScript, translated Figma designs into responsive interfaces
              using Tailwind CSS, and optimized data handling with REST APIs and
              React Query. Working in an Agile team, I delivered high-impact
              features, refactored legacy code for scalability, and improved
              accessibility, performance, and overall code quality.
            </p>
          </li>
          <li>
            <h3>Junior Frontend Developer</h3>
            <p>
              Developed and maintained responsive, cross-browser user interfaces
              using HTML5, CSS3, JavaScript, and React.js, translating Figma and
              Adobe XD designs into pixel-perfect, production-ready UIs.
              Leveraged SCSS, Tailwind CSS, and Bootstrap to build reusable,
              modular components and scalable frontend architectures. Integrated
              REST APIs for dynamic data handling, optimized UI/UX performance,
              and collaborated within Agile teams.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
