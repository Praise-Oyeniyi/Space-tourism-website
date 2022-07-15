import React from 'react'
import {NavLink} from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
    const [active, setActive] = useState(false);


    
  return (
    <div>
        <div className="header-outer w-full flex justify-between text-gray-400 items-center py-5 relative transition-all">
            <div className=" w-12 h-auto ml-[5%] rounded-full sm:w-8">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fill-rule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF"/><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/></g></svg>
            </div>

            <div className="h-[0.08em] w-[40%] bg-gray-600 relative left-14 sm:hidden"></div>

            <div className={`nav w-3/6 bg-gray-900 justify-self-end bg-opacity-60 sm:w-full sm:absolute sm:top-0 sm:h-screen sm:z-10 sm:justify-self-auto delay-150 transition-all ${active? 'left-0' : 'left-full' }`} onClick={()=>setActive(!active)}>
                    <div className="sm:flex sm:flex-col sm:w-3/6 sm:bg-gray-900 sm:h-full sm:fixed sm:ml-[50%] justify-start items-center">

                        <div className={`w-auto place-self-end sm:fixed justify-self-center top-[3%] md:hidden z-50 ${active? '' : 'right-0' }`} onClick={()=>setActive(!active)}>
                            <div className={`p-4 w-2/6 space-y-2 mx-5 md:hidden xl:hidden`}>
                                <div className="h-px w-10 bg-gray-100"></div>
                                <div className="h-px w-8 bg-gray-100"></div>
                            </div>
                        </div>


                        <ul className='nav-link w-5/6 h-full flex justify-center items-center font-medium space-x-8 pl-5 text-sm 
                            sm:flex-col sm:items-start sm:space-x-0 sm:justify-start sm:mt-28 sm:space-y-8 sm:w-full transition-all
                            '>
                            <NavLink to='/'><li className='flex justify-between border-b-2 sm:border-2 border-transparent py-5 sm:py-3 sm:px-5 hover:text-gray-100'><span className='text-gray-100 pr-1 font-semibold'>00</span>HOME</li></NavLink>
                            <NavLink to='/destination'><li className='flex justify-between border-b-2 border-transparent py-5 sm:py-3 sm:px-5 hover:text-gray-100'><span className='text-gray-100 pr-1 font-semibold'>01</span>DESTINATION</li></NavLink>
                            <NavLink to='/crew'><li className='flex justify-between border-b-2 border-transparent py-5 sm:px-5 sm:py-3 hover:text-gray-100'><span className='text-gray-100 pr-1 font-semibold'>02</span>CREW</li></NavLink>
                            <NavLink to='/technology'><li className='flex justify-between border-b-2 border-transparent py-5 sm:py-3 sm:px-5 hover:text-gray-100'><span className='text-gray-100 pr-1 font-semibold'>03</span>TECHNOLOGY</li></NavLink>
                        </ul> 
                    </div>
                
            </div>
        </div>
    </div>
  )
}

export default Header