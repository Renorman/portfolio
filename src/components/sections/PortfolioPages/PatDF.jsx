import React from 'react'
import { TemplateProj } from '../TemplateProj'
import { PatDFRenders, PatDFProgress } from '/src/constants/gallery.js'

const PatDFData = {
  title: 'Patroclus Dies First',
  role: <span><em>Solo</em> - Programmer, Writer, and Artist</span>,
  icons: [{ src: "./assets/AboutIcons/Technologies/Blender.png", alt: 'Blender' }, { src: "./assets/AboutIcons/Technologies/Unity.png", alt: 'Unity' }, { src: "./assets/AboutIcons/Languages/YarnSpinner.png", alt: 'YarnSpinner' }],
  splashSrc: "./assets/gallery/patroclus_dies_first/patdf_splash.png",
  synopsis: <span>
    Patroclus Dies First is the title of a custom-made visual novel game complete with rigged, animated characters and branching dialouge. On the eve before war, an abitious attendant is confronted by a prophetic sea goddess, who forces her to question whether the undying devotion she holds for her princess is love, or something far more selfish. 
    
    <br></br>
    <br></br>
    
    This project served my second attempt at modelling 3D characters, and my first attempt at writing and coding a compelling story. 

  </span>,
  tasks: <span>This was a solo project, so I did everything myself. I personally modelled the characters, animated their actions, wrote the script, and brought it all together in a Unity project. </span>,
  renderImages: PatDFRenders,
  progressImages: PatDFProgress,
  challenges: [
    { title: 'Modelling', body: <span> Blurb Under Construction!

      
    </span> },
    { title: 'Rigging', body: <span> Blurb Under Construction!

      
    </span> },
    { title: 'Animating', body: <span> Blurb Under Construction!

      
    </span> },
    { title: 'Scripting', body: <span> Blurb Under Construction!

      
    </span> },
    { title: 'Blender to Unity', body: <span> Blurb Under Construction!

      
    </span> },
  ],
  insights: <span> Blurb Under Construction!

      
    </span>
}

export const PatDF = () => <TemplateProj {...PatDFData} />