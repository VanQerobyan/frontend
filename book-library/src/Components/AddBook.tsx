import { useContext } from "react";
import { BookContext } from "../context/BookContext";
import type { NewBook } from "../context/BookContextProvider";
import { useForm } from "react-hook-form";
import {
  AuthorValidator,
  GenreValidator,
  ImageValidator,
  TitleValidator,
  YearValidator,
} from "./Validators";

export type NewBookProps = {
  onAdd: (book: NewBook) => void;
};

export const AddBook = () => {
  const context = useContext(BookContext);

  if (!context) throw new Error("Out of range");

  const addBook = context.onAdd;

  const onSubmit = (book: NewBook) => {
    addBook(book);
    reset();
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<NewBook>();

  return (
    <div className="group relative w-full overflow-hidden rounded-3xl border border-indigo-500/20 bg-slate-900/90 p-6 shadow-2xl shadow-indigo-950/30 backdrop-blur-xl transition-all duration-500 hover:border-indigo-400/30 sm:p-8">
      
      {/* Decorative book */}
      <div className="pointer-events-none absolute -right-8 -top-12 text-9xl opacity-[0.035] transition duration-700 group-hover:rotate-6 group-hover:scale-105">
        📚
      </div>

      <div className="relative mb-8 flex items-center gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-indigo-400/20 bg-gradient-to-br from-indigo-500/15 to-purple-500/15 text-2xl shadow-lg shadow-indigo-950/20 transition duration-300 group-hover:scale-105 group-hover:rotate-2">
          📚
        </div>

        <div>
          <h2 className="text-2xl font-bold tracking-tight text-white">
            Add a New Book
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Build your personal library, one story at a time.
          </p>
        </div>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative grid grid-cols-1 gap-5 md:grid-cols-2"
      >
        <div className="flex flex-col gap-2">
          <label
            htmlFor="BookTitle"
            className="text-sm font-semibold text-slate-300"
          >
            Book Title
          </label>

          {errors.title && (
            <p className="text-sm font-medium text-red-400">
              {errors.title.message}
            </p>
          )}

          <input
            id="BookTitle"
            type="text"
            placeholder="Harry Potter" 
            {...register("title", TitleValidator)}
            className="rounded-xl border border-slate-700/80 bg-slate-950/60 px-4 py-3 text-slate-100 outline-none transition-all duration-300 placeholder:text-slate-600 hover:border-indigo-500/30 focus:border-indigo-500 focus:bg-slate-950 focus:ring-4 focus:ring-indigo-500/10"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="Author"
            className="text-sm font-semibold text-slate-300"
          >
            Author
          </label>

          {errors.author && (
            <p className="text-sm font-medium text-red-400">
              {errors.author.message}
            </p>
          )}

          <input
            id="Author"
            type="text"
           placeholder="J. K. Rowling" 
            {...register("author", AuthorValidator)}
            className="rounded-xl border border-slate-700/80 bg-slate-950/60 px-4 py-3 text-slate-100 outline-none transition-all duration-300 placeholder:text-slate-600 hover:border-indigo-500/30 focus:border-indigo-500 focus:bg-slate-950 focus:ring-4 focus:ring-indigo-500/10"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="Year"
            className="text-sm font-semibold text-slate-300"
          >
            Publication Year
          </label>

          {errors.year && (
            <p className="text-sm font-medium text-red-400">
              {errors.year.message}
            </p>
          )}

          <input
            id="Year"
            type="number"
            placeholder="1997" 
            {...register("year", YearValidator)}
            className="rounded-xl border border-slate-700/80 bg-slate-950/60 px-4 py-3 text-slate-100 outline-none transition-all duration-300 placeholder:text-slate-600 hover:border-indigo-500/30 focus:border-indigo-500 focus:bg-slate-950 focus:ring-4 focus:ring-indigo-500/10"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="Genre"
            className="text-sm font-semibold text-slate-300"
          >
            Genre
          </label>

          {errors.genre && (
            <p className="text-sm font-medium text-red-400">
              {errors.genre.message}
            </p>
          )}

          <input
            id="Genre"
            type="text"
            placeholder="Fantasy"
            {...register("genre", GenreValidator)}
            className="rounded-xl border border-slate-700/80 bg-slate-950/60 px-4 py-3 text-slate-100 outline-none transition-all duration-300 placeholder:text-slate-600 hover:border-indigo-500/30 focus:border-indigo-500 focus:bg-slate-950 focus:ring-4 focus:ring-indigo-500/10"
          />
        </div>

        <div className="flex items-center gap-4 rounded-2xl border border-slate-700/80 bg-slate-950/40 px-5 py-4 transition-all duration-300 hover:border-indigo-400/30 hover:bg-indigo-950/20">
          <input
            type="checkbox"
            {...register("read")}
            className="h-5 w-5 cursor-pointer rounded border-slate-600 bg-slate-800 accent-indigo-500"
          />

          <div>
            <p className="text-sm font-semibold text-slate-200">
              I've read this book
            </p>

            <p className="text-xs text-slate-600">
              Mark this book as read
            </p>
          </div>

          {errors.read && (
            <p className="text-sm font-medium text-red-400">
              {errors.read.message}
            </p>
          )}
        </div>

        <div className="flex items-center gap-4 rounded-2xl border border-slate-700/80 bg-slate-950/40 px-5 py-4 transition-all duration-300 hover:border-purple-400/30 hover:bg-purple-950/20">
          <input
            type="checkbox"
            {...register("favorite")}
            className="h-5 w-5 cursor-pointer rounded border-slate-600 bg-slate-800 accent-purple-500"
          />

          <div>
            <p className="text-sm font-semibold text-slate-200">
              Add to favorites
            </p>

            <p className="text-xs text-slate-600">
              Keep this book in your favorites
            </p>
          </div>

          {errors.favorite && (
            <p className="text-sm font-medium text-red-400">
              {errors.favorite.message}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-2 md:col-span-2">
          <label className="text-sm font-semibold text-slate-300">
            Book Cover URL
          </label>

          {errors.image && (
            <p className="text-sm font-medium text-red-400">
              {errors.image.message}
            </p>
          )}

          <input
            type="text"
            placeholder="https://example.com/book-cover.jpg"
            {...register("image", ImageValidator)}
            className="rounded-xl border border-slate-700/80 bg-slate-950/60 px-4 py-3 text-slate-100 outline-none transition-all duration-300 placeholder:text-slate-600 hover:border-indigo-500/30 focus:border-indigo-500 focus:bg-slate-950 focus:ring-4 focus:ring-indigo-500/10"
          />
        </div>

        <div className="md:col-span-2">
          <button
            type="submit"
            className="w-full rounded-xl bg-gradient-to-r from-indigo-500 via-indigo-600 to-purple-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-indigo-950/40 transition-all duration-300 hover:-translate-y-0.5 hover:from-indigo-400 hover:via-indigo-500 hover:to-purple-500 hover:shadow-xl hover:shadow-indigo-500/20 active:translate-y-0"
          >
            + Add Book
          </button>
        </div>
      </form>
    </div>
  );
};