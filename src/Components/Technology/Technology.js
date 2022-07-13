import React from 'react';
import Header from '../Header';
import { useState } from 'react';
import {TechData} from './TechData';

const Technology = () => {
  const [arr, filterArr] = useState(TechData);


  const [active, setActive] = useState({
    activeState:0,
    objects: [{id:1, number: 1,filter: 'Launch vehicle' }, {id:2, number: 2, filter: 'Spaceport'}, {id:3, number: 3, filter: 'space capsule'}]
  });

  const styleActive = (pos)=>{
    if(pos === active.activeState){
      return "w-14 h-14 rounded-full border-[0.01em] flex items-center justify-center cursor-pointer bg-gray-200 text-gray-900"
    }else{
      return 'w-14 h-14 rounded-full border-[0.01em] flex items-center justify-center cursor-pointer text-gray-100'
    }
  }

  const filterValues = (termName)=>{
    const filtered = TechData.filter(e => e.terminology === termName);
    filterArr(filtered);
  }

  return (
    <div className='tech-d-bg w-full h-screen overflow-x-hidden'>
      <Header/>
      <div className="ml-[10%] my-[3%] flex space-x-12 items-start sm:flex-col sm:my-0 sm:mb-0 sm:mx-[5%] sm:space-x-0">

        <div className="left space-y-24 w-3/6 mt-5 sm:w-full sm:space-y-8">
          <h3 className='text-gray-100 text-xl font-semibold uppercase'><span className='text-gray-600 pr-4'>03</span>Space Launch 101</h3>

          <div className="flex justify-between items-center w-full h-auto space-y-3 sm:flex-col sm:space-y-5">
            <div className=" flex space-y-5 cursor-pointer flex-col self-start sm:flex-row sm:space-y-0 sm:space-x-5">
              {active.objects.map((e,pos)=>(
                <div className={styleActive(pos) } onClick={()=>{setActive({...active, activeState: pos}); filterValues(e.filter)}}>
                <p className="text-xl sm:text-lg font-medium" >{e.number}</p>
              </div>
              ))}
            </div>

            <div className=" text-gray-100 w-5/6 sm:w-full space-y-1 place-self-start">
              <h3 className='text-base -tracking-tight spacing uppercase text-gray-300'>The Terminology ...</h3>

              <h2 className=' text-4xl pb-4 -tracking-tighter uppercase sm:text-3xl'>{arr[0].terminology}</h2>

              <p className='text-base text-gray-200'>
                {arr[0].about}
              </p>
            </div>
          </div>
        </div>


        <div className="h-[30em] sm:h-[25em] w-3/6 flex justify-end sm:justify-center sm:w-full">
          <img src={arr[0].image} alt="tech" className='h-5/6 w-4/6 sm:w-full place-self-end self-end mb-[7%] sm:mb-0 sm:self-center sm:place-self-center' />
        </div>
      </div>
     </div>
  )
}

export default Technology;