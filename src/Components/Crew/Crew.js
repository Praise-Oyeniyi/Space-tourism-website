import React from 'react'
import Header from '../Header'
import {CrewData} from './CrewData'
import { useState } from 'react';
import { motion } from 'framer-motion';

const Crew = ({handleTouchMove, handleTouchStart, slided, setSlided, container, Left, Right}) => {


  return (
    <motion.div 
      variants={container} initial='initial' animate='animate'
      className='crew-outer overflow-hidden h-screen w-full relative sm:overflow-y-auto'>

      <motion.button
        variants={Left}
        className='absolute left-5 top-[50%] text-gray-100 small:hidden' 
        onClick={()=>slided === 0? setSlided(CrewData.length -1):setSlided(slided - 1)}>
          <i className="fas fa-caret-left text-6xl hover:text-gray-600"></i>
      </motion.button>
      
      <Header container={container} Left={Left} Right={Right}/>    
        <div 
          onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}
          className="crew-body mx-[3%] mt-[3%] flex justify-center space-x-12 items-start h-full 
          sm:flex-col sm:mt-0 small:mx-[5%] sm:justify-start sm:space-y-5 md:justify-between">

          <motion.div
            variants={container} initial="initial" animate='animate'
            className="left space-y-16 w-3/6 mt-5 sm:w-full sm:space-y-5 md:w-5/6">

            <motion.h3 variants={Left} className='text-gray-100 text-xl font-semibold uppercase'><span className='text-gray-600 pr-4'>02</span> Meet Your Crew</motion.h3>
            
            <motion.div 
              variants={Left}
              className="body-info text-gray-100 w-5/6 space-y-3 sm:w-full sm:space-y-0 md:space-y-1">
              <h3 className='text-2xl small:text-xl -tracking-tight spacing uppercase text-gray-300'>{CrewData[slided].position}</h3>
              <h2 className=' text-5xl small:text-3xl pb-4 -tracking-tighter uppercase'>{CrewData[slided].name}</h2>
              <p className='text-base text-gray-200'>{CrewData[slided].bio}</p>
            </motion.div>


            <div className="active-slide flex space-x-5 cursor-pointer">
            {CrewData.map((e,index)=>
              (
                <motion.div variants={Left} key={index} className={`w-3 h-3 rounded-full bg-gray-500 ${slided === index? 'border-gray-100 border-2': 'bg-gray-900'}`}></motion.div>
              ))}
            </div>

          </motion.div>


          <div className="dest-filter w-2/6 self-end sm:w-3/6 md:self-center">
            <img src={CrewData[slided].image} alt="profile-img" className='h-full' />
          </div>
        </div>


        <motion.button
          variants={Right}
          className='absolute right-5 top-[50%] text-gray-100 small:hidden' 
          onClick={()=>slided === CrewData.length -1? setSlided(0):setSlided(slided + 1)}>
            <i className="fas fa-caret-right text-6xl hover:text-gray-600"></i>
        </motion.button>
    </motion.div>
  )
}

export default Crew