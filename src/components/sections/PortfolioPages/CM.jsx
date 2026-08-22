import React from 'react'
import { Link } from "react-router-dom"
import { TemplateProj } from '../TemplateProj'
import { CMRenders, CMProgress } from '/src/constants/gallery.js'

const CMData = {
  title: 'Composition Mission',
  role: <span></span>,
  icons: [{ src: '', alt: 'Blender' }],
  splashSrc: '',
  synopsis: ' ',
  tasks: <span></span>,
  renderImages: CMRenders,
  progressImages: CMProgress,
  challenges: [
    { title: '', body: <span>

      
    </span>},
    { title: '', body: <span>

      
    </span>},
    { title: '', body: <span>

      
    </span> },
    { title: 'Textures', body: <span>

      
    </span>},
    { title: '', body: <span>

      
    </span> },
    { title: '',  body: <span>

      
    </span> },
  ],
  insights: <span>

      
    </span>
}
export const CM = () => <TemplateProj {...CMData} />