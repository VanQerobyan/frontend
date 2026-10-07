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
import type { SignUpData } from "../../helpers/types"
import {
    FirstNameValidator,
    LastNameValidator,
    PasswordValidator,
    UsernameValidator
} from "../../Validators/Validators"
import { SignupHero } from "./components/SignUpHero"
import { http } from "../../helpers/http"

export const Signup = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<SignUpData>()

    const navigate = useNavigate()

    const [error, setError] =
        useState("")

    const handleSignUpSubmit: SubmitHandler<
        SignUpData
    > = (data) => {
        http
            .post("/auth/signup", data)
            .then(() => {
                setError("")
                navigate("/signin")
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
        "w-full rounded-[18px] border border-white/[0.06] bg-white/[0.055] px-4 py-3.5 text-sm text-white outline-none backdrop-blur-md transition-all duration-300 placeholder:text-slate-500 hover:border-white/[0.10] hover:bg-white/[0.075] focus:border-indigo-400/50 focus:bg-white/[0.09] focus:shadow-[0_10px_35px_rgba(99,102,241,0.18)] focus:ring-4 focus:ring-indigo-500/[0.10]"

    const labelStyle =
        "mb-2 block pl-1 text-[13px] font-semibold text-slate-300"

    const errorStyle =
        "mb-2 pl-1 text-xs font-medium text-red-400"

    return (
        <div className="min-h-screen w-full bg-[radial-gradient(circle_at_5%_15%,rgba(99,102,241,0.28),transparent_25%),linear-gradient(135deg,#050816_0%,#090d22_48%,#111536_100%)] p-0 lg:p-5 xl:p-7">
            <div className="mx-auto flex min-h-screen w-full max-w-[1680px] overflow-hidden bg-white/90 shadow-[0_35px_120px_-35px_rgba(0,0,0,0.65)] ring-1 ring-white/[0.08] backdrop-blur-xl lg:min-h-[calc(100vh_-_40px)] lg:rounded-[42px]">
                <SignupHero />

                <div className="relative flex flex-1 items-center justify-center bg-[radial-gradient(circle_at_88%_10%,rgba(99,102,241,0.11),transparent_27%),linear-gradient(145deg,#ffffff_0%,#fafbff_52%,#f4f4ff_100%)] px-5 py-12 sm:px-8 lg:px-12">
                    <div className="absolute right-10 top-9 hidden items-center gap-2.5 rounded-full bg-white/70 px-4 py-2 text-sm text-slate-400 shadow-sm sm:flex">
                        <span>
                            Already have an account?
                        </span>

                        <Link
                            to="/signin"
                            className="font-bold text-indigo-600 hover:text-violet-600"
                        >
                            Sign in
                        </Link>
                    </div>

                    <form
                        onSubmit={handleSubmit(
                            handleSignUpSubmit
                        )}
                        className="w-full max-w-[500px] rounded-[38px] bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,0.22),transparent_32%),linear-gradient(145deg,rgba(10,14,35,0.97)_0%,rgba(17,22,52,0.96)_48%,rgba(31,23,67,0.95)_100%)] p-6 shadow-[0_30px_85px_-28px_rgba(49,46,129,0.65)] ring-1 ring-white/[0.09] sm:p-10 lg:p-11"
                    >
                        <div className="relative z-10 mb-8 text-center">
                            <h2 className="bg-gradient-to-r from-white via-indigo-100 to-violet-200 bg-clip-text text-3xl font-black tracking-[-0.04em] text-transparent sm:text-[40px]">
                                Sign Up
                            </h2>

                            <p className="mt-3 text-sm leading-6 text-slate-400">
                                Join Connecta and start connecting with people.
                            </p>
                        </div>

                        {error && (
                            <p className="mb-4 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm font-medium text-red-400">
                                {error}
                            </p>
                        )}

                        <label
                            htmlFor="firstname"
                            className={labelStyle}
                        >
                            First Name
                        </label>

                        {errors.firstName && (
                            <p className={errorStyle}>
                                {
                                    errors.firstName
                                        .message
                                }
                            </p>
                        )}

                        <input
                            id="firstname"
                            type="text"
                            placeholder="First Name"
                            {...register(
                                "firstName",
                                FirstNameValidator
                            )}
                            className={`${inputStyle} mb-5`}
                        />

                        <label
                            htmlFor="lastname"
                            className={labelStyle}
                        >
                            Last Name
                        </label>

                        {errors.lastName && (
                            <p className={errorStyle}>
                                {
                                    errors.lastName
                                        .message
                                }
                            </p>
                        )}

                        <input
                            id="lastname"
                            type="text"
                            placeholder="Last Name"
                            {...register(
                                "lastName",
                                LastNameValidator
                            )}
                            className={`${inputStyle} mb-5`}
                        />

                        <label
                            htmlFor="username"
                            className={labelStyle}
                        >
                            Username
                        </label>

                        {errors.username && (
                            <p className={errorStyle}>
                                {
                                    errors.username
                                        .message
                                }
                            </p>
                        )}

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
                            className={`${inputStyle} mb-5`}
                        />

                        <button
                            type="submit"
                            className="mt-3 w-full rounded-[18px] bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 px-5 py-4 text-sm font-bold text-white shadow-[0_14px_38px_rgba(99,102,241,0.32)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_50px_rgba(139,92,246,0.40)]"
                        >
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}