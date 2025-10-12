import React from "react";

export default function PaperProjects() {
  return (
    <section>
      <div className="prose prose-neutral prose-h3:mt-0 prose-h3:text-base prose-ul:my-0 prose-li:my-0 prose-ul:mt-7 prose-li:marker:text-neutral-600 relative max-w-full text-base leading-7">
        <h2>Projects</h2>
        <p>
          Each project I've worked on has been an opportunity to solve
          real-world problems and push my skills further. These are just a few
          projects I've developed over time.
        </p>
        <ul className="list-decimal">
          <li>
            <h3>Catalix UI - Design system, CLI</h3>
            <p>
              A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm,
              and more. Available on Visual Studio Marketplace, Package Control,
              Atom Package Manager, and npm.
            </p>
          </li>
          <li>
            <h3>Taptree - Link in bio</h3>
            <p>
              A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm,
              and more. Available on Visual Studio Marketplace, Package Control,
              Atom Package Manager, and npm.
            </p>
          </li>
          <li>
            <h3>Halcyon - VSCode Theme</h3>
            <p>
              A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm,
              and more.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
