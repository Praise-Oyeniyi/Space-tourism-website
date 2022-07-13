import React from 'react'
import Header from '../Header'
import {CrewData} from './CrewData'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';


const Crew = () => {


  return (
    <div className='crew-outer overflow-hidden h-screen w-full sm:h-screen'>
      <Header/>    
      <Slider onSlideChange={event => console.log(event.slideIndex)}> 
              {CrewData.map((content, index) => 
                (
                <div className="crew-body mx-[3%] mt-[3%] flex justify-center space-x-12 items-start h-full sm:flex-col sm:mt-0 sm:mx-[5%] sm:justify-around">
                  <div className="left space-y-16 w-3/6 mt-5 sm:w-full sm:space-y-8">
                    <h3 className='text-gray-100 text-xl font-semibold uppercase'><span className='text-gray-600 pr-4'>02</span> Meet Your Crew</h3>
                    
                    <div className="body-info text-gray-100 w-5/6 space-y-3" key={index}>
                      <h3 className='text-2xl sm:text-xl -tracking-tight spacing uppercase text-gray-300'>{content.position}</h3>
                      <h2 className=' text-5xl sm:text-4xl pb-4 -tracking-tighter uppercase'>{content.name}</h2>
                      <p className='text-base text-gray-200'>{content.bio}</p>
                    </div>

                    <div className="active-slide flex space-x-5 cursor-pointer">
                      <div className="w-4 h-4 rounded-full bg-gray-100"></div>
                      <div className="w-4 h-4 rounded-full bg-gray-500"></div>
                      <div className="w-4 h-4 rounded-full bg-gray-500"></div>
                      <div className="w-4 h-4 rounded-full bg-gray-500"></div>
                    </div>
                  </div>

                  <div className="dest-filter w-2/6 self-end">
                    <img src={content.image} alt="profile-img" className='h-full' />
                  </div>
                </div>
              ))}
      </Slider>
    </div>
  )
}

export default Crew