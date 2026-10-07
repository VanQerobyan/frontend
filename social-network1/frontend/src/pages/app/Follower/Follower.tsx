import { useNavigate, useOutletContext } from "react-router-dom"
import type { ProfileContextType } from "../../../helpers/types"
import { ProfilePicture } from "../Profile/components/ProfilePicture"

export const Followers = () => {
    const { profile, resolvedTheme } = useOutletContext<ProfileContextType>()
    const navigate = useNavigate()

    return (
        <div className="mx-auto w-full max-w-3xl px-4 py-8 sm:px-6">
            <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-violet-500/20 bg-violet-500/10 text-xl">👥</div>
                    <div>
                        <h2 className={resolvedTheme === "dark" ? "text-2xl font-bold tracking-tight text-white" : "text-2xl font-bold tracking-tight text-slate-900"}>Followers</h2>
                        <p className="mt-1 text-sm text-slate-500">{profile.followers.length} follower{profile.followers.length !== 1 ? "s" : ""}</p>
                    </div>
                </div>

                <button type="button" onClick={() => navigate("/profile/follower/request")} className={resolvedTheme === "dark" ? "group flex items-center justify-center gap-2 rounded-xl border border-violet-500/30 bg-violet-500/10 px-4 py-2.5 text-sm font-semibold text-violet-300 transition-all duration-200 hover:-translate-y-0.5 hover:border-violet-400/50 hover:bg-violet-500/20 hover:text-white active:scale-95" : "group flex items-center justify-center gap-2 rounded-xl border border-violet-200 bg-violet-50 px-4 py-2.5 text-sm font-semibold text-violet-700 transition-all duration-200 hover:-translate-y-0.5 hover:border-violet-300 hover:bg-violet-100 active:scale-95"}><span>♡</span>Follow Requests</button>
            </div>

            {profile.followers.length > 0 ? (
                <div className="space-y-3">
                    {profile.followers.map((follower) => (
                        <div key={follower.sender.id} className={resolvedTheme === "dark" ? "group flex items-center gap-4 rounded-2xl border border-white/10 bg-slate-900/60 p-4 shadow-lg shadow-black/10 transition-all duration-200 hover:-translate-y-0.5 hover:border-violet-500/30 hover:bg-slate-900/90" : "group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-violet-300 hover:shadow-md"}>
                            <button type="button" onClick={() => navigate(`/profile/${follower.sender.username}`)} className={resolvedTheme === "dark" ? "h-14 w-14 shrink-0 overflow-hidden rounded-full ring-2 ring-violet-500/20 ring-offset-2 ring-offset-slate-950" : "h-14 w-14 shrink-0 overflow-hidden rounded-full ring-2 ring-violet-200 ring-offset-2 ring-offset-white"}>
                                <ProfilePicture src={follower.sender.avatar} alt={`${follower.sender.firstName} ${follower.sender.lastName}`} />
                            </button>

                            <div className="min-w-0 flex-1">
                                <button type="button" onClick={() => navigate(`/profile/${follower.sender.username}`)} className="block max-w-full text-left">
                                    <p className={resolvedTheme === "dark" ? "truncate text-base font-semibold text-white hover:text-violet-300" : "truncate text-base font-semibold text-slate-900 hover:text-violet-600"}>{follower.sender.firstName} {follower.sender.lastName}</p>
                                    <p className="mt-0.5 truncate text-sm text-slate-500">@{follower.sender.username}</p>
                                </button>
                            </div>

                            <button type="button" onClick={() => navigate(`/profile/${follower.sender.username}`)} className={resolvedTheme === "dark" ? "rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-300 hover:bg-violet-500/10 hover:text-violet-300" : "rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-violet-300 hover:bg-violet-50 hover:text-violet-700"}>View Profile</button>
                        </div>
                    ))}
                </div>
            ) : (
                <div className={resolvedTheme === "dark" ? "rounded-3xl border border-dashed border-white/10 bg-slate-900/40 px-6 py-14 text-center" : "rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-14 text-center"}>
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/10 text-2xl">👥</div>
                    <p className={resolvedTheme === "dark" ? "mt-5 font-semibold text-slate-200" : "mt-5 font-semibold text-slate-800"}>No followers yet</p>
                    <p className="mt-2 text-sm text-slate-500">People who follow you will appear here.</p>
                </div>
            )}
        </div>
    )
}