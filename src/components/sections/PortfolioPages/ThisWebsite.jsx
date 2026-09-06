import React from 'react'

import { TemplateProj } from '../TemplateProj'
import { ThisWebsiteRenders, ThisWebsiteProgress } from '/src/constants/gallery.js'

const ThisWebsiteData = {
  title: 'My Portfolio Website',
  role: <span><em>Solo</em> - Designer, Modeller, and Programmer</span>,
  icons: [{ src: "./assets/AboutIcons/Technologies/Figma.png", alt: 'Figma' }, { src: "./assets/AboutIcons/Technologies/Blender.png", alt: 'Blender' }, { src: "./assets/AboutIcons/Technologies/Affinity.png", alt: 'Affinity' }, { src: "./assets/AboutIcons/Technologies/React.png", alt: 'React' }, { src: "./assets/AboutIcons/Technologies/Tailwind.png", alt: 'Tailwind' }, { src: "./assets/AboutIcons/Technologies/ThreeJS.png", alt: 'ThreeJS' }, { src: "./assets/AboutIcons/Languages/CSS.png", alt: 'CSS' }, { src: "./assets/AboutIcons/Languages/HTML.png", alt: 'HTML' }],
  splashSrc: "./assets/gallery/this_website/this_website_splash.png",
  synopsis: <span>
    My portfolio website serves as a representation of everything I’m capable of, as well as quite literally, displaying what I’ve historically been capable of. 

    <br></br>
    <br></br>
  
    I designed, modelled, developed, and deployed this entire website start-to-finish from scratch. I taught and re-taught myself React, Tailwind CSS, JavaScript, HTML, CSS, and Three.js just to make it feel a bit more custom to my interests. And, I’m very proud of the final result. 
  </span>,
  tasks: <span>Lead developer, artist, and designer</span>,
  renderImages: ThisWebsiteRenders,
  progressImages: ThisWebsiteProgress,
  challenges: [
    { title: 'Visual Identity', body: <span> Blurb Under Construction!

      
    </span> },
    { title: '3D Landing Screen', body: <span> Blurb Under Construction!

      
    </span> },
    { title: 'Programming', body: <span> Blurb Under Construction!

      
    </span> },
    { title: 'Writing', body: <span> Blurb Under Construction!

      
    </span> },
  ],

  insights: <span>

      
    </span>
}

export const ThisWebsite = () => <TemplateProj {...ThisWebsiteData} />