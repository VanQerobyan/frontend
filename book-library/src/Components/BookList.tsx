import { useContext } from "react";
import { BookContext } from "../context/BookContext";
import { BookItem } from "./BookItem";

export const BookList = () => {
  const context = useContext(BookContext);

  if (!context) throw new Error("Out of context");

  const books = context.books;
  const viewBooksBy = context.viewBooksBy;
  const filter = context.filter;

  let displayedBooks = books;

  filter === "Read"
    ? (displayedBooks = books.filter((book) => book.read))
    : filter === "Unread"
      ? (displayedBooks = books.filter((book) => !book.read))
      : filter === "Favorite"
        ? (displayedBooks = books.filter((book) => book.favorite))
        : books;

  return (
    <div className="group w-full overflow-hidden rounded-3xl border border-indigo-500/20 bg-slate-900/90 shadow-2xl shadow-indigo-950/30 backdrop-blur-xl">
      
      {/* Header */}
      <div className="relative overflow-hidden border-b border-indigo-500/20 bg-gradient-to-br from-indigo-950/70 via-slate-900 to-purple-950/70 px-6 py-7 sm:px-8">
        
        <div className="absolute -right-10 -top-16 text-9xl opacity-[0.04] transition duration-700 group-hover:rotate-6">
          📚
        </div>

        <div className="relative flex flex-col gap-5">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-indigo-400/20 bg-indigo-500/10 text-2xl shadow-lg shadow-indigo-950/20">
              📖
            </div>

            <div>
              <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                Your Personal Library
              </h2>

              <p className="mt-1 text-sm text-slate-400">
                Every book has a story. Keep yours organized.
              </p>
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => viewBooksBy("All")}
              className={`rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                filter === "All"
                  ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-500/20"
                  : "border border-slate-700 bg-slate-800/60 text-slate-400 hover:border-indigo-400/40 hover:bg-indigo-500/10 hover:text-indigo-300"
              }`}
            >
              All Books
            </button>

            <button
              onClick={() => viewBooksBy("Read")}
              className={`rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                filter === "Read"
                  ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-500/20"
                  : "border border-slate-700 bg-slate-800/60 text-slate-400 hover:border-indigo-400/40 hover:bg-indigo-500/10 hover:text-indigo-300"
              }`}
            >
              ✓ Read
            </button>

            <button
              onClick={() => viewBooksBy("Unread")}
              className={`rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                filter === "Unread"
                  ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-500/20"
                  : "border border-slate-700 bg-slate-800/60 text-slate-400 hover:border-indigo-400/40 hover:bg-indigo-500/10 hover:text-indigo-300"
              }`}
            >
              ○ Unread
            </button>

            <button
              onClick={() => viewBooksBy("Favorite")}
              className={`rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                filter === "Favorite"
                  ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-500/20"
                  : "border border-slate-700 bg-slate-800/60 text-slate-400 hover:border-indigo-400/40 hover:bg-indigo-500/10 hover:text-indigo-300"
              }`}
            >
              ♡ Favorites
            </button>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[1100px] text-left text-sm text-slate-300">
          <thead className="border-b border-indigo-500/10 bg-slate-950/70 text-xs uppercase tracking-wider text-slate-500">
            <tr>
              <th className="px-6 py-4 font-semibold">ID</th>
              <th className="px-6 py-4 font-semibold">Title</th>
              <th className="px-6 py-4 font-semibold">Author</th>
              <th className="px-6 py-4 font-semibold">Year</th>
              <th className="px-6 py-4 font-semibold">Genre</th>
              <th className="px-6 py-4 font-semibold">Read</th>
              <th className="px-6 py-4 font-semibold">Favorite</th>
              <th className="px-6 py-4 font-semibold">Cover</th>
              <th className="px-6 py-4 font-semibold">Action</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-indigo-500/10">
            {displayedBooks.map((book) => (
              <BookItem book={book} key={book.id} />
            ))}
          </tbody>
        </table>
      </div>

      {displayedBooks.length === 0 && (
        <div className="flex flex-col items-center justify-center gap-3 px-6 py-16 text-center">
          <div className="text-5xl opacity-60">📚</div>

          <p className="text-lg font-semibold text-slate-300">
            No books found
          </p>

          <p className="max-w-md text-sm text-slate-500">
            This section of your library is waiting for its next story.
          </p>
        </div>
      )}
    </div>
  );
};