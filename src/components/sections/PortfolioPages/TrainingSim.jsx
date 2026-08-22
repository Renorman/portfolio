import React from 'react'
import { TemplateProj } from '../TemplateProj'
import { TrainingSimRenders, TrainingSimProgress } from '/src/constants/gallery.js'

const TrainingSimData = {
  title: 'Training Simulator',
  role: <span><em>Team</em> - Technical Artist</span>,
  icons: [{ src: './assets/AboutIcons/Technologies/Unreal.png', alt: 'Unreal' }, { src: './assets/AboutIcons/Technologies/Blender.png', alt: 'Blender' }, { src: './assets/AboutIcons/Technologies/AdobeAudition.png', alt: 'Adobe Audition' }, { src: './assets/AboutIcons/Technologies/AdobePhotoshop.png', alt: 'Adobe Photoshop' }, { src: './assets/AboutIcons/Languages/C++.png', alt: 'C++' }],
  splashSrc: '',
  synopsis: <span></span>,
  tasks: <span></span>,
  renderImages: TrainingSimRenders,
  progressImages: TrainingSimProgress,
  challenges: [
    { title: '', body: <span>

      
    </span> },
    { title: '', body: <span>

      
    </span> },
    { title: '', body: <span>

      
    </span> },
    { title: '', body: <span>

      
    </span> },
    { title: '',body: <span>

      
    </span> },
    { title: '',  body: <span>

      
    </span> },
  ],
  insights: <span>

      
    </span>
}

export const TrainingSim = () => <TemplateProj {...TrainingSimData} />