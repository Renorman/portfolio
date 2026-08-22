import React from 'react'
import { TemplateProj } from '../TemplateProj'
import { TempRenders, TempProgress } from '/src/constants/gallery.js'

const TempData = {
  title: '',
  role: <span></span>,
  icons: [{ src: '', alt: 'Blender' }],
  splashSrc: '',
  synopsis: <span></span>,
  tasks: <span></span>,
  renderImages: TempRenders,
  progressImages: TempProgress,
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

export const Temp = () => <TemplateProj {...TempData} />