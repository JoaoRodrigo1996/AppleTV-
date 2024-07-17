import { useMemo, useRef, useState } from 'react';
import { useScroll, motion, useTransform, useMotionValueEvent } from 'framer-motion'
import { useWindowSize } from 'react-use'
import { Movie, movies, randomMoviesSet1, randomMoviesSet2 } from "../movies";
import { Button } from './button';
import { PlayCircle } from 'lucide-react';

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

  const [carouselVariant, setCarouselVariant] = useState<'inactive' | 'active'>('inactive')

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    if (progress >= 0.67) {
      setCarouselVariant("active")
    }else {
      setCarouselVariant("inactive")
    }
  })

  return (
    <motion.div animate={carouselVariant} className="bg-background pb-16 ">
      <div ref={carouselWrapperRef} className="overflow-clip h-[300vh] mt-[-100vh]">
        <div className="sticky top-0 flex h-screen items-center">
          <div className="relative left-1/2 mb-5 flex -translate-x-1/2 gap-5">
            <motion.div 
              style={{ opacity: postersOpacity, x: posterTranslateXLeft }} 
              className="aspect-[9/16] w-[300px] shrink-0 overflow-clip rounded-2xl md:aspect-video md:w-[60vw]"
            >
              <img 
                src={movies[0].poster} 
                alt={movies[0].name} 
                className="w-full h-full object-cover rounded-2xl" 
              />
            </motion.div>
            <motion.div style={{ scale }} className="relative aspect-[9/16] w-[300px] shrink-0 overflow-clip rounded-2xl md:aspect-video md:w-[60vw]">
              <img src={movies[1].poster} alt={movies[1].name} className="w-full h-full object-cover rounded-2xl" />
              <motion.div 
                variants={{
                  active: { opacity: 1 },
                  inactive: { opacity: 0 }
                }} 
                className="absolute bottom-0 left-0 flex w-full flex-col items-center gap-4 p-5 text-lg text-white md:flex-row md:justify-between md:gap-0"
              >
                <h2 className="text-white text-xl font-semibold">Best video title ever</h2>
                <Button size='medium' className='flex items-center gap-2'>
                  Watch now
                  <PlayCircle className='size-4' />
                </Button>
              </motion.div>
            </motion.div>
            <motion.div style={{ opacity: postersOpacity, x: posterTranslateXRight }} className="aspect-[9/16] w-[300px] shrink-0 overflow-clip rounded-2xl md:aspect-video md:w-[60vw]">
              <img src={movies[2].poster} alt={movies[2].name} className="w-full h-full object-cover rounded-2xl" />
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div 
        variants={{
          active: { opacity: 1, y: 0 },
          inactive: { opacity: 0, y: 20 }
        }}
        transition={{ duration: 0.4 }}
        className="space-y-3 -mt-[calc((100vh-(300px*(16/9)))/2)] md:-mt-[calc((100vh-(60vw*(9/16)))/2)]"
      >
        <SmallVideoCarousel movies={randomMoviesSet1} />
        <div className="[--carousel-offset:-32px] [--duration:74s]">
          <SmallVideoCarousel movies={randomMoviesSet2} />
        </div>
      </motion.div>

    </motion.div>
  )
}

function SmallVideoCarousel({movies}: { movies: Movie[] }){
  return (
    <div className="overflow-clip">
      <div 
        className="animate-carousel-move relative left-[var(--carousel-offset,0px)] flex gap-3"
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
    </div>
  )
}
