import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Loader = ({setLoading}) => {

    const container = {
        show: {
          transition: {
            staggerChildren: 0,
          },
        },
    }

      const item = {
        hidden: { x:0 },
        show: {
          x:100+'vw',
          transition: {
            ease: [0.6, 0.01, -0.05, 0.95],
            duration: 0.8,
          },
        },
        exit: {
          y:0,
          transition: {
            ease: "easeInOut",
            duration: 0.8,
          },
        },
    };

    const itemLeft = {
        hidden: { x:0 },
        show: {
          x:-100+'vw',
          transition: {
            ease: [0.6, 0.01, -0.05, 0.95],
            duration: 0.8,
          },
        },
        exit: {
          x:0,
          transition: {
            ease: "easeInOut",
            duration: 0.8,
          },
        },
    };


  return (
    <AnimatePresence>
        <div className='h-screen w-full fixed  z-50 overflow-hidden bg-opacity-1'>
            <motion.div 
                variants={container} initial='hidden' animate='show' exit='exit' 
                onAnimationComplete={() => setLoading(false)}
                className="h-screen w-full  relative bg-opacity-1">

                
                <div className="slant flex absolute top-0 left-0 flex-col w-full h-full z-10">
                    <motion.div 
                      variants={itemLeft}
                      className='bg-gray-900 h-2/6'>
                    </motion.div>

                    <motion.div 
                      variants={item}
                      className='bg-gray-900 h-2/6'>
                    </motion.div>

                    <motion.div 
                      variants={itemLeft}
                      className='bg-gray-900 h-2/6'>
                    </motion.div>
                </div>

            </motion.div>
        </div>
    </AnimatePresence>
  )

  
}

export default Loader