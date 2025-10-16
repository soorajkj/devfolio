import React from "react";

export default function Photograph() {
  return (
    <div className="relative float-right ml-4 h-44 w-32 rotate-3 bg-white p-1 pb-8 shadow-sm">
      <img
        src="/images/sooraj.jpg"
        alt="sooraj"
        className="size-full object-cover object-center grayscale"
      />
    </div>
  );
}
