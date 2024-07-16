import { Button } from "./button";
import { Container } from "./container";

export function Hero(){
  return (
    <div className="relative h-[300vh] bg-background text-white">
      <div className="absolute -top-[--header-height] left-0 w-full h-[200vh]">
        <img className="sticky top-0 h-screen w-full object-cover" src="/deadpool.jpg" alt="" />
      </div>
      <Container className="relative space-y-12 z-10 min-h-[--hero-height] flex flex-col items-start justify-end">
        <h2 className="text-7xl font-bold tracking-wide leading-tight">
          All Apple Originals. <br /> on Apple TV+.
        </h2>
        <div className="space-y-16 pb-10">
          <Button size='large'>Stream now</Button>
          <p className=" flex items-center gap-2 font-semibold text-xl leading-tight tracking-wide">Watch on tv <img src='/appletv.png' className='size-10' /> app.</p>
        </div>
      </Container>
    </div>
  )
}
