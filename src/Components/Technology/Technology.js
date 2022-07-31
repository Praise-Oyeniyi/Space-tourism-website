import React from 'react';
import Header from '../Header';
import { useState } from 'react';
import {TechData} from './TechData';
import { motion } from 'framer-motion';

const Technology = ({container, Left, Right}) => {
  const [arr, filterArr] = useState(TechData);


  const [active, setActive] = useState({
    activeState:0,
    objects: [{id:1, number: 1,filter: 'Launch vehicle' }, {id:2, number: 2, filter: 'Spaceport'}, {id:3, number: 3, filter: 'space capsule'}]
  });

  const styleActive = (pos)=>{
    if(pos === active.activeState){
      return "w-14 h-14 small:w-11 small:h-11  rounded-full border-[0.01em] flex items-center justify-center cursor-pointer bg-gray-200 text-gray-900"
    }else{
      return 'w-14 h-14 small:w-11 small:h-11 rounded-full border-[0.01em] flex items-center justify-center cursor-pointer text-gray-100 hover:bg-gray-500'
    }
  }

  const filterValues = (termName)=>{
    const filtered = TechData.filter(e => e.terminology === termName);
    filterArr(filtered);
  }

  return (
    <motion.div 
      variants={container} initial='initial' animate='animate'
      >

      <motion.div  
        initial={{y:100+'vh'}} animate={{y:0}} transition={{duration:0.8, type:'ease', ease: [0.6, 0.01, -0.05, 0.95]}}
        className='tech-d-bg w-full h-screen overflow-x-hidden xl:overflow-hidden
        md:bg-[url("./Components/Technology/Images/bg-tablet.jpg")] sm:bg-[url("./Components/Technology/Images/bg-mobile.jpg")] xl:bg-[url("./Components/Technology/Images/desktop.jpg")]'>

        <Header container={container} Left={Left} Right={Right}/>
        <div className="w-full ml-[10%] my-[3%] flex space-x-12 items-start 
          small:mx-0 small:flex-col small:space-x-0 small:items-center">

          <div className="left space-y-16 w-3/6 mt-5 small:space-y-8 small:order-2 small:mt-0 
            small:w-5/6">
            <motion.h3 variants={Left} className='text-gray-100 text-xl font-semibold uppercase small:text-base small:hidden'><span className='text-gray-600 pr-4'>03</span>Space Launch 101</motion.h3>


            <motion.div variants={Left} className="flex justify-between items-center w-full h-auto xl:space-x-5 space-y-3 
              small:flex-col small:text-center">
              <div className=" flex space-y-5 cursor-pointer flex-col self-start small:w-full
                  small:space-x-3 small:flex-row small:space-y-0 small:items-baseline small:justify-center">
                {active.objects.map((e,pos)=>(
                  <div className={styleActive(pos)} onClick={()=>{setActive({...active, activeState: pos}); filterValues(e.filter)}}>
                  <p className="text-xl sm:text-lg font-medium" >{e.number}</p>
                </div>
                ))}
              </div>


              <div className=" text-gray-100 w-5/6 small:w-full space-y-1 place-self-start">
                <h3 className='text-base -tracking-tight spacing uppercase text-gray-300'>The Terminology ...</h3>

                <h2 className=' text-4xl pb-4 -tracking-tighter uppercase small:text-3xl'>{arr[0].terminology}</h2>

                <p className='text-base text-gray-200 small:text-sm'>
                  {arr[0].about}
                </p>
              </div>
            </motion.div>

          </div>


          <motion.div variants={Right} className="h-[30em] small:h-[20em] w-3/6 flex justify-end 
              small:w-full small:order-1 small:flex-col md:space-y-10 sm:space-y-5">
            <motion.h3 variants={Left} className='text-gray-100 text-xl font-semibold uppercase small:text-base xl:hidden ml-[5%]'><span className='text-gray-600 pr-4'>03</span>Space Launch 101</motion.h3>
            <img src={window.innerWidth>750? arr[0].image : arr[0].imageL } alt="tech" className='object-cover h-5/6 w-[75%] small:w-full place-self-end self-end mb-[7%] sm:mb-0 small:self-center small:place-self-center' />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Technology;