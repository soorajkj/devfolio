import React from "react";

export default function Abstract() {
  return (
    <div className="pointer-events-none fixed inset-0">
      <div className="relative mx-auto grid h-full max-w-5xl grid-cols-3 divide-x divide-dashed divide-zinc-900 border-x border-dashed border-zinc-900">
        {[...Array(3)].map((_, i) => (
          <div key={i} />
        ))}
      </div>
    </div>
  );
}
