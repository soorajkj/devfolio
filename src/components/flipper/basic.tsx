"use client";

import PaperExpericence from "../PaperExpericence";
import PaperAbout from "../PaperAbout";
import Paper from "../Paper";
import PaperProjects from "../PaperProjects";
import PaperEducation from "../PaperEducation";
import PaperTech from "../PaperTech";

export default function FlipBook() {
  const pages = [
    {
      0: (
        <Paper>
          <PaperAbout />
        </Paper>
      ),
      1: (
        <Paper>
          <PaperExpericence />
        </Paper>
      ),
    },
    {
      0: (
        <Paper>
          <PaperTech />
        </Paper>
      ),
      1: (
        <Paper>
          <PaperProjects />
        </Paper>
      ),
    },
    {
      0: (
        <Paper>
          <PaperEducation />
        </Paper>
      ),
    },
  ];

  return (
    <div>
      {pages.map((p, i) => {
        return (
          <div key={i} className="grid grid-cols-2">
            {p[0]}
            {p[1]}
          </div>
        );
      })}
    </div>
  );
}
