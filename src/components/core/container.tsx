import React, { ComponentProps } from "react";

export default function Container({ children }: ComponentProps<"div">) {
  return <div className="mx-auto w-full max-w-5xl px-px">{children}</div>;
}
