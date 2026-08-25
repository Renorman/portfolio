import React from 'react'
import { TemplateProj } from '../TemplateProj'
import { ProEnvRenders, ProEnvProgress } from '/src/constants/gallery.js'

const ProEnvData = {
  title: 'Procedural Environment',
  role: <span><em>Solo</em> - Technical Artist</span>,
  icons: [{ src: "./assets/AboutIcons/Technologies/Blender.png", alt: 'Blender' }, { src: "./assets/AboutIcons/Technologies/Unreal.png", alt: 'Unreal Engine' }],
  splashSrc: "./assets/gallery/auto_landscape/auto_landscape_splash.png",
  synopsis: <span>Blurb Under Construction!</span>,
  tasks: <span>Blurb Under Construction!</span>,
  renderImages: ProEnvRenders,
  progressImages: ProEnvProgress,
  challenges: [
    { title: 'Procedural Environment Model', body: <span> Blurb Under Construction!

      
    </span> },
    { title: 'Uploading Height Maps', body: <span> Blurb Under Construction!

      
    </span> },
    { title: 'Automaterial Texture', body: <span> Blurb Under Construction!

      
    </span> },
  ],
  insights: <span>

    Blurb Under Construction!

      
    </span>
}

export const ProEnv = () => <TemplateProj {...ProEnvData} />