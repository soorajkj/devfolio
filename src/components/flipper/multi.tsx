"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Book = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for prev, 1 for next
  const pages = [
    { content: "Page 1 Content", color: "#ff6b6b" },
    { content: "Page 2 Content", color: "#4ecdc4" },
    { content: "Page 3 Content", color: "#45b7d1" },
    { content: "Page 4 Content", color: "#96ceb4" },
    { content: "Page 5 Content", color: "#feca57" },
  ];

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setDirection(1);
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setDirection(-1);
      setCurrentPage(currentPage - 1);
    }
  };

  const pageVariants = {
    enter: (direction: number) => ({
      rotateY: direction > 0 ? 180 : -180,
      opacity: 0,
    }),
    center: {
      rotateY: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      rotateY: direction > 0 ? -180 : 180,
      opacity: 0,
    }),
  };

  return (
    <div className="book-layout">
      <button
        onClick={prevPage}
        disabled={currentPage === 0}
        className="nav-button"
      >
        Previous
      </button>

      <div className="book-viewport">
        <AnimatePresence custom={direction} mode="popLayout">
          <motion.div
            key={currentPage}
            custom={direction}
            variants={pageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="book-page"
            style={{
              background: pages[currentPage].color,
              transformStyle: "preserve-3d",
            }}
          >
            <div className="page-content">
              <h3>Page {currentPage + 1}</h3>
              <p>{pages[currentPage].content}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <button
        onClick={nextPage}
        disabled={currentPage === pages.length - 1}
        className="nav-button"
      >
        Next
      </button>
    </div>
  );
};

export default Book;
