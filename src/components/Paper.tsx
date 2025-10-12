import React, { ComponentProps } from "react";

export default function Paper({ children, ...props }: ComponentProps<"div">) {
  return (
    <article
      className="a4 relative h-full w-full max-w-xl overflow-hidden font-sans shadow after:absolute after:top-0 after:right-0 after:size-0 after:border-transparent"
      {...props}
    >
      <div className="relative h-full py-14 before:absolute before:top-0 before:left-16 before:h-full before:w-1 before:border-x before:border-red-200">
        <div className="a4__lines h-full pr-6 pl-24">{children}</div>
      </div>
    </article>
  );
}
