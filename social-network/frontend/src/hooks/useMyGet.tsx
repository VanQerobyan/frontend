import { useState } from "react"
import type { ProfileType } from "../helpers/types"
import { http } from "../helpers/http"

export const MyGet = () => {
        const [user, setUser] = useState<ProfileType | null>(null)

     const getUser = () => {


        http
            .get("/auth/user")
            .then((response) => {
                setUser(response.data)
            })
    }
    return {user}

}