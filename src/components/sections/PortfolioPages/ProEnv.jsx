import React from 'react'
import { TemplateProj } from '../TemplateProj'
import { ProEnvRenders, ProEnvProgress } from '/src/constants/gallery.js'

const PatDFData = {
  title: '',
  role: <span></span>,
  icons: [{ src: '', alt: 'Blender' }],
  splashSrc: '',
  synopsis: <span></span>,
  tasks: <span></span>,
  renderImages: ProEnvRenders,
  progressImages: ProEnvProgress,
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

export const ProEnv = () => <TemplateProj {...ProEnvData} />