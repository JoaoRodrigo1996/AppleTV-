import { Button } from "./button";
import { Container } from "./container";
import { FadeIn } from "./fade-in";

export function Usps(){
  return (
    <Container className="z-10 relative py-36  space-y-12">
      <FadeIn>
        <p className="text-balance text-5xl font-bold leading-tight text-white">New Apple Originals every month - always ad-free.</p>
      </FadeIn>
      <FadeIn>
        <p className="text-balance text-5xl font-bold leading-tight text-white">Stream on the Apple TV app on Apple devices, smart TVs, consoles, or sticks.</p>
      </FadeIn>
      <FadeIn>
        <p className="text-balance text-5xl font-bold leading-tight text-white">Watch in 4K HRD video with immersive Spatial Audio.¹</p>
      </FadeIn>
      <FadeIn>
        <p className="text-balance text-5xl font-bold leading-tight text-white">Share a single subscription with up to five people.</p>
      </FadeIn>
      <div className="grid grid-cols-3 pt-40">
        <FadeIn>
          <p className="text-3xl mb-4 text-zinc-100">Buy an Apple device</p>
          <h4 className="text-4xl font-semibold text-zinc-100">3 months free.</h4>
          <p className="text-xl mt-3 mb-8 text-zinc-400">Apple Tv+ is included for 3 months when you purchase an Apple device and redeem the offer whitin 90 days²</p>
          <Button size='medium' >Check eligibility</Button>
        </FadeIn>
        <FadeIn>
          <p className="text-3xl mb-4 text-zinc-100">Free 7-day trial</p>
          <h4 className="text-4xl font-semibold text-zinc-100">$9.99/mo.</h4>
          <p className="text-xl mt-3 mb-8 text-zinc-400">A monthly subscription is just $9.99 per month after a free 7-day trial. Share Apple TV+ with your family.³</p>
          <Button size='medium' >Try it free</Button>
        </FadeIn>
        <FadeIn>
          <p className="text-3xl mb-4 text-zinc-100">Free 1-month trial</p>
          <h4 className="text-4xl font-semibold text-zinc-100">Apple One</h4>
          <p className="text-xl mt-3 mb-8 text-zinc-400">Bundle Apple TV+ with up to five other great services for one low monthly price. And enjoy more for less.</p>
          <Button size='medium' >Try Apple One Free</Button>
        </FadeIn>
      </div>
    </Container>
  )
}
