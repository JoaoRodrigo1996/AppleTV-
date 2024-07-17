import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Usps } from "./components/usps";
import { VideoCarousel } from "./components/video-carousel";

export function App() {
  return (
    <>
      <Header />
      <main className="">
        <div className="bg-background relative z-10">
          <Hero />
          <Usps />
        </div>
        <VideoCarousel />
      </main>
    </>
  )
}
