import axios from "axios"
import { useEffect, useState } from "react"
import { useOutletContext } from "react-router-dom"
import { http } from "../../../helpers/http"
import type { ProfileContextType } from "../../../helpers/types"

export const Bio = () => {
    const [bio, setBio] = useState("")
    const [error, setError] = useState("")
    const [savedBio, setSavedBio] = useState("")
    const { resolvedTheme } = useOutletContext<ProfileContextType>()

    useEffect(() => {
        http.get("/auth/user").then((response) => {
            setError("")
            setSavedBio(response.data.user.bio)
            setBio(response.data.user.bio)
        }).catch((error) => {
            if (axios.isAxiosError(error)) setError(error.response?.data.message)
        })
    }, [])

    const handleBioBlur = () => {
        if (savedBio !== bio) {
            http.patch("/account/bio", { bio }).then(() => {
                setSavedBio(bio)
                setError("")
            }).catch((error) => {
                if (axios.isAxiosError(error)) setError(error.response?.data.message)
            })
        }
    }

    return (
        <div className="mt-4 w-full">
            <form className="w-full">
                <label htmlFor="bio" className={resolvedTheme === "dark" ? "mb-2 block text-sm font-semibold tracking-wide text-slate-300" : "mb-2 block text-sm font-semibold tracking-wide text-slate-700"}>Bio</label>
                <textarea id="bio" value={bio} placeholder="Type your bio..." onChange={(event) => setBio(event.target.value)} onBlur={handleBioBlur} className={resolvedTheme === "dark" ? "min-h-10 w-full resize-none overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-sm leading-5 text-slate-100 outline-none transition-all duration-200 placeholder:text-slate-500 hover:border-white/20 hover:bg-white/[0.06] focus:border-indigo-400/50 focus:bg-white/[0.07] focus:ring-4 focus:ring-indigo-500/10" : "min-h-10 w-full resize-none overflow-hidden rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm leading-5 text-slate-900 shadow-sm outline-none transition-all duration-200 placeholder:text-slate-400 hover:border-slate-300 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-500/10"} />
            </form>

            {error && <p className="mt-1 text-sm font-medium text-red-400">{error}</p>}
        </div>
    )
}