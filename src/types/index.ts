import { icons } from "@constants/icons";

export interface LayoutProps {
  children: React.ReactNode;
}

export interface Experience {
  org: string;
  location: string;
  start: string | Date;
  end: string | Date;
  role: string;
  icon: keyof typeof icons;
}
