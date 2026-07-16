
'use client'

import { motion } from 'motion/react'
import QuoteCard from './TestimonialCard'

export const Testimonials = () => {
  const testimonialsData = [
    {
      name: 'John Doe',
      title: 'CEO of Company',
      quote: 'This product has changed my life for the better!',
    },
    {
      name: 'Jane Smith',
      title: 'CTO of Startup',
      quote: 'This product has exceeded our expectations!',
    },
    {
      name: 'Bob Johnson',
      title: 'Founder of Business',
      quote: "I can't imagine running my business without this product!",
    },
    {
      name: 'Alice Lee',
      title: 'Marketing Director',
      quote:
        'This product has helped us reach new heights in our marketing efforts!',
    },
    {
      name: 'David Kim',
      title: 'Product Manager',
      quote:
        'This product has made my job so much easier and more efficient!',
    },
  ]

  const testimonials = [
    ...testimonialsData,
    ...testimonialsData,
    ...testimonialsData,
  ]

  return (
    <section className="w-full bg-black py-20 ">
      <div className="mx-auto max-w-7xl px-5">
        {/* Heading */}

        <div className="mb-14 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white underline">
            Trusted by Modern Teams
          </h1>

          <p className="mt-4 text-gray-200 text-base sm:text-lg">
            Real results from companies using AI to make faster, smarter
            decisions.
          </p>
        </div>


        <div className="relative overflow-x-hidden rounded-2xl">
        

          <div className="absolute left-0 top-0 z-20 h-full w-12 sm:w-20 bg-gradient-to-r from-black to-transparent" />


          <div className="absolute right-0 top-0 z-20 h-full w-12 sm:w-20 bg-gradient-to-l from-black to-transparent" />

          <motion.div
            className="flex"
            animate={{ x: ['0%', '-100%'] }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="
                  shrink-0
                  px-3
                  w-[85vw]
                  sm:w-[360px]
                  md:w-[390px]
                  lg:w-[420px]
                "
              >
                <QuoteCard
                  name={testimonial.name}
                  title={testimonial.title}
                  quote={testimonial.quote}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}