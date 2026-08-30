import type { MoviesType } from "../Types/Types"

type MovieCardProps = {
    movie: MoviesType,
    deleteMovie: (id: number) => void
}

export default function MovieCard({movie, deleteMovie}:MovieCardProps) {

    return (

        <div className="overflow-x-auto rounded-2xl border border-zinc-800 bg-zinc-900 shadow-xl transition duration-200 hover:-translate-y-0.5 hover:border-zinc-700">

            <table className="w-full min-w-[850px] border-collapse">

                <thead>

                    <tr className="bg-zinc-800">

                        <th className="px-4 py-4 text-xs font-semibold uppercase tracking-wider text-zinc-400">
                            Id
                        </th>

                        <th className="px-4 py-4 text-xs font-semibold uppercase tracking-wider text-zinc-400">
                            Title
                        </th>

                        <th className="px-4 py-4 text-xs font-semibold uppercase tracking-wider text-zinc-400">
                            Year
                        </th>

                        <th className="px-4 py-4 text-xs font-semibold uppercase tracking-wider text-zinc-400">
                            Rating
                        </th>

                        <th className="px-4 py-4 text-xs font-semibold uppercase tracking-wider text-zinc-400">
                            Genre
                        </th>

                        <th className="px-4 py-4 text-xs font-semibold uppercase tracking-wider text-zinc-400">
                            Image
                        </th>

                        <th className="px-4 py-4 text-xs font-semibold uppercase tracking-wider text-zinc-400">
                            Watched
                        </th>

                        <th className="px-4 py-4 text-xs font-semibold uppercase tracking-wider text-zinc-400">
                            Favorite
                        </th>

                        <th className="px-4 py-4 text-xs font-semibold uppercase tracking-wider text-zinc-400">
                            Action
                        </th>

                    </tr>

                </thead>

                <tbody>

                    <tr className="text-center">

                        <td className="border-t border-zinc-800 px-4 py-4 text-zinc-400">
                            {movie.id}
                        </td>

                        <td className="border-t border-zinc-800 px-4 py-4 font-semibold text-white">
                            {movie.title}
                        </td>

                        <td className="border-t border-zinc-800 px-4 py-4 text-zinc-300">
                            {movie.year}
                        </td>

                        <td className="border-t border-zinc-800 px-4 py-4">

                            <span className="rounded-lg bg-yellow-500/10 px-3 py-1.5 text-sm font-semibold text-yellow-400">
                                ★ {movie.rating}
                            </span>

                        </td>

                        <td className="border-t border-zinc-800 px-4 py-4">

                            <span className="rounded-lg bg-zinc-800 px-3 py-1.5 text-sm text-zinc-300">
                                {movie.genre}
                            </span>

                        </td>

                        <td className="border-t border-zinc-800 px-4 py-4">

                            <img
                                className="mx-auto h-20 w-14 rounded-lg object-cover shadow-md"
                                src={movie.image}
                                alt={movie.title}
                            />

                        </td>

                        <td className="border-t border-zinc-800 px-4 py-4">

                            <span
                                className={
                                    movie.watched
                                        ? "rounded-lg bg-green-500/10 px-3 py-1.5 text-sm font-medium text-green-400"
                                        : "rounded-lg bg-zinc-800 px-3 py-1.5 text-sm font-medium text-zinc-500"
                                }
                            >
                                {movie.watched ? "Yes" : "No"}
                            </span>

                        </td>

                        <td className="border-t border-zinc-800 px-4 py-4">

                            <span
                                className={
                                    movie.favorite
                                        ? "text-xl text-rose-500"
                                        : "text-xl text-zinc-600"
                                }
                            >
                                {movie.favorite ? "♥" : "♡"}
                            </span>

                        </td>

                        <td className="border-t border-zinc-800 px-4 py-4">

                            <button
                                className="rounded-lg border border-red-900 bg-transparent px-4 py-2 text-sm font-medium text-red-400 transition duration-200 hover:border-red-600 hover:bg-red-600 hover:text-white"
                                onClick={() =>
                                    movie.id !== undefined
                                        ? deleteMovie(movie.id)
                                        : "Id not found"
                                }
                            >
                                Delete
                            </button>

                        </td>

                    </tr>

                </tbody>

            </table>

        </div>
    )
}