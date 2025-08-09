"use client";

import * as React from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import Container from "./core/container";

export default function Header() {
  const { scrollY } = useScroll();
  const [isHidden, setIsHidden] = React.useState(false);
  const lastYRef = React.useRef(0);

  useMotionValueEvent(scrollY, "change", (y) => {
    const difference = y - lastYRef.current;
    if (Math.abs(difference) > 24) {
      setIsHidden(difference > 0);
      lastYRef.current = y;
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        animate={isHidden ? "hidden" : "isHidden"}
        whileHover="isHidden"
        onFocusCapture={() => setIsHidden(false)}
        variants={{ hidden: { y: "-100%" }, isHidden: { y: "0%" } }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-50 w-full"
      >
        <Container>
          <div className="min-h-16 bg-zinc-950/80 backdrop-blur"></div>
        </Container>
      </motion.div>
    </AnimatePresence>
  );
}
