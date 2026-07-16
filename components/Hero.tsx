"use client";

import { motion } from "motion/react";

export const Hero = () => {
  const slides = [
    {
      name: "Adobe",
      logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/adobe.svg",
    },
    {
      name: "Spotify",
      logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/spotify.svg",
    },
    {
      name: "Slack",
      logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/slack.svg",
    },
    {
      name: "Shopify",
      logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/shopify.svg",
    },
    {
      name: "Stripe",
      logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/stripe.svg",
    },
    {
      name: "Zoom",
      logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/zoom.svg",
    },
  ];

 
  const slider = [...slides, ...slides, ...slides];

  return (
    <>
     
      <section
        className=" relative flex min-h-[85vh] flex-col items-center justify-center  px-6"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      >

        <div className="rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 p-[2px]">
          <div className="rounded-full bg-gradient-to-r from-red-300 to-purple-600 px-5 py-2 text-xs font-medium text-black sm:text-sm">
            ⚡ Smarter Decisions, Faster
          </div>
        </div>


        <h1 className="mt-8 text-center font-bold leading-none text-[2.8rem] sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
  <span className="text-black">The </span>

  <span className="relative inline-block text-[var(--primary)] ">
    Future

    <svg
      viewBox="0 0 280 40"
      className="
        absolute
        left-0
        bottom-[-0.15em]
        w-full
        h-auto
      "
      preserveAspectRatio="none"
    >
      <path
        d="M8 25 C70 38,190 6,270 22"
        stroke="black"
        strokeWidth="3"
        fill="none"
      />
    </svg>
  </span>

  <span className="text-black">,</span>

  <br />

  <span className="text-black">
    of Business Intelligence
  </span>
</h1>
        
        <p className="mt-8 max-w-sm text-center text-sm leading-7 text-black/70 sm:max-w-xl sm:text-base md:max-w-2xl md:text-lg">
          From analytics to automation, our AI helps teams uncover
          opportunities, streamline workflows, and make confident decisions in
          seconds.
        </p>
      </section>

      
      <section className="flex flex-col items-center py-14">
        <p className="mb-8 text-center text-sm text-white/60 sm:text-base">
          Trusted by{" "}
          <span className="font-semibold text-white">300,000+</span> users and{" "}
          <span className="font-semibold text-white">2,000+</span> enterprise
          teams
        </p>

        <div className="relative w-full max-w-7xl overflow-hidden">
          {/* Fade Left */}
          {/* <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-black to-transparent" /> */}

          {/* Fade Right */}
          {/* <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-black to-transparent" /> */}

          <motion.div
            className="flex w-max items-center gap-12"
            animate={{ x: ["0%", "-33.33%"] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {slider.map((slide, index) => (
              <div
                key={index}
                className="flex h-16 w-28 flex-shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm"
              >
                <img
                  src={slide.logo}
                  alt={slide.name}
                  className="h-8 w-8 opacity-70 transition hover:scale-110 hover:opacity-100 md:h-10 md:w-10"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};