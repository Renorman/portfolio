import React from 'react'
import { TemplateProj } from '../TemplateProj'
import { PatDFRenders, PatDFProgress } from '/src/constants/gallery.js'

const PatDFData = {
  title: 'Patroclus Dies First',
  role: <span></span>,
  icons: [{ src: '', alt: 'Blender' }],
  splashSrc: '',
  synopsis: <span></span>,
  tasks: <span></span>,
  renderImages: PatDFRenders,
  progressImages: PatDFProgress,
  challenges: [
    { title: '', body: <span>

      
    </span> },
    { title: '', body: <span>

      
    </span> },
    { title: '', body: <span>

      
    </span> },
    { title: '', body: <span>

      
    </span> },
    { title: '', body: <span>

      
    </span> },
    { title: '',  body: <span>

      
    </span> },
  ],
  insights: <span>

      
    </span>
}

export const PatDF = () => <TemplateProj {...PatDFData} />