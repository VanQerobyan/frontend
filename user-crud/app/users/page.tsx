"use client"

import axios, { isAxiosError } from "axios"
import { useEffect, useState } from "react"
import { User } from "../(helpers)/types"
import Link from "next/link";

export default function Users() {

    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState("");

    useEffect(() => {
        axios
        .get<{users: User[]}>("/api/route")
        .then((response) => {
            setError("");
            setUsers(response.data.users);
        })
        .catch((err) => {
            if(axios.isAxiosError(err)) {
                setError(err.response?.data.message);
            }
        })


    }, [])


    const deleteUser = (id: string) => {
        axios
        .delete(`/api/route/${id}`)
        .then(() => {
            setUsers(prevUsers => prevUsers.filter(user => user.id !== id));
        })
        .catch((err) => {
            if(isAxiosError(err)) {
                setError(err.response?.data.message)
            }
        })
    }
return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(79,70,229,0.12),_transparent_38%),linear-gradient(to_bottom,_#020617,_#0f172a)] px-6 py-10 text-white">

        <div className="mx-auto mb-10 flex max-w-7xl items-end justify-between border-b border-white/[0.06] pb-6">
            <div>

                <h3 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Users
                </h3>

                <p className="mt-2 text-sm text-slate-400">
                    Manage and view all registered users
                </p>
            </div>

            <Link
                href={"/add"}
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-950/40 transition duration-300 hover:-translate-y-0.5 hover:from-indigo-400 hover:to-violet-500 hover:shadow-xl hover:shadow-indigo-950/50 active:translate-y-0"
            >
                <span className="text-lg leading-none transition-transform duration-300 group-hover:rotate-90">
                    +
                </span>
                Add User
            </Link>
        </div>

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {
                users.map(user => 
                   <div
                        key={user.id}
                        className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-lg backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-indigo-500/40 hover:bg-white/[0.07]"
                   >

                    <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 text-lg font-bold text-white">
                        {user.name[0]}
                    </div>

                    <div className="mb-4 text-lg font-semibold text-white">
                        {user.name} {user.surname}
                    </div>

                    <div className="mb-2 rounded-lg bg-white/5 px-3 py-2">
                            Age {user.age}
                    </div>

                    <div className="mb-2 rounded-lg bg-white/5 px-3 py-2">
                            Gender {user.gender}
                    </div>

                    <div className="mb-2 rounded-lg bg-white/5 px-3 py-2">
                            Salary {user.salary}
                    </div>

                    <div className="mb-2 rounded-lg bg-white/5 px-3 py-2">
                            Location {user.location}
                    </div>

                    <div className="mt-3 rounded-xl border border-white/5 bg-slate-900/60 px-3 py-3">
                            About {user.about}
                    </div>

                    <div className="mt-3 flex gap-2">
                        <div className="flex-1">
                            <Link
                                href={`/users/${user.id}`}
                                className="flex w-full items-center justify-center rounded-xl border border-indigo-500/30 bg-indigo-500/10 px-4 py-2.5 text-sm font-semibold text-indigo-300 transition duration-300 hover:border-indigo-400/50 hover:bg-indigo-500/20 hover:text-indigo-200"
                            >
                                EditUser
                            </Link>
                        </div>

                        <div className="flex-1">
                            <button onClick={() => deleteUser(user.id)}
                                className="w-full rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-2.5 text-sm font-semibold text-red-300 transition duration-300 hover:border-red-400/50 hover:bg-red-500/20 hover:text-red-200 active:scale-[0.98]"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                   </div>
                )
            }
        </div>
    </div>
)
}