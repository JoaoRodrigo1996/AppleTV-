import { Container } from "./components/container";
import { Header } from "./components/header";
import { Hero } from "./components/hero";

export function App() {
  return (
    <>
      <Header />
      <main className="">
        <Hero />
        <div className="">
          <Container>
            usps
          </Container>
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
