import React, { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="flex h-full min-h-dvh flex-col items-center justify-center">
      <main className="flex size-full items-center justify-center">
        {children}
      </main>
    </div>
  );
}
