// "use client";

// import React, { ComponentProps, Fragment, useState } from "react";
// import { tv, VariantProps } from "tailwind-variants";
// import { twmx } from "twmx";

// const batch = <T,>(items: T[], count = 2): T[][] => {
//   return Array.from({ length: Math.ceil(items.length / count) }, (_, i) =>
//     items.slice(i * count, i * count + count)
//   );
// };

// export default function DemoPage() {
//   const pages = ["1", "2", "3", "4", "5", "6", "7"];
//   const spreads = batch(pages); // [[1,2],[3,4],[5,6],[7,8]]
//   const [current, setCurrent] = useState(0);

//   const handleNxt = () => {
//     if (current < spreads.length - 1) setCurrent((p) => p + 1);
//   };
//   const handlePre = () => {
//     if (current > 0) setCurrent((p) => p - 1);
//   };

//   return (
//     <Fragment>
//       <div className="fixed top-2 left-1/2 flex -translate-x-1/2 items-center gap-2">
//         <button onClick={handlePre}>Previous</button>
//         <button onClick={handleNxt}>Next</button>
//       </div>
//       <div
//         className="relative w-xl translate-x-1/2 transition duration-700"
//         style={{ height: "80vh" }}
//       >
//         {spreads.map((spread, i) => {
//           const flipped = i < current;
//           // - When flipped forward, bring page to top (i + 1)
//           // - When not flipped, keep behind (numOfPapers - i)
//           const zIndex = flipped ? i + 1 : spreads.length - i;

//           return (
//             <Paper key={i} style={{ zIndex: zIndex }} flipped={flipped}>
//               <Page side="front">
//                 <div className="size-full">{spread[0]}</div>
//               </Page>
//               <Page side="back">
//                 <div className="size-full rotate-y-180">{spread[1]}</div>
//               </Page>
//             </Paper>
//           );
//         })}
//       </div>
//     </Fragment>
//   );
// }

// interface PaperProps
//   extends ComponentProps<"div">,
//     VariantProps<typeof paperVariant> {}

// function Paper({ flipped, className, ...props }: PaperProps) {
//   return (
//     <div className={twmx(paperVariant({ flipped, className }))} {...props} />
//   );
// }

// const paperVariant = tv({
//   base: ["absolute inset-0 perspective-distant"],
//   variants: {
//     flipped: {
//       true: "flipped",
//     },
//   },
// });

// interface PageProps
//   extends ComponentProps<"div">,
//     VariantProps<typeof pageVariant> {}

// function Page({ side, className, ...props }: PageProps) {
//   return <div className={twmx(pageVariant({ side, className }))} {...props} />;
// }

// const pageVariant = tv({
//   base: [
//     "absolute inset-0 origin-left bg-white transition duration-700 transform-3d",
//   ],
//   variants: {
//     side: {
//       front: "z-10 backface-hidden",
//       back: "z-0",
//     },
//   },
// });

"use client";

import Paper from "@/components/Paper";
import PaperAbout from "@/components/PaperAbout";
import PaperEducation from "@/components/PaperEducation";
import PaperExpericence from "@/components/PaperExpericence";
import React, { useState } from "react";

const batch = <T,>(items: T[], count = 2): T[][] =>
  Array.from({ length: Math.ceil(items.length / count) }, (_, i) =>
    items.slice(i * count, i * count + count)
  );

export default function FlipBook() {
  const pages = [
    <Paper>
      <PaperAbout />
    </Paper>,
    <Paper>
      <PaperExpericence />
    </Paper>,
    <Paper>
      <PaperEducation />
    </Paper>,
    <Paper></Paper>,
  ];
  const spreads = batch(pages);
  const [current, setCurrent] = useState(0);

  const next = () => current < spreads.length - 1 && setCurrent((c) => c + 1);
  const prev = () => current > 0 && setCurrent((c) => c - 1);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6">
      <div className="flex items-center gap-4">
        <button
          onClick={prev}
          disabled={current === 0}
          className="disabled:opacity-40"
        >
          ◀ Prev
        </button>
        <button
          onClick={next}
          disabled={current === spreads.length - 1}
          className="disabled:opacity-40"
        >
          Next ▶
        </button>
      </div>
      <div
        className="relative flex w-6xl perspective-distant"
        style={{ height: "80vh" }}
      >
        <div className="relative z-10 flex h-full w-1/2 items-center justify-center bg-white">
          {spreads[current][0]}
        </div>
        <div className="relative h-full w-1/2 transform-3d">
          {spreads.map((spread, i) => {
            const flipped = i < current;
            const z = spreads.length - i;

            return (
              <div
                key={i}
                className="absolute inset-0 origin-left transition-transform duration-700 transform-3d"
                style={{
                  transform: flipped ? "rotateY(-180deg)" : "rotateY(0deg)",
                  zIndex: z,
                }}
              >
                <div className="absolute inset-0 bg-white backface-hidden">
                  <div>{spread[0]}</div>
                </div>

                <div className="absolute inset-0 rotate-y-180 bg-white">
                  <div className="size-full rotate-y-180">{spread[1]}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
