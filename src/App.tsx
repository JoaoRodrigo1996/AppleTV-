import { Container } from "./components/container";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Usps } from "./components/usps";

export function App() {
  return (
    <>
      <Header />
      <main className="">
        <div className="bg-background">
          <Hero />
          <Usps />
        </div>
        <div className="">
          <Container>
            3 col layouts
          </Container>
        </div>
        <div className="">
          <Container>
            Carousel with posters
          </Container>
        </div>
      </main>
    </>
  )
}
