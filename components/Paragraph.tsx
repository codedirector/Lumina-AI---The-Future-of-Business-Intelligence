
'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import Cards from './Cards'

export const Paragraph = () => {
  const sectionRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  const paragraph =
    'Our AI platform transforms raw business data into meaningful insights through intelligent automation, conversational analytics, predictive intelligence, and beautifully crafted visualizations. Every interaction is designed to help your team discover opportunities, automate repetitive work, and make confident decisions faster than ever before.'

  const words = paragraph.split(' ')

  return (
    <section
      ref={sectionRef}
      className="
        relative
        flex
        flex-col
        lg:flex-row
        bg-black
        lg:min-h-[350vh]
      "
    >
      {/* LEFT SIDE */}
      <div className="w-full lg:w-1/2">
        <div
          className="
            lg:sticky
            lg:top-0
            lg:h-screen

            flex
            flex-col
            justify-center

            px-6
            sm:px-10
            md:px-14
            lg:px-16

            py-20
            lg:py-0
          "
        >
          <h2
            className="
              text-white
              font-bold
              underline

              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl

              mb-10
            "
          >
            Why Choose Us
          </h2>

          <p
            className="
              flex
              flex-wrap

              text-white

              text-lg
              sm:text-xl
              md:text-2xl
              lg:text-4xl

              leading-relaxed
              lg:leading-[1.5]

              max-w-3xl
            "
          >
            {words.map((word, index) => {
              const start = index / words.length
              const end = start + 1 / words.length

              return (
                <Word
                  key={index}
                  range={[start, end]}
                  progress={scrollYProgress}
                >
                  {word}
                </Word>
              )
            })}
          </p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div
        className="
          w-full
          lg:w-1/2

          pt-12
          lg:pt-0
        "
      >
        <Cards progress={scrollYProgress} />
      </div>
    </section>
  )
}

type WordProps = {
  children: string
  range: [number, number]
  progress: any
}

const Word = ({ children, range, progress }: WordProps) => {
  const letters = children.split('')
  const amount = range[1] - range[0]
  const step = amount / letters.length

  return (
    <span className="relative mr-2 mb-2 inline-flex">
      {letters.map((letter, index) => {
        const start = range[0] + step * index
        const end = start + step

        return (
          <Letter
            key={index}
            range={[start, end]}
            progress={progress}
          >
            {letter}
          </Letter>
        )
      })}
    </span>
  )
}

type LetterProps = {
  children: string
  range: [number, number]
  progress: any
}

const Letter = ({ children, range, progress }: LetterProps) => {
  const opacity = useTransform(progress, range, [0, 1])

  return (
    <span className="relative">
      <span className="absolute opacity-10">{children}</span>

      <motion.span
        style={{ opacity }}
        className="inline-block"
      >
        {children}
      </motion.span>
    </span>
  )
}