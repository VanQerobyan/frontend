import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { http } from "../helpers/http"

export type ChangePasswordFormData = {
    oldPassword: string
    newPassword: string
    confirmPassword: string
}

export type UseChangePasswordReturn = {
    passwordError: string
    success: string
    handleChangePassword: (data: ChangePasswordFormData) => void
}

export const useChangePassword = (): UseChangePasswordReturn => {
    const [passwordError, setPasswordError] = useState("")
    const [success, setSuccess] = useState("")
    const navigate = useNavigate()

    const handleChangePassword = (data: ChangePasswordFormData) => {
        setSuccess("")
        setPasswordError("")

        if (data.newPassword !== data.confirmPassword) {
            setPasswordError("Passwords do not match")
            return
        }

        http
            .patch("/account/settings/password", {
                currentPassword: data.oldPassword,
                newPassword: data.newPassword
            })
            .then((response) => {
                setPasswordError("")
                setSuccess(response.data.message)

                setTimeout(() => {
                    navigate("/signin")
                }, 1500)

                localStorage.removeItem("authToken")
            })
            .catch((error) => {
                setSuccess("")

                if (axios.isAxiosError(error)) {
                    setPasswordError(error.response?.data.message)
                }
            })
    }

    return {
        passwordError,
        success,
        handleChangePassword
    }
}