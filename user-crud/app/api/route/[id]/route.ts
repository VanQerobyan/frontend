"use server"

import { deleteUser, editUser, getUserById } from "@/app/(helpers)/actions"
import { AddedUser } from "@/app/(helpers)/types"
import { NextRequest } from "next/server"

export type Params = {
    params:Promise<{id: string}>
}

export const GET = async (req: NextRequest, {params}:Params) => {
    const id = (await params).id
    if (!id) return Response.json({message: "id doesn't exist"}, {status: 400})
    const user = await getUserById(id);

    if (!user) return Response.json({message: "User not found"}, {status:404})
    return Response.json({user})
}

export const PATCH = async (request: NextRequest, {params}: Params) => {
    const id = (await params).id

    if (!id) return Response.json({message: "id doesn't exist"}, {status: 400})
    const data:AddedUser = await request.json();

    const editedUser = await editUser(id, data);

    if (!editedUser) return Response.json({message: "User not found"}, {status: 404});

    return Response.json({editedUser})
}

export const DELETE = async (request: NextRequest, {params}:Params) => {

    const id = (await params).id
    if (!id) return Response.json({message: "id doesn't exist"}, {status: 400});
    const deletedUser = await deleteUser(String(id));

    if (!deletedUser) return Response.json({message: "User not found"}, {status: 404});
    
    return Response.json({message: "Delete user"})
}