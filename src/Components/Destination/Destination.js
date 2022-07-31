import React from 'react'
import Header from '../Header'
import { useState } from 'react'
import {Dest } from './Dest'
import { motion } from 'framer-motion'

const Destination = ({container, Left, Right}) => {

  const [arr, filterArr] = useState(Dest);

  const [planets, currentplanets] = useState({
    activeState:0,
    objects: [{id:1, planet: 'Moon'}, {id:2, planet: 'Mars'}, {id:3, planet: 'Europa'}, {id:4, planet: 'Titan'}]
  });

  const styleActivePlanet = (pos)=>{
    if(pos === planets.activeState){
      return 'border-gray-100 border-b-2 py-3 cursor-pointer'
    }else{
      return 'border-b-2 py-3 border-transparent cursor-pointer'
    }
  }

  const filterValues = (planetName)=>{
    const filtered = Dest.filter(e => e.planet === planetName);
    filterArr(filtered);
  }

  return (
    <motion.div 
      variants={container} 
      initial='initial' animate='animate' >
        
      <motion.div 
        initial={{y:100+'vh'}} animate={{y:0}} transition={{duration:0.8, type:'ease', ease: [0.6, 0.01, -0.05, 0.95]}}
        className='dest-outer w-full h-screen flex flex-col justify-between overflow-x-hidden small:justify-start text-gray-100 xl:overflow-hidden
        md:bg-[url("./Components/Destination/Images/bg-tablet.jpg")] sm:bg-[url("./Components/Destination/Images/bg-mobile.jpg")] xl:bg-[url("./Components/Destination/Images/desktop.jpg")]'>

        <Header container={container} Left={Left} Right={Right}/>
        <div className="dest-body h-full flex justify-around space-x-12 mx-[5%] my-[2%] md:my-8 items-start small:flex-col small:justify-start md:mx-[5%] sm:mx-[10%] small:space-x-0 small:space-y-10">
          <div
            className="left w-3/6 small:w-full small:flex flex-col space-y-10">
            <motion.h3 variants={Left}  className='text-gray-100 text-xl font-semibold md:font-medium small:text-base sm:place-self-center'><span className='text-gray-600 pr-4 small:pr-[0.5em]'>01</span> PICK YOUR DESTINATION</motion.h3>
            <motion.img variants={Left} src={arr[0].image} alt="current-planet-img" className='w-4/6 md:w-[35%] h-auto place-self-center'/>
          </div>

          <motion.div variants={container} 
            initial='initial' animate='animate'   
            className="dest-filter w-2/6 small:w-full place-self-start small:flex justify-center small:place-self-center flex-col items-center">

            <motion.ul variants={Left} className='head flex space-x-5 text-base'>
              {planets.objects.map((element, pos)=>(
                  <motion.li variants={Left} className={`${styleActivePlanet(pos)}`} key={pos} onClick={()=>{currentplanets({...planets, activeState: pos}); filterValues(element.planet)}}>{element.planet}</motion.li>
              ))}
            </motion.ul>


              
              {
                <motion.div variants={Right} className="top border-b-[0.05em] space-y-5 pt-5 sm:py-3 pb-8 border-b-gray-600 small:text-center">
                  <h2 className='text-8xl text-gray-100 sm:text-5xl md:text-7xl'>{arr[0].planet}</h2>
                  <p className='text-base'>
                    {arr[0].planetDesc}
                  </p>
                </motion.div>
              }{
                <motion.div variants={Right} className="bottom w-5/6 flex justify-between items-center py-5 sm:py-3 sm:flex-col sm:text-center"> 
                  <div className='flex flex-col space-y-1'>
                    <h6 className='text-xs sm:text-[0.6rem] -tracking-tighter uppercase font-medium'>
                      Avg. distance
                    </h6>
                    <h3 className='text-xl small:text-base uppercase font-semibold'>
                      {arr[0].distance}
                    </h3>
                  </div>

                  <div className='flex flex-col space-y-1'>
                    <h6 className='text-xs sm:text-[0.6rem] -tracking-tighter uppercase font-medium'>
                      Est. travel time
                    </h6>
                    <h3 className='text-xl small:text-base uppercase font-semibold'>
                      {arr[0].travelTime}
                    </h3>
                  </div>
                </motion.div>
            }

          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Destination