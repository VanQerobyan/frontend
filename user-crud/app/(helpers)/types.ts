export type User = {
    id: string
    name: string
    surname: string 
    age: number 
    gender: string 
    salary: number 
    about: string 
    location: string
}

export type AddedUser= Omit<User, "id">