import { useRef, useState } from "react"
import { useOutletContext } from "react-router-dom"
import { http } from "../../../../helpers/http"
import type { Post, ProfileContextType } from "../../../../helpers/types"

export const AddPost = () => {
    const fileInputRef = useRef<HTMLInputElement | null>(null)
    const titleRef = useRef<HTMLTextAreaElement>(null)
    const [isImageChosen, setIsImageChosen] = useState(false)
    const [imagePreview, setImagePreview] = useState("")
    const { profile, setProfile, resolvedTheme } = useOutletContext<ProfileContextType>()

    const handleImageChange = () => {
        setIsImageChosen(true)
        const fileReader = new FileReader()
        const selectedFile = fileInputRef.current?.files?.[0]
        if (selectedFile) fileReader.readAsDataURL(selectedFile)
        fileReader.onload = () => setImagePreview(fileReader.result ? fileReader.result.toString() : "")
    }

    const handleDecline = () => {
        setImagePreview("")
    }

    const handleSave = () => {
        const formData = new FormData()
        const selectedFile = fileInputRef.current?.files?.[0]

        if (selectedFile) {
            formData.append("title", titleRef.current?.value || "")
            formData.append("image", selectedFile)
        }

        http.post<{ postInfo: Post }>("/posts", formData).then((response) => {
            setProfile({ ...profile, posts: [...profile.posts, response.data.postInfo] })
            setImagePreview("")
        }).catch((error) => console.error("Failed to create post:", error))
    }

    return (
        <div className="mx-auto w-full max-w-[460px] px-4 py-8">
            <div className={resolvedTheme === "dark" ? "rounded-[28px] border border-white/10 bg-slate-900/90 p-5 shadow-2xl shadow-black/30" : "rounded-[28px] border border-slate-200 bg-white p-5 shadow-lg"}>
                <div className="mb-5">
                    <h2 className={resolvedTheme === "dark" ? "text-xl font-bold text-white" : "text-xl font-bold text-slate-900"}>Create post</h2>
                    <p className="mt-1 text-sm text-slate-500">Share something with your friends</p>
                    <p>{profile.posts.length}</p>
                </div>

                <input type="file" accept="image/*" ref={fileInputRef} onChange={handleImageChange} className="hidden" />

                <button type="button" onClick={() => fileInputRef.current?.click()} className="group flex w-full items-center justify-center gap-3 rounded-2xl border border-dashed border-violet-400/40 bg-violet-500/5 px-4 py-5 transition hover:border-violet-400/70 hover:bg-violet-500/10">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-500/15 text-2xl text-violet-500">+</span>
                    <div className="text-left">
                        <p className={resolvedTheme === "dark" ? "text-sm font-semibold text-white" : "text-sm font-semibold text-slate-900"}>Add photo</p>
                        <p className="text-xs text-slate-500">Choose an image from your device</p>
                    </div>
                </button>

                {isImageChosen && imagePreview && (
                    <div className={resolvedTheme === "dark" ? "mt-5 rounded-2xl bg-slate-950/60 p-3 ring-1 ring-white/10" : "mt-5 rounded-2xl bg-slate-50 p-3 ring-1 ring-slate-200"}>
                        <textarea ref={titleRef} placeholder="What's on your mind?" className={resolvedTheme === "dark" ? "mb-3 min-h-24 w-full resize-none rounded-2xl bg-slate-900/80 px-4 py-3 text-sm text-white outline-none ring-1 ring-white/10 placeholder:text-slate-500 focus:ring-violet-500/50" : "mb-3 min-h-24 w-full resize-none rounded-2xl bg-white px-4 py-3 text-sm text-slate-900 outline-none ring-1 ring-slate-200 placeholder:text-slate-400 focus:ring-violet-500/50"} />
                        <div className="flex h-[300px] w-full items-center justify-center overflow-hidden rounded-2xl bg-black/40"><img src={imagePreview} alt="Post preview" className="h-full w-full object-contain" /></div>

                        <div className="mt-4 flex items-center justify-between">
                            <p className="text-xs text-slate-500">Ready to publish?</p>
                            <div className="flex gap-2">
                                <button type="button" onClick={handleDecline} className={resolvedTheme === "dark" ? "rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-300 hover:bg-white/10" : "rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"}>Decline</button>
                                <button type="button" onClick={handleSave} className="rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-5 py-2 text-sm font-semibold text-white">Save</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}