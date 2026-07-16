import React from 'react'

export const Footer = () => {
  return (
    <div
      className="relative h-[420px] sm:h-[480px] lg:h-[520px] w-full"
      style={{
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
      }}
    >
      <footer className="fixed bottom-0 left-0 flex h-[420px] sm:h-[480px] lg:h-[520px] w-full items-end bg-white px-6 py-8 sm:px-10 lg:px-16">
        <div className="mx-auto flex w-full max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-end">
          <h1 className="max-w-4xl text-[16vw] font-bold leading-[0.85] sm:text-[12vw] md:text-[9vw] lg:text-[7vw]">
            Built for
            <br />
            the Future
            <br />
            of AI.
          </h1>

          <div className="max-w-sm text-sm leading-relaxed text-neutral-700 sm:text-base md:text-right">
            <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
            <p className="mt-3">
              Built for modern teams.
              <br />
              Powered by AI.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}