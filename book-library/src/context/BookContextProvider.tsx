import { useEffect, useState, type ReactNode } from "react";
import { type BookType } from "./Types";
import axios from "axios";
import { BookContext } from "./BookContext";

export type BookContextProviderProps = {
  children: ReactNode;
};

export type NewBook = Omit<BookType, "id">;

export const BookContextProvider = ({ children }: BookContextProviderProps) => {
  const [filter, setFilter] = useState("All");
  const [books, setBooks] = useState<BookType[]>([]);

  useEffect(() => {
    axios
      .get<BookType[]>("http://localhost:3001/books")
      .then((response) => setBooks(response.data));
  }, []);

  const addBook = (book: NewBook) => {
    axios
      .post("http://localhost:3001/books", book)
      .then((response) => setBooks([...books, response.data]));
  };

  const deleteBook = (id: number) => {
    axios
      .delete(`http://localhost:3001/books/${id}`)
      .then(() => setBooks(books.filter((book) => book.id != id)));
  };

  const viewBooksBy = (byfilter: string) => {
    setFilter(byfilter);
  };

  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-8 animate-[fadeIn_0.6s_ease-in-out]">
      <BookContext.Provider
        value={{
          books,
          onAdd: addBook,
          onDeleteBook: deleteBook,
          viewBooksBy,
          filter,
        }}
      >
        {children}
      </BookContext.Provider>
    </div>
  );
};