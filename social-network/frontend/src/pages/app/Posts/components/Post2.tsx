import { useState } from "react"
import { useOutletContext } from "react-router-dom"
import type { Post, ProfileContextType } from "../../../../helpers/types"
import { ProfilePicture } from "../../Profile/components/ProfilePicture"

export const PostGallery = () => {
    const { profile, resolvedTheme } = useOutletContext<ProfileContextType>()
    const [selectedPost, setSelectedPost] = useState<Post | null>(null)

    return (
        <div className="mx-auto w-full max-w-4xl px-4 py-8">
            <div className="mb-6">
                <h2 className={resolvedTheme === "dark" ? "text-2xl font-bold text-white" : "text-2xl font-bold text-slate-900"}>Your Posts</h2>
                <p className="mt-1 text-sm text-slate-500">{profile.posts.length} posts shared</p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {profile.posts.map((post) => (
                    <div key={post.id} onClick={() => setSelectedPost(post)} className={resolvedTheme === "dark" ? "group relative aspect-square cursor-pointer overflow-hidden rounded-2xl bg-slate-900" : "group relative aspect-square cursor-pointer overflow-hidden rounded-2xl bg-slate-100 ring-1 ring-slate-200"}>
                        <ProfilePicture src={post.postImage} alt={post.title} />
                        <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/20" />
                    </div>
                ))}
            </div>

            {selectedPost && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div onClick={() => setSelectedPost(null)} className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
                    <div className={resolvedTheme === "dark" ? "relative z-10 flex w-full max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-[#0b0f1a] shadow-2xl max-md:flex-col" : "relative z-10 flex w-full max-w-3xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl max-md:flex-col"}>
                        <button type="button" onClick={() => setSelectedPost(null)} className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-black/70 text-xl text-white transition hover:bg-white/20">×</button>
                        <div className="flex h-[520px] min-w-0 flex-1 items-center justify-center overflow-hidden bg-black p-2 max-md:h-[400px]"><ProfilePicture src={selectedPost.postImage} alt={selectedPost.title}/></div>

                        <div className="flex w-[210px] shrink-0 flex-col p-4 max-md:w-full">
                            <div className={resolvedTheme === "dark" ? "mb-4 border-b border-white/10 pb-3" : "mb-4 border-b border-slate-200 pb-3"}>
                                <p className={resolvedTheme === "dark" ? "text-sm font-semibold text-white" : "text-sm font-semibold text-slate-900"}>@{profile.username}</p>
                            </div>
                            <p className={resolvedTheme === "dark" ? "text-sm leading-6 text-slate-300" : "text-sm leading-6 text-slate-700"}>{selectedPost.title}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}