import React from 'react'
import { motion } from 'framer-motion'
function Projects() {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <motion.h1
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration:0.5}} className="text-4xl text-center my-20">Projects</motion.h1>
        
        <div className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
            <motion.p whileInView={{opacity:1, x:0}}
         initial={{opacity:0, x:-100}}
         transition={{duration:0.5}} className="text-sm mb-2  text-neutral-400">Cinemate Web Application</motion.p>
            </div>
            <div className="w-full max-w-xl lg:3/4">

            <motion.p
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x:-100}}
            transition={{duration:0.5}}>Developed a responsive cinemate web application enabling dynamic user interactions using React and Node.js, react router, router dom etc. and deployed the application in integration with github.</motion.p>
                <motion.div 
                whileInView={{opacity:1, x:0}}
                initial={{opacity:0, x:-100}}
                transition={{duration:0.5}}
                className="flex flex-wrap my-1 gap-2">
                    <div
                    className="text-blue-300 text-center text-sm  p-0.5 bg-neutral-500 rounded">React</div>
                    <div className="text-blue-300  text-center text-sm p-0.5 bg-neutral-500 rounded">Node.js</div>
                    <div className="text-blue-300 text-sm p-0.5 bg-neutral-500 rounded">React Router</div>
                    <div className="text-sm p-0.5 text-blue-300  bg-neutral-500 rounded">Router DOM</div>
                    <div className="text-sm text-blue-300 p-0.5 bg-neutral-500 rounded">GitHub</div>
            </motion.div>
            <div className="flex flex-wrap">
            <motion.p
            whileInView={{opacity:1, y:0}}
            initial={{opacity:0, y:-10}}
            transition={{duration:0.5}}>Please checkout the link:</motion.p>
            <motion.span 
                    whileInView={{opacity:1, x:0}}
                    initial={{opacity:0, x:-100}}
                    transition={{duration:0.5}}><a href="https://cinematereactapp.netlify.app/" target="_blank" >https://cinematereactapp.netlify.app/</a></motion.span>
            </div>
        </div>
    </div>
    <div className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
            <motion.p whileInView={{opacity:1, x:0}}
         initial={{opacity:0, x:-100}}
         transition={{duration:0.5}} className="text-sm mb-2  text-neutral-400">Health App</motion.p>
            </div>
            <div className="w-full max-w-xl lg:3/4">

            <motion.p
             whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x:-100}}
            transition={{duration:0.5}}>Contributed to the creation of a Django Application with SQLite and HTML, CSS, which enables patients to send the report to doctors and get certain suggestions from the doctor.</motion.p>
                <motion.div
                 whileInView={{opacity:1, x:0}}
         initial={{opacity:0, x:-100}}
         transition={{duration:0.5}} className="flex flex-wrap my-1 gap-2">
                    <div className="text-blue-300 text-center text-sm p-0.5 bg-neutral-500 rounded">Django</div>
                    <div className="text-blue-300  text-center text-sm p-0.5 bg-neutral-500 rounded">SQLite</div>
                    <div className="text-blue-300 text-sm p-0.5 bg-neutral-500 rounded">CSS</div>
                    <div className="text-sm p-0.5 text-blue-300  bg-neutral-500 rounded">HTML</div>
                    <div className="text-sm text-blue-300 p-0.5 bg-neutral-500 rounded">GitHub</div>
            </motion.div>
        </div>
    </div>
 
   
    
 </div>
  )
}

export default Projects