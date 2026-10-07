import { useState } from "react"
import {
    Link,
    useNavigate
} from "react-router-dom"
import {
    useForm,
    type SubmitHandler
} from "react-hook-form"
import axios from "axios"
import type { SignInCredentials } from "../../helpers/types"
import {
    PasswordValidator,
    UsernameValidator
} from "../../Validators/Validators"
import { SigninHero } from "./components/SIgnInHero"
import { http } from "../../helpers/http"

export const Signin = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<SignInCredentials>()

    const navigate = useNavigate()

    const [error, setError] =
        useState("")

    const handleSignInSubmit: SubmitHandler<
        SignInCredentials
    > = (data) => {
        http
            .post<{ token: string }>(
                "/auth/signin",
                data
            )
            .then((response) => {
                localStorage.setItem(
                    "authToken",
                    response.data.token
                )

                navigate("/profile")
            })
            .catch((requestError) => {
                if (
                    axios.isAxiosError(
                        requestError
                    )
                ) {
                    setError(
                        requestError.response?.data
                            .message
                    )
                }
            })
    }

    const inputStyle =
        "w-full rounded-[18px] border border-white/[0.06] bg-white/[0.055] px-4 py-3.5 text-sm text-white outline-none backdrop-blur-xl transition-all duration-300 placeholder:text-slate-500 hover:border-white/[0.10] hover:bg-white/[0.075] focus:border-indigo-400/50 focus:bg-white/[0.09] focus:shadow-[0_10px_35px_rgba(99,102,241,0.18)] focus:ring-4 focus:ring-indigo-500/[0.10]"

    const labelStyle =
        "mb-2 block pl-1 text-[13px] font-semibold tracking-wide text-slate-300"

    const errorStyle =
        "mb-2 pl-1 text-xs font-medium text-rose-400"

    return (
        <div className="min-h-screen w-full bg-[radial-gradient(circle_at_5%_15%,rgba(99,102,241,0.28),transparent_25%),radial-gradient(circle_at_95%_80%,rgba(168,85,247,0.20),transparent_28%),radial-gradient(circle_at_80%_5%,rgba(79,70,229,0.12),transparent_24%),linear-gradient(135deg,#050816_0%,#090d22_48%,#111536_100%)] p-0 lg:p-5 xl:p-7">
            <div className="relative mx-auto flex min-h-screen w-full max-w-[1680px] overflow-hidden bg-white/90 shadow-[0_35px_120px_-35px_rgba(0,0,0,0.65)] ring-1 ring-white/[0.08] backdrop-blur-xl lg:min-h-[calc(100vh_-_40px)] lg:rounded-[42px] xl:min-h-[calc(100vh_-_56px)]">
                <SigninHero />

                <form
                    onSubmit={handleSubmit(
                        handleSignInSubmit
                    )}
                    className="absolute left-1/2 top-1/2 z-30 flex w-[calc(100%_-_40px)] max-w-[500px] -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-[38px] bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.20),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.14),transparent_34%),linear-gradient(145deg,rgba(9,13,34,0.98)_0%,rgba(15,20,48,0.97)_50%,rgba(22,27,62,0.96)_100%)] px-7 pb-9 pt-32 shadow-[0_30px_90px_-25px_rgba(30,27,75,0.65)] ring-1 ring-white/[0.08] backdrop-blur-2xl sm:w-[calc(100%_-_80px)] sm:px-10 lg:left-[74%] lg:w-[500px] lg:px-11"
                >
                    {error && (
                        <p className="mb-4 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm font-medium text-red-400">
                            {error}
                        </p>
                    )}

                    {errors.username && (
                        <p className={errorStyle}>
                            {
                                errors.username
                                    .message
                            }
                        </p>
                    )}

                    <label
                        htmlFor="username"
                        className={labelStyle}
                    >
                        Username
                    </label>

                    <input
                        id="username"
                        type="text"
                        placeholder="Username"
                        {...register(
                            "username",
                            UsernameValidator
                        )}
                        className={`${inputStyle} mb-5`}
                    />

                    <label
                        htmlFor="password"
                        className={labelStyle}
                    >
                        Password
                    </label>

                    {errors.password && (
                        <p className={errorStyle}>
                            {
                                errors.password
                                    .message
                            }
                        </p>
                    )}

                    <input
                        id="password"
                        type="password"
                        placeholder="Password"
                        {...register(
                            "password",
                            PasswordValidator
                        )}
                        className={inputStyle}
                    />

                    <button
                        type="submit"
                        className="mt-7 w-full rounded-[18px] bg-gradient-to-r from-indigo-500 via-violet-500 to-blue-500 px-5 py-4 text-sm font-bold tracking-wide text-white shadow-[0_14px_38px_rgba(99,102,241,0.32)] transition-all duration-300 hover:-translate-y-0.5 hover:from-indigo-400 hover:via-violet-500 hover:to-blue-400 hover:shadow-[0_20px_50px_rgba(99,102,241,0.40)] active:translate-y-0 active:scale-[0.99]"
                    >
                        Sign In
                    </button>
                </form>

                <div className="relative flex flex-1 items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_88%_10%,rgba(99,102,241,0.11),transparent_27%),radial-gradient(circle_at_15%_88%,rgba(168,85,247,0.07),transparent_27%),linear-gradient(145deg,#ffffff_0%,#fafbff_52%,#f4f4ff_100%)] px-5 py-10 sm:px-8">
                    <div className="absolute right-10 top-9 z-40 hidden items-center gap-2.5 rounded-full bg-white/70 px-4 py-2.5 text-sm text-slate-400 shadow-sm ring-1 ring-slate-900/[0.04] backdrop-blur-xl sm:flex">
                        <span>
                            Don't have an account?
                        </span>

                        <Link
                            to="/"
                            className="font-bold text-indigo-600 transition-colors hover:text-violet-600"
                        >
                            Sign up
                        </Link>
                    </div>

                    <div className="pointer-events-none absolute -right-24 -top-20 h-80 w-80 rounded-full bg-indigo-500/10 blur-[100px]" />

                    <div className="pointer-events-none absolute -bottom-28 -left-20 h-96 w-96 rounded-full bg-violet-500/[0.07] blur-[110px]" />

                    <div className="absolute left-1/2 top-8 z-40 flex -translate-x-1/2 items-center gap-3 lg:hidden">
                        <div className="flex h-11 w-11 items-center justify-center rounded-[17px] bg-gradient-to-br from-indigo-500 via-violet-500 to-blue-500 text-xl font-black text-white shadow-[0_12px_35px_rgba(99,102,241,0.30)]">
                            C
                        </div>

                        <span className="bg-gradient-to-r from-slate-950 via-indigo-900 to-violet-700 bg-clip-text text-2xl font-black italic tracking-[-0.045em] text-transparent">
                            Connecta
                        </span>
                    </div>

                    <div className="absolute left-1/2 top-1/2 z-40 w-[calc(100%_-_80px)] max-w-[410px] -translate-x-1/2 -translate-y-[188px] text-center">
                        <h2 className="bg-gradient-to-r from-white via-indigo-100 to-blue-200 bg-clip-text text-3xl font-black tracking-[-0.045em] text-transparent sm:text-[40px]">
                            Sign In
                        </h2>

                        <p className="mt-3 text-sm leading-6 text-slate-400">
                            Welcome back to Connecta.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}