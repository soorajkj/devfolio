import React from "react";

export default function OpenToWork({ open }: { open: boolean }) {
  if (!open) return null;

  return (
    <div className="flex items-center gap-2">
      <span className="relative size-2 rounded-full bg-green-600 before:absolute before:-inset-1 before:top-1/2 before:left-1/2 before:size-3 before:-translate-x-1/2 before:-translate-y-1/2 before:animate-pulse before:rounded-full before:bg-green-500 before:opacity-20"></span>
      <p className="text-xs uppercase">open to work</p>
    </div>
  );
}
