import { useNavigate, useOutletContext } from "react-router-dom"
import type { ProfileContextType } from "../../../helpers/types"
import { ProfilePicture } from "../Profile/components/ProfilePicture"

export const Followings = () => {
    const { profile, resolvedTheme } = useOutletContext<ProfileContextType>()
    const navigate = useNavigate()

    return (
        <div className="mx-auto w-full max-w-3xl px-4 py-8 sm:px-6">
            <div className="mb-7 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-indigo-500/20 bg-indigo-500/10 text-xl">✦</div>
                <div>
                    <h2 className={resolvedTheme === "dark" ? "text-2xl font-bold text-white" : "text-2xl font-bold text-slate-900"}>Following</h2>
                    <p className="mt-1 text-sm text-slate-500">{profile.followings.length} following</p>
                </div>
            </div>

            {profile.followings.length > 0 ? (
                <div className="space-y-3">
                    {profile.followings.map((following) => (
                        <div key={following.receiver.id} className={resolvedTheme === "dark" ? "group flex items-center gap-4 rounded-2xl border border-white/10 bg-slate-900/60 p-4 shadow-lg shadow-black/10 transition-all duration-200 hover:-translate-y-0.5 hover:border-violet-500/30 hover:bg-slate-900/90" : "group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-violet-300 hover:shadow-md"}>
                            <button type="button" onClick={() => navigate(`/profile/${following.receiver.username}`)} className="h-14 w-14 shrink-0 overflow-hidden rounded-full ring-2 ring-violet-500/20">
                                <ProfilePicture src={following.receiver.avatar} alt={`${following.receiver.firstName} ${following.receiver.lastName}`} />
                            </button>

                            <div className="min-w-0 flex-1">
                                <button type="button" onClick={() => navigate(`/profile/${following.receiver.username}`)} className="block max-w-full text-left">
                                    <p className={resolvedTheme === "dark" ? "truncate text-base font-semibold text-white hover:text-violet-300" : "truncate text-base font-semibold text-slate-900 hover:text-violet-600"}>{following.receiver.firstName} {following.receiver.lastName}</p>
                                    <p className="mt-0.5 truncate text-sm text-slate-500">@{following.receiver.username}</p>
                                </button>
                            </div>

                            <button type="button" onClick={() => navigate(`/profile/${following.receiver.username}`)} className={resolvedTheme === "dark" ? "rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-300 hover:bg-violet-500/10 hover:text-violet-300" : "rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-violet-300 hover:bg-violet-50 hover:text-violet-700"}>View Profile</button>
                        </div>
                    ))}
                </div>
            ) : (
                <div className={resolvedTheme === "dark" ? "rounded-3xl border border-dashed border-white/10 bg-slate-900/40 px-6 py-14 text-center" : "rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-14 text-center"}>
                    <p className={resolvedTheme === "dark" ? "font-semibold text-slate-200" : "font-semibold text-slate-800"}>Not following anyone yet</p>
                    <p className="mt-2 text-sm text-slate-500">People you follow will appear here.</p>
                </div>
            )}
        </div>
    )
}