import { useOutletContext } from "react-router-dom"
import type { ProfileContextType } from "../../../helpers/types"
import { PostGallery } from "../Posts/components/Post2"
import { ProfileAvatar } from "./components/ProfileAvatar"
import { ProfileInfo } from "./components/ProfileInfo"

export const Profile = () => {
    const { resolvedTheme } = useOutletContext<ProfileContextType>()

    return (
        <div className={resolvedTheme === "dark" ? "min-h-screen w-full bg-[radial-gradient(circle_at_5%_15%,rgba(99,102,241,0.28),transparent_25%),radial-gradient(circle_at_95%_80%,rgba(168,85,247,0.20),transparent_28%),radial-gradient(circle_at_80%_5%,rgba(79,70,229,0.12),transparent_24%),linear-gradient(135deg,#050816_0%,#090d22_48%,#111536_100%)] p-5 sm:p-7 lg:p-10" : "min-h-screen w-full bg-[radial-gradient(circle_at_5%_15%,rgba(99,102,241,0.10),transparent_25%),radial-gradient(circle_at_95%_80%,rgba(168,85,247,0.08),transparent_28%),radial-gradient(circle_at_80%_5%,rgba(79,70,229,0.06),transparent_24%),linear-gradient(135deg,#f8fafc_0%,#f1f5f9_48%,#eef2ff_100%)] p-5 sm:p-7 lg:p-10"}>
            <div className={resolvedTheme === "dark" ? "mx-auto flex min-h-[calc(100vh_-_40px)] max-w-[1200px] flex-col overflow-hidden rounded-[38px] bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.16),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.12),transparent_34%),linear-gradient(145deg,rgba(9,13,34,0.98)_0%,rgba(15,20,48,0.97)_50%,rgba(22,27,62,0.96)_100%)] p-6 shadow-[0_35px_120px_-35px_rgba(0,0,0,0.75)] ring-1 ring-white/[0.08] backdrop-blur-2xl sm:p-10" : "mx-auto flex min-h-[calc(100vh_-_40px)] max-w-[1200px] flex-col overflow-hidden rounded-[38px] bg-white/80 p-6 shadow-[0_25px_80px_-30px_rgba(15,23,42,0.20)] ring-1 ring-slate-200 backdrop-blur-2xl sm:p-10"}>
                <div className={resolvedTheme === "dark" ? "flex flex-col items-center gap-8 rounded-[32px] bg-white/[0.045] p-6 shadow-[0_20px_70px_rgba(0,0,0,0.20)] ring-1 ring-white/[0.07] backdrop-blur-xl sm:p-8 md:flex-row md:items-center lg:p-10" : "flex flex-col items-center gap-8 rounded-[32px] bg-white/80 p-6 shadow-[0_15px_50px_rgba(15,23,42,0.08)] ring-1 ring-slate-200 backdrop-blur-xl sm:p-8 md:flex-row md:items-center lg:p-10"}>
                    <ProfileAvatar />
                    <ProfileInfo />
                </div>

                <PostGallery />
            </div>
        </div>
    )
}