import React from 'react'
import { Button } from '../Button'
import { ImageButton } from '../ImageButton'
import { HeroExperience } from '../hero_models/HeroExperience'

export const Hero = () => {
  return (
    <section id="hero" className = "relative overflow-hidden">
        <div className="absolute top-0 left-0 z-10">
            {/*<img src = "/./assets/hero-bg.png" alt="Background" /> Unecessary dots? in upper corner*/}
        </div>

        <div className = "hero-layout">
            {/* LEFT: HERO CONTENT */}
            <header className= "flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
                <div className = "flex flex-col gap-2">
                    <div className = "hero-text">
                        <h1 className ="text-white-300">
                            RORY NORMAN
                        </h1>
                    </div>

                    <h3 className="text-white-300 md:text-xl relative z-10 pointer-events-none">
                        Programmer / Designer / 3D Artist
                    </h3>

                    <ImageButton
                        className="md:w-40 md:h-16 w-40 h-12"
                        id="button"
                    />
                

                </div>


            </header>


             {/* RIGHT: 3D MODEL */}
             <figure>
                <div className="hero-3d-layout">
                    <HeroExperience></HeroExperience>
                </div>
             </figure>
        </div>
    </section>
  )
}
