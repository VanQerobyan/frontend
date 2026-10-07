import axios from "axios"
import { useEffect, useState } from "react"
import { useOutletContext } from "react-router-dom"
import { http } from "../../../../helpers/http"
import type { ProfileContextType, ProfileType } from "../../../../helpers/types"
import { ProfilePicture } from "../../Profile/components/ProfilePicture"

type SenderType = {
    id: number
    username: string
    firstName: string
    lastName: string
    avatar: string
    bio: string
    theme: "dark" | "light" | "system"
    isAccountPrivate: boolean
}

type RequestType = {
    id: number
    sender: SenderType
}

export const FollowRequest = () => {
    const { setProfile, resolvedTheme } = useOutletContext<ProfileContextType>()
    const [request, setRequest] = useState<RequestType[]>([])
    const [loading, setLoading] = useState(true)
    const [actionId, setActionId] = useState<number | null>(null)

    useEffect(() => {
        http.get<{ requests: RequestType[] }>("/follow/requests").then((response) => setRequest(response.data.requests)).catch((error) => console.error("Failed to load follow requests:", error)).finally(() => setLoading(false))
    }, [])

    const AcceptFollow = (id: number) => {
        setActionId(id)
        http.patch(`/follow/requests/accept/${id}`).then(() => {
            setRequest((prev) => prev.filter((req) => req.id !== id))
            return http.get<{ user: ProfileType }>("/auth/user")
        }).then((response) => {
            if (response) setProfile(response.data.user)
        }).catch((err) => {
            if (axios.isAxiosError(err)) console.error("Failed to accept follow request:", err.response?.data.message)
            else console.error(err)
        }).finally(() => setActionId(null))
    }

    const DeclineFollow = (id: number) => {
        setActionId(id)
        http.patch(`/follow/requests/decline/${id}`).then(() => setRequest((prev) => prev.filter((req) => req.id !== id))).catch((error) => console.error("Failed to decline follow request:", error)).finally(() => setActionId(null))
    }

    if (loading) return <div className="flex min-h-[350px] items-center justify-center"><p className="text-sm font-medium text-slate-500">Loading requests...</p></div>

    return (
        <div className="mx-auto w-full max-w-2xl px-4 py-8">
            <h2 className={resolvedTheme === "dark" ? "text-2xl font-bold text-white" : "text-2xl font-bold text-slate-900"}>Follow Requests</h2>
            <p className="mb-6 mt-1 text-sm text-slate-500">{request.length} pending request{request.length !== 1 ? "s" : ""}</p>

            <div className="space-y-3">
                {request.map((req) => (
                    <div key={req.id} className={resolvedTheme === "dark" ? "flex items-center gap-4 rounded-2xl border border-white/10 bg-slate-900/60 p-4" : "flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"}>
                        <div className="h-14 w-14 shrink-0 overflow-hidden rounded-full"><ProfilePicture src={req.sender.avatar} alt={`${req.sender.firstName} ${req.sender.lastName}`} /></div>

                        <div className="min-w-0 flex-1">
                            <p className={resolvedTheme === "dark" ? "font-semibold text-white" : "font-semibold text-slate-900"}>{req.sender.firstName} {req.sender.lastName}</p>
                            <p className="text-sm text-slate-500">@{req.sender.username}</p>

                            <div className="mt-2"><span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${req.sender.isAccountPrivate ? "bg-violet-500/10 text-violet-500 ring-1 ring-violet-500/20" : "bg-emerald-500/10 text-emerald-500 ring-1 ring-emerald-500/20"}`}>{req.sender.isAccountPrivate ? "Private account" : "Public account"}</span></div>

                            <div className="mt-3 flex gap-2">
                                <button type="button" disabled={actionId === req.id} onClick={() => AcceptFollow(req.id)} className="rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 px-4 py-2 text-sm font-semibold text-white disabled:opacity-50">{actionId === req.id ? "Please wait..." : "Accept"}</button>
                                <button type="button" disabled={actionId === req.id} onClick={() => DeclineFollow(req.id)} className="rounded-xl border border-red-500/25 bg-red-500/10 px-4 py-2 text-sm font-semibold text-red-500 disabled:opacity-50">Decline</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {request.length === 0 && <div className={resolvedTheme === "dark" ? "mt-6 rounded-2xl border border-dashed border-white/10 bg-slate-900/40 px-6 py-12 text-center text-slate-400" : "mt-6 rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-12 text-center text-slate-500"}>No follow requests</div>}
        </div>
    )
}