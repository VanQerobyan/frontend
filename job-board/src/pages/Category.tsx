import { useContext } from "react"
import { JobContext } from "../context/JobContext"

export const Category = () => {

    const context = useContext(JobContext);

    if (!context) throw new Error("JobContext is not available");

    let {jobs} = context;

    const categories= [...new Set(jobs.map(job => job.category))]

    return (
        <div className="px-4 py-10 sm:px-6">

            <h1 className="mb-10 text-center text-4xl font-black tracking-tight text-transparent bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text drop-shadow-lg sm:text-5xl">
                Category
            </h1>

            {
                categories.map(category => 
                    <div 
                        key={category}
                        className="mb-4 rounded-2xl border border-slate-800 bg-slate-900/50 p-5 shadow-lg shadow-black/20 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/40 hover:bg-slate-900/80 hover:shadow-emerald-950/30"
                    >
                        <div className="flex items-center justify-between gap-4 text-lg font-semibold text-slate-200">
                            <span className="text-emerald-400">
                                {category}
                            </span>

                            <span className="rounded-full border border-slate-700 bg-slate-950/70 px-4 py-1 text-sm font-medium text-slate-400">
                                {Math.floor(Math.random() * 100)} Jobs
                            </span>
                        </div>
                    </div>
                )
            }

        </div>
    )
}