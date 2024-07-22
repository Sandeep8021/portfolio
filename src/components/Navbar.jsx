import React from 'react'
import { FaLinkedin } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { motion } from 'framer-motion';

function Navbar() {
  return (
    <nav className='mb-20 flex  items-center justify-between py-6 px-2'>
        <div className="flex flex-shrink-0 items-center w-10 text-2xl text-slate-200">
        <motion.h1
            initial={{x:-25, opacity:0}}
            animate={{x:0, opacity:1}}
            transition={{duration:0.7, delay:0.2}}
            >Sk</motion.h1>
        </div>
        <motion.div
        initial={{x:-20, opacity:0}}
        animate={{x:0, opacity:1}}
        transition={{duration:0.7, delay:0.2}}
         className="m-8 flex items-center justify-center gap-3 text-2xl text-slate-200">
            <a href="https://www.linkedin.com/in/sandeep-kemidi-951175257/" target="_blank">
            <FaLinkedin /></a>
            <a href="https://www.instagram.com/sandeep__sk_/" target="_blank">
            <BsInstagram /></a>
            <a href="https://github.com/Sandeep8021" target="_blank">
            <BsGithub /></a>

        </motion.div>
    </nav>
  )
}

export default Navbar