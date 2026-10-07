import { createBrowserRouter } from "react-router-dom";
import { Users } from "../users/Users";
import { Layout } from "../layout/Layout";
import { AddUser } from "../add/AddUser";
import { EditUser } from "../edit/EditUser";



export const routes = createBrowserRouter([{
    path:'/',
    element:<Layout/>,
    children: [
        { path: '/', element: <Users/>},
        { path: '/add', element: <AddUser/>},
        { path: '/edit/:id', element: <EditUser/>}
    ]
}])