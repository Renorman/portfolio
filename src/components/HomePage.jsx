import { NavBar } from "./NavBar"
import { About } from "./sections/About"
import { Contact } from "./sections/Contact"
import { Hero } from "./sections/Hero"
import { Portfolio } from "./sections/Portfolio"
import { ShowcaseSection } from "./sections/ShowcaseSection"
import { Footer } from "./sections/Footer"

import {HashRouter as Router, Routes, Route} from 'react-router-dom'

export const HomePage = () => {
  return (
    <>
      <Hero />

      <NavBar/>
      
      <Portfolio/>

      <About/>

      <Contact/>

      <Footer/>

    </>
  )
}

export default HomePage