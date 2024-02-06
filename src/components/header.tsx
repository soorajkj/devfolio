import React from "react";
import Container from "@components/core/container";
import Link from "@components/core/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white backdrop-blur transition duration-200 ease-in-out lg:border-b lg:border-gray-950/10 dark:border-gray-50/[0.06] dark:bg-gray-950/75">
      <Container>
        <div className="flex h-16 w-full items-center justify-between">
          <Link
            href={"/"}
            className="flex items-center space-x-2 font-family-montserrat text-lg font-semibold leading-none text-white"
          >
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              width={24}
              height={24}
              className="text-purple-500"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth={0} />
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <g id="SVGRepo_iconCarrier">
                <polyline points="4 17 10 11 4 5" />
                <line x1={12} y1={19} x2={20} y2={19} />
              </g>
            </svg>

            <span>codefolio</span>
          </Link>
        </div>
      </Container>
    </header>
  );
}
