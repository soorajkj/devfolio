import React from "react";

export default function PaperExpericence() {
  return (
    <div className="prose prose-neutral">
      <h2 className="relative">Experience</h2>
      <ul className="list-disc pl-0">
        <li>
          <h3 className="flex items-center gap-1">
            Senior Frontend Developer
            <span className="ml-auto inline-block text-xs font-light">
              (May 2024 - Present)
            </span>
          </h3>
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
          <h3 className="flex items-center gap-1">
            Junior Frontend Developer
            <span className="ml-auto inline-block text-xs font-light">
              (Nov 2021 - Dec 2023)
            </span>
          </h3>
          <p>
            Developed and maintained responsive, cross-browser user interfaces
            using HTML5, CSS3, JavaScript, and React.js, translating Figma and
            Adobe XD designs into pixel-perfect, production-ready UIs. Leveraged
            SCSS, Tailwind CSS, and Bootstrap to build reusable, modular
            components and scalable frontend architectures. Integrated REST APIs
            for dynamic data handling, optimized UI/UX performance, and
            collaborated within Agile teams.
          </p>
        </li>
      </ul>
    </div>
  );
}
