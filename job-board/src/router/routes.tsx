import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../Layout/Layout";
import { JobList } from "../pages/JobsList";
import { About } from "../pages/About";
import { JobItem } from "../pages/JobItem";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";
import { Category } from "../pages/Category";
import { Contact } from "../pages/Contact";

export const routes = createBrowserRouter([
    {
        path: "", 
        element: <Layout/>,
        children: [
            {index: true, element: <Home/>},
            {path: "job", element: <JobList/>},
            {path: "job/:id", element: <JobItem/>},
            {path: "about", element: <About/>},
            {path: "category", element:<Category/> },
            {path: "contact", element:<Contact/> }
        ]
    },
            {path: "*", element: <NotFound/>}

])