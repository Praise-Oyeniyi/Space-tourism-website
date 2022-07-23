import './App.css';
import { motion, AnimatePresence } from "framer-motion";
import Home from './Components/Home';
import { Routes, Route, useLocation} from 'react-router-dom';
import Destination from './Components/Destination/Destination'
import Technology from './Components/Technology/Technology'
import Crew from './Components/Crew/Crew'
import { useState } from 'react';
import {CrewData} from './Components/Crew/CrewData'
import { computeHeadingLevel } from '@testing-library/react';

function App() {
  const [loading, setLoading] = useState(true);

  const container = {
    animate: {
      transition: {
        staggerChildren: 0.4,
      },
    },
  }

  const Left = {
    initial: {x:-100+'vw', opacity:0},
    animate: {
        x:0, 
        opacity:1,
        transition: {
            type:'easeinout',
            ease: [0.6, 0.01, -0.05, 0.95],
            duration: 0.8,
      },
    },
  };

  const Right = {
      initial: {x:100+'vw', opacity:0},
      animate: {
          x:0, 
          opacity:1,
          transition: {
              type:'ease',
              ease: [0.6, 0.01, -0.05, 0.95],
              duration: 0.8,
        },
      },
  };

  //Crew Functions
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
      slided === CrewData.length -1? setSlided(0):setSlided(slided + 1)

    }

    if (diff < -8) {
      slided === 0? setSlided(CrewData.length -1):setSlided(slided - 1)
    }

    setTouchPosition(null);
  }

  return (
    <AnimatePresence>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Home setLoading={setLoading} loading={loading} container={container} Left={Left} Right={Right}/>}/>
          <Route path='/destination' element={<Destination container={container} Left={Left} Right={Right}/>}/>
          <Route path='/crew' element={<Crew Left={Left} Right={Right} container={container} handleTouchStart={handleTouchStart} handleTouchMove={handleTouchMove} slided={slided} setSlided={setSlided}/>}/>
          <Route path='/technology' element={<Technology container={container} Left={Left} Right={Right}/>}/>
        </Routes>
      </div>
    </AnimatePresence>
  );
}

export default App;
