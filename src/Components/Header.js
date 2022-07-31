import React from 'react'
import {NavLink} from 'react-router-dom';
import { useState } from 'react';
import {ReactComponent as Logo} from './../../src/logo.svg';
import { motion} from 'framer-motion'

const Header = ({container, Left, Right}) => {
    const [active, setActive] = useState(false);

    
  return (
    <motion.div variants={container} initial='initial' animate='animate' className='relative'>
        <div className={`w-screenbg-gray-100 place-self-end sm:fixed justify-self-center top-[3%] md:hidden z-[99] right-0`} onClick={()=>setActive(!active)}>
            <div className={`p-4 w-2/6 space-y-2 mx-5 md:hidden xl:hidden`}>
                <div className="h-px w-10 bg-gray-100"></div>
                <div className="h-px w-8 bg-gray-100"></div>
            </div>
        </div>
        <motion.div 
            variants={container} initial='initial' animate='animate'
            className="header-outer w-full flex justify-between text-gray-400 items-center py-5 relative transition-all">

            <motion.div 
                variants={Left}
                className=" w-12 h-auto ml-[5%] rounded-full sm:w-8 z-40">
                <Logo/>
            </motion.div>


            <motion.div 
                variants={Left} 
                className="h-[0.08em] w-[40%] bg-gray-600 relative left-14 sm:hidden md:hidden z-20">
            </motion.div>


            <motion.div 
                variants={container} initial='initial' animate='animate'
                className={`nav w-3/6 md:w-5/6 bg-gray-900/70 justify-self-end bg-opacity-60 sm:w-full sm:fixed sm:top-0 sm:h-screen sm:z-50 sm:justify-self-auto delay-150 transition-all ${active? 'left-0' : 'left-full' }`} onClick={()=>setActive(!active)}>
                    <motion.div 
                        variants={Right}
                        className="sm:flex sm:flex-col sm:w-3/6 sm:bg-gray-900/80 sm:relative sm:h-full sm:ml-[50%] justify-start items-center">


                        <motion.ul 
                            variants={window.innerWidth > 600?'' :Left}
                            className='nav-link w-5/6 h-full flex justify-center items-center font-medium space-x-8 pl-5 text-sm 
                            sm:flex-col sm:items-start sm:space-x-0 sm:justify-start sm:mt-28 sm:space-y-8 sm:w-full transition-all
                            md:w-full small:text-xs 
                            '>
                            <NavLink to='/'><li className='flex justify-between border-b-2 sm:border-2 border-transparent hover:border-gray-100 py-5 sm:py-3 sm:px-5 hover:text-gray-100'><span className='text-gray-100 pr-1 font-semibold'>00</span>HOME</li></NavLink>
                            <NavLink to='/destination'><li className='flex justify-between border-b-2 border-transparent hover:border-gray-100 py-5 sm:py-3 sm:px-5 hover:text-gray-100'><span className='text-gray-100 pr-1 font-semibold'>01</span>DESTINATION</li></NavLink>
                            <NavLink to='/crew'><li className='flex justify-between border-b-2 border-transparent py-5 hover:border-gray-100 sm:px-5 sm:py-3 hover:text-gray-100'><span className='text-gray-100 pr-1 font-semibold'>02</span>CREW</li></NavLink>
                            <NavLink to='/technology'><li className='flex justify-between border-b-2 border-transparent hover:border-gray-100 py-5 sm:py-3 sm:px-5 hover:text-gray-100'><span className='text-gray-100 pr-1 font-semibold'>03</span>TECHNOLOGY</li></NavLink>
                        </motion.ul> 
                    </motion.div>
                
            </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default Header