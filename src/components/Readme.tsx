import React from "react";

export default function Readme() {
  return (
    <div className="mx-auto flex max-w-xl flex-1 flex-col items-center justify-center px-6 md:rotate-2">
      <div className="relative w-full border border-zinc-900 bg-zinc-900/80 px-8 py-16 before:absolute before:-top-px before:-right-px before:z-10 before:size-0 before:border-[24px] before:border-zinc-900 before:border-t-zinc-950 before:border-r-zinc-950 md:px-12 md:py-24">
        <div className="prose prose-zinc dark:prose-invert dark:prose-p:text-zinc-400 prose-strong:font-medium">
          <p>
            Hi, I’m <strong>Sooraj Janardhanan</strong>, a passionate{" "}
            <strong>Frontend Engineer</strong> based in{" "}
            <strong>Kochi, India</strong>. I specialize in building{" "}
            <strong>high-quality, user-friendly web applications</strong> with
            modern technologies like{" "}
            <strong>React.js, Next.js, TypeScript, and Tailwind CSS</strong>.
          </p>

          <p>
            With <strong>3+ years of experience</strong> in the industry, I have
            worked on building{" "}
            <strong>
              scalable, accessible, and performant digital experiences
            </strong>
            . My approach to development is <strong>human-centered</strong>,
            ensuring that every interface is not only visually appealing but
            also intuitive and functional.
          </p>

          <p>
            Currently, I’m focused on{" "}
            <strong>creating a custom Tailwind CSS plugin</strong> to streamline
            theming and improve design consistency across projects. I thrive on
            writing <strong>clean, maintainable code</strong>, collaborating
            with teams, and staying up to date with the latest{" "}
            <strong>UI/UX trends</strong>.
          </p>

          <p>
            When I’m not coding, you’ll probably find me{" "}
            <strong>
              experimenting with design systems, learning new technologies, or
              refining my personal projects
            </strong>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
