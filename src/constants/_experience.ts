import { icons } from "./icons";

export interface Experience {
  org: string;
  location: string;
  start: string | Date;
  end: string | Date;
  role: string;
  icon: keyof typeof icons;
}

export const _experience: Experience[] = [
  {
    org: "Govt. Polytechnic College, Kalamassery",
    location: "Kochi, India",
    start: "Aug 2018",
    end: "Nov 2021",
    role: "Diploma in Computer Engineering",
    icon: "code",
  },
  {
    org: "Stratagile Marketing Consultancy Private Limited",
    location: "Kochi, India",
    start: "Nov 2021",
    end: "Dec 2023",
    role: "Junior Frontend Developer",
    icon: "code",
  },
];
