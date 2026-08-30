import type { MoviesType } from "../Types/Types"
import MovieCard from "./MovieCard"

type MovieListProps = {
    movies: MoviesType[],
    deleteMovie: (id: number) => void,
}

export default function MovieList({movies, deleteMovie}:MovieListProps) {

    return (

        <div className="flex flex-col gap-4">

            {
                movies.map(movie => 

                    <MovieCard
                        key={movie.id}
                        movie={movie}
                        deleteMovie={deleteMovie}
                    />

                )
            }

        </div>
    )
}