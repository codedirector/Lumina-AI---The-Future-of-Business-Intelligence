
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import React, { useRef, useState } from "react";

type Position = {
  left: number;
  width: number;
  opacity: number;
};

export default function Navbar() {
  const [position, setPosition] = useState<Position>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <nav className="fixed top-6 left-1/2 z-50 -translate-x-1/2 px-4">
      <ul
        onMouseLeave={() =>
          setPosition((prev) => ({
            ...prev,
            opacity: 0,
          }))
        }
        className="
          relative
          flex
          items-center
          rounded-full
          border
          border-black
          bg-white/70
          p-1.5
          text-black
          shadow-xl
          backdrop-blur-3xl
          overflow-hidden
        "
      >
        <Tab setPosition={setPosition}>
          <Link href="/">Home</Link>
        </Tab>

        <Tab setPosition={setPosition}>
          <Link href="/pricing">Pricing</Link>
        </Tab>

        <Tab setPosition={setPosition}>
          <Link href="/about">About</Link>
        </Tab>

        <Tab setPosition={setPosition}>
          <Link href="/contact">Contact</Link>
        </Tab>

        <Cursor position={position} />
      </ul>
    </nav>
  );
}

function Tab({
  children,
  setPosition,
}: {
  children: React.ReactNode;
  setPosition: React.Dispatch<React.SetStateAction<Position>>;
}) {
  const ref = useRef<HTMLLIElement>(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="
        relative
        z-10
        cursor-pointer
        whitespace-nowrap
        rounded-full
        px-4
        py-2
        text-xs
        font-medium
        uppercase
        text-white
        mix-blend-difference
        transition-colors
        md:px-6
        md:py-3
        md:text-sm
      "
    >
      {children}
    </li>
  );
}

function Cursor({ position }: { position: Position }) {
  return (
    <motion.div
      animate={position}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 35,
      }}
      className="
        absolute
        top-1.5
        bottom-1.5
        rounded-full
        bg-black
      "
    />
  );
}