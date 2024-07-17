export type Movie = {
  id: string
  poster: string
  name: string
}

export const movies: Movie[] = [
  { id: '1', poster: './vikings.jpg', name: 'Vikings' },
  { id: '2', poster: './saul.jpg', name: 'Better Call Saul' },
  { id: '3', poster: './ring.jpg', name: 'Lord of The Rings' },
  { id: '4', poster: './peaky.jpg', name: 'Peaky Blinders' },
  { id: '5', poster: './napoleon.jpeg', name: 'Napoleon' },
  { id: '6', poster: './mind.jpg', name: 'Mind Hunter' },
  { id: '7', poster: './hobbit.jpg', name: 'The Hobbit' },
  { id: '8', poster: './happiness.jpg', name: 'Pursuit of Happiness' },
  { id: '9', poster: './gladiator.jpg', name: 'The Gladiator' },
  { id: '10', poster: './deadpool.jpg', name: 'Deadpool' },
  { id: '11', poster: './breaking.jpg', name: 'Breaking Bad' },
  { id: '12', poster: './1917.jpg', name: '1917' },
  { id: '13', poster: './astra.jpg', name: 'Ad Astra' },
]

export const randomMoviesSet1 = movies
  .sort(() => Math.random() - 0.5)
  .concat(movies.sort(() => Math.random() - 0.5))
  .concat(movies.sort(() => Math.random() - 0.5))

export const randomMoviesSet2 = movies
  .sort(() => Math.random() - 0.5)
  .concat(movies.sort(() => Math.random() - 0.5))
  .concat(movies.sort(() => Math.random() - 0.5))
  .sort(() => Math.random() - 0.5)
