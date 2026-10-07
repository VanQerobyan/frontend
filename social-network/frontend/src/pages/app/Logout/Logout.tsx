import { useState } from "react"
import { useNavigate } from "react-router-dom"
import type { ProfileType, ResolvedTheme } from "../../../helpers/types"
import { ProfilePicture } from "../Profile/components/ProfilePicture"

type LogoutProps = {
    profile: ProfileType
    resolvedTheme: ResolvedTheme
}

export const Logout = ({ profile, resolvedTheme }: LogoutProps) => {
    const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false)
    const navigate = useNavigate()

    const toggleLogoutModal = () => {
        setIsLogoutModalOpen((isOpen) => !isOpen)
    }

    const confirmLogout = () => {
        localStorage.removeItem("authToken")
        navigate("/signin")
    }

    return (
        <>
            <div className="flex items-center gap-3">
                <div className="h-11 w-11 overflow-hidden rounded-full bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 p-[2px] shadow-lg shadow-indigo-500/20 ring-1 ring-white/10">
                    <div className={resolvedTheme === "dark" ? "h-full w-full overflow-hidden rounded-full bg-slate-900" : "h-full w-full overflow-hidden rounded-full bg-white"}>
                        <ProfilePicture src={profile.avatar} alt={`${profile.firstName} ${profile.lastName}`} />
                    </div>
                </div>

                <button type="button" onClick={toggleLogoutModal} className={resolvedTheme === "dark" ? "rounded-xl bg-red-500/10 px-4 py-2 text-sm font-semibold text-red-300 transition-all duration-200 hover:bg-red-500/20 hover:text-red-200 active:scale-95" : "rounded-xl bg-red-50 px-4 py-2 text-sm font-semibold text-red-600 transition-all duration-200 hover:bg-red-100 hover:text-red-700 active:scale-95"}>Logout</button>
            </div>

            {isLogoutModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm">
                    <div className={resolvedTheme === "dark" ? "w-full max-w-sm rounded-[28px] border border-white/10 bg-slate-900/95 p-6 text-center shadow-2xl shadow-black/40" : "w-full max-w-sm rounded-[28px] border border-slate-200 bg-white p-6 text-center shadow-2xl shadow-black/20"}>
                        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-500/10 ring-1 ring-red-500/20">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-7 w-7 text-red-400">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 8l4 4m0 0-4 4m4-4H9m3-7H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h6" />
                            </svg>
                        </div>

                        <h2 className={resolvedTheme === "dark" ? "text-xl font-bold text-white" : "text-xl font-bold text-slate-900"}>Log out?</h2>
                        <p className="mt-2 text-sm leading-6 text-slate-500">Are you sure you want to log out?</p>

                        <div className="mt-6 flex gap-3">
                            <button type="button" onClick={toggleLogoutModal} className={resolvedTheme === "dark" ? "flex-1 rounded-xl bg-white/5 px-4 py-3 text-sm font-semibold text-slate-300 transition-all duration-200 hover:bg-white/10 hover:text-white active:scale-[0.98]" : "flex-1 rounded-xl bg-slate-100 px-4 py-3 text-sm font-semibold text-slate-700 transition-all duration-200 hover:bg-slate-200 active:scale-[0.98]"}>Cancel</button>
                            <button type="button" onClick={confirmLogout} className="flex-1 rounded-xl bg-red-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-red-500/20 transition-all duration-200 hover:bg-red-400 active:scale-[0.98]">Logout</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}