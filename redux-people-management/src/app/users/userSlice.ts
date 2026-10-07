import { createSlice, type PayloadAction } from "@reduxjs/toolkit";


export type User = {
    id: number,
    name: string, 
    surname: string, 
    age: number, 
    salary: number
}


export type AddedUser = Omit<User, "id">

type State = {
    list: User[]
}

const initialState:State = {
    list: [
  { id: 1, name: "Aram", surname: "Petrosyan", age: 28, salary: 450000 },
  { id: 2, name: "Anna", surname: "Hakobyan", age: 24, salary: 380000 },
  { id: 3, name: "David", surname: "Sargsyan", age: 32, salary: 620000 },
  { id: 4, name: "Mariam", surname: "Grigoryan", age: 27, salary: 510000 },
  { id: 5, name: "Gor", surname: "Karapetyan", age: 35, salary: 750000 },
  { id: 6, name: "Nare", surname: "Martirosyan", age: 26, salary: 420000 },
  { id: 7, name: "Tigran", surname: "Avetisyan", age: 30, salary: 580000 },
  { id: 8, name: "Lilit", surname: "Vardanyan", age: 29, salary: 490000 }
]
}

export const usersSlice = createSlice({
    name: "users",
    initialState, 
    reducers:{
        deleteUser:(state: State, action:PayloadAction<number>) => {
            state.list = state.list.filter(user => user.id !== action.payload);
        },
        addUser: (state: State, action: PayloadAction<AddedUser>) => {
            const newUser = {id: state.list.length + 1, ...action.payload};
            state.list.push(newUser)
        },
        editUser: (state: State, action: PayloadAction<User>) => {
            const id = action.payload.id;

            const index = state.list.findIndex(user => user.id === id);
            state.list[index] = action.payload;
        }
    },
    selectors: {
        selectUser: state => state.list,
    }
})

export const { selectUser } = usersSlice.selectors;
export const { deleteUser, addUser, editUser } = usersSlice.actions;