import { Navigate, useParams } from "react-router-dom"
import { useContext } from "react"
import { JobContext } from "../context/JobContext"

export const JobItem = () => {

    const {id} = useParams();

    const context = useContext(JobContext);

    if (!context) throw new Error("JobContext is not available");
    const {jobs} = context;

    const job = jobs.find(job => job.id.toString() === id);

    if (!job) {
        return <Navigate to="/not-found" replace />;
    }

    return (
        <div className="px-4 py-12 sm:px-6">

            {
                <div
                    key={job.id}
                    className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-900/60 shadow-2xl shadow-black/30 backdrop-blur-xl transition-all duration-500 hover:border-emerald-400/30"
                >

                    <div className="border-b border-slate-800/80 bg-slate-900/40 px-6 py-8 sm:px-10">

                        <div className="mb-4 inline-flex rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">
                            Job #{job.id}
                        </div>

                        <div className="mb-3 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-4xl font-black tracking-tight text-transparent sm:text-5xl">
                            {job.title}
                        </div>

                        <div className="text-lg font-semibold text-emerald-400">
                            {job.company}
                        </div>

                    </div>

                    <div className="px-6 py-8 sm:px-10">

                        <div className="mb-6">

                            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                                Location
                            </p>

                            <div className="rounded-xl border border-slate-800 bg-slate-950/50 px-5 py-4 text-slate-300 transition-all duration-300 hover:border-emerald-400/30 hover:bg-slate-950/80">
                                {job.location}
                            </div>

                        </div>

                        <div className="mb-6">

                            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                                Salary
                            </p>

                            <div className="rounded-xl border border-slate-800 bg-slate-950/50 px-5 py-4 font-semibold text-emerald-400 transition-all duration-300 hover:border-emerald-400/30 hover:bg-slate-950/80">
                                {job.salary}
                            </div>

                        </div>

                        <div className="mb-6">

                            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                                Type
                            </p>

                            <div className="rounded-xl border border-slate-800 bg-slate-950/50 px-5 py-4 text-slate-300 transition-all duration-300 hover:border-cyan-400/30 hover:bg-slate-950/80">
                                {job.type}
                            </div>

                        </div>

                        <div className="mb-8">

                            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                                Category
                            </p>

                            <div className="rounded-xl border border-slate-800 bg-slate-950/50 px-5 py-4 text-slate-300 transition-all duration-300 hover:border-blue-400/30 hover:bg-slate-950/80">
                                {job.category}
                            </div>

                        </div>

                        <div className="border-t border-slate-800 pt-8">

                            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                                Description
                            </p>

                            <div className="rounded-2xl border border-slate-800/70 bg-slate-950/30 p-6 text-base leading-8 text-slate-300">
                                {job.description}
                            </div>

                        </div>

                    </div>

                </div>
            }

        </div>
    )
}