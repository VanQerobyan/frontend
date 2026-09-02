import type { User } from "../Type/Types"

export type UserListProps = {
    users: User[]
}

export default function UserList({users}:UserListProps) {
    return (
        <div className="px-6 pb-10">
            <div className="mx-auto w-full max-w-7xl overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl">

                <div className="border-b border-slate-700 px-6 py-5">
                    <h2 className="text-2xl font-bold text-white">
                        Users
                    </h2>
                    <p className="mt-1 text-sm text-slate-400">
                        List of all registered users
                    </p>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">

                        <thead className="bg-slate-800 text-xs uppercase text-slate-400">
                            <tr>
                                <th className="px-6 py-4">ID</th>
                                <th className="px-6 py-4">Name</th>
                                <th className="px-6 py-4">Surname</th>
                                <th className="px-6 py-4">Salary</th>
                                <th className="px-6 py-4">Profession</th>
                                <th className="px-6 py-4">Gender</th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-slate-800">

                            {
                                users.map(user => 
                                    <tr
                                        key={user.id}
                                        className="transition hover:bg-slate-800/70"
                                    >
                                        <td className="whitespace-nowrap px-6 py-4 font-medium text-indigo-400">
                                            #{user.id}
                                        </td>

                                        <td className="whitespace-nowrap px-6 py-4 font-medium text-white">
                                            {user.name}
                                        </td>

                                        <td className="whitespace-nowrap px-6 py-4 text-slate-300">
                                            {user.surname}
                                        </td>

                                        <td className="whitespace-nowrap px-6 py-4 text-emerald-400">
                                            ${user.salary}
                                        </td>

                                        <td className="whitespace-nowrap px-6 py-4 text-slate-300">
                                            {user.profession}
                                        </td>

                                        <td className="whitespace-nowrap px-6 py-4">
                                            <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-medium text-slate-300">
                                                {user.gender}
                                            </span>
                                        </td>
                                    </tr>    
                                )
                            }

                        </tbody>
                        
                    </table>
                </div>
                
            </div>
        </div>
    )
}