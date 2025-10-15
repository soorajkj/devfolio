"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const RealisticPageFlip = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const dragX = useMotionValue(0);

  const rotateY = useTransform(dragX, [-300, 0, 300], [-180, 0, 180]);
  const opacity = useTransform(
    dragX,
    [-300, -150, 0, 150, 300],
    [0, 0.5, 1, 0.5, 0]
  );

  const handleDragEnd = (_event: any, info: { offset: { x: number } }) => {
    if (Math.abs(info.offset.x) > 100) {
      setIsFlipped(info.offset.x > 0);
    }
  };

  return (
    <div className="page-flip-container">
      <motion.div
        className="page"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.1}
        onDragEnd={handleDragEnd}
        style={{
          rotateY,
          opacity,
          transformStyle: "preserve-3d",
          position: "relative",
          width: "300px",
          height: "400px",
        }}
      >
        {/* Front Side */}
        <div
          className="page-side front"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            background: "white",
            border: "1px solid #ccc",
            borderRadius: "5px",
            padding: "20px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          }}
        >
          <h3>Front Side</h3>
          <p>Drag to flip the page!</p>
        </div>

        {/* Back Side */}
        <div
          className="page-side back"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            background: "#f0f0f0",
            border: "1px solid #ccc",
            borderRadius: "5px",
            padding: "20px",
            transform: "rotateY(180deg)",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          }}
        >
          <h3>Back Side</h3>
          <p>You flipped the page!</p>
        </div>
      </motion.div>
    </div>
  );
};

export default RealisticPageFlip;
