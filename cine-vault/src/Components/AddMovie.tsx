import { useRef, useState } from "react";
import type { MoviesType } from "../Types/Types";

export type AddMovieProps = {
    addMovie: (object: MoviesType) => void
}

export default function AddMovie({addMovie}: AddMovieProps) {

  const [title, setTitle] = useState<string>("");
  const [year, setYear] = useState<number>(0);
  const [rating, setRating] = useState<number>(0);
  const [genre, setGenre] = useState<string>("");
  const [watched, setWatched] = useState<boolean>(false);
  const [favorite, setFavorite] = useState<boolean>(false);
  const [image, setImage] = useState<string>("");

  const inputRef = useRef<HTMLInputElement>(null);

  return (

    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-2xl">

      <div className="mb-6">

        <h2 className="text-2xl font-bold text-white">
          Add Movie
        </h2>

        <p className="mt-1 text-sm text-zinc-500">
          Add a new movie to your collection
        </p>

      </div>


      <div className="flex flex-col gap-4">

        <input
          className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none transition placeholder:text-zinc-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
          type="text"
          placeholder="Movie title"
          onChange={(event) => setTitle(event.target.value)}
        />


        <input
          className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none transition placeholder:text-zinc-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
          type="number"
          placeholder="Movie year"
          onChange={(event) => setYear(Number(event.target.value))}
        />


        <input
          className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none transition placeholder:text-zinc-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
          type="number"
          placeholder="Movie rating"
          onChange={(event) => setRating(Number(event.target.value))}
        />


        <input
          className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none transition placeholder:text-zinc-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
          type="text"
          placeholder="Movie genre"
          onChange={(event) => setGenre(event.target.value)}
        />


        <input
          className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none transition placeholder:text-zinc-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
          ref={inputRef}
          value={image}
          placeholder="Movie image URL"
          onChange={(event) => setImage(event.target.value)}
        />


        <div className="flex flex-col gap-3 border-y border-zinc-800 py-4">

          <label className="flex cursor-pointer items-center gap-3 text-sm text-zinc-300">

            <input
              className="h-4 w-4 cursor-pointer accent-indigo-500"
              type="checkbox"
              onChange={(event) => setWatched(event.target.checked)}
            />

            <span>
              Watched
            </span>

          </label>


          <label className="flex cursor-pointer items-center gap-3 text-sm text-zinc-300">

            <input
              className="h-4 w-4 cursor-pointer accent-rose-500"
              type="checkbox"
              onChange={(event) => setFavorite(event.target.checked)}
            />

            <span>
              Favorite
            </span>

          </label>

        </div>


        <button
          className="w-full rounded-lg bg-indigo-600 py-3 font-semibold text-white transition duration-200 hover:bg-indigo-500 hover:shadow-lg hover:shadow-indigo-500/20"
          onClick={() =>
            addMovie({
              title,
              year,
              rating,
              genre,
              image,
              watched,
              favorite
            })
          }
        >
          + Add Movie
        </button>

      </div>

    </div>
  )
}