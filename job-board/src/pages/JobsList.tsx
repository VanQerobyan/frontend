import { useContext } from "react"
import { JobContext } from "../context/JobContext"
import { NavLink } from "react-router-dom";

export const JobList = () => {

    const context = useContext(JobContext);

    if (!context) throw new Error("JobContext is not available");
    const {jobs} = context;

    return (
        <div className="rounded-3xl px-4 py-10 sm:px-6">

            <h1 className="mb-10 text-center text-4xl font-black tracking-tight text-transparent bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text drop-shadow-lg sm:text-5xl">
                JobList
            </h1>

            {
                jobs.map(job => 
                    <NavLink
                        key={job.id}  
                        to={`${job.id}`}
                        className="group mb-5 block rounded-2xl border border-slate-800 bg-slate-900/50 p-6 shadow-lg shadow-black/20 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/50 hover:bg-slate-900/80 hover:shadow-xl hover:shadow-emerald-950/30"
                    >
                            <div className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 transition-colors duration-300 group-hover:text-emerald-400">
                                #{job.id}
                            </div>

                            <div className="text-2xl font-bold text-slate-100 transition-colors duration-300 group-hover:text-white">
                                {job.title}
                            </div>

                            <div className="text-base font-medium text-emerald-400 transition-colors duration-300 group-hover:text-emerald-300">
                                {job.company}
                            </div>

                    </NavLink>
                )
            }
        </div>
    )
}