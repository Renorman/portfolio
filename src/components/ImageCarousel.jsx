import { useState, useRef, useCallback } from 'react'

const MediaItem = ({ item, className }) => {
  if (item.type === 'youtube') {
    return (
      <iframe
        src={`https://www.youtube.com/embed/${item.videoId}`}
        className={className}
        style={{ border: 'none' }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
        allowFullScreen
      />
    )
  }
  if (item.type === 'video') {
    return <video src={item.src} className={className} controls playsInline />
  }
  return <img src={item.src} alt={item.caption} className={className} />
}

const ThumbMedia = ({ item }) => {
  if (item.type === 'youtube') {
    return (
      <img
        src={`https://img.youtube.com/vi/${item.videoId}/maxresdefault.jpg`}
        alt={item.caption}
        className="w-full h-full object-cover"
      />
    )
  }
  if (item.type === 'video') {
    return (
      <div className="w-full h-full bg-black-200 flex items-center justify-center">
        <span className="text-white-100 text-lg">▶</span>
      </div>
    )
  }
  return <img src={item.src} alt={item.caption} className="w-full h-full object-cover" />
}

const ImageCarousel = ({ images = [], variant = 'below', mainHeight = 400 }) => {
  const [current, setCurrent] = useState(0)
  const [fullscreen, setFullscreen] = useState(false)

  const pauseVideo = () => {
    const videoEl = document.querySelector('.carousel-main video')
    if (videoEl) videoEl.pause()
  }

  const move = (dir) => {
    pauseVideo()
    setCurrent((prev) => (prev + dir + images.length) % images.length)
  }

  const goTo = (i) => {
    pauseVideo()
    setCurrent(i)
  }

  if (!images.length) return null

  // side variant is shorter than below variant
  const heightClass = variant === 'side'
    ? `h-[${mainHeight * 0.75}px]`
    : `h-[${mainHeight}px]`

  const Thumbs = ({ thumbClass }) => (
    <div className={
      variant === 'below'
        ? 'flex gap-2 p-3 overflow-x-auto border-t border-white-100/20'
        : `flex flex-col gap-2 p-3 border-r border-white-100/20 overflow-y-auto`
      }
      style={variant === 'side' ? { height: mainHeight * 0.75 } : {}}
    >
      {images.map((item, i) => (
        <div
          key={i}
          onClick={() => goTo(i)}
          className={`${thumbClass} shrink-0 overflow-hidden rounded-md cursor-pointer border-2 transition-all duration-150 ${
            i === current
              ? 'border-white-100 opacity-100'
              : 'border-transparent opacity-50 hover:opacity-80'
          }`}
        >
          <ThumbMedia item={item} />
        </div>
      ))}
    </div>
  )

  return (
    <>
      {/* Fullscreen overlay */}
      {fullscreen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={() => setFullscreen(false)}
        >
          <button
            className="absolute top-4 right-4 text-white-100 text-3xl hover:opacity-70"
            onClick={() => setFullscreen(false)}
          >
            ✕
          </button>
          <MediaItem
            item={images[current]}
            className="max-w-[90vw] max-h-[90vh] object-contain"
          />
        </div>
      )}

      <div className="border border-white-100/20 rounded-xl overflow-hidden w-full">
        <div className={variant === 'side' ? 'flex' : 'flex flex-col'}>

          {variant === 'side' && <Thumbs thumbClass="w-14 h-10" />}

          <div className="flex flex-col flex-1">

            {/* Main media — fixed height, image fits inside */}
            <div
              className="carousel-main relative bg-black-200 flex items-center justify-center overflow-hidden"
              style={{ height: variant === 'side' ? mainHeight * 0.75 : mainHeight }}
            >
              <MediaItem
                item={images[current]}
                className="max-w-full max-h-full object-contain"
              />

              {/* Fullscreen button */}
              <button
                onClick={() => setFullscreen(true)}
                className="absolute top-2 right-2 bg-black-300/70 text-white-100 text-xs px-2 py-1 rounded hover:bg-black-300 transition"
                aria-label="Fullscreen"
              >
                ⛶
              </button>

              {/* Counter */}
              <span className="absolute bottom-2 right-3 bg-black-300/60 text-white-100 text-xs px-2 py-1 rounded-full font-mono">
                {current + 1} / {images.length}
              </span>
            </div>

            {/* Caption + static arrows */}
            <div className="px-4 py-3 border-t border-white-100/20 flex items-center justify-between gap-4 min-h-11">
              <button
                onClick={() => move(-1)}
                aria-label="Previous"
                className="shrink-0 rotate-90 hover:animate-bounce transition"
              >
                <img src="assets/ArrowHand.png" className="w-10 h-10 object-contain" />
              </button>

              <div className="text-sm text-white-100 text-center flex-1">
                {images[current].caption}
                {images[current].sub && (
                  <span className="ml-2 text-white-100/50 text-xs">
                    {images[current].sub}
                  </span>
                )}
              </div>

              <button
                onClick={() => move(1)}
                aria-label="Next"
                className="shrink-0 rotate-90 hover:animate-bounce scale-y-[-1] transition"
              >
                <img src="assets/ArrowHand.png" className="w-10 h-10 object-contain" />
              </button>
            </div>
          </div>
        </div>

        {variant === 'below' && <Thumbs thumbClass="w-16 h-12" />}
      </div>
    </>
  )
}

export default ImageCarousel