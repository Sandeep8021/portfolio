import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { DiPython, DiJava, DiJavascript1, DiHtml5, DiCss3 } from 'react-icons/di'
import { SiMongodb, SiMysql, SiPostgresql, SiAmazonaws, SiGooglecloud } from 'react-icons/si'
import { FaDocker, FaLinux, FaWindows } from 'react-icons/fa'
import { AiFillGithub } from 'react-icons/ai'
import { motion } from 'framer-motion'
import { SiKubernetes } from 'react-icons/si'
const iconVariants = (duration) => ({
    initial: { x: -100 },
    animate: {
      x: [110, -10],
      transition: {
        duration: duration,
      },
    },
  });
  

function Technologies(){
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h1
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:-10}}
        transition={{duration:1}}
         className="my-20 text-center text-4xl">Technologies</motion.h1>
        <motion.div
         whileInView={{opacity:1, x:0}}
         initial={{opacity:0, x:-100}}
         transition={{duration:1}}
        className="flex flex-wrap items-center justify-center gap-4">
            <motion.div 
                variants={iconVariants(0.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl  border-4 border-neutral-800 p-4">
                    <RiReactjsLine className="text-7xl text-cyan-400"/>
            </motion.div>
            <motion.div 
                variants={iconVariants(1)}
                initial="initial"
                animate="animate"
                className="rounded-2xl  border-4 border-neutral-800 p-4">
                    <DiPython className="text-7xl text-blue-500"/>
            </motion.div>
            <motion.div 
                variants={iconVariants(1.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl  border-4 border-neutral-800 p-4">
                    <DiJava className="text-7xl text-red-600"/>
            </motion.div>
            <motion.div 
                variants={iconVariants(2)}
                initial="initial"
                animate="animate"
                className="rounded-2xl  border-4 border-neutral-800 p-4">
                    <DiJavascript1 className="text-7xl text-yellow-300"/>
            </motion.div>
            <motion.div 
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl  border-4 border-neutral-800 p-4">
                    <DiHtml5 className="text-7xl text-orange-500"/>
            </motion.div>
            <motion.div 
                variants={iconVariants(3)}
                initial="initial"
                animate="animate"
                className="rounded-2xl  border-4 border-neutral-800 p-4">
                    <DiCss3 className="text-7xl text-blue-400"/>
            </motion.div>
            <motion.div 
                variants={iconVariants(3.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl  border-4 border-neutral-800 p-4">
                    <SiMongodb className="text-7xl text-green-500"/>
            </motion.div>
            <motion.div 
                variants={iconVariants(4)}
                initial="initial"
                animate="animate"
                className="rounded-2xl  border-4 border-neutral-800 p-4">
                    <SiMysql className="text-7xl text-blue-500"/>
            </motion.div>
            <motion.div 
                variants={iconVariants(4.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl  border-4 border-neutral-800 p-4">
                    <SiPostgresql className="text-7xl text-blue-600"/>
            </motion.div>
            <motion.div 
                variants={iconVariants(5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl  border-4 border-neutral-800 p-4">
                    <SiAmazonaws className="text-7xl text-orange-400"/>
            </motion.div>
            <motion.div 
                variants={iconVariants(5.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl  border-4 border-neutral-800 p-4">
                    <FaDocker className="text-7xl text-blue-500"/>
            </motion.div>
            <motion.div 
                variants={iconVariants(6)}
                initial="initial"
                animate="animate"
                className="rounded-2xl  border-4 border-neutral-800 p-4">
                    <SiKubernetes className="text-7xl text-blue-700"/>
            </motion.div>
            <motion.div 
                variants={iconVariants(6.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl  border-4 border-neutral-800 p-4">
                    <AiFillGithub className="text-7xl"/>
            </motion.div>
        </motion.div>
    </div>
  )
}
export default Technologies
