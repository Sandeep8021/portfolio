import React from 'react'
import { motion } from 'framer-motion'


function Experience() {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <motion.h1
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:-10}}
        transition={{duration:0.7}}
         className='my-20 text-center text-4xl'>Experience</motion.h1>
        <div >
            <div className="mb-8 flex flex-wrap lg:justify-center">
            
                <motion.div
                whileInView={{opacity:1, x:0}}
                initial={{opacity:0, x:-100}}
                transition={{duration:0.5}}
                 className="w-full lg:w-1/4">
                    <p className="text-sm mb-2  text-neutral-400">Feb 2024 – April 2024</p>
                </motion.div>
                <motion.div 
                    whileInView={{opacity:1, x:0}}
                    initial={{opacity:0, x:-100}}
                    transition={{duration:0.5}}
                    className="w-full max-w-xl lg:3/4">
                        <h6 className="text-cyan-200 mb-2 font-semibold">Graduate Research Assistant - Entity Recognition Model Development(NER) - <span className="text-sm text-purple-100">UMBC</span></h6>
                        <motion.p
                        whileInView={{opacity:1, x:0}}
                        initial={{opacity:0, x:-100}}
                        transition={{duration:0.5}} className="mb-4 text-neutral-400">
                        Spearheaded data preprocessing and feature engineering initiatives, utilizing Python and advanced NLP techniques to enhance entity recognition within large datasets. Optimized model performance using DistilBERT token classification.
                        </motion.p>
                </motion.div>
            </div>
            <div className="mb-8 flex flex-wrap lg:justify-center">
                <motion.div 
                whileInView={{opacity:1, x:0}}
                initial={{opacity:0, x:-100}}
                transition={{duration:0.5}}className="w-full lg:w-1/4">
                    <p className="text-sm mb-2  text-neutral-400">
                        July 2020 - May 2022
                    </p>
                </motion.div>
                <motion.div
                whileInView={{opacity:1, x:0}}
                initial={{opacity:0, x:-100}}
                transition={{duration:0.5}}
                 className="w-full max-w-xl lg:3/4">
                    <h6 className="text-cyan-200 mb-2 font-semibold">
                        Associate Software Engineer - <span className="text-sm text-purple-100">Accenture</span>
                    </h6>
                    <motion.p
                    whileInView={{opacity:1, x:0}}
                    initial={{opacity:0, x:-100}}
                    transition={{duration:0.5}} className="mb-4 text-neutral-400">

                        Managed AWS cloud resources, developed PostgreSQL databases, and automated data processes with SQL and scripting languages. Applied Python and Data Science methodologies for machine learning model development.
                    </motion.p>
            </motion.div>
        </div>
    </div>
    </div>
  )
}

export default Experience
