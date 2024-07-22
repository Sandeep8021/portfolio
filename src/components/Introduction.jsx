import React from 'react'
import rj91779 from '../assets/rj91779.jpg';
import { motion } from 'framer-motion';
const container=(delay)=>(
  {
    hidden:{x:-100, opacity:0},
    visible:{
      x:0,
      opacity:1,
      transition:{
        duration:0.7, delay:delay
      }
    }

  }

)

function Introduction() {
  return (
    <div className=" bg-gradient-to-r from-transparent via-black to-black border-transparent p-4 lg:mb-35">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x:-100}}
            transition={{duration:0.7, delay:0.2}}
              className="pb-5 whitespace-nowrap text-4xl w-full   font-extralight tracking-tight lg:mt-16 lg:text-balance">
                SANDEEP KEMIDI
              </motion.h1>
            <motion.span 
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x:-100}}
            transition={{duration:0.8, delay:0.2}}
            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl tracking-tight text-transparent">
              Full Stack Developer and Data Enthusiast
            </motion.span>
            <motion.p
             initial={{opacity:0, x:-100}}
             animate={{opacity:1, x:0}}
             transition={{duration:0.9, delay:0.2}}
             className='my-2 max-w-xl py-6 font-light tracking-tight'>Hello! I’m Sandeep Kemidi, a passionate and dedicated Full Stack Developer, Web Developer, and UI/UX Designer 
            based in Baltimore County, Maryland. With a Master’s degree in Data Science from the University of Maryland,
             Baltimore County, and a Bachelor’s degree in Information Technology from 
             CVR College of Engineering, I have honed my skills in various aspects of web 
             development, data science, and user experience design.
             My journey in the tech world has been both challenging and rewarding. 
             I have a year’s experience working in a fast-paced tech company, 
             where I developed and optimized web applications, managed cloud resources, 
             and automated data processes. 
             My expertise spans across multiple programming languages, frameworks, and tools, 
             including Python, Java, JavaScript, React.js, Django, and more.</motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8 shadow">
        <div className="flex justify-center">
          <motion.img 
          initial={{opacity:0, x:100}}
          animate={{opacity:1, x:0}}
          transition={{duration:1, delay:0.2}}
          className="w-1/2" src={rj91779} alt="SANDEEP KEMIDI"/>
        </div>
        </div>
        
   
    </div>
    </div>
  )
}

export default Introduction