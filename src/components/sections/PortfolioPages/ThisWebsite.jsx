import React from 'react'

import { TemplateProj } from '../TemplateProj'
import { ThisWebsiteRenders, ThisWebsiteProgress } from '/src/constants/gallery.js'

const ThisWebsiteData = {
  title: 'This Website',
  role: <span></span>,
  icons: [{ src: '', alt: 'Blender' }],
  splashSrc: '',
  synopsis: <span></span>,
  tasks: <span></span>,
  renderImages: ThisWebsiteRenders,
  progressImages: ThisWebsiteProgress,
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

export const ThisWebsite = () => <TemplateProj {...ThisWebsiteData} />