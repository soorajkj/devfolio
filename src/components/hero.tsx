import Button from "@components/core/button";

export default function Hero() {
  return (
    <section className="relative pb-24 pt-24">
      <div className="conatiner">
        <div className="mx-auto flex h-full min-h-96 max-w-5xl flex-col items-center justify-center">
          <h1 className="mx-auto mb-4 text-center font-family-bebas-neue text-7xl text-white">
            I build things for the Web
          </h1>
          <p className="mx-auto max-w-xl text-center font-medium">
            I&apos;m a software engineer specializing in building (and
            occasionally designing) exceptional digital experiences. Currently,
            I&apos;m focused on building accessible, human-centered products at
            Stratagile.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button variant="primary">Download Resume</Button>
            <Button variant="primary">Download Resume</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
