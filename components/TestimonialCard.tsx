import React from "react";

type QuoteCardProps = {
  name: string;
  title: string;
  quote: string;
};

export default function QuoteCard({
  name,
  title,
  quote,
}: QuoteCardProps) {
  return (
    <div
      className="
        relative
        h-full
        min-h-[280px]
        overflow-hidden
        rounded-2xl
        border
        border-white/20
        bg-white/10
        p-5
        sm:p-6
        lg:p-8
        text-white
        shadow-2xl
        backdrop-blur-xl
      "
    >
      {/* Glow */}
      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -left-10 -bottom-10 h-28 w-28 rounded-full bg-pink-400/20 blur-3xl" />

      <div className="relative z-10 flex h-full flex-col">
        {/* Quote Icon */}
        <div className="mb-4 text-4xl sm:text-5xl lg:text-6xl leading-none text-white/30">
          ❝
        </div>

        {/* Quote */}
        <p
          className="
            flex-1
            text-sm
            sm:text-base
            lg:text-lg
            italic
            leading-7
            lg:leading-8
            text-white/90
          "
        >
          {quote}
        </p>

        <div className="my-5 h-px bg-white/20" />

        {/* Author */}
        <div>
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold">
            {name}
          </h2>

          <p className="mt-1 text-xs sm:text-sm tracking-wide text-white/70">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
}