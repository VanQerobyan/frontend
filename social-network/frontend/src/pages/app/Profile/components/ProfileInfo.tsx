import { useOutletContext } from "react-router-dom"
import type { ProfileContextType } from "../../../../helpers/types"
import { Bio } from "../../Bio/Bio"

export const ProfileInfo = () => {
    const { profile, resolvedTheme } = useOutletContext<ProfileContextType>()

    if (!profile) return <p className="text-slate-400">Loading...</p>

    return (
        <div className="flex w-full max-w-xl flex-col items-center md:items-start">
            <div className="w-full text-center md:text-left">
                <p className={resolvedTheme === "dark" ? "bg-gradient-to-r from-white via-indigo-100 to-violet-200 bg-clip-text text-2xl font-black tracking-[-0.03em] text-transparent sm:text-3xl" : "bg-gradient-to-r from-slate-950 via-indigo-800 to-violet-700 bg-clip-text text-2xl font-black tracking-[-0.03em] text-transparent sm:text-3xl"}>{profile.firstName} {profile.lastName}</p>
                <p className={resolvedTheme === "dark" ? "mt-1 text-sm font-semibold text-indigo-300/80" : "mt-1 text-sm font-semibold text-indigo-600"}>@{profile.username}</p>
            </div>

            <div className="mt-4 flex items-center gap-2">
                <div className={resolvedTheme === "dark" ? "flex items-center gap-2 rounded-full bg-white/[0.05] px-4 py-2 ring-1 ring-white/[0.08] backdrop-blur-xl" : "flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm ring-1 ring-slate-200"}>
                    <span className={resolvedTheme === "dark" ? "text-sm font-black text-white" : "text-sm font-black text-slate-900"}>{profile.followers.length}</span>
                    <span className="text-xs font-medium text-slate-500">Followers</span>
                </div>

                <div className={resolvedTheme === "dark" ? "flex items-center gap-2 rounded-full bg-white/[0.05] px-4 py-2 ring-1 ring-white/[0.08] backdrop-blur-xl" : "flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm ring-1 ring-slate-200"}>
                    <span className={resolvedTheme === "dark" ? "text-sm font-black text-white" : "text-sm font-black text-slate-900"}>{profile.followings.length}</span>
                    <span className="text-xs font-medium text-slate-500">Following</span>
                </div>
            </div>

            <Bio />
        </div>
    )
}