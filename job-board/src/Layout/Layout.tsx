import { NavLink, Outlet } from "react-router-dom"

export const Layout = () => {
    return (
        <div className="min-h-screen bg-slate-950 px-4 py-6 text-white sm:px-6">

            <nav className="mb-12 flex justify-center">
                <div className="flex items-center gap-1 rounded-2xl border border-slate-800/80 bg-slate-900/80 p-1.5 shadow-2xl shadow-black/30 backdrop-blur-xl">
                    <NavLink
                        to=""
                        className="rounded-xl px-5 py-2.5 text-sm font-semibold text-slate-400 transition-all duration-300 hover:bg-slate-800 hover:text-white"
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="job"
                        className="rounded-xl px-5 py-2.5 text-sm font-semibold text-slate-400 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-500/15 hover:text-emerald-300 hover:shadow-lg hover:shadow-emerald-500/10"
                    >
                        Jobs
                    </NavLink>

                    <NavLink
                        to="category"
                        className="rounded-xl px-5 py-2.5 text-sm font-semibold text-slate-400 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-500/15 hover:text-cyan-300 hover:shadow-lg hover:shadow-cyan-500/10"
                    >
                        Category
                    </NavLink>

                    <NavLink
                        to="about"
                        className="rounded-xl px-5 py-2.5 text-sm font-semibold text-slate-400 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-500/15 hover:text-blue-300 hover:shadow-lg hover:shadow-blue-500/10"
                    >
                        About
                    </NavLink>

                    <NavLink
                        to="contact"
                        className="rounded-xl px-5 py-2.5 text-sm font-semibold text-slate-400 transition-all duration-300 hover:-translate-y-0.5 hover:bg-rose-500/15 hover:text-rose-300 hover:shadow-lg hover:shadow-rose-500/10"
                    >
                        Contact
                    </NavLink>
                </div>
            </nav>

            <main className="mx-auto max-w-6xl">
                <Outlet></Outlet>
            </main>

        </div>
    )
}