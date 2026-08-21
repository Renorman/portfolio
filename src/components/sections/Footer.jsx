import React from 'react'

export const Footer = () => {
  return (
    <section id = "footer" className="footer">
        <div className = "footer-container">
            <h3 className = "col-span-1 flex items-center justify-center md:justify-start">
                Designed, modeled, and coded by Rory :^)
            </h3>

            <div className="col-span-1 flex items-center justify-center md:justify-end gap-4">
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


    </section>
  )
}
