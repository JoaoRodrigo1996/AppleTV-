import { Button } from "./components/button";
import { Container } from "./components/container";
import { Header } from "./components/header";

export function App() {
  return (
    <>
      <Header />
      <main className="">
        <div className="h-[300vh]">
          <Container>
            Hero components
            <Button size='large'>Watch</Button>
          </Container>
        </div>
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
