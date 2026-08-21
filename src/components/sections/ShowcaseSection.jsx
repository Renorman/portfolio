import React from 'react'

export const ShowcaseSection = () => {
  return (
    <div id="portfolio2" className="app-showcase">
        <div className = "w-full">
            <div className="showcaselayout">
                {/* LEFT SIDE */}
                <div className="first-project-wrapped">
                    <div className="image-wrapper">
                        <img src = "assets/gallery/training_sim/Screenshot 2025-07-11 100430.png" alt="Project 1"/>
                    </div>
                    <div className="text-content">
                        <h2>Training Sim</h2>
                        <p className="text-white-50 md:text-xl">Paragraph words</p>
                    </div>
                </div>

                <div className="first-project-wrapped">
                    <div className="image-wrapper">
                        <img src = "assets/gallery/composition_mission/Screenshot 2026-02-06 202911.png" alt="Project 2"/>
                    </div>
                    <div className="text-content">
                        <h2>Composition Mission</h2>
                        <p className="text-white-50 md:text-xl">Paragraph words</p>
                    </div>
                </div>

                <div className="first-project-wrapped">
                    <div className="image-wrapper">
                        <img src = "assets/gallery/temp_app/Screenshot 2025-10-24 002856.png" alt="Project 3"/>
                    </div>
                    <div className="text-content">
                        <h2>Temperature App</h2>
                        <p className="text-white-50 md:text-xl">Paragraph words</p>
                    </div>
                </div>


                {/* RIGHT SIDE */}
                <div className="project-list-wrapper overflow-hidden">
                    <div className = "project">
                        <div className="image-wrapper">
                            <img src="assets/gallery/fitzy/FitzRender2.png" alt="Project 4"></img>
                        </div>
                        <h2>?</h2>
                    </div>

                    <div className = "project">
                        <div className="image-wrapper">
                            <img src="assets/gallery/isometric_room/fixed_render_view.png" alt="Project 5"></img>
                        </div>
                        <h2>Room</h2>
                    </div>

                    <div className = "project">
                        <div className="image-wrapper">
                            <img src="assets/gallery/celestial_cartography/Screenshot 2026-02-06 235347.png" alt="Project 6"></img>
                        </div>
                        <h2>Celestial Cartography</h2>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}
