import { useContext } from "react";
import type { BookType } from "../context/Types";
import { BookContext } from "../context/BookContext";

export type BooksItemProps = {
  book: BookType;
};

export const BookItem = ({ book }: BooksItemProps) => {
  const context = useContext(BookContext);

  if (!context) throw new Error("Out of provider...");

  const { onDeleteBook } = context;

  return (
    <tr className="group bg-slate-900/70 transition-all duration-300 hover:bg-indigo-950/30">
      
      <td className="px-6 py-5 font-semibold text-slate-600 transition-colors group-hover:text-indigo-400">
        #{book.id}
      </td>

      <td className="px-6 py-5">
        <span className="font-semibold text-slate-100 transition-colors group-hover:text-indigo-300">
          {book.title}
        </span>
      </td>

      <td className="px-6 py-5 text-slate-400">
        {book.author}
      </td>

      <td className="px-6 py-5 text-slate-400">
        {book.year}
      </td>

      <td className="px-2 py-2">
        <span className="inline-flex rounded-lg border border-indigo-400/20 bg-indigo-500/10 px-3 py-1.5 text-xs font-semibold text-indigo-300 transition-all duration-300 group-hover:border-indigo-400/40 group-hover:bg-indigo-500/15">
          {book.genre}
        </span>
      </td>

      <td className="px-6 py-5">
        <span
          className={`rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-300  ${
            book.read
              ? "border border-indigo-400/20 bg-green-800 text-indigo-300"
              : "border border-slate-700 bg-slate-800/70 text-slate-500"
          }`}
        >
          {book.read ? "✓ Read" : "Unread"}
        </span>
      </td>

      <td className="px-2 py-2">
        <span
          className={`rounded-xl px-2 py-2 text-sm font-semibold transition-all duration-300  ${
            book.favorite
              ? "border border-purple-400/20 bg-purple-500/10 text-purple-300"
              : "border border-slate-700 bg-slate-800/70 text-slate-500"
          }`}
        >
          {book.favorite ? "♥ Favorite" : "Normal"}
        </span>
      </td>

      <td className="px-6 py-5">
        <div className="relative w-fit">
          <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 opacity-0 blur transition duration-300 group-hover:opacity-100" />

          <img
            className="relative h-20 w-14 rounded-lg object-cover shadow-lg ring-1 ring-indigo-400/20 transition duration-300 group-hover:scale-105 group-hover:ring-indigo-400/50"
            src={book.image}
            alt={book.title}
          />
        </div>
      </td>

      <td className="px-6 py-5">
        <button
          className="rounded-xl border border-red-400/20 bg-red-500/5 px-4 py-2 text-sm font-semibold text-red-400 transition-all duration-300 hover:border-red-400/40 hover:bg-red-500/10 hover:text-red-300 active:scale-95"
          onClick={() => onDeleteBook(book.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};