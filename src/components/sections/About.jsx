import React from 'react'
import { Button } from '../Button'
import {technologies, languages} from "/src/constants/index.js"
export const About = () => {
  return (
    <section id = "about" className="flex-center pl-4">
        {/* Desktop: vertical title on the left */}
        <div className="page-title-vertical">
            <span>About</span>
        </div>

         <div className = "app-showcase w-full flex-col items-start!">
            {/* Mobile: horizontal title on top */}
            <div className="page-title-horizontal">
                <span>About</span>
            </div>

            <div className = "grid grid-cols-1 xl:grid-cols-2 gap-5">
                {/* PHOTO */}
                <div className = "col-span-1">
                    <div className="image-wrapper">
                        <div className="grid-container frame-tilt">
                            <img src = "./assets/RoryBorder.png" alt="Me :)" />
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4 pt-4">
                        <a href="https://drive.google.com/file/d/190dfc4JFY2U_lUqgr0gUkrdTVMtFA2Y5/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 hover:bg-green-100 text-white-300 font-medium rounded-lg transition shadow-md">
                            <img src="./assets/Download.png" alt="Download" className="w-5 h-5 object-contain" />
                            <span>Resume</span>
                        </a>

                        <a href = "https://www.linkedin.com/in/rory-norman-967018221/" target="_blank" rel="noopener noreferrer">
                            <img src="./assets/LinkedIn.png" alt="LinkedIn" className="w-10 h-10 rounded-lg object-contain hover:opacity-70 transition" />
                        </a>

                        <a href = "https://github.com/Renorman" target="_blank" rel="noopener noreferrer">
                            <img src="./assets/Github.png" alt="GitHub" className="w-10 h-10 rounded-lg object-contain hover:opacity-70 transition" />
                        </a>

                        <a href = "https://www.artstation.com/renorman" target="_blank" rel="noopener noreferrer">
                            <img src="./assets/Artstation.png" alt="Artstation" className="w-10 h-10 rounded-lg object-contain hover:opacity-70 transition" />
                        </a>

                    </div>
                </div>

                {/* DESCRIPTION */}
                <div className = "col-span-1">
                    <div className = "hero-text">
                            <h1>Nice to meet you!</h1>
                    </div>
                    
                    <p className="pt-5 text-white-100 md:text-xl relative z-10 pointer-events-none">
                        My name is Rory Norman, and I am a Chicago-bred developer and designer. 
                        <br></br>
                        <br></br>
                        I’ve always had a fascination with the intersection between technology and story-telling. During my time as an intern at Brunswick’s BI Design Lab, I’ve refined this passion to covering elements of UI/UX design, interactive programming, and 3D modelling.

                        <br></br>
                        <br></br>

                        Right now, I'm looking for my first full-time position! 
                    </p>

                    <p className = "pt-5 text-white-100 md:text-xl relative z-10 pointer-events-none"> Graduated from the University of Illinois Urbana-Champaign May 2026 </p>

                    <ul className="m-10 pl-10 list-disc text-white-100 md:text-xl relative z-10 pointer-events-none">

                           <li>Majored in Brain & Cognitive Science</li>
                           <li>Minored in Computer Science</li>
                           <li>Minored in Game Studies & Design</li>
                    </ul>
                
                </div>

                {/* ICONS */}
                <div className="col-span-1 xl:col-span-2 flex flex-col gap-8 pt-5">
                
                {/* Technologies */}
                <div>
                    <h3 className="text-white-100 mb-4">Technologies</h3>
                    <div className="flex flex-wrap gap-4">
                    {technologies.map((icon) => (
                        <div key={icon.alt} className="md:w-40 md:h-40 w-20 h-20 rounded-full flex items-center justify-center overflow-hidden frame-tilt">
                        <img src={icon.src} alt={icon.alt} title={icon.alt} className="w-full h-full object-contain" />
                        </div>
                    ))}
                    </div>
                </div>

                {/* Languages */}
                <div>
                    <h3 className="text-white-100 mb-4">Languages</h3>
                    <div className="flex flex-wrap gap-4">
                    {languages.map((icon) => (
                        <div key={icon.alt} className="md:w-40 md:h-40 w-20 h-20 rounded-full flex items-center justify-center overflow-hidden frame-tilt">
                        <img src={icon.src} alt={icon.alt} title={icon.alt} className="w-full h-full object-contain" />
                        </div>
                    ))}
                    </div>
                </div>

                </div>

            </div>
        </div>
    </section>
    
  )
}
