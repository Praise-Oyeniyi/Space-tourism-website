import React from 'react'
import Header from '../Header'
import {CrewData} from './CrewData'
import { motion } from 'framer-motion';

const Crew = ({handleTouchMove, handleTouchStart, slided, setSlided, container, Left, Right}) => {


  return (
    <motion.div
      variants={container} initial='initial' animate='animate'
    >
      <motion.div 
        initial={{y:100+'vh', opacity:0}} animate={{y:0, opacity:1}} transition={{duration:0.8, type:'ease', ease: [0.6, 0.01, -0.05, 0.95]}}
        className='crew-outer overflow-hidden h-screen w-full relative sm:overflow-y-auto
        md:bg-[url("./Components/Crew/Images/bg-tablet.jpg")] sm:bg-[url("./Components/Crew/Images/bg-mobile.jpg")] xl:bg-[url("./Components/Crew/Images/desktop.jpg")]'>

        <motion.button
          variants={Left}
          className='absolute left-5 top-[50%] text-gray-100 small:hidden' 
          onClick={()=>slided === 0? setSlided(CrewData.length -1):setSlided(slided - 1)}>
            <i className="fas fa-caret-left text-6xl hover:text-gray-600"></i>
        </motion.button>
        
        <Header container={container} Left={Left} Right={Right}/>  
        
          
          <div 
            onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}
            className='crew-body mx-[3%] mt-[3%] flex justify-center space-x-12 items-start h-full 
            small:flex-col sm:-mt-[2em] md:mx-[5%] sm:mx-[10%] small:justify-start small:space-y-10 small:items-center small:text-center small:space-x-0'>

            <motion.div
              variants={container} initial="initial" animate='animate'
              className="left space-y-16 w-3/6 mt-5 small:space-y-7 small:w-full sm:order-2 sm:mt-0 md:flex md:flex-col">

              <motion.h3 variants={Left} className='text-gray-100 text-xl font-semibold uppercase text-left sm:hidden small:text-base'><span className='text-gray-600 pr-4'>02</span> Meet Your Crew</motion.h3>
              
              <motion.div 
                variants={Left}
                className="body-info text-gray-100 w-5/6 space-y-3 small:space-y-1 sm:w-full md:w-5/6 md:self-center">
                <h3 className='text-2xl small:text-xl -tracking-tight spacing uppercase text-gray-300'>{CrewData[slided].position}</h3>
                <h2 className=' text-5xl small:text-3xl pb-4 -tracking-tighter uppercase'>{CrewData[slided].name}</h2>
                <p className='text-base text-gray-200'>{CrewData[slided].bio}</p>
              </motion.div>


              <div className="active-slide flex space-x-5 cursor-pointer small:justify-center small:items-center">
              {CrewData.map((e,index)=>
                (
                  <motion.div variants={Left} key={index} className={`w-3 h-3 rounded-full bg-gray-500 ${slided === index? 'border-gray-100 border-2': 'bg-gray-900'}`}></motion.div>
                ))}
              </div>

            </motion.div>


            <div className="dest-filter w-2/6 md:w-4/6 self-end sm:w-full sm:order-1 sm:border-b sm:flex flex-col sm:space-y-5 sm:justify-center">
              <motion.h3 variants={Left} className='text-gray-100 text-base font-semibold uppercase md:hidden xl:hidden'><span className='text-gray-600 pr-4'>02</span> Meet Your Crew</motion.h3>
              <img src={CrewData[slided].image} alt="profile-img" className='h-full small:w-3/6 self-center w-full' />
            </div>
          </div>


          <motion.button
            variants={Right}
            className='absolute right-5 top-[50%] text-gray-100 small:hidden' 
            onClick={()=>slided === CrewData.length -1? setSlided(0):setSlided(slided + 1)}>
              <i className="fas fa-caret-right text-6xl hover:text-gray-600"></i>
          </motion.button>
      </motion.div>
    </motion.div>
  )
}

export default Crew