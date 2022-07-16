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

    if (diff > 8) {
      slided === 0? setSlided(CrewData.length -1):setSlided(slided - 1)
    }

    if (diff < -8) {
      slided === CrewData.length -1? setSlided(0):setSlided(slided + 1)
    }

    setTouchPosition(null);
  }

  return (
    <div className='crew-outer overflow-hidden h-screen w-full relative sm:overflow-y-auto'>
      <button className='absolute left-5 top-[50%] text-gray-100 small:hidden' 
        onClick={()=>slided === 0? setSlided(CrewData.length -1):setSlided(slided - 1)}>
          <i className="fas fa-caret-left text-6xl hover:text-gray-600"></i>
      </button>
      
      <Header/>    
        <div 
          onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}
          className="crew-body mx-[3%] mt-[3%] flex justify-center space-x-12 items-start h-full 
          sm:flex-col sm:mt-0 small:mx-[5%] sm:justify-around sm:space-y-5 md:justify-between">

          <div className="left space-y-16 w-3/6 mt-5 sm:w-full sm:space-y-5 md:w-5/6">

            <h3 className='text-gray-100 text-xl font-semibold uppercase'><span className='text-gray-600 pr-4'>02</span> Meet Your Crew</h3>
            
            <div className="body-info text-gray-100 w-5/6 space-y-3 sm:w-full sm:space-y-0 md:space-y-1">
              <h3 className='text-2xl small:text-xl -tracking-tight spacing uppercase text-gray-300'>{CrewData[slided].position}</h3>
              <h2 className=' text-5xl small:text-3xl pb-4 -tracking-tighter uppercase'>{CrewData[slided].name}</h2>
              <p className='text-base text-gray-200'>{CrewData[slided].bio}</p>
            </div>


            <div className="active-slide flex space-x-5 cursor-pointer">
              <div className="w-4 h-4 rounded-full bg-gray-100"></div>
              <div className="w-4 h-4 rounded-full bg-gray-500"></div>
              <div className="w-4 h-4 rounded-full bg-gray-500"></div>
              <div className="w-4 h-4 rounded-full bg-gray-500"></div>
            </div>

          </div>


          <div className="dest-filter w-2/6 self-end sm:w-3/6 md:self-center">
            <img src={CrewData[slided].image} alt="profile-img" className='h-full' />
          </div>
        </div>


        <button className='absolute right-5 top-[50%] text-gray-100 small:hidden' 
          onClick={()=>slided === CrewData.length -1? setSlided(0):setSlided(slided + 1)}>
            <i className="fas fa-caret-right text-6xl hover:text-gray-600"></i>
          </button>
    </div>
  )
}

export default Crew