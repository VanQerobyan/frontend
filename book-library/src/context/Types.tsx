import type { NewBook } from "./BookContextProvider"

export type BookType = {
    id: number
    title: string 
    author: string
    year: number
    genre: string 
    image: string 
    read: boolean 
    favorite: boolean
}


export type BookContextType = {
    books: BookType[]
    onAdd:(book: NewBook) => void
    onDeleteBook: (id: number) => void
    viewBooksBy: (filter: string) => void
    filter: string
}