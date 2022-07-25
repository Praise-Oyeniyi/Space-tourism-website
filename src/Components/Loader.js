import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Loader = ({setLoading, Left, Right, container}) => {

  const banner = {
    animate: {
      transition: {
        delayChildren: 0.8,
        staggerChildren: 0.4,
      },
    },
  };
  
  const letterAni = {
    initial: { y: -100+'vw'},
    animate: {
      y: 0,
      transition: {
        delay:6,
        ease: [0.6, 0.01, -0.05, 0.95],
        duration:0.8 ,
      },
    },
  };
  const top={
    initial: {y:100+'vw', opacity:0},
    animate: {
        y:0, 
        opacity:1,
        transition: {
            type:'easeinout',
            ease: [0.6, 0.01, -0.05, 0.95],
            duration: 0.8,
      },
    },
    exit:{y:50+'vw'}
  }

   

  return (
    <AnimatePresence>
        <div className='h-screen w-screen fixed  z-50 overflow-hidden'>
            <motion.div 
                variants={banner} initial='initial' animate='animate' exit='exit' 
                onAnimationComplete={() => setLoading(false)}
                className="h-screen w-full  relative">

                <motion.div variants={banner} initial='initial' animate='animate'
                    className="h-full w-full flex justify-center items-center relative z-[2] bg-gray-100 text-gray-900">
                      <motion.h3 variants={letterAni}>Designed By Frontend Mentor. Coded By Praise_Oyeniyi</motion.h3>
                </motion.div>

                
                <div className="slant flex absolute top-0 left-0 flex-col w-full h-full z-10">
                    <motion.div 
                      variants={Right}
                      className='bg-orange-800 h-2/6'>
                    </motion.div>
                    
                    <motion.div 
                      variants={Right}
                      className='bg-orange-500 h-2/6'>
                    </motion.div>

                    <motion.div 
                      variants={Right}
                      className='bg-orange-300 h-2/6'>
                    </motion.div>

                    <motion.div
                      variants={banner} initial='initial' animate='animate' exit='exit'
                      className='absolute top-0 h-screen w-full !flex justify-between'>
                      <motion.div 
                        variants={top}
                        className='bg-blue-200 h-full w-2/6'>
                      </motion.div>

                      <motion.div 
                        variants={top}
                        className='bg-blue-400 h-full w-2/6'>
                      </motion.div>

                      <motion.div 
                        variants={top}
                        className='bg-blue-600 h-full w-2/6'>
                      </motion.div>

                      <motion.div 
                        variants={top}
                        className='bg-blue-800 h-full w-2/6'>
                      </motion.div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    </AnimatePresence>
  )

  
}

export default Loader