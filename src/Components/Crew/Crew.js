import React from 'react'
import Header from '../Header'
import {CrewData} from './CrewData'
import { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'


const Crew = () => {
  const [slided, setSlided] = useState(0);

  const [touchPosition, setTouchPosition] = useState(null)

  const handleTouchStart = (e) => {
      const touchDown = e.touches[0].clientX
      setTouchPosition(touchDown)
  }
    
  const handleTouchMove = (e) => {
    const touchDown = touchPosition

    if(touchDown === null) {
        return ''
    }

    const currentTouch = e.touches[0].clientX
    const diff = touchDown - currentTouch

    if (diff > 5) {
      slided === 0? setSlided(CrewData.length -1):setSlided(slided - 1)
    }

    if (diff < -5) {
      slided === CrewData.length -1? setSlided(0):setSlided(slided + 1)
    }

    setTouchPosition(null);
  }

  return (
    <div className='crew-outer overflow-hidden h-screen w-full sm:h-full relative'>
      <button className='absolute text-3xl left-0 top-[50%] text-gray-100 small:hidden' onClick={()=>slided === 0? setSlided(CrewData.length -1):setSlided(slided - 1)}>Prev</button>
      
      <Header/>    
        <div 
          onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}
          className="crew-body mx-[3%] mt-[3%] flex justify-center space-x-12 items-start h-full 
          sm:flex-col sm:mt-0 sm:mx-[5%] sm:justify-around">

          <div className="left space-y-16 w-3/6 mt-5 sm:w-full sm:space-y-8">

            <h3 className='text-gray-100 text-xl font-semibold uppercase'><span className='text-gray-600 pr-4'>02</span> Meet Your Crew</h3>
            
            <div className="body-info text-gray-100 w-5/6 space-y-3">
              <h3 className='text-2xl sm:text-xl -tracking-tight spacing uppercase text-gray-300'>{CrewData[slided].position}</h3>
              <h2 className=' text-5xl sm:text-4xl pb-4 -tracking-tighter uppercase'>{CrewData[slided].name}</h2>
              <p className='text-base text-gray-200'>{CrewData[slided].bio}</p>
            </div>


            <div className="active-slide flex space-x-5 cursor-pointer">
              <div className="w-4 h-4 rounded-full bg-gray-100"></div>
              <div className="w-4 h-4 rounded-full bg-gray-500"></div>
              <div className="w-4 h-4 rounded-full bg-gray-500"></div>
              <div className="w-4 h-4 rounded-full bg-gray-500"></div>
            </div>

          </div>


          <div className="dest-filter w-2/6 self-end">
            <img src={CrewData[slided].image} alt="profile-img" className='h-full' />
          </div>
        </div>


        <button className='absolute text-3xl right-0 top-[50%] text-gray-100 small:hidden' 
          onClick={()=>slided === CrewData.length -1? setSlided(0):setSlided(slided + 1)}>
            Next
            {/* <FontAwesomeIcon icon={solid('fa-caret-right')} /> */}
          </button>
    </div>
  )
}

export default Crew