import Paper from "@/components/Paper";
import PaperAbout from "@/components/PaperAbout";
import PaperExpericence from "@/components/PaperExpericence";
import PaperProjects from "@/components/PaperProjects";

export default function Page() {
  return (
    <div className="grid grid-cols-2 gap-px">
      <Paper>
        <PaperAbout />
      </Paper>
      <Paper>
        <PaperExpericence />
      </Paper>
      {/* <Paper>
        <PaperProjects />
      </Paper>
      <Paper>
        <PaperAbout />
      </Paper> */}
    </div>
  );
}
