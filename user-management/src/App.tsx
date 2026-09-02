import { useEffect, useState } from "react"
import type { User } from "./Type/Types"
import axios from "axios"
import UserList from "./Components/UserList";
import AddUser, { type CreateUser } from "./Components/AddUser";


export default function App() {

    const [users, setUsers] = useState<User[]>([]);


    function addUser(user: CreateUser) {
        axios
            .post<User>("http://localhost:3000/users", user)
            .then(response => setUsers(users => [...users, response.data]))
    }


    useEffect(() => {

        axios
            .get<User[]>("http://localhost:3000/users")
            .then(response => setUsers(response.data))
    },[])

    return (
        <div className="min-h-screen bg-slate-950">

            <AddUser 
                addUser={addUser}
            />

            <UserList 
                users={users}
            />

        </div>
    )
}