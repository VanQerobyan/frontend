"use server"
import { readFile, writeFile } from "fs/promises"
import { AddedUser, User } from "./types";

export const getUsers = async ():Promise<User[]> => {

    const users = await readFile("./data.json","utf-8");
    return JSON.parse(users);
}


export const addUser = async (data: AddedUser):Promise<User> => {
    const users = await getUsers();

    const newUser = {id: (users.length + 1).toString(), ...data};

    users.push(newUser);

    await writeFile("./data.json", JSON.stringify(users, null, 2), "utf-8");
    return newUser;
}

export const getUserById = async (id: string):Promise<User | undefined> => {

    const users = await getUsers();

    const user = users.find(user => user.id === id);

    return user;
}


export const editUser = async (id: string, data: AddedUser):Promise<User | undefined> => {

    const users = await getUsers();

    let idx = users.findIndex(user => user.id === id);
    if (idx === -1) return undefined;

    const newUser = {id: id, ...data};
    users[idx] = newUser;

    await writeFile("./data.json",JSON.stringify(users, null, 2), "utf-8");
    return newUser;
}

export const deleteUser = async (id: string):Promise<User | undefined> => {
    const users = await getUsers();

    const deletedUser = users.find(user => user.id === id);

    if (!deletedUser) return undefined;
    const newUsers = users.filter(user => user.id !== id);

    await writeFile("./data.json", JSON.stringify(newUsers, null, 2), "utf-8");
    return  deletedUser;
}