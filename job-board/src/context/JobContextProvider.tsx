import { useEffect, useState, type ReactNode } from "react"
import { JobContext } from "./JobContext"
import type { Job } from "../helpers/types"
import { Http } from "../helpers/const-value"


export type JobContextChildren = {
    children:ReactNode
}

export const JobContextProvider = ({children}: JobContextChildren) => {

    const [jobs, setJobs] = useState<Job[]>([]);

    useEffect(() => {
        Http
        .get("/jobs")
        .then(response => setJobs(response.data))

    }, [])

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100">
            <JobContext.Provider 
            value={
                {jobs}
            }>
                {children}
            </JobContext.Provider>
        </div>
    )
}