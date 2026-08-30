import { useEffect, useState } from "react"
import axios from "axios"
import type { MoviesType } from "./Types/Types";
import MovieList from "./Components/MovieList";
import AddMovie from "./Components/AddMovie";

export default function App() {

  const [movies, setMovies] = useState<MoviesType[]>([]);

  function addMovie(object: MoviesType) {

    axios
    .post(`http://localhost:3001/movies`, object)
  }

  function deleteMovie(id:number) {
    
    axios
    .delete(`http://localhost:3001/movies/${id}`)
    .then(() => {
      setMovies(movies.filter(movie => movie.id !== id))
    })
   
  }

  useEffect(() => {

    axios
      .get<MoviesType[]>("http://localhost:3001/movies") 
      .then(response => setMovies(response.data))

  }, [])

  return (
    <div className="min-h-screen bg-zinc-950 px-6 py-10 text-zinc-100">

      <h1 className="mb-10 text-center text-4xl font-bold tracking-tight text-white">
        Movie Library
      </h1>

      <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-8 lg:grid-cols-[1fr_380px]">

        {/* Left side - Movies */}

        <section className="min-w-0">

          <div className="mb-5 flex items-center justify-between">

            <h2 className="text-2xl font-bold text-white">
              My Movies
            </h2>

            <span className="rounded-lg bg-zinc-800 px-3 py-1.5 text-sm text-zinc-400">
              {movies.length} movies
            </span>

          </div>

          <MovieList 
            movies={movies}
            deleteMovie={deleteMovie}
          />

        </section>


        {/* Right side - Add Movie */}

        <aside className="lg:sticky lg:top-8 lg:h-fit">

          <AddMovie 
            addMovie={addMovie}
          />

        </aside>

      </div>

    </div>
  )
}