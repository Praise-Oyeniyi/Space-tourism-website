import React from 'react'
import Header from './Header'

const Home = () => {
  return (
    <div className='bg-desktop w-full h-screen flex flex-col justify-between sm:overflow-hidden sm:justify-start sm:space-y-10'>
        <Header/>
        <div className="body-outer flex justify-around space-x-12 mx-[10%] my-[5%] items-end sm:flex-col sm:justify-center sm:mx-[5%] sm:space-x-0 sm:space-y-16" >
          
          <div className="body-info text-gray-100 w-3/6 space-y-2 sm:w-full text-left">
            <h3 className='text-2xl -tracking-tight spacing sm:text-xl'>SO, YOU WANT TO TRAVEL TO</h3>
            <h1 className=' text-9xl pb-4 -tracking-tight sm:text-5xl'>SPACE</h1>
            <p className='text-base'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax 
              because we’ll give you a truly out of this world experience!
            </p>
          </div>


          <div className="explore-circle sm:w-full sm:flex sm:justify-center">
            <div className="circle h-56 w-56 rounded-full bg-white flex justify-center items-center">
              <p className='text-4xl'>EXPLORE</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home