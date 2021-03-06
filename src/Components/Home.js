import React from 'react'
import Header from './Header'
import {NavLink} from 'react-router-dom';
import Loader from './Loader';
import {motion} from 'framer-motion'


const Home = ({setLoading, loading, container, Left, Right}) => {

  return (
  <div>
    {loading? (
      <motion.div className='bg-opacity-0'>
        <Loader setLoading={setLoading} container={container} Right={Right} Left={Left}/>
      </motion.div>
    ):
    <div 
      className='bg-desktop w-full h-screen flex flex-col justify-between overflow-x-hidden small:justify-start sm:space-y-10'>
        <Header container={container} Left={Left} Right={Right}/>
        <motion.div 
          variants={container} initial='initial' animate='animate'
          className="h-full body-outer flex justify-around space-x-12 mx-[5%] my-[5%] md:my-16 items-center sm:flex-col sm:justify-center small:mx-[5%] sm:space-x-0 sm:space-y-16" >
          
          <motion.div 
            variants={Left}
            className="body-info text-gray-100 w-3/6 space-y-2 sm:w-full text-left">
            <h3 className='text-2xl -tracking-tight spacing sm:text-xl md:text-lg md:-tracking-normal'>SO, YOU WANT TO TRAVEL TO</h3>
            <h1 className=' text-9xl pb-4 -tracking-tight sm:text-5xl md:text-7xl'>SPACE</h1>
            <p className='text-base md:text-sm'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax 
              because we’ll give you a truly out of this world experience!
            </p>
          </motion.div>


          <NavLink to='/destination'>
            <motion.div 
              variants={Right}
              className="explore-circle sm:w-full small:flex small:justify-center md:self-center">
              <div className="circle h-56 w-56 md:h-48 md:w-48 rounded-full bg-white flex justify-center items-center">
                <p className='text-4xl md:text-3xl'>EXPLORE</p>
              </div>
            </motion.div>
          </NavLink>
        </motion.div>
    </div>
    }
  </div>
  )
}

export default Home