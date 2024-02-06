import React from "react";

export default function About() {
  return (
    <section className="relative pb-24 pt-24">
      <div className="container">
        <div className="mx-auto max-w-4xl">
          <div className="mx-auto mb-24 flex max-w-xl flex-col items-center text-center">
            <h2 className="text-4xl font-bold text-white">About me</h2>
            <p className="mt-5">
              Open source plays a major part in how we build our products.
              We&apos;re proud to give back and support the makers behind these
              amazing.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-4xl">
          <p className="mb-4">
            Hello! My name is Sooraj Janardhanan and I enjoy creating things
            that live on the internet. My interest in web development started
            back in 2018 when I decided to try editing custom Tumblr themes —
            turns out hacking together a custom reblog button taught me a lot
            about HTML & CSS!
          </p>
          <p className="mb-4">
            Fast-forward to today, and I’ve had the privilege of working at an
            advertising agency, a start-up, a huge corporation, and a
            student-led design studio. My main focus these days is building
            accessible, inclusive products and digital experiences at
            Upstatement for a variety of clients.
          </p>
          <p className="mb-4">
            I also recently launched a course that covers everything you need to
            build a web app with the Spotify API using Node & React.
          </p>
          <p className="mb-4">
            Here are a few technologies I’ve been working with recently:
          </p>
        </div>
      </div>
    </section>
  );
}
