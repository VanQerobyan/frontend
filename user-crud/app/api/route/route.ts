"use server"
import { addUser, getUsers } from "@/app/(helpers)/actions"
import { NextRequest } from "next/server";

export const GET = async () => {
    const users = await getUsers();

    return Response.json({users});
}

export const POST = async (request: NextRequest) => {

    const data = await request.json();
    const addedUser = await addUser(data);

    return Response.json({addedUser});
}

