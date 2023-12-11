import Project from '@components/project';

export default function Projects() {
  return (
    <section className="df-projects">
      <div className="container">
        <h2></h2>
        <div className="df-projects__grid">
          {Array.from({ length: 9 })
            .fill(0)
            .map((_item, idx) => {
              return <Project key={idx} />;
            })}
        </div>
      </div>
    </section>
  );
}
