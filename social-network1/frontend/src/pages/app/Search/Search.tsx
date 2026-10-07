import { useEffect, useRef, useState } from "react"
import { Link, useOutletContext } from "react-router-dom"
import type { ProfileContextType, ProfileType } from "../../../helpers/types"
import { http } from "../../../helpers/http"
import { useDebounce } from "../../../hooks/useDebounce"
import { ProfilePicture } from "../Profile/components/ProfilePicture"

export const Search = () => {
    const [searchResults, setSearchResults] = useState<ProfileType[]>([])
    const [searchText, setSearchText] = useState("")
    const debouncedText = useDebounce(searchText)
    const hasRunInitialEffectRef = useRef(false)
    const { resolvedTheme } = useOutletContext<ProfileContextType>()

    useEffect(() => {
        if (!hasRunInitialEffectRef.current) {
            hasRunInitialEffectRef.current = true
            return
        }

        if (!debouncedText.trim()) setSearchResults([])

        http.get<{ users: ProfileType[] }>(`/account/search/${debouncedText}`).then((response) => {
            setSearchResults(response.data.users)
        }).catch((error) => console.error("Failed to search users:", error))
    }, [debouncedText])

    return (
        <div className="mx-auto w-full max-w-2xl px-4 py-8">
            <h2 className={resolvedTheme === "dark" ? "mb-5 text-2xl font-bold text-white" : "mb-5 text-2xl font-bold text-slate-900"}>Search - {debouncedText}</h2>

            <div className="mb-6">
                <input type="text" value={searchText} placeholder="Search" onChange={(event) => setSearchText(event.target.value)} className={resolvedTheme === "dark" ? "w-full rounded-2xl border border-white/10 bg-slate-900 px-5 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-violet-500/60 focus:ring-2 focus:ring-violet-500/20" : "w-full rounded-2xl border border-slate-200 bg-white px-5 py-3 text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-violet-500/60 focus:ring-2 focus:ring-violet-500/20"} />
            </div>

            <p className="mb-4 text-sm text-slate-500">{searchResults.length} users found</p>

            <div className="space-y-3">
                {searchResults.map((profile) => (
                    <div key={profile.id} className={resolvedTheme === "dark" ? "flex items-center gap-4 rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 transition hover:border-violet-500/30 hover:bg-slate-800/80" : "flex items-center gap-4 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm transition hover:border-violet-300 hover:bg-slate-50"}>
                        <div className="h-12 w-12 shrink-0 overflow-hidden rounded-full"><ProfilePicture src={profile.avatar} alt={`${profile.firstName} ${profile.lastName}`} /></div>
                        <p className={resolvedTheme === "dark" ? "text-base font-semibold text-white" : "text-base font-semibold text-slate-900"}>{profile.firstName} {profile.lastName}</p>
                        <Link to={`/profile/${profile.username}`} className={resolvedTheme === "dark" ? "ml-auto rounded-xl border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm font-semibold text-violet-300 hover:bg-violet-500/20 hover:text-white" : "ml-auto rounded-xl border border-violet-200 bg-violet-50 px-4 py-2 text-sm font-semibold text-violet-700 hover:bg-violet-100"}>View Profile</Link>
                    </div>
                ))}
            </div>
        </div>
    )
}