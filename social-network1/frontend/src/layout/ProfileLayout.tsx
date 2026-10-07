import { useEffect, useState } from "react"
import { NavLink, Outlet, useNavigate } from "react-router-dom"
import type { ProfileType, ResolvedTheme, ThemeMode } from "../helpers/types"
import { http } from "../helpers/http"
import { Logout } from "../pages/app/Logout/Logout"

export const ProfileLayout = () => {
    const [profile, setProfile] = useState<ProfileType | null>(null)
    const [theme, setTheme] = useState<ThemeMode>("system")
    const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>("light")
    const navigate = useNavigate()

    const reloadUser = () => {
        http.get<{ user: ProfileType }>("/auth/user").then((response) => {
            setProfile(response.data.user)
            setTheme(response.data.user.theme)
        }).catch(() => {
            navigate("/signin")
        })
    }

    useEffect(() => {
        reloadUser()
    }, [])

    useEffect(() => {
        if (theme === "light") {
            setResolvedTheme("light")
        } else if (theme === "dark") {
            setResolvedTheme("dark")
        } else {
            const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches
            setResolvedTheme(isDark ? "dark" : "light")
        }
    }, [theme])

    const getNavLinkClassName = ({ isActive }: { isActive: boolean }) => {
        if (resolvedTheme === "dark") return `rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-300 ${isActive ? "bg-indigo-500/15 text-indigo-300 ring-1 ring-indigo-400/20" : "text-slate-400 hover:bg-white/[0.05] hover:text-white"}`
        return `rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-300 ${isActive ? "bg-indigo-50 text-indigo-700 ring-1 ring-indigo-200" : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"}`
    }

    return (
        profile && (
            <div className={resolvedTheme === "dark" ? "min-h-screen bg-[#050816] text-white" : "min-h-screen bg-slate-100 text-slate-900"}>
                <nav className={resolvedTheme === "dark" ? "sticky top-0 z-50 border-b border-white/[0.07] bg-[#090d22]/90 px-5 py-4 backdrop-blur-2xl sm:px-8 lg:px-12" : "sticky top-0 z-50 border-b border-slate-200 bg-white/90 px-5 py-4 shadow-sm backdrop-blur-2xl sm:px-8 lg:px-12"}>
                    <div className="mx-auto flex max-w-[1400px] items-center justify-between">
                        <NavLink to="/profile" className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-[15px] bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 font-black text-white shadow-[0_8px_25px_rgba(99,102,241,0.30)]">C</div>
                            <span className={resolvedTheme === "dark" ? "bg-gradient-to-r from-white via-indigo-100 to-violet-300 bg-clip-text text-xl font-black italic text-transparent" : "bg-gradient-to-r from-slate-950 via-indigo-800 to-violet-700 bg-clip-text text-xl font-black italic text-transparent"}>Connecta</span>
                        </NavLink>

                        <div className="hidden items-center gap-2 md:flex">
                            <NavLink to="/profile" end className={getNavLinkClassName}>Profile</NavLink>
                            <NavLink to="posts" className={getNavLinkClassName}>Posts</NavLink>
                            <NavLink to="follower" className={getNavLinkClassName}>Followers</NavLink>
                            <NavLink to="following" className={getNavLinkClassName}>Following</NavLink>
                            <NavLink to="settings" className={getNavLinkClassName}>Settings</NavLink>
                            <NavLink to="search" className={getNavLinkClassName}>Search</NavLink>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="hidden text-right sm:block"><p className="text-xs text-slate-500">@{profile.username}</p></div>
                            <Logout profile={profile} resolvedTheme={resolvedTheme} />
                        </div>
                    </div>
                </nav>

                <main className="mx-auto w-full max-w-[1400px]">
                    <Outlet context={{ profile, setProfile, reloadUser, theme, setTheme, resolvedTheme }} />
                </main>
            </div>
        )
    )
}