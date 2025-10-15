import React from "react";
import PaperTech from "./PaperTech";

export default function PaperEducation() {
  return (
    <div className="flex flex-col gap-7">
      <PaperTech />
      <section className="prose prose-neutral">
        <h2 className="relative">Education</h2>
        <ul className="pl-0">
          <li>
            <h3 className="flex items-center gap-1">
              Diploma in Computer Engineering
              <span className="ml-auto inline-block text-xs font-light">
                (May 2024 - Present)
              </span>
            </h3>
            <p>
              Completed a 3 year diploma program focused on
              <strong> software development</strong>,
              <strong> computer networks</strong>, and
              <strong> hardware systems</strong>. Gained hands-on experience in
              <strong> programming</strong>,
              <strong> database management</strong>.
            </p>
          </li>
        </ul>
      </section>
      <section className="prose prose-neutral">
        <h2 className="relative">Courses & Certifications</h2>
        <ul className="pl-0">
          <li>
            <strong>LinkedIn Frontend Developement Skill Assessment</strong>
          </li>
          <li>
            <strong>LinkedIn React.js Skill Assessment</strong>
          </li>
        </ul>
      </section>
    </div>
  );
}
