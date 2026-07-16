import { motion, useTransform } from "motion/react";

export default function Card({
  index,
  title,
  description,
  color,
  progress,
  targetScale,
}: any) {
  const start = index / 3;
  const end = start + 1 / 3;

  const scale = useTransform(
    progress,
    [start, start + (end - start) * 0.4],
    [1, targetScale]
  );

  return (
    <div
      className="sticky flex h-screen items-center justify-center px-5 md:px-10"
      style={{
        top: `${index * 30}px`,
      }}
    >
      <motion.div
        style={{ scale }}
        className={`
          ${color}
          relative
          w-full
          max-w-sm
          md:max-w-xl
          lg:max-w-2xl
          xl:max-w-3xl
          min-h-[260px]
          md:min-h-[340px]
          lg:min-h-[420px]
          rounded-3xl
          border
          border-white/10
          p-6
          md:p-8
          lg:p-10
          flex
          flex-col
          justify-center
          backdrop-blur-xl
          shadow-2xl
          overflow-hidden
        `}
      >
        {/* Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />

        <div className="relative z-10">
          <h2 className="text-2xl font-bold text-white md:text-4xl lg:text-5xl">
            {title}
          </h2>

          <p className="mt-5 text-base leading-7 text-white/80 md:text-lg lg:text-xl">
            {description}
          </p>
        </div>
      </motion.div>
    </div>
  );
}