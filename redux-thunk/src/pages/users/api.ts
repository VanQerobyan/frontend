import axios from "axios"
import type { User } from "./userSlice";

export const getUsers = async (): Promise<User[]> => {
    const response = await axios.get<User[]>('http://localhost:4000/users');
    return response.data;
}

export const addUser = async (data: User): Promise<User> => {
    const response = await axios.post<User>('http://localhost:4000/users', data);
    return response.data;
}

export const editUser = async(id: number, data: User):Promise<User> => {
    const response = await axios.put<User>(`http://localhost:4000/users/${id}`, data)
    return response.data;
}

export const deleteUser = async (id: number): Promise<void> => {
    await axios.delete<User>(`http://localhost:4000/users/${id}`);
}