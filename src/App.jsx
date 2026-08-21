import {HashRouter as Router, Routes, Route} from 'react-router-dom'

import  ScrollToAnchor  from './components/ScrollToAnchor'



import { HomePage } from "./components/HomePage"

import { CM } from './components/sections/PortfolioPages/CM'
import { Fitz } from './components/sections/PortfolioPages/Fitz'
import { Temp } from './components/sections/PortfolioPages/Temp'
import { TrainingSim } from './components/sections/PortfolioPages/TrainingSim'
import { ProEnv } from './components/sections/PortfolioPages/ProEnv'
import { ThisWebsite } from './components/sections/PortfolioPages/ThisWebsite'
import { PatDF } from './components/sections/PortfolioPages/PatDF'


const App = () => {
  return (
    <Router>
      <ScrollToAnchor></ScrollToAnchor>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>

        <Route path="/CM" element={<CM/>}></Route>
        <Route path="/Fitz" element={<Fitz/>}></Route>
        <Route path="/Temp" element={<Temp/>}></Route>
        <Route path="/TrainingSim" element={<TrainingSim/>}></Route>
        <Route path="/ProEnv" element={<ProEnv/>}></Route>
        <Route path="/ThisWebsite" element={<ThisWebsite/>}></Route>
        <Route path="/PatDF" element={<PatDF/>}></Route>

      </Routes>
    </Router>
  )
}

export default App