import { Button } from "./button";
import { Container } from "./container";

export function Header(){
  return (
    <>
      <header className="bg-backgroundContrast relative z-20 text-white">
        <Container className='flex items-center min-h-[--header-row-height]'>
          <a href="/" className="h-[--header-row-height] flex items-center px-6 -ml-6">
            <img className="size-4" src="/apple.svg" alt="apple.inc logo" />
          </a>
        </Container>
      </header>
      <div className="sticky top-0 z-20 bg-backgroundContrast text-white">
        <Container className='flex items-center justify-between min-h-[--header-row-height]'>
          <h2 className="text-2xl font-semibold">Apple TV+</h2>
          <Button size='small'>Stream now</Button>
        </Container>
      </div>
    </>
  )
}
