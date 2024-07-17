import { Movie, movies, randomMoviesSet1, randomMoviesSet2 } from "../movies";

export function VideoCarousel(){
  return (
    <div className="bg-black pb-8 space-y-3">
      <div className="overflow-clip">
        <div className="flex gap-5 mb-5 left-1/5 -translate-x-1/2">
          <div className="shrink-0 w-[60vw] aspect-video">
            <img src={movies[0].poster} alt={movies[0].name} className="w-full h-full object-cover rounded-2xl" />
          </div>
          <div className="shrink-0 w-[60vw] aspect-video">
            <img src={movies[1].poster} alt={movies[1].name} className="w-full h-full object-cover rounded-2xl" />
          </div>
          <div className="shrink-0 w-[60vw] aspect-video">
            <img src={movies[2].poster} alt={movies[2].name} className="w-full h-full object-cover rounded-2xl" />
          </div>
        </div>
      </div>

      <SmallVideoCarousel movies={randomMoviesSet1} />
      <SmallVideoCarousel movies={randomMoviesSet2} />
    </div>
  )
}

function SmallVideoCarousel({movies}: { movies: Movie[] }){
  return (
    <div className="flex gap-3 overflow-clip">
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
  )
}
