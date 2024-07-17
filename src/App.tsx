import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Usps } from "./components/usps";
import { VideoCarousel } from "./components/video-carousel";

export function App() {
  return (
    <>
      <Header />
      <main className="">
        <div className="bg-background">
          <Hero />
          <Usps />
        </div>
        <VideoCarousel />
        <div className="h-[300vh]"></div>
      </main>
    </>
  )
}
