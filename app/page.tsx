import React from 'react'
import Navbar from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import Features from '@/components/features'
import { Paragraph } from '@/components/Paragraph'
import { Footer } from '@/components/Footer'
import { Testimonials } from '@/components/Testimonials'

const Home = () => {
  
  return (
    <> 
    
    <Navbar />
    <Hero />
    <Features />
    <div className="h-[100px] bg-black"></div>
    <Paragraph />
    
        <Testimonials/>
    <Footer/>
    
    </>
   
  )
}

export default Home