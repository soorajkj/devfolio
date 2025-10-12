import React, { Fragment } from "react";

export default function PaperAbout() {
  return (
    <Fragment>
      <div className="relative float-right ml-4 h-44 w-32 translate-y-12 rotate-3 bg-white p-1 pb-8 shadow-2xs">
        <img
          src="/images/sooraj.jpg"
          alt="sooraj"
          className="size-full object-cover object-center grayscale"
        />
      </div>
      <div className="prose prose-neutral prose-p:mt-7 prose-p:first:mt-0 relative max-w-full text-sm leading-7">
        <h2>About Me</h2>
        <p>
          Hello world, I&apos;m <strong> Sooraj Janardhanan </strong> , a
          passionate <strong>Software Engineer (Frontend)</strong> based in{" "}
          <strong>Kochi, India</strong>. I specialize in building high-quality,
          user-friendly web applications with modern technologies like{" "}
          <strong>React.js, Next.js, TypeScript, and Tailwind CSS</strong>.
        </p>
        <p>
          With <strong>4 years of experience </strong> in the industry, I have
          worked on building scalable, accessible, and performant digital
          experiences. My approach to development is human-centered, ensuring
          that every interface is not only visually appealing but also intuitive
          and functional.
        </p>
        <p>
          When I&apos;m not coding, you&apos;ll probably find me{" "}
          <strong>
            experimenting with design systems, learning new technologies, or
            refining my personal projects.
          </strong>
        </p>
      </div>
    </Fragment>
  );
}
