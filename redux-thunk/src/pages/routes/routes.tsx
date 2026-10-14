import { createBrowserRouter } from "react-router";
import { Layout } from "../layout/Layout";
import { AddUser } from "../add/AddUser";
import { Users } from "../users/Users";
import { EditUser } from "../edit/EditUser";

export const router = createBrowserRouter([
    { path: '/', element: <Layout/>,
        children: [
            { path: '/add', element: <AddUser/>},
            { path: '/users', element: <Users/>},
            { path: '/edit/:id', element: <EditUser/>},
        ]
    }
])