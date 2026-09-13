import React from "react";
import type { BookContextType } from "./Types";


export const BookContext = React.createContext<BookContextType | null>(null);
