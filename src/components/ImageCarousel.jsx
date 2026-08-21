import { useState, useRef } from 'react'
const MediaItem = ({ item, className }) => {
  if (item.type === 'video') {
    return (
      <video
        src={item.src}
        className={className}
        controls
        playsInline
      />
    )
  }
  return (
    <img
      src={item.src}
      alt={item.caption}
      className={className}
    />
  )
}

const ThumbMedia = ({ item }) => {
  if (item.type === 'video') {
    return (
      <div className="w-full h-full bg-black-200 flex items-center justify-center">
        <span className="text-white-100 text-lg">▶</span>
      </div>
    )
  }
  return (
    <img
      src={item.src}
      alt={item.caption}
      className="w-full h-full object-cover"
    />
  )
}

const ImageCarousel = ({ images = [], variant = 'below' }) => {
  const [current, setCurrent] = useState(0)
  const videoRef = useRef(null)

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

  const Thumbs = ({ thumbClass }) => (
    <div className={
      variant === 'below'
        ? 'flex gap-2 p-3 overflow-x-auto border-t border-white-100/20'
        : 'flex flex-col gap-2 p-3 border-r border-white-100/20 overflow-y-auto max-h-85'
    }>
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
    <div className="border border-white-100/20 rounded-xl xl:p-10 md:p-5 overflow-hidden w-full">
      <div className={variant === 'side' ? 'flex' : 'flex flex-col'}>

        {/* Side thumbnails — left of image */}
        {variant === 'side' && <Thumbs thumbClass="w-14 h-10" />}

        <div className="flex flex-col flex-1">

          {/* Main media */}
          <div className="carousel-main relative aspect-video bg-black-200">
            <MediaItem
              item={images[current]}
              className="w-full h-full object-cover"
            />

            {/* Prev button */}
            <button
              onClick={() => move(-1)}
              aria-label="Previous"
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-black-300/70 rotate-90 hover:animate-bounce text-white-100 rounded-full w-9 h-9 flex items-center justify-center transition text-xl leading-none"
            >
              <img src = "./assets/ArrowHand.png"/>
            </button>

            {/* Next button */}
            <button
              onClick={() => move(1)}
              aria-label="Next"
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-black-300/70 rotate-90 scale-y-[-1] hover:animate-bounce text-white-100 rounded-full w-9 h-9 flex items-center justify-center transition text-xl leading-none"
            >
              <img src = "./assets/ArrowHand.png"/>
            </button>

            {/* Counter */}
            <span className="absolute bottom-2 right-3 bg-black-300/60 text-white-100 text-xs px-2 py-1 rounded-full font-mono">
              {current + 1} / {images.length}
            </span>
          </div>

          {/* Caption */}
          {(images[current].caption || images[current].sub) && (
            <div className="px-4 py-3 text-sm text-white-100 border-t border-white-100/20 min-h-11">
              {images[current].caption}
              {images[current].sub && (
                <span className="ml-2 text-white-100/50 text-xs">
                  {images[current].sub}
                </span>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Bottom thumbnails */}
      {variant === 'below' && <Thumbs thumbClass="w-16 h-12" />}
    </div>
  )
}

export default ImageCarousel