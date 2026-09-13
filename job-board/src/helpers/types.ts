export type Job = {
    id:number
    title: string
    company: string
    location: string
    salary: string
    type: string
    category: string
    description: string
}

export type JobContextType = {
    jobs: Job[] 
}
