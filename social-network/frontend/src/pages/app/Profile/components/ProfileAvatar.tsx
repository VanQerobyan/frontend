import { useRef } from "react"
import { useOutletContext } from "react-router-dom"
import type { ProfileContextType } from "../../../../helpers/types"
import { http } from "../../../../helpers/http"
import { ProfilePicture } from "./ProfilePicture"

export const ProfileAvatar = () => {
    const { profile, reloadUser, resolvedTheme } = useOutletContext<ProfileContextType>()
    const fileInputRef = useRef<HTMLInputElement>(null)

    const handleAvatarChange = () => {
        const formData = new FormData()
        const selectedFile = fileInputRef.current?.files?.[0]

        if (selectedFile) {
            formData.append("profile-pic", selectedFile)

            http.patch<{ picture: string }>("/account/avatar", formData).then(() => {
                reloadUser()
            }).catch((error) => {
                console.error("Failed to update profile picture:", error)
            })
        }
    }

    return (
        <div className="flex flex-col items-center">
            <div className="relative h-36 w-36 rounded-full bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 p-[3px] shadow-[0_18px_50px_rgba(99,102,241,0.28)] transition-all duration-300 hover:shadow-[0_22px_65px_rgba(99,102,241,0.42)] sm:h-40 sm:w-40">
                <div className={resolvedTheme === "dark" ? "group relative h-full w-full cursor-pointer overflow-hidden rounded-full bg-slate-900 ring-4 ring-slate-950/40" : "group relative h-full w-full cursor-pointer overflow-hidden rounded-full bg-white ring-4 ring-white/80"}>
                    <input id="profile-avatar-input" type="file" accept="image/*" ref={fileInputRef} onChange={handleAvatarChange} className="hidden" />

                    <div className="h-full w-full transition-transform duration-300 group-hover:scale-105">
                        <ProfilePicture src={profile.avatar} alt={`${profile.firstName} ${profile.lastName}`} onClick={() => fileInputRef.current?.click()} />
                    </div>

                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center rounded-full bg-slate-950/0 transition-all duration-300 group-hover:bg-slate-950/50">
                        <div className="flex translate-y-2 flex-col items-center gap-1.5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-7 w-7 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.8 7.5 8.2 5.5h7.6l1.4 2H19a2 2 0 0 1 2 2v7.5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9.5a2 2 0 0 1 2-2h1.8Z" />
                                <circle cx="12" cy="13" r="3.2" />
                            </svg>
                            <span className="text-xs font-medium text-white">Change photo</span>
                        </div>
                    </div>
                </div>

                <div className={resolvedTheme === "dark" ? "absolute bottom-3 right-3 z-10 h-5 w-5 rounded-full border-4 border-slate-950 bg-emerald-400 shadow-lg" : "absolute bottom-3 right-3 z-10 h-5 w-5 rounded-full border-4 border-white bg-emerald-400 shadow-lg"} />
            </div>
        </div>
    )
}