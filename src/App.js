import './App.css';
import Home from './Components/Home';
import { Routes, Route, useLocation} from 'react-router-dom';
import Destination from './Components/Destination/Destination'
import Technology from './Components/Technology/Technology'
import Crew from './Components/Crew/Crew'

function App() {
  return (
    <div className="App">
      {/* <div className="h-screen w-full bg-gray-700 relative">
        <div className="h-full w-full flex justify-center items-center relative z-[2]">
          <div className="w-2/6 h-full bg-gray-100"></div>
          <div className="w-2/6 h-full bg-gray-100"></div>
          <div className="w-2/6 h-full bg-gray-100"></div>
        </div>

        
        <div className="slant flex absolute top-0 left-0 flex-col w-full h-full">

          <div className="top-slant flex w-full h-full justify-between items center">
            <div className='w-2/6 bg-red-900 z-[4]'></div>
            <div className='w-[65%] flex justify-center' >
              <div className='w-3/6 z-[3] bg-gray-900 border-b-8 '></div>
              <div className='w-3/6 bg-red-900 z-[4]'></div>
            </div>
          </div>

          <div className="top-slant flex w-full h-full justify-between">
            <div className='w-[65%] flex justify-center' >
              <div className='w-3/6 z-[3] bg-gray-900 '></div>
              <div className='w-3/6 bg-red-900 z-[4]'></div>
            </div>
            <div className='w-2/6 z-[3] bg-gray-900'></div>
          </div>

          <div className="top-slant flex w-full h-full justify-between items center">
            <div className='w-2/6 bg-red-900 z-[4] border-r-8 border-gray-100'></div>
            <div className='w-[65%] flex justify-center items center' >
              <div className='w-3/6 z-[3] bg-gray-900 border-t-8'></div>
              <div className='w-3/6 bg-red-900 z-[4]'></div>
            </div>
          </div>
        </div>
      </div> */}
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/destination' element={<Destination />}/>
        <Route path='/crew' element={<Crew/>}/>
        <Route path='/technology' element={<Technology/>}/>
      </Routes>
    </div>
  );
}

export default App;
