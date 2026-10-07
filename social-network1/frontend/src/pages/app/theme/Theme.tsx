import { useOutletContext } from "react-router-dom"
import type { ProfileContextType, ThemeMode } from "../../../helpers/types"
import { http } from "../../../helpers/http"

export const Theme = () => {
    const { theme, setTheme, resolvedTheme } = useOutletContext<ProfileContextType>()

    const handleThemeChange = (nextTheme: ThemeMode) => {
        nextTheme === "light" ? setTheme(nextTheme) : nextTheme === "dark" ? setTheme(nextTheme) : setTheme("system")

        http.patch("/account/theme", { theme: nextTheme }).catch((error) => {
            console.error("Failed to update theme:", error)
        })
    }

    const inactiveClass = resolvedTheme === "dark" ? "border-white/10 bg-white/[0.03] text-slate-300 hover:bg-white/[0.06]" : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
    const selectedClass = resolvedTheme === "dark" ? "border-violet-500/50 bg-violet-500/15 text-white" : "border-violet-300 bg-violet-50 text-violet-800"

    return (
        <div className="mx-auto w-full max-w-xl px-4 py-10">
            <div className={resolvedTheme === "dark" ? "rounded-3xl border border-white/10 bg-slate-900/80 p-6 shadow-2xl shadow-black/20" : "rounded-3xl border border-slate-200 bg-white p-6 shadow-lg"}>
                <div className="mb-6">
                    <h2 className={resolvedTheme === "dark" ? "text-2xl font-bold text-white" : "text-2xl font-bold text-slate-900"}>Appearance</h2>
                    <p className="mt-1 text-sm text-slate-500">Choose how Connecta looks for you</p>
                </div>

                <div className="space-y-3">
                    <button type="button" onClick={() => handleThemeChange("light")} className={`flex w-full items-center justify-between rounded-2xl border px-5 py-4 text-left transition ${theme === "light" ? selectedClass : inactiveClass}`}><div><p className="font-semibold">Light</p><p className="mt-1 text-xs text-slate-500">Bright and clean appearance</p></div><span className="text-xl">☀️</span></button>
                    <button type="button" onClick={() => handleThemeChange("dark")} className={`flex w-full items-center justify-between rounded-2xl border px-5 py-4 text-left transition ${theme === "dark" ? selectedClass : inactiveClass}`}><div><p className="font-semibold">Dark</p><p className="mt-1 text-xs text-slate-500">Easy on the eyes in low light</p></div><span className="text-xl">🌙</span></button>
                    <button type="button" onClick={() => handleThemeChange("system")} className={`flex w-full items-center justify-between rounded-2xl border px-5 py-4 text-left transition ${theme === "system" ? selectedClass : inactiveClass}`}><div><p className="font-semibold">System</p><p className="mt-1 text-xs text-slate-500">Match your device settings</p></div><span className="text-xl">💻</span></button>
                </div>

                <div className={resolvedTheme === "dark" ? "mt-6 rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3" : "mt-6 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3"}>
                    <p className="text-xs text-slate-500">Current theme</p>
                    <p className="mt-1 font-semibold capitalize text-violet-500">{theme}</p>
                </div>
            </div>
        </div>
    )
}