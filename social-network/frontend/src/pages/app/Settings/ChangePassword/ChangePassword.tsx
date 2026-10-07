import { useOutletContext } from "react-router-dom"
import { useForm } from "react-hook-form"
import { PasswordValidator } from "../../../../Validators/Validators"
import { useChangePassword, type ChangePasswordFormData } from "../../../../hooks/useChangePassword"
import type { ProfileContextType } from "../../../../helpers/types"

export const ChangePassword = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<ChangePasswordFormData>()
    const { passwordError, success, handleChangePassword } = useChangePassword()
    const { resolvedTheme } = useOutletContext<ProfileContextType>()

    const inputClass = resolvedTheme === "dark" ? "w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-violet-500/60 focus:ring-2 focus:ring-violet-500/10" : "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-violet-500/60 focus:ring-2 focus:ring-violet-500/10"
    const labelClass = resolvedTheme === "dark" ? "mb-2 block text-sm font-medium text-slate-300" : "mb-2 block text-sm font-medium text-slate-700"
    const errorClass = "mt-1 text-xs font-medium text-red-400"

    return (
        <div className="mx-auto w-full max-w-xl px-4 py-10">
            <div className={resolvedTheme === "dark" ? "rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-8" : "rounded-3xl border border-slate-200 bg-white p-6 shadow-lg backdrop-blur-xl sm:p-8"}>
                <div className="mb-7">
                    <h2 className={resolvedTheme === "dark" ? "text-2xl font-bold text-white" : "text-2xl font-bold text-slate-900"}>Change Password</h2>
                    <p className="mt-2 text-sm text-slate-500">Update your password to keep your account secure.</p>
                </div>

                {success && <p className="mb-5 rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm font-medium text-emerald-500">{success}</p>}
                {passwordError && <p className="mb-5 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm font-medium text-red-500">{passwordError}</p>}

                <form onSubmit={handleSubmit(handleChangePassword)} className="space-y-5">
                    <div><label className={labelClass}>Current Password</label><input type="password" placeholder="Enter current password" {...register("oldPassword", PasswordValidator)} className={inputClass} />{errors.oldPassword && <p className={errorClass}>{errors.oldPassword.message}</p>}</div>
                    <div><label className={labelClass}>New Password</label><input type="password" placeholder="Enter new password" {...register("newPassword", PasswordValidator)} className={inputClass} />{errors.newPassword && <p className={errorClass}>{errors.newPassword.message}</p>}</div>
                    <div><label className={labelClass}>Confirm Password</label><input type="password" placeholder="Confirm new password" {...register("confirmPassword", PasswordValidator)} className={inputClass} />{errors.confirmPassword && <p className={errorClass}>{errors.confirmPassword.message}</p>}</div>

                    <button type="submit" className="w-full rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-900/30 transition-all duration-200 hover:-translate-y-0.5 hover:from-indigo-400 hover:to-violet-500 active:scale-[0.98]">Change Password</button>
                </form>
            </div>
        </div>
    )
}