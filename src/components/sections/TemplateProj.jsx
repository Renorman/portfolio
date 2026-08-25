import React from 'react'
import { Link } from 'react-router-dom'
import ImageCarousel from '../ImageCarousel.jsx'
import { Footer } from "./Footer"

/**
 * ProjectPage — reusable template for all portfolio project pages.
 */

export const TemplateProj = ({
  title,
  role,
  icons = [],
  splashSrc,
  synopsis,
  tasks,
  renderImages = [],
  progressImages = [],
  challenges = [],
  insights,
}) => {
  return (
    <><section className="w-full min-h-screen px-5 md:px-10 py-10 flex flex-col gap-16">

      <div>
        {/* ── BACK ARROW!!! ─────────────────────────────────────────── */}
        <Link to="/#portfolio">
          <img
            src="assets/ArrowHand_Border.png"
            alt="Back to portfolio"
            className="w-24 h-24 object-contain rotate-90 hover:animate-bounce transition-all duration-500" />
        </Link>

        {/* ── Splash image ─────────────────────────────────────────── */}
        {splashSrc && (
          <div className="w-fit max-h-[30vh] overflow-visible rounded-xl">
            <img
              src={splashSrc}
              alt={title}
              className="w-full h-full object-cover" />
          </div>
        )}


      </div>
      

      {/* ── Title block ──────────────────────────────────────────── */}
      <div className="flex flex-col gap-2">
        <h1>{title}</h1>
        {role && <p className="text-white-100/80 md:text-lg">{role}</p>}
        {icons.length > 0 && (
          <div className="flex gap-3 mt-1">
            {icons.map((icon, i) => (
              <img
                key={i}
                src={icon.src}
                alt={icon.alt}
                title={icon.alt}
                className="w-12 h-12 object-contain" />
            ))}
          </div>
        )}
      </div>

      {/* ── Renders slideshow ────────────────────────────────────── */}
      {renderImages.length > 0 && (
        <div className="max-w-9/10 mx-auto w-full"> 
          <ImageCarousel images={renderImages} variant="below" mainHeight={500}/>
        </div>
      )}

      {/* ── Synopsis — fancy border box ──────────────────────────── */}
      {synopsis && (
        <BorderBoxFilled>
          <p style={{ whiteSpace: 'pre-wrap' }} className="text-white-100 md:text-lg leading-relaxed">{synopsis}</p>
        </BorderBoxFilled>
      )}

      {/* ── Tasks — fancy border box ─────────────────────────────── */}
      {tasks && (
        <div className="flex flex-col gap-4">
          <h2>Role</h2>
          <BorderBoxOutlined>
            <p style={{ whiteSpace: 'pre-wrap' }} className="text-white-100 md:text-lg leading-relaxed">{tasks}</p>
          </BorderBoxOutlined>
        </div>
      )}

      {/* ── Progress slideshow ───────────────────────────────────── */}
      {progressImages.length > 0 && (
        <div className="flex flex-col gap-4">
          <h2>Progress</h2>
          <div className="max-w-8/10 mx-auto w-full">
            <ImageCarousel images={progressImages} variant="side" mainHeight={400}/>
          </div>
        </div>
      )}

      {/* ── Challenges grid ──────────────────────────────────────── */}
      {challenges.length > 0 && (
        <div className="flex flex-col gap-6">
          <h2>Challenges</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {challenges.map((c, i) => (
              <ChallengeBox key={i} title={c.title} body={c.body} />
            ))}
          </div>
        </div>
      )}

      {/* ── Insights — fancy border box ──────────────────────────── */}
      {insights && (
        <div className="flex flex-col gap-4">
          <h2>Insights</h2>
          <BorderBoxOutlined>
            <p style={{ whiteSpace: 'pre-wrap' }} className="text-white-100 md:text-lg leading-relaxed">{insights}</p>
          </BorderBoxOutlined>
        </div>
      )}
    </section>
    
    
    <Footer></Footer></>
  
  )
}

const BorderBoxFilled = ({ children }) => (
  <div className="w-full py-8 px-12 text-white-100"
    style={{
      backgroundColor: '#3D6257',
      borderRadius: '0 999px 999px 0',
      boxShadow: '0 0 0 4px #3D6257, 0 0 0 6px #6aaf88, 0 0 0 10px #3D6257, 0 0 0 12px #4A8C72'
      }}>
    {children}
  </div>
)

const BorderBoxOutlined = ({ children }) => (
  <div className="relative w-full py-8 px-10 text-white-100 rounded-lg"
    style={{ backgroundColor: '#1E3D30', border: '1px solid #4A8C72' }}>
    <div className="absolute inset-1.5 border border-[#3d7a5a] pointer-events-none" />
    <span className="absolute -top-2.5 -left-2.5 text-[#6aaf88] text-xl">⚜</span>
    <span className="absolute -top-2.5 -right-2.5 text-[#6aaf88] text-xl scale-x-[-1]">⚜</span>
    <span className="absolute -bottom-2.5 -left-2.5 text-[#6aaf88] text-xl scale-y-[-1]">⚜</span>
    <span className="absolute -bottom-2.5 -right-2.5 text-[#6aaf88] text-xl -scale-100">⚜</span>
    <div className="relative z-10">{children}</div>
  </div>
)

// ── ChallengeBox ─────────────────────────────────────────────────
// Scrollable green card for each challenge entry.
const ChallengeBox = ({ title, body }) => (
  <div className="flex flex-col gap-3 bg-black-10 border border-white-100/20 rounded-xl p-5 max-h-72 overflow-y-auto">
    <h5 className="text-white-100">{title}</h5>
    <p style={{ whiteSpace: 'pre-wrap' }} className="text-white-100/80 text-sm leading-relaxed">{body}</p>
  </div>
)

export default TemplateProj