import { useMemo, useRef } from 'react';
import { useScroll, motion, useTransform } from 'framer-motion'
import { useWindowSize } from 'react-use'
import { Movie, movies, randomMoviesSet1, randomMoviesSet2 } from "../movies";

export function VideoCarousel(){
  const carouselWrapperRef = useRef<HTMLDivElement>(null)
  const { width, height } = useWindowSize()
  const { scrollYProgress } = useScroll({
    target: carouselWrapperRef,
    offset: ["start start", "end start"]
  })
  const maximumScale = useMemo(() => {
    const windowYRatio = height / width
    const xScale = 1.66667
    const yScale = xScale * (16 / 9) * windowYRatio

    return Math.max(xScale, yScale)
  }, [width, height])

  const scale = useTransform(scrollYProgress,
    [0.3, 0.5, 0.66],
    [maximumScale * 1.1, maximumScale, 1]
  )

  const postersOpacity = useTransform(scrollYProgress, 
    [0.64, 0.66],
    [0, 1]
  )
  const posterTranslateXLeft = useTransform(scrollYProgress, 
    [0.64, 0.66],
    [-40, 0]
  )
  const posterTranslateXRight = useTransform(scrollYProgress, 
    [0.64, 0.66],
    [40, 0]
  )

  return (
    <div className="bg-black pb-8 ">
      <div ref={carouselWrapperRef} className="overflow-clip h-[300vh] mt-[-100vh]">
        <div className="h-screen sticky top-0 flex items-center">
          <div className="flex gap-5 mb-5 relative left-1/5 -translate-x-1/2">
            <motion.div style={{ opacity: postersOpacity, x: posterTranslateXLeft }} className="shrink-0 w-[60vw] aspect-video">
              <img src={movies[0].poster} alt={movies[0].name} className="w-full h-full object-cover rounded-2xl" />
            </motion.div>
            <motion.div style={{ scale }} className="shrink-0 w-[60vw] aspect-video">
              <img src={movies[1].poster} alt={movies[1].name} className="w-full h-full object-cover rounded-2xl" />
            </motion.div>
            <motion.div style={{ opacity: postersOpacity, x: posterTranslateXRight }} className="shrink-0 w-[60vw] aspect-video">
              <img src={movies[2].poster} alt={movies[2].name} className="w-full h-full object-cover rounded-2xl" />
            </motion.div>
          </div>
        </div>
      </div>

      <div className="space-y-3 -mt-[calc(100vh-(60vw*(16/9)/2))] pt-12">
        <SmallVideoCarousel movies={randomMoviesSet1} />
        <SmallVideoCarousel movies={randomMoviesSet2} />
      </div>

    </div>
  )
}

function SmallVideoCarousel({movies}: { movies: Movie[] }){
  return (
    <div 
      className="flex gap-3 overflow-clip"
    >
      {
        movies.map((movie, index) => (
          <div 
            key={`${movie.name}-${index}`} 
            className="w-[23vw] shrink-0 aspect-video"
          >
            <img 
              src={movie.poster} 
              alt={movie.name} 
              className="w-full h-full object-cover rounded-xl" 
            />
          </div>
        ))
      }
    </div>
  )
}
