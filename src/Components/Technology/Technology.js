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
      return "w-14 h-14 md:h-11 md:w-11 rounded-full border-[0.01em] flex items-center justify-center cursor-pointer bg-gray-200 text-gray-900"
    }else{
      return 'w-14 h-14 md:h-10 md:w-10 rounded-full border-[0.01em] flex items-center justify-center cursor-pointer text-gray-100 hover:bg-gray-500'
    }
  }

  const filterValues = (termName)=>{
    const filtered = TechData.filter(e => e.terminology === termName);
    filterArr(filtered);
  }

  return (
    <motion.div variants={container} initial='initial' animate='animate' className='tech-d-bg w-full h-screen overflow-x-hidden xl:overflow-hidden'>
      <Header/>
      <div className="ml-[10%] md:ml-[3%] my-[3%] flex space-x-12 items-start sm:flex-col sm:my-0 sm:mb-0 sm:mx-[5%] sm:space-x-0 sm:mt-5">

        <div className="left space-y-16 w-3/6 mt-5 sm:w-full small:space-y-8">
          <motion.h3 variants={Left} className='text-gray-100 text-xl font-semibold uppercase'><span className='text-gray-600 pr-4'>03</span>Space Launch 101</motion.h3>


          <motion.div variants={Left} className="flex justify-between items-center md:justify-start w-full h-auto xl:space-x-5 space-y-3 md:space-y-0 
            md:space-x-3 sm:flex-col sm:space-y-5">
            <div className=" flex space-y-5 cursor-pointer flex-col self-start sm:flex-row sm:space-y-0 sm:space-x-5">
              {active.objects.map((e,pos)=>(
                <div className={styleActive(pos) } onClick={()=>{setActive({...active, activeState: pos}); filterValues(e.filter)}}>
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


        <motion.div variants={Right} className="h-[30em] small:h-[25em] w-3/6 md:mt-8 flex justify-end sm:justify-center sm:w-full">
          <img src={arr[0].image} alt="tech" className='h-5/6 w-4/6 md:w-full sm:w-full place-self-end self-end mb-[7%] sm:mb-0 sm:self-center sm:place-self-center' />
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Technology;