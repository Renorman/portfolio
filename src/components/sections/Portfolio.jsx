import React from 'react'
import { Link } from "react-router-dom"

const projects = [
  {
    to: "/TrainingSim",
    src: "./assets/gallery/Frames/TrainingSim_Frame.png",
    alt: "Training Simulator",
    title: "VR Training Simulator",
    sub: "Environmental Modelling and Technical Art",
    icons: ["./assets/AboutIcons/Technologies/Unreal.png", "./assets/AboutIcons/Technologies/Blender.png", "./assets/AboutIcons/Technologies/AdobeAudition.png", "./assets/AboutIcons/Technologies/AdobePhotoshop.png", "./assets/AboutIcons/Languages/C++.png"],
    tilt: "",
    col: "col-span-1 md:col-span-2 xl:col-span-2 xl:row-span-2",
  },
  {
    to: "/Temp",
    src: "./assets/gallery/Frames/TempApp_Frame.png",
    alt: "Temperature App Prototype",
    title: "Temperature App Prototype",
    sub: "UI Prototype",
    icons: ["./assets/AboutIcons/Technologies/AndroidStudio.png", "./assets/AboutIcons/Languages/Java.png"],
    tilt: "frame-tilt--right",
    col: "col-span-1 md:col-span-1 xl:col-span-1 xl:row-span-2",
  },
  {
    to: "/Fitz",
    src: "./assets/gallery/Frames/Fitz_Frame.png",
    alt: "Fitz Character Rig",
    title: "Fitz",
    sub: "3D Character Rig",
    icons: ["./assets/AboutIcons/Technologies/Blender.png"],
    tilt: "frame-tilt--left",
    col: "col-span-1 md:col-span-1 xl:col-span-1 xl:row-span-2",
  },
  {
    to: "/CM",
    src: "./assets/gallery/Frames/CM_Frame.png",
    alt: "Composition Mission",
    title: "Composition Mission",
    sub: "App Design",
    icons: ["./assets/AboutIcons/Technologies/Figma.png"],
    tilt: "",
    col: "col-span-1 md:col-span-2 xl:col-span-2 xl:row-span-2",
  },
  {
    to: "/PatDF",
    src: "./assets/gallery/Frames/PatDF_Frame.png",
    alt: "Patroclus Dies First",
    title: "Patroclus Dies First",
    sub: "3D Animated Visual Novel",
    icons: ["./assets/AboutIcons/Technologies/Blender.png", "./assets/AboutIcons/Technologies/Unity.png", "./assets/AboutIcons/Languages/YarnSpinner.png"],
    tilt: "frame-tilt--right",
    col: "col-span-1 md:col-span-2 xl:col-span-2 xl:row-span-2",
  },
  {
    to: "/ThisWebsite",
    src: "./assets/gallery/Frames/ThisWebsite_Frame.png",
    alt: "This Portfolio Website",
    title: "This Portfolio Website",
    sub: "Website Design",
    icons: ["./assets/AboutIcons/Technologies/Figma.png", "./assets/AboutIcons/Technologies/Blender.png", "./assets/AboutIcons/Technologies/Affinity.png", "./assets/AboutIcons/Technologies/React.png", "./assets/AboutIcons/Technologies/Tailwind.png", "./assets/AboutIcons/Technologies/ThreeJS.png", "./assets/AboutIcons/Languages/CSS.png", "./assets/AboutIcons/Languages/HTML.png"],
    tilt: "frame-tilt--left",
    col: "col-span-1 md:col-span-1 xl:col-span-1 xl:row-span-1",
  },
  {
    to: "/ProEnv",
    src: "./assets/gallery/Frames/ProEnv_Frame.png",
    alt: "Procedural Environment",
    title: "Procedural Environment",
    sub: "Custom Environment Models and Materials",
    icons: ["./assets/AboutIcons/Technologies/Blender.png", "./assets/AboutIcons/Technologies/Unreal.png"],
    tilt: "",
    col: "col-span-1 md:col-span-1 xl:col-span-1 xl:row-span-1",
  },
]

export const Portfolio = () => {
  return (
    <section id="portfolio" className="flex-center pl-4">
      <div className="page-title-vertical">
        <span>Portfolio</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:grid-rows-4 gap-5">
        <div className="page-title-horizontal">
          <span>Portfolio</span>
        </div>

        {projects.map((p) => (
          <div key={p.to} className={p.col}>
            <div className={`grid-container frame-tilt ${p.tilt}`}>
              <Link to={p.to} className="relative block group" onClick={() => window.scrollTo(0, 0)}>

                {/* Image */}
                <img
                  src={p.src}
                  alt={p.alt}
                  className="w-full h-fit object-contain transition duration-300 group-hover:opacity-50"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none">
                  
                  {/* Icons */}
                  <div className="flex gap-2 mb-1">
                    {p.icons.map((icon, i) => (
                      <img key={i} src={icon} alt="" className="w-8 h-8 object-contain" />
                    ))}
                  </div>

                  {/* Title */}
                  <h2 className="text-white-100 text-center font-bold text-lg leading-tight drop-shadow-lg">
                    {p.title}
                  </h2>

                  {/* Subtitle */}
                  <p className="text-white-100/70 text-sm text-center drop-shadow">
                    {p.sub}
                  </p>

                </div>
              </Link>
            </div>
          </div>
        ))}

      </div>
    </section>
  )
}