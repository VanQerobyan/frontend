import { useOutletContext, useParams } from "react-router-dom"
import type { ProfileContextType, ProfileType } from "../../../../helpers/types"
import { ProfilePicture } from "./ProfilePicture"
import { useGet } from "../../../../hooks/useGet"
import { http } from "../../../../helpers/http"

type ProfileResponse = {
    user: ProfileType
    followStatus: boolean
    followsMe: boolean
    requestSent: boolean
}

export const ProfileUsername = () => {
    const { username } = useParams()
    const { resolvedTheme } = useOutletContext<ProfileContextType>()
    const { data, error, loading, refetch } = useGet<ProfileResponse>(`/account/${username}`)
    const canSeeContent = data?.followStatus || !data?.user.isAccountPrivate

    if (loading) return <div className="flex min-h-[300px] items-center justify-center"><p className="animate-pulse text-sm font-medium text-slate-400">Loading profile...</p></div>
    if (error) return <div className="flex min-h-[300px] items-center justify-center"><p className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">Failed to load profile</p></div>

    const handleFollowToggle = () => {
        if (!data) return
        http.post(`/follow/${data.user.id}`).then(() => refetch()).catch((error) => console.error("Failed to update follow status:", error))
    }

    return (
        <div className="mx-auto w-full max-w-3xl px-4 py-8">
            <div className={resolvedTheme === "dark" ? "rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl" : "rounded-3xl border border-slate-200 bg-white p-6 shadow-lg backdrop-blur-xl"}>
                <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                    <div className={resolvedTheme === "dark" ? "h-24 w-24 shrink-0 overflow-hidden rounded-full ring-2 ring-violet-500/30 ring-offset-4 ring-offset-slate-900" : "h-24 w-24 shrink-0 overflow-hidden rounded-full ring-2 ring-violet-300 ring-offset-4 ring-offset-white"}>
                        <ProfilePicture src={data?.user.avatar} alt={data ? `${data.user.firstName} ${data.user.lastName}` : ""} />
                    </div>

                    <div className="min-w-0 flex-1">
                        <p className={resolvedTheme === "dark" ? "truncate text-2xl font-bold text-white" : "truncate text-2xl font-bold text-slate-900"}>{data?.user.firstName} {data?.user.lastName}</p>
                        <p className="mt-1 text-sm font-medium text-slate-500">@{data?.user.username}</p>
                        {data?.followsMe && <p className="mt-1 text-xs text-slate-500">Follows you</p>}
                    </div>

                    <button type="button" onClick={handleFollowToggle} className={`min-w-32 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-200 active:scale-95 ${data?.followStatus ? resolvedTheme === "dark" ? "border border-white/10 bg-slate-800 text-slate-200 hover:bg-slate-700" : "border border-slate-200 bg-slate-100 text-slate-700 hover:bg-slate-200" : data?.requestSent ? "border border-violet-500/20 bg-violet-500/10 text-violet-500 hover:bg-violet-500/20" : "bg-gradient-to-r from-indigo-500 to-violet-600 text-white shadow-lg shadow-violet-900/30 hover:from-indigo-400 hover:to-violet-500"}`}>{data?.requestSent ? "Cancel" : data?.followStatus ? "Unfollow" : "Follow"}</button>
                </div>

                <div>{data?.user.bio}hashasiuhdoa</div>

                {canSeeContent && (
                    <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
                        {data?.user.posts.map((post) => (
                            <div key={post.id} className={resolvedTheme === "dark" ? "overflow-hidden rounded-2xl border border-white/10 bg-slate-950/50" : "overflow-hidden rounded-2xl border border-slate-200 bg-slate-50"}>
                                <div className="aspect-square overflow-hidden"><ProfilePicture src={post.postImage} alt={post.title} /></div>
                                {post.title && <p className={resolvedTheme === "dark" ? "truncate px-3 py-2 text-sm text-slate-300" : "truncate px-3 py-2 text-sm text-slate-700"}>{post.title}</p>}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}