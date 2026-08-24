import React from 'react'
import { Link } from "react-router-dom"
import { TemplateProj } from '../TemplateProj'
import { CMRenders, CMProgress } from '/src/constants/gallery.js'

const CMData = {
  title: 'Composition Mission',
  role: <span><em>Team</em> - Lead Designer</span>,
  icons: [{ src: './assets/AboutIcons/Technologies/Figma.png', alt: 'Figma' }],
  splashSrc: './assets/gallery/composition_mission/CMSplash.png',
  synopsis: <span>Composition Mission was an education website themed specifically around music. It was designed to teach students topics in music composition, music theory, and all other academic parts of the music learning process. With this website, our team aimed to provide beginner-to-intermediate music students with an engaging resource that’ll actually get them <em>excited</em> to learn. 
    <br></br>
    <br></br>

    Check out the complete Hi-Fi Prototype<a href = "https://www.figma.com/proto/eDxmvVsl61wZfkCN8PCvWk/CI210-High-Fi-Prototype?node-id=15-672&t=XJbJE34w6FJYB0JH-1&scaling=contain&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=15%3A672" target="_blank" rel="noopener noreferrer"> <u>here!</u></a>
  
  </span>,
  tasks: <span>I handled the bulk of our preparatory design process. This includes collecting and organizing our user and market research, and sketching out our original mockups. When we began building our first and final prototypes in Figma, I built out…
    <br></br>

    <ol className="list-decimal pl-5 space-y-1">
      <li>The Create Page</li>
      <li>The Publish Page</li>
      <li>The Explore Page</li>
      <li>The Profile Page</li>

    </ol>

  </span>,
  renderImages: CMRenders,
  progressImages: CMProgress,
  challenges: [
    { title: 'User Research', body: <span>
      When we began brainstorming this project, we were stuck on how to approach it. How can we pioneer something that’s both educational and fun for kids? I looked into various educational websites and apps targeted at a younger audience and analyzed how they captured the attention of that user base. But I found the most success when I remembered how <em>I</em> felt in music lessons. By honing in on what I struggled with and what I enjoyed the most, I tried to <em>become</em> our target audience. And by doing so, I came up with a composition-based game that allows students to get their hands dirty applying musical concepts they learnt during class. 
      
    </span>},
    { title: 'Prototype Design', body: <span>

      I went through many design iterations of our website and composition game, which left me with a lot of abandoned ideas and not much else. It’s one thing to come up with the general idea of a “compose your own song” game, and another thing entirely to fit it in with our more traditionally educational website.

      <br></br>
      <br></br>

      We tried to create a cohesive design first - focusing on color and fonts last. We were aiming for that in-between area between stuffy encyclopedia websites and CoolMathGames. We kept our shapes round to build a bubbly, friendly atmosphere. And then when everything began to fit together, we reinforced it all with a sans-serif font and a soft, cool-toned purple color scheme.

      
    </span>},
    { title: 'Figma Execution', body: <span>

      The toughest part of building out the Figma prototypes was coming up with a way to properly express our composition game. As our website’s main stand-out feature, it couldn’t just be a still image. The prototype had to convey some sense of what we were aiming for with the final product, but I couldn’t just code out the entire game. So, compromising between the two extremes, I <em>faked</em> our game’s mechanics.

      <br></br>
      <br></br>

      I created the impression of an animated character running across a parallax background by setting a timed delay between frames. And then, instead of physically making each note appear from nothing when clicked, like you might when coding this game, I hid a large selection of notes behind the sheet. So, hovering and clicking the staff simply reveals the note hiding behind it. 

    </span> },
  ],
  insights: <span>

    This project gave me the invaluable chance to build upon and test my Figma background. The smallest aesthetic changes, like font or color palette, could change the ultimate impression of your final product. 

    <br></br>
    <br></br>

    Digital learning environments, like Composition Mission, aim to improve their users’ lives through educational means. And so, not only do you have to be smart with what information you’re conveying, but you also have to arrange it in an engaging enough way so that kids don’t click off. And really, that mindset can be applied to any online environment, not just the educational ones. You should always work to balance information and interactivity.

    </span>
}
export const CM = () => <TemplateProj {...CMData} />