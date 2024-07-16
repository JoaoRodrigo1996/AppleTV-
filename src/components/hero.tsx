import { motion, useScroll, useTransform } from 'framer-motion'

import { Button } from "./button";
import { Container } from "./container";
import { useRef } from 'react';

export function Hero(){
  const videoContainerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: videoContainerRef,
    offset: ["start start", "end end"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0])

  return (
    <div className="relative h-[300vh] bg-background text-white">
      <motion.div 
        style={{ opacity }} 
        ref={videoContainerRef} 
        className="absolute -top-[--header-height] left-0 w-full h-[200vh]"
      >
        <img className="sticky top-0 h-screen w-full object-cover" src="/deadpool.jpg" alt="" />
      </motion.div>
      <Container className="relative z-10 h-[--hero-height]">
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
          }}
          whileInView='visible'
          animate="hidden"
          exit="hidden"
          viewport={{ amount: 0.9 }}
          className='h-full space-y-12 flex flex-col items-start justify-end'
        >
          <h2 className="text-7xl font-bold tracking-wide leading-tight">
            All Apple Originals. <br /> on Apple TV+.
          </h2>
          <div className="space-y-16 pb-10">
            <Button size='large'>Stream now</Button>
            <p className=" flex items-center gap-2 font-semibold text-xl leading-tight tracking-wide">Watch on tv <img src='/appletv.png' className='size-10' /> app.</p>
          </div>
        </motion.div>
      </Container>
    </div>
  )
}
