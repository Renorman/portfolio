import React from 'react'
import { Link } from "react-router-dom"
import { TemplateProj } from '../TemplateProj'
import { fitzRenders, fitzProgress } from '/src/constants/gallery.js'

const fitzData = {
  title: 'FitzChivalry Model',
  role: 'Solo - Modeller and Rigger',
  icons: [{ src: 'src/assets/AboutIcons/Technologies/Blender.png', alt: 'Blender' }],
  splashSrc: 'src/assets/gallery/fitzy/FitzSplash.png',
  synopsis: 'This Blender project served as my foray into modelling, rigging, and posing an entire character from scratch. I attempted to create a scene from Robin Hobb’s classic fantasy novel, Assassin’s Apprentice. Here you see Fitz right before making his life-changing deal with King Shrewd. This moment serves as a precipice for Fitz’s life in this book and all following. ',
  tasks: 'As this was a solo project, I was in charge of the entirety of the character creation, character rigging, and scene-dressing. I built out all Fitz’s modelling elements, textures, and props all in an attempt to create a custom, optimized character from scratch. ',
  renderImages: fitzRenders,
  progressImages: fitzProgress,
  challenges: [
    { title: 'Box Modelling', body: `This was my very first time modelling any human character in Blender. Prior to this, most of my experience was in box-modelling environmental stills. In general, I’d say that my approach is more technically-based than purely creative. And so, to play to my strengths, I relied more on box-modelling than free-form sculpting when making Fitz. I made sure to collect an assortment of reference pictures, and spent weeks meticulously tweaking the model to my standards. 

And additionally, despite holding no intentions to animate this character, I pushed myself to create a face that could be animated. By which I mean, I built a rough mock-up of Fitz’s head, and then retopologized its topology to better match the animated flows of the face.
` },
    { title: 'Clothes',       body: `I had a tough time creating all the folds shown in Fitz’s clothes. When dealing with realistic fabric, my go-to is usually implementing a physics simulation. But since the clothes collide with the model, the resulting simulations were less than ideal. And when a simulation produced a scroungable result, it was still less detailed than I would have liked. 

So, I combined box-modelling with sculpting to paint realistic seams and folds onto the outfit. And then, to maintain a reasonable poly-count, I could then bake those folds onto a lower-poly mesh.
` },
    { title: 'Hair',          body: `FitzChivalry Farseer has famously curly hair, which could be a challenge to model. Maintaining that curly silhouette runs the risk of dangerously increasing the model’s entire polygon count, so I opted for a more cartoonish approach instead. By making a collection of big, stylized curves to mimic his curls, I could realistically cover more of Fitz’s head with less detailed shapes. This difference was more so pronounced after decimating and simplifying the already simple curls. ` },
    { title: 'Textures',      body: `Your text...` },
    { title: 'Rigging',       body: `Your text...` },
    { title: 'Set Dressing',  body: `Your text...` },
  ],
  insights: `I remember being very frightened and nervous when starting this project. At the time, it seemed overly ambitious. But I ended up learning a tremendous amount about modelling, texturing, and rigging. I developed an approach for modeling organic materials from scratch. Now when I create a rough block-out, I have a better understanding of when I should apply subdivisions.

But perhaps most importantly, I learned how to balance box-modelling with sculpting. Blender has both workspaces available for a reason, and restricting yourself only stifles your creative potential. 
`
}

export const Fitz = () => <TemplateProj {...fitzData} />