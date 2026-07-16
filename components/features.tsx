'use client'

import { motion } from 'motion/react'
import { useRef } from 'react'

type FeatureCardProps = {
  title: string
  description: string
  className?: string
  maskClass?: string
}

function FeatureCard({
  title,
  description,
  className = '',
  maskClass = '',
}: FeatureCardProps) {
  const ref = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    // Disable tilt on touch devices
    if (window.innerWidth < 1024) return

    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()

    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const rotateX = ((y / rect.height) - 0.5) * -20
    const rotateY = ((x / rect.width) - 0.5) * 20

    ref.current.style.transform = `
      perspective(700px)
      scale(1.03)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
    `

    ref.current.style.transition = 'transform .08s linear'
  }

  const handleLeave = () => {
    if (!ref.current) return

    ref.current.style.transform =
      'perspective(700px) scale(1) rotateX(0deg) rotateY(0deg)'

    ref.current.style.transition = '.35s ease'
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleLeave}
      className={`
        relative
        
        rounded-2xl
        border
        border-white
        bg-black
        p-6
        md:p-8
        min-h-[220px]
        text-white
        
        ${className}
      `}
    >
      <h2 className="relative z-20 mb-4 text-xl sm:text-2xl font-bold">
        {title}
      </h2>

      <p className="relative z-20 text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
        {description}
      </p>

      <motion.div
        className={`absolute inset-0 rounded-2xl bg-gray-100 ${maskClass}`}
        initial={{ opacity: 0.08 }}
        whileHover={{
          opacity: 0.25,
          background:
            'linear-gradient(90deg, rgba(213,164,252,1) 0%, rgba(213,155,222,.7) 50%, rgba(212,38,203,1) 100%)',
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  )
}

export default function Features() {
  return (
    <section className="w-full bg-black py-16 md:py-24 mt-14">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        {/* Heading */}

        <div className="mb-14 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Features
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-gray-300 text-base sm:text-lg">
            Discover the powerful features that make our platform the perfect
            solution for your business needs.
          </p>
        </div>

        {/* Row 1 */}

        <div className="flex flex-col md:flex-row gap-6">
          <FeatureCard
            className="md:flex-1"
            maskClass="mask-t-to-25 mask-l-to-60%"
            title="Natural Language Analytics"
            description="Transform complex data into clear answers through simple conversations with AI."
          />

          <FeatureCard
            className="md:flex-[2]"
            maskClass="mask-t-from-14 mask-l-from-20"
            title="Dynamic Visualizations"
            description="Automatically generate beautiful charts and dashboards that adapt to your data in real time."
          />
        </div>

        {/* Row 2 */}

        <div className="mt-6 flex flex-col md:flex-row gap-6">
          <FeatureCard
            className="md:flex-[2]"
            maskClass="mask-t-from-14 mask-l-from-20"
            title="Workflow Automation"
            description="Create AI-powered workflows that analyze information, trigger actions, and eliminate repetitive tasks."
          />

          <FeatureCard
            className="md:flex-1"
            maskClass="mask-t-to-25 mask-l-to-60%"
            title="Enterprise Ready"
            description="Built for teams with enterprise-grade security, role-based access, seamless integrations, and scalable infrastructure."
          />
        </div>
      </div>
    </section>
  )
}