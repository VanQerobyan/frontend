import type { PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "../../app/createAppSlice"
import { addUser, deleteUser, editUser, getUsers } from "./api"

export type User = {
    id: number
    name: string
    surname: string
    gender: string
}

export type State = {
    users: User[]
}

const initialState: State = {
    users: []
}


export const userSlice = createAppSlice({
    name: 'users',
    initialState, 
    reducers: create => ({
        getAllUsers: create.asyncThunk(getUsers,
        {
            fulfilled: (state: State, action: PayloadAction<User[]>) => {
                state.users = action.payload
            }
        }),
        addedUser: create.asyncThunk(async (data: User) => {
            const user = await addUser(data);
            return user;
        },{
            fulfilled: (state: State, action: PayloadAction<User>) => {
               state.users.push(action.payload);
            }
        }),
        editedUser: create.asyncThunk(async ({id, data}: {id: number; data: User}) => {
            const editedUser = await editUser(id, data);
            return editedUser;
        }, {
            fulfilled: (state: State, action: PayloadAction<User>) => {
              const index = state.users.findIndex(user => user.id === action.payload.id);

              if (index !== -1) {
                    state.users[index] = action.payload;
              }
            }
        }),

        deletedUser: create.asyncThunk(async (id: number) => {
            await deleteUser(id);
            return id;
        }, {
            fulfilled: (state: State, action: PayloadAction<number>) => {
                state.users = state.users.filter(user => user.id !== action.payload);
            }
        })
    }),
    selectors: {
        userSelect: state => state.users
    }
})


export const { userSelect } = userSlice.selectors;
export const { getAllUsers, addedUser, editedUser, deletedUser } = userSlice.actions