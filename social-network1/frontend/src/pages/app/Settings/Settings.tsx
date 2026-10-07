import { useNavigate, useOutletContext } from "react-router-dom"
import type { ProfileContextType } from "../../../helpers/types"

export const Settings = () => {
    const navigate = useNavigate()
    const { resolvedTheme } = useOutletContext<ProfileContextType>()
    const itemClass = resolvedTheme === "dark" ? "group flex min-h-[88px] cursor-pointer items-center justify-between rounded-2xl border border-white/10 bg-slate-900/70 px-5 py-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-violet-500/30 hover:bg-slate-900 hover:shadow-lg hover:shadow-violet-950/20" : "group flex min-h-[88px] cursor-pointer items-center justify-between rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-violet-300 hover:shadow-md"

    return (
        <div className="mx-auto w-full max-w-2xl px-4 py-10">
            <div className="mb-7">
                <h1 className={resolvedTheme === "dark" ? "text-3xl font-bold tracking-tight text-white" : "text-3xl font-bold tracking-tight text-slate-900"}>Settings</h1>
                <p className="mt-2 text-sm text-slate-500">Manage your account preferences and security.</p>
            </div>

            <div className="space-y-4">
                <div onClick={() => navigate("/profile/settings/password")} className={itemClass}>
                    <div>
                        <p className={resolvedTheme === "dark" ? "font-semibold text-white" : "font-semibold text-slate-900"}>Change Password</p>
                        <p className="mt-1 text-sm text-slate-500">Update your account password.</p>
                    </div>
                    <span className="text-xl text-slate-500 transition group-hover:translate-x-1 group-hover:text-violet-400">›</span>
                </div>

                <div onClick={() => navigate("/profile/settings/theme")} className={itemClass}>
                    <div>
                        <p className={resolvedTheme === "dark" ? "font-semibold text-white" : "font-semibold text-slate-900"}>Theme</p>
                        <p className="mt-1 text-sm text-slate-500">Choose your preferred appearance.</p>
                    </div>
                    <span className="text-xl text-slate-500 transition group-hover:translate-x-1 group-hover:text-violet-400">›</span>
                </div>
            </div>
        </div>
    )
}